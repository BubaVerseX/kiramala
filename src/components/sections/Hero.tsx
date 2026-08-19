import { useTranslations } from "next-intl";
import { VineBorder } from "@/components/decorative/VineBorder";
import { HeroParallaxLayer } from "@/components/sections/HeroParallaxLayer";

export function Hero() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] items-center justify-center overflow-hidden bg-wine-950 text-parchment-50 sm:min-h-[calc(100svh-5rem)]">
      <HeroParallaxLayer />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-wine-950 via-wine-900/95 to-wine-950"
      />

      {/*
        PLACEHOLDER HERO IMAGERY
        A real riverside/venue photograph or looping video would sit
        here as a background layer beneath the gradient above.
      */}

      {/*
        Top and bottom vine borders frame the hero like the arch in the
        lockup — the emblem watermark, this frame, and the copy below
        are meant to read as one composed medallion, not independent
        layers stacked on top of each other.
      */}
      <VineBorder tone="gold" className="absolute inset-x-0 top-0 opacity-40" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <span className="font-body text-xs font-semibold tracking-[0.4em] text-gold-400 uppercase">
          {t("eyebrow")}
        </span>
        <h1 className="mt-6 font-heading text-7xl font-semibold tracking-tight text-parchment-50 sm:text-8xl md:text-9xl">
          {t("title")}
        </h1>
        <p className="mt-8 max-w-xl text-balance font-body text-lg leading-relaxed text-parchment-100/85 sm:text-xl">
          {t("tagline")}
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-10 flex flex-col items-center gap-3 text-parchment-100/70 sm:bottom-12">
        <span
          aria-hidden="true"
          className="h-10 w-px bg-gradient-to-b from-transparent via-gold-400/60 to-gold-400/60"
        />
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

      <VineBorder tone="gold" className="absolute inset-x-0 bottom-0 opacity-60" />
    </section>
  );
}
