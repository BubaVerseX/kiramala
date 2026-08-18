import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { menuCategories } from "@/lib/menu-data";
import { MenuCategorySection } from "@/components/menu/MenuCategorySection";
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
      <section className="relative overflow-hidden bg-wine-950 py-16 text-center text-parchment-50 sm:py-20">
        <CarpetBackground variant="gold" className="opacity-[0.08]" />
        <div className="relative mx-auto max-w-2xl px-6">
          <h1 className="font-heading text-4xl font-medium sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-4 font-body text-parchment-100/85 sm:text-lg">
            {t("intro")}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 pt-6 sm:px-6 lg:px-8">
        <CategoryQuickNav />

        <div>
          {menuCategories.map((category, index) => (
            <div key={category.id}>
              {index > 0 && <QvevriDivider className="py-2" />}
              <MenuCategorySection category={category} id={category.id} />
            </div>
          ))}
        </div>

        <QvevriDivider className="py-2" />
        <WineList id="wine" />
      </div>
    </>
  );
}
