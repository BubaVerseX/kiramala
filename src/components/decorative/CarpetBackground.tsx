import { cn } from "@/lib/cn";

/**
 * Absolutely-positioned background layer applying the hand-authored
 * carpet-lattice texture (defined in globals.css) at low opacity.
 * Wrap a relatively-positioned section and render this as its first
 * child, e.g.:
 *
 *   <section className="relative overflow-hidden">
 *     <CarpetBackground />
 *     <div className="relative">...content...</div>
 *   </section>
 */
export function CarpetBackground({
  variant = "wine",
  className,
}: {
  variant?: "wine" | "gold";
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 opacity-[0.06]",
        variant === "wine" ? "carpet-texture" : "carpet-texture-gold",
        className,
      )}
    />
  );
}
