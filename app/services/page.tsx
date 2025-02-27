export const dynamic = "force-dynamic";
import React from "react";
import { getServicePage } from "@/lib/services";
import BrandsSection from "@/components/BrandsSection";
import ServicesHero from "@/components/Services/ServicesHero";
import ManagementBanner from "@/components/Services/ManagementBanner";
import { getHomePage } from "@/lib/services";
import CamoServices from "@/components/Services/CamoServices";
import RecordReviewSupport from "@/components/Services/RecordReviewSupport";
import RecordDigitization from "@/components/Services/RecordDigitization";
import Aerobox from "@/components/Services/Aerobox";
import Aeroops from "@/components/Services/Aeroops";
import Aerooil from "@/components/Services/Aerooil";
import SliderSection from "@/components/Home/SliderSection";
import EngineStandLeasing from "@/components/Services/EngineStandLeasing";

export default async function ServicePage() {
  // const services = await getServices();
  const servicePage = await getServicePage();

  const home = await getHomePage();

  const servicesData = [
    {
      title: "Aircraft Asset Management Service",
      id: "aircraft-asset-management",
      buttonText: "Know More",
      image: {
        url: "/services/camo.webp",
      },
    },
    {
      title: "CAMO Services",
      id: "camo",
      isHighlighted: true,
      buttonText: "Know More",
      image: {
        url: "/services/camo.webp",
      },
    },
    {
      title: "Record Review Support ( In-house Team )",
      id: "record-review-support",
      buttonText: "Know More",
      image: {
        url: "/services/camo.webp",
      },
    },
    {
      title: "Record Digitalization & Management Setup",
      id: "record-digitalization",
      buttonText: "Know More",
      image: {
        url: "/services/record-digitization.webp",
      },
    },
    {
      logoUrl: "/aerobox-logo.png",
      title: "AeroBox",
      id: "aerobox",
      image: {
        url: "/services/aerobox.webp",
      },
    },
    {
      logoUrl: "/aerooil-logo.png",
      title: "AeroOIL",
      id: "aerooil",
      image: {
        url: "/services/aerooil.webp",
      },
    },
    {
      logoUrl: "/aeroops-logo.png",
      title: "AeroOPS",
      id: "aeroops",
      image: {
        url: "/services/aeroops.webp",
      },
    },
    {
      title: "Engine Stand Leasing",
      id: "engine-stand-leasing",
      image: {
        url: "/ArrowExternalIcon.svg",
      },
    },
  ];

  return (
    <>
      <ServicesHero services={servicesData} />

      {/* Brands section */}
      <BrandsSection
        variant="v2"
        clientsLogoList={servicePage.data.clientsLogoList}
        clientsSectionHeading={servicePage.data.clientsSectionHeading}
      />

      <ManagementBanner />

      <section id="aircraft-asset-management">
        <SliderSection
          sliderSectionTitle={home.data.sliderSectionTitle}
          sliderTabs={servicePage.data.slider}
        />
      </section>

      <CamoServices camoServices={servicePage.data.camoServices} />
      <RecordReviewSupport recordReview={servicePage.data.recordReview} />
      <RecordDigitization
        recordDigitization={servicePage.data.recordDigitization}
      />
      <Aerobox aerobox={servicePage.data.aerobox} />
      <Aeroops aeroops={servicePage.data.aeroops} />
      <Aerooil aerooil={servicePage.data.aerooil} />
      <EngineStandLeasing engineStand={servicePage.data.engineStand} />

      {/* Main services content with sidebar */}
      {/* <ServicesLayout services={services.data} /> */}
    </>
  );
}
