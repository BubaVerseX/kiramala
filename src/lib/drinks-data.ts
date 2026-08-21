/**
 * DRINKS DATA
 * ------------------------------------------------------------------
 * Non-wine drinks list: category order, item ids, and GEL prices.
 *
 * Prices are placeholders — reasonable estimates for a mid-to-upper
 * range Georgian restaurant, NOT the final printed prices. Replace
 * every priceGel value below with the real menu pricing once set.
 *
 * Item *names and descriptions* live in messages/{locale}.json under
 * menu.drinks.items.<id>, keyed by the `id` below. Wine stays in its
 * own wine-data.ts / menu.wine.* structure — this file is everything
 * else: water, lemonade, beer, hot and soft drinks, and spirits.
 * ------------------------------------------------------------------
 */

export type DrinkItemData = {
  id: string;
  /** PLACEHOLDER price — to be replaced with real pricing. */
  priceGel: number;
  /** Optional unit hint resolved via menu.units.<unit> in messages, e.g. "per50ml". */
  unit?: string;
};

export type DrinkCategoryData = {
  id: string;
  items: DrinkItemData[];
};

export const drinkCategories: DrinkCategoryData[] = [
  {
    id: "water",
    items: [
      { id: "borjomi", priceGel: 5 },
      { id: "still-water", priceGel: 4 },
    ],
  },
  {
    id: "lemonade",
    items: [
      { id: "lemonade-tarragon", priceGel: 7 },
      { id: "lemonade-cream-soda", priceGel: 7 },
      { id: "lemonade-pear", priceGel: 7 },
      { id: "lemonade-orange", priceGel: 6 },
    ],
  },
  {
    id: "beer",
    items: [
      { id: "beer-lager", priceGel: 8 },
      { id: "beer-dark", priceGel: 9 },
    ],
  },
  {
    id: "hotDrinks",
    items: [
      { id: "coffee", priceGel: 6 },
      { id: "espresso", priceGel: 5 },
      { id: "cappuccino", priceGel: 8 },
      { id: "tea", priceGel: 5 },
    ],
  },
  {
    id: "softDrinks",
    items: [
      { id: "cola", priceGel: 5 },
      { id: "orange-soda", priceGel: 5 },
      { id: "lemon-soda", priceGel: 5 },
      { id: "juice", priceGel: 7 },
    ],
  },
  {
    id: "spirits",
    items: [
      { id: "chacha", priceGel: 10, unit: "per50ml" },
      { id: "brandy", priceGel: 14, unit: "per50ml" },
      { id: "vodka", priceGel: 9, unit: "per50ml" },
    ],
  },
];
