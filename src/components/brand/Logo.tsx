import { cn } from "@/lib/cn";

/**
 * PLACEHOLDER LOGO SYSTEM
 * ------------------------------------------------------------------
 * Real logo files are not ready yet. `LogoIcon` and `LogoFull` are the
 * two lockups the rest of the app depends on (square mark / horizontal
 * lockup). Both currently render a hand-drawn wine-glass-and-vine line
 * mark plus type, so spacing and responsive behaviour are already
 * correct.
 *
 * To swap in the final artwork later: replace the contents of the
 * <svg> in `LogoMark` with the exported icon (keep the `viewBox` and
 * let it fill its parent), and/or replace the wordmark block in
 * `LogoFull` with an exported horizontal SVG lockup. Consumers of
 * `LogoIcon` / `LogoFull` (Header, Footer, favicon references) will
 * not need to change.
 * ------------------------------------------------------------------
 */

type LogoProps = {
  className?: string;
  /** Sets the line/text colour. Defaults to currentColor. */
  tone?: "wine" | "gold" | "parchment";
};

const toneClass: Record<NonNullable<LogoProps["tone"]>, string> = {
  wine: "text-wine-700",
  gold: "text-gold-500",
  parchment: "text-parchment-100",
};

/** The square glyph shared by both lockups — placeholder wine-glass + vine mark. */
function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* placeholder mark: wine glass silhouette */}
      <path d="M22 8h20l-2.4 16.5C38.4 30.8 33.6 35 28.5 35H27.5C22.4 35 17.6 30.8 16.4 24.5L14 8" />
      <path d="M32 35v13" />
      <path d="M22 56h20" />
      <path d="M25 56c0-5 3-7 7-8.5 4 1.5 7 3.5 7 8.5" />
      {/* placeholder vine tendril curling around the stem */}
      <path d="M32 40c4-1 6-4 5-7.5" />
      <circle cx="38" cy="30.5" r="1.6" fill="currentColor" stroke="none" />
      <path d="M32 44c-4-1-6.4-3.6-5.6-7" />
      <circle cx="26" cy="37.5" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Square icon lockup — used at mobile widths and anywhere space is tight. */
export function LogoIcon({ className, tone = "wine" }: LogoProps) {
  return (
    <span
      className={cn(
        "relative inline-flex aspect-square shrink-0 items-center justify-center rounded-full border border-current/25 p-1.5",
        toneClass[tone],
        className,
      )}
      data-logo-slot="icon"
      data-placeholder="true"
    >
      <LogoMark className="h-full w-full" />
    </span>
  );
}

/** Horizontal lockup — icon + Georgian wordmark + Latin subtext. Used at desktop widths. */
export function LogoFull({ className, tone = "wine" }: LogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3",
        toneClass[tone],
        className,
      )}
      data-logo-slot="full"
      data-placeholder="true"
    >
      <LogoIcon className="h-9 w-9 sm:h-10 sm:w-10" tone={tone} />
      <span className="flex flex-col leading-none">
        <span className="font-heading text-xl tracking-wide sm:text-2xl">
          ყირამალა
        </span>
        <span className="mt-1 font-body text-[0.6rem] font-medium tracking-[0.35em] uppercase opacity-80 sm:text-[0.65rem]">
          Kiramala
        </span>
      </span>
    </span>
  );
}
