export const dynamic = "force-dynamic";
import React from "react";
import { getServicePage } from "@/lib/services";
import BrandsSection from "@/components/BrandsSection";
import ServicesHero from "@/components/Services/ServicesHero";
import ManagementBanner from "@/components/Services/ManagementBanner";
import SliderSection from "@/components/Home/SliderSection";
import { getHomePage } from "@/lib/services";
import CamoServices from "@/components/Services/CamoServices";
import RecordReviewSupport from "@/components/Services/RecordReviewSupport";
import RecordDigitization from "@/components/Services/RecordDigitization";
import Aerobox from "@/components/Services/Aerobox";
import Aeroops from "@/components/Services/Aeroops";
import Aerooil from "@/components/Services/Aerooil";

export default async function ServicePage() {
  // const services = await getServices();
  const servicePage = await getServicePage();
  const home = await getHomePage();

  const servicesData = [
    {
      id: 1,
      title: "Aircraft Asset Management Service",
      link: "/services/aircraft-asset-management",
      buttonText: "Know More",
    },
    {
      id: 2,
      title: "CAMO Services",
      link: "/services/camo",
      isHighlighted: true,
      buttonText: "Know More",
    },
    {
      id: 3,
      title: "Record Review Support ( In-house Team )",
      link: "/services/record-review",
      buttonText: "Know More",
    },
    {
      id: 4,
      title: "Record Digitalization & Management Setup",
      link: "/services/record-digitalization",
      buttonText: "Know More",
    },
    {
      id: 5,
      logoUrl: "/aerobox-logo.png",
      title: "AeroBox",
      link: "/services#aerobox",
    },
    {
      id: 6,
      logoUrl: "/aerooil-logo.png",
      title: "AeroOIL",
      link: "/services#aerooil",
    },
    {
      id: 7,
      logoUrl: "/aeroops-logo.png",
      title: "AeroOPS",
      link: "/services#aeroops",
    },
    {
      id: 8,
      ctaText: "Contact Sales Now",
      link: "/#contact",
      icon: {
        url: "/ArrowExternalIcon.svg",
        width: 40,
        height: 40,
        alt: "Contact sales icon",
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
        sliderTabs={home.data.sliderTabs}
      />

      <CamoServices />
      <RecordReviewSupport />
      <RecordDigitization />
      <Aerobox />
      <Aeroops />
      <Aerooil />

      {/* Main services content with sidebar */}
      {/* <ServicesLayout services={services.data} /> */}
    </>
  );
}
