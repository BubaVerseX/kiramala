import { useId } from "react";
import { cn } from "@/lib/cn";

/**
 * Small decorative accent: a kantsi (traditional Georgian drinking horn)
 * paired with a single vine leaf. Used sparingly next to headings or
 * as a standalone flourish — distinct from the logo's wine-glass mark.
 * Strokes a gold gradient + soft glow rather than a flat color, to
 * echo the foil finish of the lockup instead of reading as separate
 * flat line art next to it.
 */
export function KantsiMotif({ className }: { className?: string }) {
  const gradientId = useId();

  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("h-8 w-8 drop-shadow-[0_0_5px_rgba(195,156,82,0.3)]", className)}
      fill="none"
      stroke={`url(#${gradientId})`}
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="6" y1="8" x2="32" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="var(--color-gold-300)" />
          <stop offset="55%" stopColor="var(--color-gold-500)" />
          <stop offset="100%" stopColor="var(--color-gold-700)" />
        </linearGradient>
      </defs>
      <path d="M12 8c8 2 18 10 20 22-2 6-8 9-12 6-6-4-6-14-10-20-2-3-1-6 2-8Z" />
      <path d="M14 10l2 3" />
      <path d="M32 30c2 3 2 6-1 8" />
      <path d="M6 14c4-2 8 0 9 4-4 1-8-1-9-4Z" />
    </svg>
  );
}
