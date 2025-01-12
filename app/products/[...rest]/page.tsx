export const dynamic = "force-dynamic";
import BannerSection from "@/components/Product/BannerSectionn";
import ProductsSupportSection from "@/components/Product/SupportSection";
import React from "react";
import BlogSection from "@/components/BlogsSection";

export default async function Product() {
  return (
    <>
      {/* <ServicesSection
        services={services.data}
        heading="We manage your <span>Aircraft Assets</span>"
        description="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis"
      /> */}
      <BannerSection />
      <BlogSection />
      {/* <ProductsSupportSection /> */}
    </>
  );
}
