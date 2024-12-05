import React from "react";
import Image from "next/image";

interface ClientLogo {
  name: string;
  url: string;
}

interface BrandsSectionProps {
  logos?: ClientLogo[];
}

const BrandsSection = ({
  logos = [
    { name: "Dr. Peters Group", url: "/brands/brand_1.png" },
    { name: "Avation", url: "/brands/brand_2.png" },
    { name: "LCI", url: "/brands/brand_3.png" },
    { name: "Castlelake", url: "/brands/brand_4.png" },
    { name: "ORIX Aviation", url: "/brands/brand_5.png" },
    { name: "Genesis", url: "/brands/brand_6.png" },
    { name: "Clover Aviation", url: "/brands/brand_7.png" },
  ],
}: BrandsSectionProps) => {
  // Split logos into rows of 4
  const firstRow = logos.slice(0, 4);
  const remainingLogos = logos.slice(4);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-normal mb-2">
            Entrusted by <br />
            <span className="font-bold">Global Aviation</span> Leaders
          </h2>
        </div>

        {/* First Row */}
        <div className="flex flex-wrap justify-center gap-12 mb-12">
          {firstRow.map((logo) => (
            <Image
              key={logo.name}
              src={logo.url}
              alt={logo.name}
              width={160}
              height={80}
              className="w-auto h-8 object-contain"
            />
          ))}
        </div>

        {/* Second Row - Centered */}
        {remainingLogos.length > 0 && (
          <div className="flex flex-wrap justify-center gap-12">
            {remainingLogos.map((logo) => (
              <Image
                key={logo.name}
                src={logo.url}
                alt={logo.name}
                width={160}
                height={80}
                className="w-auto h-8 object-contain"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BrandsSection;
