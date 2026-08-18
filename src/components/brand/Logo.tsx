import Image from "next/image";
import emblemSrc from "../../../public/logo/emblem.png";
import lockupSrc from "../../../public/logo/lockup.png";
import { cn } from "@/lib/cn";

/**
 * Final brand marks, generated from assets/brand/kiramala-logo-source.png
 * via `npm run process-logo` (scripts/process-logo.mjs) — background
 * keyed to transparent, emblem cropped separately from the full lockup.
 * Re-run that script if the source artwork changes.
 */

type LogoProps = {
  className?: string;
};

/** Square emblem only (arches, cypress, moon, grapes) — mobile header, favicon-adjacent uses. */
export function LogoIcon({ className }: LogoProps) {
  return (
    <Image
      src={emblemSrc}
      alt="Kiramala"
      priority
      className={cn("h-10 w-10 object-contain", className)}
    />
  );
}

/** Complete lockup — emblem, Georgian wordmark, and "KIRAMALA" subtext. Desktop header, footer. */
export function LogoFull({ className }: LogoProps) {
  return (
    <Image
      src={lockupSrc}
      alt="Kiramala"
      priority
      className={cn("h-16 w-auto object-contain", className)}
    />
  );
}
