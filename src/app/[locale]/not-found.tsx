import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function LocaleNotFound() {
  const t = await getTranslations("nav");

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="font-heading text-4xl text-wine-900">404</h1>
      <p className="mt-3 font-body text-ink-700">
        {/* Intentionally terse — this page is not part of the requested copy set. */}
        Page not found.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-wine-700 px-6 py-3 font-body text-sm font-semibold text-parchment-50 hover:bg-wine-800"
      >
        {t("home")}
      </Link>
    </section>
  );
}
