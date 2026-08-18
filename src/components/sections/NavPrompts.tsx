import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

function PromptCard({
  href,
  title,
  body,
  cta,
  delayMs,
}: {
  href: "/menu" | "/venue";
  title: string;
  body: string;
  cta: string;
  delayMs: number;
}) {
  return (
    <ScrollReveal delayMs={delayMs} className="flex-1">
      <Link
        href={href}
        className="group flex h-full flex-col justify-between rounded-2xl border border-wine-900/10 bg-wine-950 p-8 text-parchment-50 transition-colors hover:border-gold-500/50 sm:p-10"
      >
        <div>
          <h3 className="font-heading text-2xl font-medium text-gold-300 sm:text-3xl">
            {title}
          </h3>
          <p className="mt-4 font-body text-sm leading-relaxed text-parchment-100/80 sm:text-base">
            {body}
          </p>
        </div>
        <span className="mt-8 inline-flex items-center gap-2 font-body text-sm font-semibold tracking-wide text-gold-400 group-hover:text-gold-300">
          {cta}
          <span
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-1"
          >
            &rarr;
          </span>
        </span>
      </Link>
    </ScrollReveal>
  );
}

export function NavPrompts() {
  const t = useTranslations("home.navPrompts");

  return (
    <section className="bg-parchment-50 pb-24 sm:pb-28">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 sm:flex-row">
        <PromptCard
          href="/menu"
          title={t("menu.title")}
          body={t("menu.body")}
          cta={t("menu.cta")}
          delayMs={0}
        />
        <PromptCard
          href="/venue"
          title={t("venue.title")}
          body={t("venue.body")}
          cta={t("venue.cta")}
          delayMs={120}
        />
      </div>
    </section>
  );
}
