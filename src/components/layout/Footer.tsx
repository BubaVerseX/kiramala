import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LogoFull } from "@/components/brand/Logo";
import { VineDivider } from "@/components/decorative/VineDivider";

export function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold-500/20 bg-wine-950 text-parchment-100">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <LogoFull tone="parchment" />
          <VineDivider tone="gold" className="opacity-70" />
          <p className="font-heading text-sm italic text-parchment-100/80">
            {t("footer.tagline")}
          </p>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="/" className="text-parchment-100/80 hover:text-gold-300">
              {t("nav.home")}
            </Link>
            <Link href="/menu" className="text-parchment-100/80 hover:text-gold-300">
              {t("nav.menu")}
            </Link>
            <Link href="/venue" className="text-parchment-100/80 hover:text-gold-300">
              {t("nav.venue")}
            </Link>
            <Link href="/contact" className="text-parchment-100/80 hover:text-gold-300">
              {t("nav.contact")}
            </Link>
          </nav>

          <p className="text-xs tracking-wide text-parchment-100/60">
            {t("footer.phoneOnly")}
          </p>

          <p className="text-xs text-parchment-100/50">
            {t("footer.rights", { year })}
          </p>
        </div>
      </div>
    </footer>
  );
}
