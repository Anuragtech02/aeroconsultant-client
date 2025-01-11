import BannerSection from "@/components/Product/BannerSectionn";
import ProductsSupportSection from "@/components/Product/SupportSection";
import ServicesSection from "@/components/Home/ServicesSection";
import { getServices } from "@/lib/services";
import React from "react";

export default async function Product() {
  const services = await getServices();

  return (
    <>
      <ServicesSection
        services={services.data}
        heading="We manage your <span>Aircraft Assets</span>"
        description="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis"
      />
      <BannerSection />
      <ProductsSupportSection />
    </>
  );
}
