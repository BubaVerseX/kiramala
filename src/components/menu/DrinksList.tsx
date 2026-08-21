import { useTranslations } from "next-intl";
import { drinkCategories } from "@/lib/drinks-data";
import { formatPrice } from "@/lib/format-price";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/menu/SectionHeading";

export function DrinksList({ id }: { id?: string }) {
  const t = useTranslations("menu");
  const tCommon = useTranslations("common");

  return (
    <ScrollReveal as="section" id={id} className="scroll-mt-24 py-16 sm:py-20">
      <SectionHeading title={t("categories.drinks")} />
      <p className="mx-auto mt-6 max-w-xl text-center font-body text-sm leading-relaxed text-ink-700 sm:text-base">
        {t("drinks.intro")}
      </p>

      <div className="mx-auto mt-14 grid max-w-4xl gap-10 sm:grid-cols-2">
        {drinkCategories.map((category) => (
          <div key={category.id}>
            <h3 className="font-heading text-xl text-wine-900">
              {t(`drinks.categories.${category.id}`)}
            </h3>
            <ul className="mt-4 space-y-4">
              {category.items.map((item) => (
                <li key={item.id} className="flex items-baseline justify-between gap-4">
                  <div>
                    <p className="font-body font-semibold text-ink-900">
                      {t(`drinks.items.${item.id}.name`)}
                    </p>
                    <p className="mt-0.5 max-w-[16rem] font-body text-sm text-ink-500">
                      {t(`drinks.items.${item.id}.description`)}
                    </p>
                  </div>
                  <div className="shrink-0 text-right font-body text-sm text-wine-700">
                    <p className="font-semibold whitespace-nowrap">
                      {formatPrice(item.priceGel)} {tCommon("gelShort")}
                    </p>
                    {item.unit && (
                      <p className="font-body text-[0.65rem] tracking-wide text-ink-500/70 uppercase">
                        / {t(`units.${item.unit}`)}
                      </p>
                    )}
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
