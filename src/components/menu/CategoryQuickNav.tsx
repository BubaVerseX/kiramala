import { useTranslations } from "next-intl";
import { menuCategories } from "@/lib/menu-data";

export function CategoryQuickNav() {
  const t = useTranslations("menu.categories");

  const ids = [...menuCategories.map((c) => c.id), "drinks", "wine"];

  return (
    <nav
      aria-label="Menu categories"
      className="sticky top-16 z-30 -mx-4 overflow-x-auto border-b border-wine-900/10 bg-parchment-50/95 px-4 py-3 backdrop-blur sm:top-20 sm:mx-0 sm:rounded-full sm:border sm:px-2"
    >
      <ul className="flex w-max min-w-full justify-center gap-1">
        {ids.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="inline-block rounded-full px-4 py-2.5 font-body text-sm whitespace-nowrap text-ink-700 transition-colors hover:bg-wine-700/10 hover:text-wine-800"
            >
              {t(id)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
