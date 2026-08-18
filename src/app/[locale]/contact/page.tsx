import { getTranslations, setRequestLocale } from "next-intl/server";
import { MapPlaceholder } from "@/components/contact/MapPlaceholder";
import { CarpetBackground } from "@/components/decorative/CarpetBackground";
import { VineDivider } from "@/components/decorative/VineDivider";
import { KantsiMotif } from "@/components/decorative/KantsiMotif";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return { title: t("title") };
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-body text-xs font-semibold tracking-[0.3em] text-wine-600 uppercase">
        {label}
      </dt>
      <dd className="mt-1 font-body text-lg text-ink-900">{value}</dd>
    </div>
  );
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <>
      <section className="relative overflow-hidden bg-wine-950 py-16 text-center text-parchment-50 sm:py-20">
        <CarpetBackground variant="gold" className="opacity-[0.08]" />
        <div className="relative mx-auto max-w-2xl px-6">
          <h1 className="font-heading text-4xl font-medium sm:text-5xl">{t("title")}</h1>
          <p className="mt-4 font-body text-parchment-100/85 sm:text-lg">{t("intro")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {/* Prominent phone-only booking note — no reservation form exists anywhere on this site. */}
        <div className="mx-auto mb-14 flex max-w-2xl flex-col items-center gap-3 rounded-2xl border border-gold-500/40 bg-gold-200/25 px-6 py-6 text-center sm:flex-row sm:text-left">
          <KantsiMotif className="h-9 w-9 shrink-0" />
          <p className="font-body text-base font-medium text-wine-900">{t("phoneNote")}</p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <dl className="space-y-8">
              {/* PLACEHOLDER — phone and address are not real values yet. */}
              <InfoRow label={t("phoneLabel")} value={t("phone")} />
              <InfoRow label={t("addressLabel")} value={t("address")} />
              {/* PLACEHOLDER — 12:00–23:00 daily is a stand-in; confirm real hours before launch. */}
              <InfoRow label={t("hoursLabel")} value={t("hours")} />
            </dl>

            <VineDivider tone="wine" className="mt-10" />

            <a
              href={`tel:${t("phone").replace(/[^+\d]/g, "")}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-wine-700 px-6 py-3 font-body text-sm font-semibold tracking-wide text-parchment-50 transition-colors hover:bg-wine-800"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.9c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.2 1L6.6 10.8Z" />
              </svg>
              {t("phoneLabel")}: {t("phone")}
            </a>
          </div>

          <MapPlaceholder />
        </div>
      </section>
    </>
  );
}
