import { VineDivider } from "@/components/decorative/VineDivider";
import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  align = "center",
  tone = "wine",
  className,
}: {
  eyebrow?: string;
  title: string;
  align?: "center" | "left";
  tone?: "wine" | "gold";
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
        <span className="font-body text-xs font-semibold tracking-[0.35em] text-wine-600 uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 font-heading text-3xl font-medium text-wine-900 sm:text-4xl">
        {title}
      </h2>
      <VineDivider
        tone={tone}
        className={cn("mt-5", align === "left" && "max-w-[10rem]")}
      />
    </div>
  );
}
