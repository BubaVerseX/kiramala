"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/cn";

/**
 * Clearly-marked placeholder for venue/dish photography that hasn't
 * been shot yet. Drop a real <Image> in its place later — the parent
 * grids/aspect wrappers are already sized so no layout will shift.
 */
export function PlaceholderPhoto({
  label,
  aspect = "aspect-[4/3]",
  className,
  onClick,
}: {
  label?: string;
  aspect?: string;
  className?: string;
  onClick?: () => void;
}) {
  const t = useTranslations("common");
  const Comp = onClick ? "button" : "div";

  return (
    <Comp
      type={onClick ? "button" : undefined}
      onClick={onClick}
      className={cn(
        "placeholder-wash group relative flex w-full items-center justify-center overflow-hidden rounded-xl border border-gold-500/25 text-center transition-shadow duration-300",
        onClick &&
          "cursor-zoom-in hover:border-gold-400/60 hover:shadow-[0_0_0_1px_rgba(195,156,82,0.35),0_12px_28px_-12px_rgba(42,10,17,0.45)] focus-visible:border-gold-400/60 focus-visible:shadow-[0_0_0_1px_rgba(195,156,82,0.35),0_12px_28px_-12px_rgba(42,10,17,0.45)] focus-visible:outline-none",
        aspect,
        className,
      )}
      aria-label={label ? `${label} — ${t("placeholderImage")}` : t("placeholderImage")}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-wine-950/30 via-transparent to-transparent transition-opacity duration-300 group-hover:from-wine-950/15" />
      <div className="relative flex flex-col items-center gap-2 px-4 transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 text-wine-700/60 transition-colors duration-300 group-hover:text-gold-600"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.4}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
          <circle cx="12" cy="13.5" r="3.4" />
        </svg>
        <span className="font-body text-xs font-medium tracking-wide text-wine-800/80">
          {label ?? t("placeholderImage")}
        </span>
      </div>
    </Comp>
  );
}
