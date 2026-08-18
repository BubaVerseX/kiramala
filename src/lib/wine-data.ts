/**
 * PLACEHOLDER WINE LIST DATA
 * ------------------------------------------------------------------
 * Regions, wine ids and GEL prices (glass / bottle). Names and
 * tasting notes live in messages/{locale}.json under
 * menu.wine.regions.<regionId>.wines.<wineId>, keyed by the ids below.
 * ------------------------------------------------------------------
 */

export type WineData = {
  id: string;
  priceGlassGel: number;
  priceBottleGel: number;
  qvevri: boolean;
};

export type WineRegionData = {
  id: string;
  wines: WineData[];
};

export const wineRegions: WineRegionData[] = [
  {
    id: "kakheti",
    wines: [
      { id: "rkatsiteli-qvevri", priceGlassGel: 13, priceBottleGel: 65, qvevri: true },
      { id: "saperavi", priceGlassGel: 14, priceBottleGel: 70, qvevri: false },
      { id: "mtsvane-qvevri", priceGlassGel: 12, priceBottleGel: 60, qvevri: true },
    ],
  },
  {
    id: "imereti",
    wines: [
      { id: "tsitska", priceGlassGel: 11, priceBottleGel: 55, qvevri: false },
      { id: "otskhanuri-sapere-qvevri", priceGlassGel: 14, priceBottleGel: 68, qvevri: true },
    ],
  },
  {
    id: "racha",
    wines: [
      { id: "khvanchkara", priceGlassGel: 17, priceBottleGel: 85, qvevri: false },
      { id: "alexandreuli", priceGlassGel: 18, priceBottleGel: 90, qvevri: false },
    ],
  },
  {
    id: "kartli",
    wines: [{ id: "chinuri-qvevri", priceGlassGel: 12, priceBottleGel: 58, qvevri: true }],
  },
];
