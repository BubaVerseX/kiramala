"use client";

import { useEffect, useState } from "react";

/**
 * A kantsi (drinking horn) outline, fixed to the viewport edge on the
 * Home page, that fills bottom-to-top with a wine gradient as the
 * visitor scrolls through the page — a scroll-progress indicator
 * dressed as a decorative motif rather than a plain bar.
 */
export function KantsiScrollAccent() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const next = scrollable > 0 ? window.scrollY / scrollable : 0;
      setProgress(Math.min(1, Math.max(0, next)));
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Horn silhouette occupies roughly y=4..92 within the 0..96 viewBox height.
  const fillTop = 92 - progress * 88;

  return (
    <div
      aria-hidden="true"
      className="fixed top-1/2 right-3 z-40 hidden -translate-y-1/2 sm:block lg:right-6"
    >
      <svg
        viewBox="0 0 40 96"
        className="h-32 w-auto text-gold-600/70 drop-shadow-sm"
        fill="none"
      >
        <defs>
          <linearGradient id="kantsi-fill" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="var(--color-wine-600)" />
            <stop offset="100%" stopColor="var(--color-gold-500)" />
          </linearGradient>
          <clipPath id="kantsi-clip">
            <path d="M20 4c6 10 12 24 12 42 0 20-6 34-12 46-6-12-12-26-12-46 0-18 6-32 12-42Z" />
          </clipPath>
        </defs>

        {/* fill, clipped to the horn silhouette, rising with scroll progress */}
        <rect
          x="0"
          y={fillTop}
          width="40"
          height="96"
          fill="url(#kantsi-fill)"
          clipPath="url(#kantsi-clip)"
          className="kantsi-fill-rect"
        />

        {/* horn outline + rim/tip accents */}
        <path
          d="M20 4c6 10 12 24 12 42 0 20-6 34-12 46-6-12-12-26-12-46 0-18 6-32 12-42Z"
          stroke="currentColor"
          strokeWidth={1.4}
          strokeLinejoin="round"
        />
        <ellipse cx="20" cy="6" rx="7.5" ry="2.4" stroke="currentColor" strokeWidth={1.2} />
        <circle cx="20" cy="91" r="1.6" fill="currentColor" />
      </svg>
    </div>
  );
}
