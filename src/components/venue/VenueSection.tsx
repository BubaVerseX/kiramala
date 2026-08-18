import type { ReactNode } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PlaceholderPhoto } from "@/components/venue/PlaceholderPhoto";
import { VineDivider } from "@/components/decorative/VineDivider";
import { cn } from "@/lib/cn";

export function VenueSection({
  id,
  eyebrow,
  title,
  body,
  note,
  photoLabel,
  reverse = false,
  tone = "light",
}: {
  id?: string;
  eyebrow: string;
  title: string;
  body: string;
  note?: ReactNode;
  photoLabel: string;
  reverse?: boolean;
  tone?: "light" | "dark";
}) {
  return (
    <ScrollReveal
      as="section"
      id={id}
      className={cn(
        "scroll-mt-24 py-16 sm:py-20",
        tone === "dark" && "bg-wine-950 text-parchment-50",
      )}
    >
      <div
        className={cn(
          "mx-auto grid max-w-5xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-14 lg:px-8",
          reverse && "md:[&>*:first-child]:order-2",
        )}
      >
        <PlaceholderPhoto label={photoLabel} aspect="aspect-[5/4]" />
        <div>
          <span
            className={cn(
              "font-body text-xs font-semibold tracking-[0.35em] uppercase",
              tone === "dark" ? "text-gold-400" : "text-wine-600",
            )}
          >
            {eyebrow}
          </span>
          <h2
            className={cn(
              "mt-3 font-heading text-3xl font-medium sm:text-4xl",
              tone === "dark" ? "text-parchment-50" : "text-wine-900",
            )}
          >
            {title}
          </h2>
          <VineDivider tone={tone === "dark" ? "gold" : "wine"} className="mt-4 mb-6" />
          <p
            className={cn(
              "font-body text-base leading-relaxed sm:text-lg",
              tone === "dark" ? "text-parchment-100/85" : "text-ink-700",
            )}
          >
            {body}
          </p>
          {note && <div className="mt-5">{note}</div>}
        </div>
      </div>
    </ScrollReveal>
  );
}
