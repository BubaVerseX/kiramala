/**
 * Fallback for paths outside any locale segment (e.g. an unknown
 * top-level path). Localized 404s within a locale are handled by
 * app/[locale]/not-found.tsx.
 */
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
          background: "#fbf8f1",
          color: "#221410",
        }}
      >
        <p>404 — Page not found.</p>
      </body>
    </html>
  );
}
