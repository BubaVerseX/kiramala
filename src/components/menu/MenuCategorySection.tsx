import { useTranslations } from "next-intl";
import type { MenuCategoryData } from "@/lib/menu-data";
import { formatPrice } from "@/lib/format-price";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/menu/SectionHeading";

export function MenuCategorySection({
  category,
  id,
}: {
  category: MenuCategoryData;
  id?: string;
}) {
  const t = useTranslations("menu");
  const tCommon = useTranslations("common");

  return (
    <ScrollReveal as="section" id={id} className="scroll-mt-24 py-14 first:pt-0">
      <SectionHeading title={t(`categories.${category.id}`)} />
      <ul className="mx-auto mt-10 grid max-w-3xl gap-x-10 gap-y-6 sm:grid-cols-2">
        {category.items.map((item) => (
          <li key={item.id} className="flex items-baseline justify-between gap-4">
            <div>
              <p className="font-heading text-lg text-ink-900">
                {t(`items.${item.id}.name`)}
              </p>
              <p className="mt-1 max-w-xs font-body text-sm leading-snug text-ink-500">
                {t(`items.${item.id}.description`)}
              </p>
            </div>
            <div className="shrink-0 text-right">
              <p className="font-body text-sm font-semibold whitespace-nowrap text-wine-700">
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
    </ScrollReveal>
  );
}
