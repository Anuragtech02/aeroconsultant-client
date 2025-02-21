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
  const headingParts = clientsSectionHeading.split(/<span>|<\/span>/);

  // if (variant === "v2") {
  //   const logosToDisplay = clientsLogoList.slice(0, 4);
  //   return (
  //     <section className="py-24 bg-white" id="clients">
  //       <div className="container mx-auto px-4">
  //         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-16">
  //           <h2 className="text-3xl font-normal text-center sm:text-left">
  //             {headingParts.map((part, index) =>
  //               index % 2 === 0 ? (
  //                 <span key={index}>{part}</span>
  //               ) : (
  //                 <span key={index} className="font-bold block md:inline">
  //                   {part}
  //                 </span>
  //               )
  //             )}
  //           </h2>
  //           <div className="flex flex-wrap justify-center md:justify-end items-center gap-8 md:gap-12 flex-grow">
  //             {logosToDisplay.map((logo) => (
  //               <div
  //                 key={logo.id}
  //                 className="flex items-center justify-center w-32 md:w-36"
  //               >
  //                 <Image
  //                   src={logo.url}
  //                   alt={logo.alternativeText || logo.name}
  //                   width={logo.width}
  //                   height={logo.height}
  //                   className="w-auto h-8 md:h-14 object-contain transition-opacity hover:opacity-80"
  //                 />
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   );
  // }

  // Split logos into two groups for different sliders
  const midPoint = Math.ceil(clientsLogoList.length / 2);
  const firstHalfLogos = [...clientsLogoList.slice(0, midPoint)];
  const secondHalfLogos = [...clientsLogoList.slice(midPoint)];

  // Duplicate each half for seamless scrolling
  const firstRow = [...firstHalfLogos, ...firstHalfLogos];
  const secondRow = [...secondHalfLogos, ...secondHalfLogos];

  return (
    <section className="py-24 bg-white">
      <div className="text-center mb-16 px-4">
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

      {/* First slider - moves left to right */}
      <div className="w-full overflow-hidden mb-8 sm:mb-16">
        <div className="animate-scroll-right flex gap-10 sm:gap-16 items-center">
          {firstRow.map((logo, index) => (
            <Image
              key={`${logo.id}-${index}`}
              src={logo.url}
              alt={logo.alternativeText || logo.name}
              width={logo.width}
              height={logo.height}
              className="w-auto h-12 md:h-16 object-contain min-w-[160px]"
            />
          ))}
        </div>
      </div>

      {/* Second slider - moves right to left */}
      {/* {variant !== "v2" && ( */}
      <div className="w-full overflow-hidden">
        <div className="animate-scroll-left flex gap-16 items-center">
          {secondRow.map((logo, index) => (
            <Image
              key={`${logo.id}-${index}`}
              src={logo.url}
              alt={logo.alternativeText || logo.name}
              width={logo.width}
              height={logo.height}
              className="w-auto h-12 md:h-16 object-contain min-w-[160px]"
            />
          ))}
        </div>
      </div>
      {/* )} */}
    </section>
  );
};

export default BrandsSection;
