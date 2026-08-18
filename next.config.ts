import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    // No remote photography yet — real venue/dish photos will be added
    // as local assets or a configured remote source later.
    unoptimized: false,
  },
  turbopack: {
    root: __dirname,
  },
};

export default withNextIntl(nextConfig);
