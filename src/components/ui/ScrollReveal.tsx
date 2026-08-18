"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Wraps children in a subtle fade/rise-in reveal triggered on scroll
 * into view. Uses IntersectionObserver + a CSS class toggle so that
 * `prefers-reduced-motion: reduce` (handled in globals.css) fully
 * disables the animation rather than just shortening it.
 */
export function ScrollReveal({
  children,
  className,
  delayMs = 0,
  as: Tag = "div",
  id,
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  as?: "div" | "section" | "li";
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Component = Tag as "div";

  return (
    <Component
      ref={ref}
      id={id}
      className={cn("reveal", visible && "reveal-visible", className)}
      style={{ transitionDelay: visible ? `${delayMs}ms` : "0ms" }}
    >
      {children}
    </Component>
  );
}
