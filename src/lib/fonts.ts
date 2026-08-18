import {
  Noto_Sans,
  Noto_Sans_Georgian,
  Noto_Serif,
  Noto_Serif_Georgian,
} from "next/font/google";

/**
 * One coherent type system across all three languages: a serif pairing
 * for headings and a sans pairing for body copy. Georgian and
 * Latin/Cyrillic faces are stacked in CSS (see globals.css --font-heading
 * / --font-body) so each glyph is drawn by whichever face supports it.
 */
export const notoSerifGeorgian = Noto_Serif_Georgian({
  subsets: ["georgian"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif-ka",
  display: "swap",
});

export const notoSansGeorgian = Noto_Sans_Georgian({
  subsets: ["georgian"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-ka",
  display: "swap",
});

export const notoSerifLatin = Noto_Serif({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif-latin",
  display: "swap",
});

export const notoSansLatin = Noto_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-latin",
  display: "swap",
});

export const fontVariables = [
  notoSerifGeorgian.variable,
  notoSansGeorgian.variable,
  notoSerifLatin.variable,
  notoSansLatin.variable,
].join(" ");
