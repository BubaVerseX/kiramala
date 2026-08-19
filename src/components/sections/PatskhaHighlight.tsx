import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CarpetBackground } from "@/components/decorative/CarpetBackground";
import { KantsiMotif } from "@/components/decorative/KantsiMotif";
import { SectionHeading } from "@/components/menu/SectionHeading";

/**
 * "What is a patskha?" highlight card for visitors unfamiliar with the
 * term — full explanation lives in the copy below, sourced from i18n.
 */
export function PatskhaHighlight() {
  const t = useTranslations("home.patskha");

  return (
    <section className="relative overflow-hidden bg-vine-900/5 py-28 sm:py-32">
      <CarpetBackground variant="wine" scale="lg" className="opacity-[0.14]" />
      <ScrollReveal className="relative mx-auto max-w-5xl px-6">
        <div className="relative grid items-center gap-10 overflow-hidden rounded-2xl border border-gold-500/30 bg-parchment-50 p-8 shadow-[0_1px_0_0_rgba(0,0,0,0.02)] sm:p-12 md:grid-cols-[auto_1fr] md:gap-12">
          <CarpetBackground variant="wine" scale="sm" className="opacity-[0.05]" />
          <div className="relative flex justify-center md:justify-start">
            <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-wine-700/10">
              <KantsiMotif className="h-11 w-11" />
            </span>
          </div>
          <div className="relative">
            <SectionHeading eyebrow={t("eyebrow")} title={t("title")} tone="wine" align="left" />
            <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-ink-700 sm:text-lg">
              {t("body")}
            </p>
            <Link
              href="/venue#patskha"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-wine-700 px-6 py-3 font-body text-sm font-semibold tracking-wide text-parchment-50 transition-colors hover:bg-wine-800"
            >
              {t("cta")}
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
