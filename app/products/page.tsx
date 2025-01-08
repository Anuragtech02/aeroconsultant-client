import ServicesSection from "@/components/Home/ServicesSection";
import BannerSection from "@/components/Product/BannerSectionn";
import ProductsSupportSection from "@/components/Product/SupportSection";
import React from "react";

export default async function Product() {
  return (
    <>
      <ServicesSection />
      <BannerSection />
      <ProductsSupportSection />
    </>
  );
}
