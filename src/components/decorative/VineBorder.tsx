import { cn } from "@/lib/cn";

/**
 * Running grapevine border strip — thin tiled line art with small
 * leaf/grape accents, used along the Hero's top or bottom edge and to
 * frame the Venue gallery. Distinct from <VineDivider> (a single
 * centered flourish) and the logo's grapevine tendril.
 */
export function VineBorder({
  className,
  tone = "gold",
}: {
  className?: string;
  tone?: "gold" | "wine";
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "h-7 w-full",
        tone === "gold" ? "vine-border-gold" : "vine-border-wine",
        className,
      )}
    />
  );
}
