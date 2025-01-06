// app/page.tsx
import BrandsSection from "@/components/BrandsSection";
import ServicesHero from "@/components/Services/ServicesHero";
// import ServicesToggle from "@/components/Services/ServiceToggle";
import React from "react";

export default async function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <BrandsSection variant="v2" />
      {/* <ServicesToggle /> */}
    </>
  );
}
