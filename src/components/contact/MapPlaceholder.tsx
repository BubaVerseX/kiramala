import { useTranslations } from "next-intl";

/**
 * Structured slot for a real Google Maps embed later. To go live,
 * replace the placeholder <div> below with, e.g.:
 *
 *   <iframe
 *     src="https://www.google.com/maps/embed?pb=..."
 *     className="absolute inset-0 h-full w-full"
 *     loading="lazy"
 *     referrerPolicy="no-referrer-when-downgrade"
 *   />
 *
 * inside the same aspect-ratio wrapper, so surrounding layout is
 * unaffected.
 */
export function MapPlaceholder() {
  const t = useTranslations("contact");

  return (
    <div className="placeholder-wash relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gold-500/25 sm:aspect-square lg:aspect-[4/3]">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-wine-950/10 px-6 text-center">
        <svg
          viewBox="0 0 24 24"
          className="h-8 w-8 text-wine-700/60"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.4}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
          <circle cx="12" cy="9.5" r="2.4" />
        </svg>
        <span className="font-body text-sm font-medium text-wine-800/80">
          {t("mapPlaceholder")}
        </span>
      </div>
    </div>
  );
}
