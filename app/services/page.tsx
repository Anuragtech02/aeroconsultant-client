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
  console.log(servicePage);
  const home = await getHomePage();

  const servicesData = [
    {
      id: 1,
      title: "Aircraft Asset Management Service",
      link: "/services/aircraft-asset-management",
      buttonText: "Know More",
      image: {
        url: "/services/camo.webp",
      },
    },
    {
      id: 2,
      title: "CAMO Services",
      link: "/services/camo",
      isHighlighted: true,
      buttonText: "Know More",
      image: {
        url: "/services/camo.webp",
      },
    },
    {
      id: 3,
      title: "Record Review Support ( In-house Team )",
      link: "/services/record-review",
      buttonText: "Know More",
      image: {
        url: "/services/camo.webp",
      },
    },
    {
      id: 4,
      title: "Record Digitalization & Management Setup",
      link: "/services/record-digitalization",
      buttonText: "Know More",
      image: {
        url: "/services/record-digitization.webp",
      },
    },
    {
      id: 5,
      logoUrl: "/aerobox-logo.png",
      title: "AeroBox",
      link: "/services#aerobox",
      image: {
        url: "/services/aerobox.webp",
      },
    },
    {
      id: 6,
      logoUrl: "/aerooil-logo.png",
      title: "AeroOIL",
      link: "/services#aerooil",
      image: {
        url: "/services/aerooil.webp",
      },
    },
    {
      id: 7,
      logoUrl: "/aeroops-logo.png",
      title: "AeroOPS",
      link: "/services#aeroops",
      image: {
        url: "/services/aeroops.webp",
      },
    },
    {
      id: 8,
      title: "Engine Stand Leasing",
      link: "/#contact",
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

      <SliderSection
        sliderSectionTitle={home.data.sliderSectionTitle}
        sliderTabs={servicePage.data.slider}
      />

      <CamoServices camoServices={servicePage.data.camoServices} />
      <RecordReviewSupport recordReview={servicePage.data.recordReview} />
      <RecordDigitization
        recordDigitization={servicePage.data.recordDigitization}
      />
      <Aerobox aerobox={servicePage.data.aerobox} />
      <Aeroops />
      <Aerooil />
      <EngineStandLeasing />

      {/* Main services content with sidebar */}
      {/* <ServicesLayout services={services.data} /> */}
    </>
  );
}
