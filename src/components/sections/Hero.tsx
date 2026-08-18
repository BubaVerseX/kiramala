import { useTranslations } from "next-intl";
import { CarpetBackground } from "@/components/decorative/CarpetBackground";

export function Hero() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] items-center justify-center overflow-hidden bg-wine-950 text-parchment-50 sm:min-h-[calc(100svh-5rem)]">
      <CarpetBackground variant="gold" className="opacity-[0.08]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-wine-950 via-wine-900/95 to-wine-950"
      />

      {/*
        PLACEHOLDER HERO IMAGERY
        A real riverside/venue photograph or looping video would sit
        here as a background layer beneath the gradient above.
      */}

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <span className="font-body text-xs font-semibold tracking-[0.4em] text-gold-400 uppercase">
          {t("eyebrow")}
        </span>
        <h1 className="mt-5 font-heading text-6xl font-medium tracking-wide text-parchment-50 sm:text-7xl md:text-8xl">
          {t("title")}
        </h1>
        <p className="mt-7 max-w-xl text-balance font-body text-lg leading-relaxed text-parchment-100/85 sm:text-xl">
          {t("tagline")}
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-2 text-parchment-100/70">
        <span className="font-body text-xs tracking-[0.25em] uppercase">
          {t("scrollCue")}
        </span>
        <svg
          viewBox="0 0 24 24"
          className="scroll-cue-bounce h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 4v15M6 13l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
