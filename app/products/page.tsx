import BannerSection from "@/components/Product/BannerSectionn";
import ProductsSupportSection from "@/components/Product/SupportSection";
import ServicesHero from "@/components/Services/ServicesHero";
import { getServices } from "@/lib/services";
import React from "react";

export default async function Product() {
  const services = await getServices();

  return (
    <>
      <ServicesHero services={services.data} />
      <BannerSection />
      <ProductsSupportSection />
    </>
  );
}
