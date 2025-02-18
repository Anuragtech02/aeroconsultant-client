export const dynamic = "force-dynamic";
// import { Button } from "@/components/Button";
import BannerSection from "@/components/Product/BannerSectionn";
// import { Link } from "lucide-react";
// import ProductsSupportSection from "@/components/Product/SupportSection";
import React from "react";

export default async function Product() {
  const heroBGVideo = {
    url: "/products-bg.mp4",
  };

  const headingParts = ["Global aviation", "Partners"];
  const heroDescription =
    "Partner with industry leaders worldwide. We connect and collaborate across borders to deliver excellence in aviation services and aircraft management.";

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
      <section className="relative min-h-screen flex items-center">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroBGVideo.url} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-h1 text-white mb-6">
              {headingParts.map((part, index) =>
                index % 2 === 0 ? (
                  <span key={index} className="font-normal">
                    {part}
                  </span>
                ) : (
                  <>
                    <span key={index} className="font-bold ml-3">
                      {part}
                    </span>
                    <br />
                  </>
                )
              )}
            </h1>
            {/* <h1 className="text-h1 text-white mb-6">
            <span className="font-normal">Aviation made</span>
            <br />
            <span className="font-bold">Seamless</span>
          </h1> */}
            <p className="text-xl text-white/90 mb-8">{heroDescription}</p>
            {/* <div className="flex flex-wrap gap-4">
              {heroCTAList.map((cta) => (
                <Link key={cta.id} href={cta.link}>
                  <Button title={cta.title} variant={cta.variant} />
                </Link>
              ))}
            </div> */}
          </div>
        </div>
      </section>
      <BannerSection />
      {/* <BlogSection /> */}
      {/* <ProductsSupportSection /> */}
    </>
  );
}
