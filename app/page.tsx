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
import { getHomePage, getServices, getTeamMembers } from "@/lib/services";
import ContactSection from "@/components/Home/ContactSection";
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
  const teamData = await getTeamMembers();
  const servicesData = await getServices();
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
      <Stats statisticsCounters={home.data.statisticsCounters} />
      <AboutSection
        aboutSectionHeading={home.data.aboutSectionHeading}
        aboutSectionDescription={home.data.aboutSectionDescription}
        aboutSectionImage={home.data.aboutSectionImage}
      />
      <ServicesSection
        services={servicesData.data}
        heading={home.data.serviceSectionHeading}
        description={home.data.teamSectionDescription}
      />
      <SupportSection />
      <SliderSection
        sliderSectionTitle={home.data.sliderSectionTitle}
        sliderTabs={home.data.sliderTabs}
      />
      <TeamSection
        title="Meet our Team"
        description="Bringing together a diverse set of voices with new technology, we collaborate closely, ideate freely and swiftly apply breakthrough innovations that drive big impact."
        members={teamData.data}
      />
      <BrandsSection
        clientsLogoList={home.data.clientsLogoList}
        clientsSectionHeading={home.data.clientsSectionHeading}
        variant="v1" // or "v2" depending on your needs
      />
      <ContactSection />
      {/* <BlogSection /> */}
    </>
  );
}
