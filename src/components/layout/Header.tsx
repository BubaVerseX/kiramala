"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { LogoFull, LogoIcon } from "@/components/brand/Logo";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { cn } from "@/lib/cn";

const NAV_ITEMS = [
  { href: "/", key: "home" },
  { href: "/menu", key: "menu" },
  { href: "/venue", key: "venue" },
  { href: "/contact", key: "contact" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-wine-900/10 bg-parchment-50/90 backdrop-blur supports-[backdrop-filter]:bg-parchment-50/75">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="Kiramala">
          <LogoIcon className="h-9 w-9 md:hidden" />
          <LogoFull className="hidden md:flex" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label={t("languageLabel")}>
          {NAV_ITEMS.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.key}
                href={item.href}
                className={cn(
                  "font-body text-sm font-medium tracking-wide uppercase transition-colors",
                  active
                    ? "text-wine-800"
                    : "text-ink-700/70 hover:text-wine-700",
                )}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-wine-900/15 text-wine-800 md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-wine-900/10 bg-parchment-50 px-4 pb-6 md:hidden">
          <nav className="flex flex-col gap-1 pt-2" aria-label={t("languageLabel")}>
            {NAV_ITEMS.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2.5 font-body text-base font-medium",
                    active ? "bg-wine-700/10 text-wine-800" : "text-ink-700",
                  )}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </nav>
          <LanguageSwitcher className="mt-4 sm:hidden" />
        </div>
      )}
    </header>
  );
}
