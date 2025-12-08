// import { Button } from "@/components/Button";
// import BannerSection from "@/components/Product/BannerSectionn";
import PartnershipHero from "@/components/Product/PartnershipHero";
import BenefitsSection from "@/components/Product/BenefitsSection";
// import { Link } from "lucide-react";
// import ProductsSupportSection from "@/components/Product/SupportSection";
import React from "react";
import HowItWorks from "@/components/Product/HowWorks";
import DigitizeSection from "@/components/Product/PartnershipDigitizeSection";

export default async function Product() {
  // const heroBGVideo = {
  //   url: "/products-bg.mp4",
  // };

  // const headingParts = ["Global aviation", "Partners"];
  // const heroDescription =
  //   "Partner with industry leaders worldwide. We connect and collaborate across borders to deliver excellence in aviation services and aircraft management.";

  // const heroCTAList = [
  //   {
  //     id: 1,
  //     title: "Get Started",
  //     link: "/contact",
  //     variant: "primary",
  //   },
  //   {
  //     id: 2,
  //     title: "Learn More",
  //     link: "/services",
  //     variant: "outline",
  //   },
  // ];

  return (
    <>
      {/* <ServicesSection
        services={services.data}
        heading="We manage your <span>Aircraft Assets</span>"
        description="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis"
      /> */}
      <PartnershipHero />
      <BenefitsSection />
      <HowItWorks />
      <DigitizeSection />
      {/* <BannerSection /> */}
      {/* <BlogSection /> */}
      {/* <ProductsSupportSection /> */}
    </>
  );
}
