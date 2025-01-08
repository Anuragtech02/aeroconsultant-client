// app/page.tsx
import React from "react";
import { HeroSection } from "@/types/home";
import { Hero } from "@/components/Home/Hero";
import { homeData } from "@/mocks/homeData";
import Stats from "@/components/Home/Stats";
import AboutSection from "@/components/Home/AboutSection";
import ServicesSection from "@/components/Home/ServicesSection";
import SupportSection from "@/components/Home/SupportServicesSection";
import SliderSection from "@/components/Home/SliderSection";
import TeamSection from "@/components/TeamSection";
import BrandsSection from "@/components/BrandsSection";
import { getHomePage } from "@/lib/services";
// import BlogSection from "@/components/BlogsSection";

// async function getHomeData() {
//   // Fetch from Strapi
//   const response = await fetch(
//     `${process.env.STRAPI_URL}/api/home?populate=deep`
//   );
//   const data = await response.json();
//   return data;
// }

export default async function HomePage() {
  const home = await getHomePage();
  // @ts-expect-error - data is not defined
  const hero: HeroSection = homeData.data.attributes.hero;

  return (
    <>
      <Hero
        heroHeading={home.data.heroHeading}
        heroDescription={home.data.heroDescription}
        heroBGVideo={home.data.heroBGVideo}
        heroCTAList={home.data.heroCTAList}
      />
      <Stats />
      <AboutSection />
      <ServicesSection />
      <SupportSection />
      <SliderSection />
      <TeamSection
        title="Meet our Team"
        description="Bringing together a diverse set of voices with new technology, we collaborate closely, ideate freely and swiftly apply breakthrough innovations that drive big impact."
        members={[
          {
            name: "Neha Mishra",
            role: "CEO/CTO",
            image: {
              url: "/neha.jpg",
              alt: "Neha Mishra",
            },
          },
          {
            name: "Rohit Kumar",
            role: "CCO",
            image: {
              url: "/rohit.jpg",
              alt: "Rohit Kumar",
            },
          },
          {
            name: "Kunal Sabharwal",
            role: "COO",
            image: {
              url: "/kunal.jpg",
              alt: "Kunal Sabharwal",
            },
          },
          {
            name: "Akash Mishra",
            role: "CMO",
            image: {
              url: "/akash.jpg",
              alt: "Akash Mishra",
            },
          },
          {
            name: "Lakshya Mishra",
            role: "COS",
            image: {
              url: "/lakshya.jpg",
              alt: "Lakshya Mishra",
            },
          },
        ]}
      />
      <BrandsSection />
      {/* <BlogSection /> */}
    </>
  );
}
