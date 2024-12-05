// app/page.tsx
import React from "react";
import { HeroSection } from "@/types/home";
import Hero from "@/components/Home/Hero";
import { homeData } from "@/mocks/homeData";
import Stats from "@/components/Home/Stats";
import AboutSection from "@/components/Home/AboutSection";
import ServicesSection from "@/components/Home/ServicesSection";
import SupportSection from "@/components/Home/SupportServicesSection";
import SliderSection from "@/components/Home/SliderSection";

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
      <AboutSection />
      <ServicesSection />
      <SupportSection />
      <SliderSection />
    </>
  );
}
