import { VineDivider } from "@/components/decorative/VineDivider";
import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  align = "center",
  tone = "wine",
  dark = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  align?: "center" | "left";
  tone?: "wine" | "gold";
  /** Flips text colors for use on a dark (wine-950) background. */
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "font-body text-xs font-semibold tracking-[0.35em] uppercase",
            dark ? "text-gold-400" : "text-wine-600",
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-heading text-3xl font-semibold sm:text-4xl",
          dark ? "text-parchment-50" : "text-wine-900",
          eyebrow ? "mt-4" : "mt-0",
        )}
      >
        {title}
      </h2>
      <VineDivider
        tone={tone}
        className={cn("mt-6", align === "left" && "max-w-[10rem]")}
      />
    </div>
  );
}
