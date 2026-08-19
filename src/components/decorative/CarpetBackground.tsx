import { cn } from "@/lib/cn";

/**
 * Absolutely-positioned background layer applying the hand-authored
 * carpet-lattice texture (defined in globals.css). Wrap a
 * relatively-positioned section and render this as its first child:
 *
 *   <section className="relative overflow-hidden">
 *     <CarpetBackground scale="lg" className="opacity-[0.16]" />
 *     <div className="relative">...content...</div>
 *   </section>
 *
 * `scale` and opacity are deliberately left for each call site to set
 * (via className) rather than fixed here — feature bands read best at
 * a larger scale and higher opacity, dense content areas at a smaller,
 * quieter one. That variation is what gives the site layered depth
 * instead of one flat repeat everywhere.
 */
export function CarpetBackground({
  variant = "wine",
  scale = "md",
  className,
}: {
  variant?: "wine" | "gold";
  scale?: "sm" | "md" | "lg";
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 opacity-[0.1]",
        variant === "wine" ? "carpet-texture" : "carpet-texture-gold",
        scale === "sm" && "carpet-scale-sm",
        scale === "lg" && "carpet-scale-lg",
        className,
      )}
    />
  );
}
