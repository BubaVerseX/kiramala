import { useTranslations } from "next-intl";
import { wineRegions } from "@/lib/wine-data";
import { formatPrice } from "@/lib/format-price";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/menu/SectionHeading";
import { CarpetBackground } from "@/components/decorative/CarpetBackground";

export function WineList({ id }: { id?: string }) {
  const t = useTranslations("menu");
  const tCommon = useTranslations("common");

  return (
    <ScrollReveal
      as="section"
      id={id}
      className="scroll-mt-24 py-16 sm:py-20"
    >
      <SectionHeading title={t("categories.wine")} />
      <p className="mx-auto mt-6 max-w-xl text-center font-body text-sm leading-relaxed text-ink-700 sm:text-base">
        {t("wine.intro")}
      </p>

      {/* Qvevri / natural wine callout */}
      <div className="relative mx-auto mt-10 max-w-2xl overflow-hidden rounded-2xl border border-gold-500/40 bg-wine-950 px-6 py-7 text-parchment-50 sm:px-8">
        <CarpetBackground variant="gold" scale="sm" className="opacity-[0.16]" />
        <div className="relative">
          <h3 className="font-heading text-xl text-gold-300">
            {t("wine.qvevri.title")}
          </h3>
          <p className="mt-2 font-body text-sm leading-relaxed text-parchment-100/85">
            {t("wine.qvevri.body")}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-14 grid max-w-4xl gap-10 sm:grid-cols-2">
        {wineRegions.map((region) => (
          <div key={region.id}>
            <h3 className="font-heading text-xl text-wine-900">
              {t(`wine.regions.${region.id}.name`)}
            </h3>
            <p className="mt-1 font-body text-sm text-ink-500">
              {t(`wine.regions.${region.id}.description`)}
            </p>
            <ul className="mt-4 space-y-4">
              {region.wines.map((wine) => (
                <li key={wine.id} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="flex items-center gap-2 font-body font-semibold text-ink-900">
                      {t(`wine.regions.${region.id}.wines.${wine.id}.name`)}
                      {wine.qvevri && (
                        <span className="rounded-full border border-vine-600/40 bg-vine-500/10 px-2 py-0.5 text-[0.65rem] font-medium tracking-wide text-vine-700 uppercase">
                          {t("wine.qvevriBadge")}
                        </span>
                      )}
                    </p>
                    <p className="mt-0.5 max-w-[16rem] font-body text-sm text-ink-500">
                      {t(`wine.regions.${region.id}.wines.${wine.id}.note`)}
                    </p>
                  </div>
                  <div className="shrink-0 text-right font-body text-sm text-wine-700">
                    <p>
                      {formatPrice(wine.priceGlassGel)} {tCommon("gelShort")}
                      <span className="ml-1 text-ink-500/60">
                        / {t("wine.glass")}
                      </span>
                    </p>
                    <p className="text-ink-500/80">
                      {formatPrice(wine.priceBottleGel)} {tCommon("gelShort")}
                      <span className="ml-1 text-ink-500/60">
                        / {t("wine.bottle")}
                      </span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}
