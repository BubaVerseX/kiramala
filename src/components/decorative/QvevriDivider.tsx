import { cn } from "@/lib/cn";

/**
 * Qvevri silhouette used as a horizontal rule between menu categories —
 * thin line art, restrained, no fill. Echoes the wine-list qvevri
 * callout without repeating the same iconography as the logo.
 */
export function QvevriDivider({
  className,
  tone = "wine",
}: {
  className?: string;
  tone?: "wine" | "gold";
}) {
  const toneClass = tone === "wine" ? "text-wine-700/40" : "text-gold-500/50";

  return (
    <div
      role="separator"
      aria-hidden="true"
      className={cn("flex items-center justify-center gap-4", className)}
    >
      <span className={cn("h-px flex-1 max-w-[8rem] bg-current/25", toneClass)} />
      <svg
        viewBox="0 0 40 48"
        className={cn("h-9 w-8 shrink-0", toneClass)}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* traditional qvevri silhouette: narrow neck, wide shoulder, tapered base */}
        <path d="M16 2h8" />
        <path d="M17 2v4.5c-5.5 3-9 9-9 16.5 0 9 5.5 15.5 12 15.5s12-6.5 12-15.5c0-7.5-3.5-13.5-9-16.5V2" />
        <path d="M8.6 27c1.4 1 3 1.6 4.9 1.6M31.4 27c-1.4 1-3 1.6-4.9 1.6" />
      </svg>
      <span className={cn("h-px flex-1 max-w-[8rem] bg-current/25", toneClass)} />
    </div>
  );
}
