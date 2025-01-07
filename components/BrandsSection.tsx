import React from "react";
import Image from "next/image";

interface ClientLogo {
  name: string;
  url: string;
}

interface BrandsSectionProps {
  variant?: "v1" | "v2";
  logos?: ClientLogo[];
}

const defaultLogos = [
  { name: "Dr. Peters Group", url: "/brands/brand_1.png" },
  { name: "Avation", url: "/brands/brand_2.png" },
  { name: "LCI", url: "/brands/brand_3.png" },
  { name: "Castlelake", url: "/brands/brand_4.png" },
  { name: "ORIX Aviation", url: "/brands/brand_5.png" },
  { name: "Genesis", url: "/brands/brand_6.png" },
  { name: "Clover Aviation", url: "/brands/brand_7.png" },
];

const BrandsSection = ({
  variant = "v1",
  logos = defaultLogos,
}: BrandsSectionProps) => {
  // For v1, use all logos split into rows of 4
  // For v2, only use the first 4 logos
  const logosToDisplay = variant === "v1" ? logos : logos.slice(0, 4);

  // For v1, split into two rows
  const firstRow =
    variant === "v1" ? logosToDisplay.slice(0, 4) : logosToDisplay;
  const remainingLogos = variant === "v1" ? logosToDisplay.slice(4) : [];

  if (variant === "v2") {
    return (
      <section className="py-24 bg-white" id="clients">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-16">
            <h2 className="text-3xl font-normal text-center sm:text-left">
              Entrusted by <br />
              <span className="font-bold block md:inline">
                Global Aviation
              </span>{" "}
              <span className="block">Leaders</span>
            </h2>
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-8 md:gap-12 flex-grow">
              {firstRow.map((logo) => (
                <div
                  key={logo.name}
                  className="flex items-center justify-center w-32 md:w-36"
                >
                  <Image
                    src={logo.url}
                    alt={logo.name}
                    width={160}
                    height={80}
                    className="w-auto h-8 md:h-10 object-contain transition-opacity hover:opacity-80"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Original v1 layout
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
              className="w-auto h-8 object-contain transition-opacity hover:opacity-80"
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
                className="w-auto h-8 object-contain transition-opacity hover:opacity-80"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BrandsSection;
