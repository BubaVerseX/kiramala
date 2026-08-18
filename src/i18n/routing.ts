import { defineRouting } from "next-intl/routing";

export const locales = ["ka", "en", "ru"] as const;

export type AppLocale = (typeof locales)[number];

export const defaultLocale: AppLocale = "ka";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
  localeCookie: {
    // Persists the visitor's chosen language across sessions and navigation.
    maxAge: 60 * 60 * 24 * 365,
  },
});
