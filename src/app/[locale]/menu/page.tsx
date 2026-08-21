import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { menuCategories } from "@/lib/menu-data";
import { MenuCategorySection } from "@/components/menu/MenuCategorySection";
import { DrinksList } from "@/components/menu/DrinksList";
import { WineList } from "@/components/menu/WineList";
import { CategoryQuickNav } from "@/components/menu/CategoryQuickNav";
import { CarpetBackground } from "@/components/decorative/CarpetBackground";
import { QvevriDivider } from "@/components/decorative/QvevriDivider";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "menu" });
  return { title: t("title") };
}

export default async function MenuPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("menu");

  return (
    <>
      <section className="relative overflow-hidden bg-wine-950 py-20 text-center text-parchment-50 sm:py-24">
        <CarpetBackground variant="gold" scale="md" className="opacity-[0.15]" />
        <div className="relative mx-auto max-w-2xl px-6">
          <h1 className="font-heading text-5xl font-semibold tracking-tight sm:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-5 font-body text-parchment-100/85 sm:text-lg">
            {t("intro")}
          </p>
        </div>
      </section>

      <div className="relative overflow-hidden">
        <CarpetBackground variant="wine" scale="sm" className="opacity-[0.06]" />
        <div className="relative mx-auto max-w-5xl px-4 pt-10 sm:px-6 lg:px-8">
          <CategoryQuickNav />

          <div>
            {menuCategories.map((category, index) => (
              <div key={category.id}>
                {index > 0 && <QvevriDivider className="py-10 sm:py-14" />}
                <MenuCategorySection category={category} id={category.id} />
              </div>
            ))}
          </div>

          <QvevriDivider className="py-10 sm:py-14" />
          <DrinksList id="drinks" />

          <QvevriDivider className="py-10 sm:py-14" />
          <WineList id="wine" />
        </div>
      </div>
    </>
  );
}
