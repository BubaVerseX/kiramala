/**
 * MENU DATA
 * ------------------------------------------------------------------
 * Structured menu content: category order, item ids, and GEL prices.
 *
 * Prices are placeholders — reasonable estimates for a mid-to-upper
 * range Georgian restaurant, NOT the final printed prices. Replace
 * every priceGel value below with the real menu pricing once set.
 *
 * Item *names and descriptions* are NOT here — they live in
 * messages/{locale}.json under menu.items.<id>, keyed by the `id`
 * below, so every language stays in the i18n system. This file only
 * holds locale-independent structure (ids, prices, unit hints).
 * ------------------------------------------------------------------
 */

export type MenuItemData = {
  id: string;
  /** PLACEHOLDER price — to be replaced with real pricing. */
  priceGel: number;
  /** Optional unit hint resolved via menu.units.<unit> in messages, e.g. "perPiece". */
  unit?: string;
};

export type MenuCategoryData = {
  id: string;
  items: MenuItemData[];
};

export const menuCategories: MenuCategoryData[] = [
  {
    id: "khachapuri",
    items: [
      { id: "khachapuri-imeruli", priceGel: 18 },
      { id: "khachapuri-megruli", priceGel: 22 },
      { id: "khachapuri-fenovani", priceGel: 20 },
      { id: "khachapuri-acharuli", priceGel: 25 },
      { id: "lobiani", priceGel: 16 },
    ],
  },
  {
    id: "bread",
    items: [
      { id: "pkhlovani", priceGel: 14 },
      { id: "kubdari", priceGel: 18 },
      { id: "shotis-puri", priceGel: 6 },
      { id: "mchadi", priceGel: 6 },
      { id: "chvishtari", priceGel: 9 },
    ],
  },
  {
    id: "khinkali",
    items: [
      { id: "khinkali-city", priceGel: 3.5, unit: "perPiece" },
      { id: "khinkali-potato", priceGel: 3, unit: "perPiece" },
      { id: "khinkali-beef", priceGel: 4, unit: "perPiece" },
    ],
  },
  {
    id: "mains",
    items: [
      { id: "chakapuli", priceGel: 32 },
      { id: "chashushuli", priceGel: 28 },
      { id: "kharcho-mains", priceGel: 26 },
      { id: "khashlama", priceGel: 30 },
      { id: "mtsvadi-pork", priceGel: 28 },
      { id: "mtsvadi-chicken", priceGel: 24 },
      { id: "kupati", priceGel: 22 },
      { id: "apkhazura", priceGel: 24 },
      { id: "ojakhuri", priceGel: 25 },
      { id: "gochi", priceGel: 35 },
      { id: "shkmeruli", priceGel: 27 },
      { id: "satsivi", priceGel: 24 },
      { id: "dedali-bazhe", priceGel: 26 },
      { id: "tsitsila-tkemali", priceGel: 25 },
      { id: "chakapuli-lamb", priceGel: 34 },
    ],
  },
  {
    id: "soups",
    items: [
      { id: "chikhirtma", priceGel: 12 },
      { id: "kharcho-soup", priceGel: 13 },
      { id: "khashi", priceGel: 15 },
    ],
  },
  {
    id: "salads",
    items: [
      { id: "badrijani-nigvzit", priceGel: 16 },
      { id: "pkhali-asorti", priceGel: 17 },
      { id: "kitri-pomidvris-nigvzit", priceGel: 14 },
      { id: "kitri-pomidvris", priceGel: 12 },
      { id: "mchadis-asorti", priceGel: 13 },
      { id: "bache", priceGel: 14 },
      { id: "yvelis-asorti", priceGel: 18 },
    ],
  },
  {
    id: "vegetables",
    items: [
      { id: "lobio-qotanshi", priceGel: 14 },
      { id: "ajapsandali", priceGel: 16 },
      { id: "soko-ketsze", priceGel: 18 },
      { id: "soko-ketsze-sulgunit", priceGel: 20 },
      { id: "qatami-ketsze", priceGel: 26 },
      { id: "tolma", priceGel: 18 },
      { id: "tolma-vazis-potolshi", priceGel: 20 },
    ],
  },
  {
    id: "sauces",
    items: [
      { id: "tkemali", priceGel: 4 },
      { id: "ketchup", priceGel: 3 },
      { id: "ajika", priceGel: 4 },
      { id: "satsebeli", priceGel: 5 },
    ],
  },
  {
    id: "fish",
    items: [
      { id: "kalmakhi-grilze", priceGel: 32 },
      { id: "loqo-ketsze", priceGel: 30 },
      { id: "asatrina", priceGel: 42 },
    ],
  },
  {
    id: "other",
    items: [
      { id: "burger", priceGel: 24 },
      { id: "fries", priceGel: 12 },
      { id: "schnitzel", priceGel: 22 },
      { id: "caesar-salad", priceGel: 19 },
    ],
  },
];
