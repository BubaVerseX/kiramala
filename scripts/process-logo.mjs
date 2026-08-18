#!/usr/bin/env node
/**
 * Asset-pipeline step: turns the raw logo render (a gold-embossed
 * emblem + wordmark glowing out of a black canvas — not a clean flat
 * background) into transparent-background PNGs the site actually uses.
 *
 * Source has no flat matte to key against: the "background" is a soft
 * radial glow that fades to black across a wide radius, so a naive
 * near-black threshold leaves a smeared halo. Instead this:
 *   1. Keys alpha from per-pixel brightness with a fairly steep ramp,
 *      then "un-premultiplies" colour in the transition band so edges
 *      fade cleanly instead of muddying toward black.
 *   2. Confines the result to a tight ellipse (emblem) / rounded box
 *      (wordmark) fitted to the artwork, with a short feather — this
 *      is what turns the irregular glow footprint into a clean
 *      medallion silhouette instead of a blobby halo.
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

const LO = 75; // brightness floor: below this, fully transparent
const HI = 140; // brightness ceiling: above this, fully opaque
const UNPREMULT_EPS = 0.08;
const UNPREMULT_CAP = 1.8;

// Ellipse bounding the circular emblem (arches / cypress / moon / grapes).
const ELLIPSE = { cx: 796, cy: 315, rx: 380, ry: 322, feather: 8 };
// Rounded box bounding the wordmark block (Georgian + "KIRAMALA").
const WORD_BOX = { x0: 208, x1: 1337, y0: 615, y1: 1024, feather: 8 };
// Vertical band over which the ellipse mask hands off to the word-box mask.
const BLEND = { y0: 590, y1: 618 };

function smoothstep(e0, e1, x) {
  const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
}

async function keyLogo() {
  const image = sharp(SOURCE).ensureAlpha();
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const out = Buffer.alloc(width * height * 4);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;
      const o = (y * width + x) * 4;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const maxc = Math.max(r, g, b);

      const t = Math.min(1, Math.max(0, (maxc - LO) / (HI - LO)));
      const alpha = t * t * (3 - 2 * t);

      const scale =
        alpha > UNPREMULT_EPS
          ? Math.min(UNPREMULT_CAP, Math.max(1, 1 / Math.max(alpha, UNPREMULT_EPS)))
          : 1;

      // Ellipse mask (emblem)
      const dx = (x - ELLIPSE.cx) / ELLIPSE.rx;
      const dy = (y - ELLIPSE.cy) / ELLIPSE.ry;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const ellipseFactor = Math.min(ELLIPSE.rx, ELLIPSE.ry) / ELLIPSE.feather;
      let ellipseMask = Math.min(1, Math.max(0, (1 - dist) * ellipseFactor));
      ellipseMask = ellipseMask * ellipseMask * (3 - 2 * ellipseMask);

      // Rounded-box mask (wordmark)
      const fw = WORD_BOX.feather;
      const left = smoothstep(WORD_BOX.x0 - fw, WORD_BOX.x0, x);
      const right = 1 - smoothstep(WORD_BOX.x1, WORD_BOX.x1 + fw, x);
      const top = smoothstep(WORD_BOX.y0 - fw, WORD_BOX.y0, y);
      const bottom = 1 - smoothstep(WORD_BOX.y1, WORD_BOX.y1 + fw, y);
      const rectMask = left * right * top * bottom;

      const blend = smoothstep(BLEND.y0, BLEND.y1, y);
      const effectiveMask = ellipseMask * (1 - blend) + rectMask * blend;

      const finalAlpha = alpha * effectiveMask;

      out[o] = Math.min(255, Math.round(r * scale));
      out[o + 1] = Math.min(255, Math.round(g * scale));
      out[o + 2] = Math.min(255, Math.round(b * scale));
      out[o + 3] = Math.round(finalAlpha * 255);
    }
  }

  return { buffer: out, width, height };
}

async function main() {
  const { buffer, width, height } = await keyLogo();
  const keyed = sharp(buffer, { raw: { width, height, channels: 4 } });

  const publicLogoDir = path.join(root, "public/logo");
  const appDir = path.join(root, "src/app");

  // Full lockup: emblem + Georgian wordmark + "KIRAMALA" subtext.
  await keyed
    .clone()
    .extract({ left: 208, top: 0, width: 1337 - 208, height })
    .png()
    .toFile(path.join(publicLogoDir, "lockup.png"));

  // Icon-only crop: circular emblem alone, padded to a square canvas.
  const emblemLeft = ELLIPSE.cx - ELLIPSE.rx - 10;
  const emblemTop = 0;
  const emblemWidth = (ELLIPSE.rx + 10) * 2;
  const emblemHeight = ELLIPSE.cy + ELLIPSE.ry + 10;
  const side = Math.max(emblemWidth, emblemHeight);

  await keyed
    .clone()
    .extract({ left: emblemLeft, top: emblemTop, width: emblemWidth, height: emblemHeight })
    .extend({
      top: Math.floor((side - emblemHeight) / 2),
      bottom: Math.ceil((side - emblemHeight) / 2),
      left: Math.floor((side - emblemWidth) / 2),
      right: Math.ceil((side - emblemWidth) / 2),
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toFile(path.join(publicLogoDir, "emblem.png"));

  // Favicon / app icon: same emblem crop, scaled down for small-size clarity.
  // (Re-read the just-written square emblem.png from disk rather than
  // chaining off the in-memory pipeline again, which was yielding a
  // non-square resize output.)
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
