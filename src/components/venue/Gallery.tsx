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
    <section className="relative overflow-hidden py-16 sm:py-20">
      <CarpetBackground variant="wine" scale="sm" className="opacity-[0.07]" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <SectionHeading title={t("title")} />

      <VineBorder tone="wine" className="mt-10 opacity-70" />

      <div className="mt-10 space-y-14">
        {AREAS.map((area) => (
          <div key={area}>
            <h3 className="font-heading text-xl text-wine-900">{areaLabel[area]}</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
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
          className="fixed inset-0 z-[60] flex items-center justify-center bg-wine-950/90 p-6"
          onClick={() => setOpenId(null)}
        >
          <div className="w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
            <PlaceholderPhoto
              label={areaLabel[galleryImages.find((i) => i.id === openId)?.area ?? "hall"]}
              aspect="aspect-[4/3]"
            />
            <p className="mt-3 text-center font-body text-sm text-parchment-100/80">
              {t("placeholderCaption")}
            </p>
            <button
              type="button"
              onClick={() => setOpenId(null)}
              className="mx-auto mt-4 flex items-center gap-2 rounded-full border border-parchment-100/30 px-4 py-2 font-body text-sm text-parchment-100 hover:bg-parchment-100/10"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
