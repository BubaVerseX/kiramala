"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CarpetBackground } from "@/components/decorative/CarpetBackground";
import emblemSrc from "../../../public/logo/emblem.png";

/**
 * Hero background depth layer — the carpet lattice and emblem
 * watermark drift a little slower than the page as the visitor
 * scrolls past, so the mark reads as sitting behind the headline
 * rather than pasted flat on the same plane as the text. The layer
 * is oversized above its container (see `-top-24`) so the parallax
 * offset never uncovers a gap at the section's top edge.
 *
 * Fully inert under prefers-reduced-motion: the scroll listener is
 * never attached, so the layer simply renders static.
 */
export function HeroParallaxLayer() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      setOffset(Math.min(window.scrollY * 0.12, 56));
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-x-0 -top-24 bottom-0"
      style={{ transform: `translateY(${offset}px)` }}
    >
      <CarpetBackground variant="gold" scale="lg" className="opacity-[0.16]" />
      <Image
        src={emblemSrc}
        alt=""
        className="pointer-events-none absolute top-1/2 left-1/2 h-[54vh] w-[54vh] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.11] sm:h-[62vh] sm:w-[62vh] md:h-[68vh] md:w-[68vh]"
      />
    </div>
  );
}
