import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { StoryTeaser } from "@/components/sections/StoryTeaser";
import { PatskhaHighlight } from "@/components/sections/PatskhaHighlight";
import { NavPrompts } from "@/components/sections/NavPrompts";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <StoryTeaser />
      <PatskhaHighlight />
      <NavPrompts />
    </>
  );
}
