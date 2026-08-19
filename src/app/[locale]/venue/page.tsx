import { getTranslations, setRequestLocale } from "next-intl/server";
import { VenueSection } from "@/components/venue/VenueSection";
import { Gallery } from "@/components/venue/Gallery";
import { CarpetBackground } from "@/components/decorative/CarpetBackground";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "venue" });
  return { title: t("title") };
}

export default async function VenuePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("venue");

  return (
    <>
      <section className="relative overflow-hidden bg-wine-950 py-20 text-center text-parchment-50 sm:py-24">
        <CarpetBackground variant="gold" scale="md" className="opacity-[0.15]" />
        <div className="relative mx-auto max-w-2xl px-6">
          <h1 className="font-heading text-5xl font-semibold tracking-tight sm:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-5 font-body text-parchment-100/85 sm:text-lg">{t("intro")}</p>
        </div>
      </section>

      <VenueSection
        id="hall"
        eyebrow={t("gallery.hallLabel")}
        title={t("hall.title")}
        body={t("hall.body")}
        photoLabel={t("hall.title")}
      />

      <VenueSection
        id="grounds"
        eyebrow={t("gallery.groundsLabel")}
        title={t("grounds.title")}
        body={t("grounds.body")}
        photoLabel={t("grounds.title")}
        reverse
        tone="dark"
      />

      <VenueSection
        id="patskha"
        eyebrow={t("gallery.patskhaLabel")}
        title={t("patskha.title")}
        body={t("patskha.body")}
        photoLabel={t("patskha.title")}
        note={
          <p className="inline-flex items-center gap-2 rounded-full bg-vine-500/10 px-4 py-2 font-body text-sm font-medium text-vine-700">
            {t("patskha.note")}
          </p>
        }
      />

      <Gallery />
    </>
  );
}
