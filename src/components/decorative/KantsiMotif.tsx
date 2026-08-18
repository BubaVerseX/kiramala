import { cn } from "@/lib/cn";

/**
 * Small decorative accent: a kantsi (traditional Georgian drinking horn)
 * paired with a single vine leaf. Used sparingly next to headings or
 * as a standalone flourish — distinct from the logo's wine-glass mark.
 */
export function KantsiMotif({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("h-8 w-8 text-gold-500", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 8c8 2 18 10 20 22-2 6-8 9-12 6-6-4-6-14-10-20-2-3-1-6 2-8Z" />
      <path d="M14 10l2 3" />
      <path d="M32 30c2 3 2 6-1 8" />
      <path d="M6 14c4-2 8 0 9 4-4 1-8-1-9-4Z" />
    </svg>
  );
}
