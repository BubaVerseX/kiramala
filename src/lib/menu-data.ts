/**
 * PLACEHOLDER MENU DATA
 * ------------------------------------------------------------------
 * Structured menu content: category order, item ids, and GEL prices.
 * These are realistic placeholder dishes/prices for a Georgian
 * restaurant — replace with the real menu when it's finalised.
 *
 * Item *names and descriptions* are NOT here — they live in
 * messages/{locale}.json under menu.items.<id>, keyed by the `id`
 * below, so every language stays in the i18n system. This file only
 * holds locale-independent structure (ids, prices, unit hints).
 * ------------------------------------------------------------------
 */

export type MenuItemData = {
  id: string;
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
    id: "starters",
    items: [
      { id: "badrijani", priceGel: 16 },
      { id: "lobio", priceGel: 14 },
      { id: "pkhali", priceGel: 18 },
      { id: "matsoni", priceGel: 9 },
      { id: "jonjoli", priceGel: 12 },
    ],
  },
  {
    id: "khinkali",
    items: [
      { id: "khinkali-beef", priceGel: 3.5, unit: "perPiece" },
      { id: "khinkali-calf", priceGel: 4.5, unit: "perPiece" },
      { id: "khinkali-cheese", priceGel: 3, unit: "perPiece" },
      { id: "khinkali-mushroom", priceGel: 3.5, unit: "perPiece" },
    ],
  },
  {
    id: "khachapuri",
    items: [
      { id: "khachapuri-adjaruli", priceGel: 24 },
      { id: "khachapuri-imeruli", priceGel: 19 },
      { id: "khachapuri-megruli", priceGel: 22 },
      { id: "khachapuri-guruli", priceGel: 14 },
    ],
  },
  {
    id: "mains",
    items: [
      { id: "mtsvadi-pork", priceGel: 28 },
      { id: "mtsvadi-beef", priceGel: 34 },
      { id: "mtsvadi-lamb", priceGel: 36 },
      { id: "chakhokhbili", priceGel: 26 },
      { id: "chanakhi", priceGel: 32 },
      { id: "ojakhuri", priceGel: 24 },
    ],
  },
  {
    id: "sides",
    items: [
      { id: "mchadi", priceGel: 6 },
      { id: "lobiani", priceGel: 12 },
      { id: "baked-potato-suluguni", priceGel: 16 },
      { id: "greens-plate", priceGel: 10 },
    ],
  },
  {
    id: "salads",
    items: [
      { id: "georgian-salad", priceGel: 14 },
      { id: "beet-walnut", priceGel: 13 },
    ],
  },
  {
    id: "desserts",
    items: [
      { id: "churchkhela", priceGel: 8 },
      { id: "gozinaki", priceGel: 12 },
      { id: "pelamushi", priceGel: 9 },
      { id: "nazuki", priceGel: 7 },
    ],
  },
];
