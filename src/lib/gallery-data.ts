/**
 * PLACEHOLDER GALLERY DATA
 * ------------------------------------------------------------------
 * Real venue photography isn't shot yet. Each entry is rendered as a
 * clearly-marked placeholder tile (see GalleryGrid), organised by the
 * three venue areas: main hall, grounds, patskha.
 *
 * To go live: give each entry a real `src` (and drop the
 * `placeholder: true` flag) — GalleryGrid already branches on that
 * flag, so no layout change is needed.
 * ------------------------------------------------------------------
 */

export type GalleryArea = "hall" | "grounds" | "patskha";

export type GalleryImage = {
  id: string;
  area: GalleryArea;
  placeholder: true;
  src?: never;
};

function placeholders(area: GalleryArea, count: number): GalleryImage[] {
  return Array.from({ length: count }, (_, index) => ({
    id: `${area}-${index + 1}`,
    area,
    placeholder: true as const,
  }));
}

export const galleryImages: GalleryImage[] = [
  ...placeholders("hall", 4),
  ...placeholders("grounds", 4),
  ...placeholders("patskha", 4),
];
