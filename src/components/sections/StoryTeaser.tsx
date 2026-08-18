import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { VineDivider } from "@/components/decorative/VineDivider";

export function StoryTeaser() {
  const t = useTranslations("home.story");

  return (
    <section className="relative bg-parchment-50 py-24 sm:py-28">
      <ScrollReveal className="mx-auto flex max-w-2xl flex-col items-center px-6 text-center">
        <span className="font-body text-xs font-semibold tracking-[0.35em] text-wine-600 uppercase">
          {t("eyebrow")}
        </span>
        <h2 className="mt-4 font-heading text-3xl font-medium text-wine-900 sm:text-4xl">
          {t("title")}
        </h2>
        <VineDivider tone="wine" className="my-6" />
        <p className="text-balance font-body text-base leading-relaxed text-ink-700 sm:text-lg">
          {t("body")}
        </p>
        <Link
          href="/venue"
          className="mt-8 inline-flex items-center gap-2 border-b border-wine-700/40 pb-1 font-body text-sm font-semibold tracking-wide text-wine-700 transition-colors hover:border-wine-700 hover:text-wine-800"
        >
          {t("cta")}
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </ScrollReveal>
    </section>
  );
}
