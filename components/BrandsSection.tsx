import React from "react";
import Image from "next/image";
import { StrapiImage } from "@/types/strapi";

interface BrandsSectionProps {
  variant?: "v1" | "v2";
  clientsLogoList: StrapiImage[];
  clientsSectionHeading: string;
}

const BrandsSection = ({
  variant = "v1",
  clientsLogoList,
  clientsSectionHeading,
}: BrandsSectionProps) => {
  // Split the heading into parts based on <span> tags
  const headingParts = clientsSectionHeading.split(/<span>|<\/span>/);

  // For v1, use all logos split into rows of 4
  // For v2, only use the first 4 logos
  const logosToDisplay =
    variant === "v1" ? clientsLogoList : clientsLogoList.slice(0, 4);

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
              {headingParts.map((part, index) =>
                index % 2 === 0 ? (
                  <span key={index}>{part}</span>
                ) : (
                  <span key={index} className="font-bold block md:inline">
                    {part}
                  </span>
                )
              )}
            </h2>
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-8 md:gap-12 flex-grow">
              {firstRow.map((logo) => (
                <div
                  key={logo.id}
                  className="flex items-center justify-center w-32 md:w-36"
                >
                  <Image
                    src={logo.url}
                    alt={logo.alternativeText || logo.name}
                    width={logo.width}
                    height={logo.height}
                    className="w-auto h-8 md:h-14 object-contain transition-opacity hover:opacity-80"
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
            {headingParts.map((part, index) =>
              index % 2 === 0 ? (
                <span key={index}>{part}</span>
              ) : (
                <span key={index} className="font-bold">
                  {part}
                </span>
              )
            )}
          </h2>
        </div>
        {/* First Row */}
        <div className="flex flex-wrap justify-center gap-12 mb-12">
          {firstRow.map((logo) => (
            <Image
              key={logo.id}
              src={logo.url}
              alt={logo.alternativeText || logo.name}
              width={logo.width}
              height={logo.height}
              className="w-auto h-8 object-contain transition-opacity hover:opacity-80"
            />
          ))}
        </div>
        {/* Second Row - Centered */}
        {remainingLogos.length > 0 && (
          <div className="flex flex-wrap justify-center gap-12">
            {remainingLogos.map((logo) => (
              <Image
                key={logo.id}
                src={logo.url}
                alt={logo.alternativeText || logo.name}
                width={logo.width}
                height={logo.height}
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
