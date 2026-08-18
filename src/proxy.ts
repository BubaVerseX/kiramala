import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match every route except static assets, Next internals and API routes
  // (this project has no API routes, but the exclusion is kept for safety).
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
