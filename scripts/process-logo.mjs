#!/usr/bin/env node
/**
 * Asset-pipeline step: turns the raw logo artwork (embossed gold on a
 * textured cream/parchment card — not a flat matte) into transparent
 * -background PNGs the site actually uses.
 *
 * The background is a fairly uniform cream tone with subtle paper
 * grain, so pixels are keyed by how far their colour deviates from a
 * sampled background reference (gold ink — both its bright highlight
 * side and dark shadow/groove side — reads as a strong R-B channel
 * split; the cream paper does not). Once alpha is known, colour is
 * "un-blended" against the same background reference (the standard
 * unpremultiply-against-known-background formula), so antialiased
 * edges read as crisp gold rather than a muddy paper-tinted fringe.
 *
 * Re-run with: npm run process-logo
 * Source: assets/brand/kiramala-logo-source.png (not shipped to the client)
 * Outputs: public/logo/emblem.png, public/logo/lockup.png, src/app/icon.png
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const SOURCE = path.join(root, "assets/brand/kiramala-logo-source.png");

// Keying thresholds on the (R-B) "goldness" channel — measured from the
// source: background patches top out around ~34, ink content starts
// dominating past ~90, so the transition band sits cleanly between.
const LO = 36;
const HI = 85;
// Reference background colour, sampled from the four corner patches.
const BG = { r: 229.2, g: 219.7, b: 207.9 };
const UNPREMULT_EPS = 0.06;

// Crops (source is 1254x1254), found from the alpha mask's bounding box:
// building + arc + waves only (no wordmark) vs. the full lockup.
const EMBLEM_CROP = { left: 168, top: 118, width: 918, height: 610 };
const LOCKUP_CROP = { left: 130, top: 118, width: 999, height: 945 };

function smoothstep(e0, e1, x) {
  const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
}

async function keyLogo() {
  const image = sharp(SOURCE).ensureAlpha();
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const out = Buffer.alloc(width * height * 4);

  for (let p = 0; p < width * height; p++) {
    const i = p * channels;
    const o = p * 4;
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    const diff = r - b;
    const alpha = smoothstep(LO, HI, diff);
    const a = Math.max(alpha, UNPREMULT_EPS);

    const trueR = (r - (1 - alpha) * BG.r) / a;
    const trueG = (g - (1 - alpha) * BG.g) / a;
    const trueB = (b - (1 - alpha) * BG.b) / a;

    out[o] = Math.min(255, Math.max(0, Math.round(trueR)));
    out[o + 1] = Math.min(255, Math.max(0, Math.round(trueG)));
    out[o + 2] = Math.min(255, Math.max(0, Math.round(trueB)));
    out[o + 3] = Math.round(alpha * 255);
  }

  return { buffer: out, width, height };
}

async function main() {
  const { buffer, width, height } = await keyLogo();
  const keyed = sharp(buffer, { raw: { width, height, channels: 4 } });

  const publicLogoDir = path.join(root, "public/logo");
  const appDir = path.join(root, "src/app");

  // Full lockup: building, arc, waves, Georgian wordmark, wave-divider, "KIRAMALA".
  await keyed.clone().extract(LOCKUP_CROP).png().toFile(path.join(publicLogoDir, "lockup.png"));

  // Icon-only crop: the building illustration alone, padded to a square canvas.
  const side = Math.max(EMBLEM_CROP.width, EMBLEM_CROP.height);
  await keyed
    .clone()
    .extract(EMBLEM_CROP)
    .extend({
      top: Math.floor((side - EMBLEM_CROP.height) / 2),
      bottom: Math.ceil((side - EMBLEM_CROP.height) / 2),
      left: Math.floor((side - EMBLEM_CROP.width) / 2),
      right: Math.ceil((side - EMBLEM_CROP.width) / 2),
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toFile(path.join(publicLogoDir, "emblem.png"));

  // Favicon / app icon: same emblem crop, scaled down for small-size clarity.
  // (Re-read the just-written square emblem.png from disk rather than
  // chaining off the in-memory pipeline again, which previously produced
  // a non-square resize output when done in one pass.)
  await sharp(path.join(publicLogoDir, "emblem.png"))
    .resize(512, 512, { fit: "fill" })
    .png()
    .toFile(path.join(appDir, "icon.png"));

  console.log("Logo assets written to public/logo/{lockup,emblem}.png and src/app/icon.png");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
