// app/services/[slug]/page.tsx
import React from "react";
import { getServicePage, getServices } from "@/lib/services";
import ServicesLayout from "@/components/Services/ServicesLayout";
import BrandsSection from "@/components/BrandsSection";
import ServicesHero from "@/components/Services/ServicesHero";

export default async function ServicePage() {
  const services = await getServices();
  const servicePage = await getServicePage();

  return (
    <>
      <ServicesHero services={services.data} />

      {/* Brands section */}
      <BrandsSection
        variant="v2"
        clientsLogoList={servicePage.data.clientsLogoList}
        clientsSectionHeading={servicePage.data.clientsSectionHeading}
      />

      {/* Main services content with sidebar */}
      <ServicesLayout services={services.data} />
    </>
  );
}
