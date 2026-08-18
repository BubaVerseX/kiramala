import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CarpetBackground } from "@/components/decorative/CarpetBackground";
import { KantsiMotif } from "@/components/decorative/KantsiMotif";

/**
 * "What is a patskha?" highlight card for visitors unfamiliar with the
 * term — full explanation lives in the copy below, sourced from i18n.
 */
export function PatskhaHighlight() {
  const t = useTranslations("home.patskha");

  return (
    <section className="relative overflow-hidden bg-vine-900/5 py-24 sm:py-28">
      <CarpetBackground variant="wine" />
      <ScrollReveal className="relative mx-auto max-w-5xl px-6">
        <div className="grid items-center gap-10 rounded-2xl border border-gold-500/30 bg-parchment-50 p-8 shadow-[0_1px_0_0_rgba(0,0,0,0.02)] sm:p-12 md:grid-cols-[auto_1fr] md:gap-12">
          <div className="flex justify-center md:justify-start">
            <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-wine-700/10">
              <KantsiMotif className="h-11 w-11" />
            </span>
          </div>
          <div>
            <span className="font-body text-xs font-semibold tracking-[0.35em] text-wine-600 uppercase">
              {t("eyebrow")}
            </span>
            <h2 className="mt-3 font-heading text-3xl font-medium text-wine-900 sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-ink-700 sm:text-lg">
              {t("body")}
            </p>
            <Link
              href="/venue#patskha"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-wine-700 px-6 py-3 font-body text-sm font-semibold tracking-wide text-parchment-50 transition-colors hover:bg-wine-800"
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
