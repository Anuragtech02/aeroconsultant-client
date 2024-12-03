// app/page.tsx
import React from "react";
import { HeroSection } from "@/types/home";
import Hero from "@/components/Home/Hero";
import { homeData } from "@/mocks/homeData";
import Stats from "@/components/Home/Stats";

// async function getHomeData() {
//   // Fetch from Strapi
//   const response = await fetch(
//     `${process.env.STRAPI_URL}/api/home?populate=deep`
//   );
//   const data = await response.json();
//   return data;
// }

export default async function HomePage() {
  // @ts-expect-error - data is not defined
  const hero: HeroSection = homeData.data.attributes.hero;

  return (
    <>
      <Hero data={hero} />
      <Stats />
    </>
  );
}
