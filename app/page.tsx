export const dynamic = "force-dynamic";
import React from "react";
import { Hero } from "@/components/Home/Hero";
import Stats from "@/components/Home/Stats";
import AboutSection from "@/components/Home/AboutSection";
import ServicesSection from "@/components/Home/ServicesSection";
import SupportSection from "@/components/Home/SupportServicesSection";
import SliderSection from "@/components/Home/SliderSection";
import TeamSection from "@/components/TeamSection";
import BrandsSection from "@/components/BrandsSection";
import { getHomePage, getServices, getTeamMembers } from "@/lib/services";
import ContactSection from "@/components/Home/ContactSection";

export default async function HomePage() {
  const home = await getHomePage();
  const teamData = await getTeamMembers();
  const servicesData = await getServices();

  return (
    <>
      <Hero
        heroHeading={home.data.heroHeading}
        heroDescription={home.data.heroDescription}
        heroImages={[
          {
            url: "https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            alt: "Text",
          },
          {
            url: "https://images.pexels.com/photos/36744/agriculture-arable-clouds-countryside.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            alt: "image",
          },
        ]}
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
