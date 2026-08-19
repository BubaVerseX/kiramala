import type { ReactNode } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PlaceholderPhoto } from "@/components/venue/PlaceholderPhoto";
import { CarpetBackground } from "@/components/decorative/CarpetBackground";
import { SectionHeading } from "@/components/menu/SectionHeading";
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
        "relative scroll-mt-24 overflow-hidden py-20 sm:py-24",
        tone === "dark" && "bg-wine-950 text-parchment-50",
      )}
    >
      <CarpetBackground
        variant={tone === "dark" ? "gold" : "wine"}
        scale="sm"
        className={tone === "dark" ? "opacity-[0.11]" : "opacity-[0.07]"}
      />
      <div
        className={cn(
          "relative mx-auto grid max-w-5xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-14 lg:px-8",
          reverse && "md:[&>*:first-child]:order-2",
        )}
      >
        <PlaceholderPhoto label={photoLabel} aspect="aspect-[4/3]" />
        <div>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            align="left"
            tone={tone === "dark" ? "gold" : "wine"}
            dark={tone === "dark"}
          />
          <p
            className={cn(
              "mt-6 font-body text-base leading-relaxed sm:text-lg",
              tone === "dark" ? "text-parchment-100/85" : "text-ink-700",
            )}
          >
            {body}
          </p>
          {note && <div className="mt-6">{note}</div>}
        </div>
      </div>
    </ScrollReveal>
  );
}
