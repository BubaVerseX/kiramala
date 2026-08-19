"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { galleryImages, type GalleryArea } from "@/lib/gallery-data";
import { PlaceholderPhoto } from "@/components/venue/PlaceholderPhoto";
import { SectionHeading } from "@/components/menu/SectionHeading";
import { VineBorder } from "@/components/decorative/VineBorder";
import { CarpetBackground } from "@/components/decorative/CarpetBackground";

const AREAS: GalleryArea[] = ["hall", "grounds", "patskha"];

export function Gallery() {
  const t = useTranslations("venue.gallery");
  const tCommon = useTranslations("common");
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    if (!openId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openId]);

  const areaLabel: Record<GalleryArea, string> = {
    hall: t("hallLabel"),
    grounds: t("groundsLabel"),
    patskha: t("patskhaLabel"),
  };

  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <CarpetBackground variant="wine" scale="sm" className="opacity-[0.07]" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <SectionHeading title={t("title")} />

      <VineBorder tone="wine" className="mt-10 opacity-70" />

      <div className="mt-12 space-y-16">
        {AREAS.map((area) => (
          <div key={area}>
            <h3 className="font-heading text-xl text-wine-900">{areaLabel[area]}</h3>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {galleryImages
                .filter((img) => img.area === area)
                .map((img) => (
                  <PlaceholderPhoto
                    key={img.id}
                    label={areaLabel[area]}
                    aspect="aspect-square"
                    onClick={() => setOpenId(img.id)}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>

      <VineBorder tone="wine" className="mt-10 opacity-70" />
      </div>

      {openId && (
        <div
          role="dialog"
          aria-modal="true"
          className="lightbox-backdrop fixed inset-0 z-[60] flex items-center justify-center bg-wine-950/90 p-6 backdrop-blur-sm"
          onClick={() => setOpenId(null)}
        >
          <div
            className="lightbox-panel w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <PlaceholderPhoto
              label={areaLabel[galleryImages.find((i) => i.id === openId)?.area ?? "hall"]}
              aspect="aspect-[4/3]"
            />
            <p className="mt-4 text-center font-body text-sm text-parchment-100/80">
              {t("placeholderCaption")}
            </p>
            <button
              type="button"
              onClick={() => setOpenId(null)}
              aria-label={tCommon("close")}
              className="mx-auto mt-4 flex h-11 w-11 items-center justify-center rounded-full border border-parchment-100/30 text-parchment-100 transition-colors hover:border-gold-400/50 hover:bg-parchment-100/10"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
