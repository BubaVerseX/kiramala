import { useId } from "react";
import { cn } from "@/lib/cn";

/**
 * Hand-drawn grapevine line divider used between sections.
 * Echoes the logo's vine tendril without repeating it exactly —
 * this is a wider, symmetrical spray with two leaves and a cluster.
 * The gold tone carries a two-stop gradient + soft glow so it reads
 * as the same warm foil as the lockup, not a flat line-art color.
 */
export function VineDivider({
  className,
  tone = "gold",
}: {
  className?: string;
  tone?: "gold" | "wine" | "vine";
}) {
  const gradientId = useId();
  const toneClass = {
    gold: "text-gold-500",
    wine: "text-wine-600",
    vine: "text-vine-600",
  }[tone];

  return (
    <svg
      viewBox="0 0 320 40"
      className={cn(
        "h-6 w-full max-w-xs",
        toneClass,
        tone === "gold" && "drop-shadow-[0_0_6px_rgba(195,156,82,0.25)]",
        className,
      )}
      fill="none"
      stroke={tone === "gold" ? `url(#${gradientId})` : "currentColor"}
      strokeWidth={1.3}
      strokeLinecap="round"
      aria-hidden="true"
    >
      {tone === "gold" && (
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="320" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--color-gold-700)" />
            <stop offset="50%" stopColor="var(--color-gold-300)" />
            <stop offset="100%" stopColor="var(--color-gold-700)" />
          </linearGradient>
        </defs>
      )}
      <path d="M10 20h90" />
      <path d="M220 20h90" />
      <path d="M100 20c14-10 26-10 40 0" opacity={0.85} />
      <path d="M180 20c14-10 26-10 40 0" opacity={0.85} />
      <circle
        cx="160"
        cy="20"
        r="4.5"
        fill={tone === "gold" ? `url(#${gradientId})` : "currentColor"}
        stroke="none"
      />
      <path d="M112 16c-4-6-2-11 4-13" />
      <path d="M208 16c4-6 2-11-4-13" />
      <path d="M140 12c-3-4-1-8 3-9" />
      <path d="M180 12c3-4 1-8-3-9" />
      <circle
        cx="150"
        cy="26"
        r="2.2"
        fill={tone === "gold" ? `url(#${gradientId})` : "currentColor"}
        stroke="none"
      />
      <circle
        cx="170"
        cy="26"
        r="2.2"
        fill={tone === "gold" ? `url(#${gradientId})` : "currentColor"}
        stroke="none"
      />
      <circle
        cx="160"
        cy="29"
        r="2.2"
        fill={tone === "gold" ? `url(#${gradientId})` : "currentColor"}
        stroke="none"
      />
    </svg>
  );
}
