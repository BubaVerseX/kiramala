"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, type AppLocale } from "@/i18n/routing";
import { cn } from "@/lib/cn";

const LABELS: Record<AppLocale, string> = {
  ka: "ქარ",
  en: "ENG",
  ru: "РУС",
};

const FULL_LABELS: Record<AppLocale, string> = {
  ka: "ქართული",
  en: "English",
  ru: "Русский",
};

/**
 * Persistent language switcher. Changing locale re-routes to the same
 * path under the new locale prefix; next-intl's middleware also writes
 * a cookie so the choice persists on the visitor's next session.
 */
export function LanguageSwitcher({
  className,
  tone = "wine",
}: {
  className?: string;
  tone?: "wine" | "parchment";
}) {
  const locale = useLocale() as AppLocale;
  const pathname = usePathname();
  const router = useRouter();

  const toneClass =
    tone === "wine"
      ? "border-wine-700/25 text-wine-800"
      : "border-parchment-100/30 text-parchment-100";

  return (
    <div
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border p-0.5 text-xs font-medium tracking-wide",
        toneClass,
        className,
      )}
      role="group"
      aria-label="Language / ენა / Язык"
    >
      {locales.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            lang={code}
            aria-pressed={active}
            aria-label={FULL_LABELS[code]}
            onClick={() => router.replace(pathname, { locale: code })}
            className={cn(
              "rounded-full px-2.5 py-1 transition-colors",
              active
                ? tone === "wine"
                  ? "bg-wine-700 text-parchment-50"
                  : "bg-parchment-100 text-wine-800"
                : "hover:bg-current/10",
            )}
          >
            {LABELS[code]}
          </button>
        );
      })}
    </div>
  );
}
