import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CarpetBackground } from "@/components/decorative/CarpetBackground";
import { SectionHeading } from "@/components/menu/SectionHeading";

export function StoryTeaser() {
  const t = useTranslations("home.story");

  return (
    <section className="relative overflow-hidden bg-parchment-50 py-28 sm:py-32">
      <CarpetBackground variant="wine" scale="sm" className="opacity-[0.07]" />
      <ScrollReveal className="relative mx-auto flex max-w-2xl flex-col items-center px-6 text-center">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} tone="wine" />
        <p className="mt-7 text-balance font-body text-base leading-relaxed text-ink-700 sm:text-lg">
          {t("body")}
        </p>
        <Link
          href="/venue"
          className="mt-8 inline-flex items-center gap-2 border-b border-wine-700/40 pb-1 font-body text-sm font-semibold tracking-wide text-wine-700 transition-colors hover:border-wine-700 hover:text-wine-800"
        >
          {t("cta")}
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </ScrollReveal>
    </section>
  );
}
