// // components/Services/ServicesHero.tsx
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "../Button";
// import { Service } from "@/types/services";

// interface ServicesHeroProps {
//   services: Service[];
// }

// export default function ServicesHero({ services }: ServicesHeroProps) {
//   return (
//     <div className="relative lg:h-[600px] mt-24">
//       {/* Left column background image wrapper */}
//       <div className="absolute top-0 bottom-0 left-0 w-full lg:w-1/2 bg-gray-900">
//         <Image
//           src="/service-hero.jpg"
//           alt="Aircraft Engine"
//           fill
//           className="object-cover opacity-70"
//           priority
//         />
//       </div>

//       {/* Main content */}
//       <div className="container mx-auto px-4 lg:h-full">
//         <div className="grid lg:grid-cols-2 lg:h-full">
//           {/* Left Column - Hero Content */}
//           <div className="relative flex items-center h-[300px] lg:h-auto">
//             <div>
//               <h1 className="font-bold text-white mb-12 font-heading leading-tight">
//                 Providing solutions your aircrafts need
//               </h1>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Link href={"/#contact"}>
//                   <Button variant="primary" title="Let's Talk" size="lg" />
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Service Cards */}
//           <div className="relative -mx-4">
//             {/* Full-width background */}
//             <div className="absolute inset-0" />

//             <div className="relative grid grid-rows-3 h-full">
//               {services
//                 .sort((a, b) => a.title.localeCompare(b.title))
//                 .map((service) => (
//                   <Link
//                     key={service.id}
//                     href={`/services/${service.slug}`}
//                     className="relative bg-white hover:bg-gray-50 transition-colors"
//                   >
//                     {/* Extended background */}
//                     <div className="absolute inset-0 bg-inherit border border-black/30" />

//                     {/* Contained content */}
//                     <div className="relative h-full px-4">
//                       <div className="h-full p-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
//                         <div className="flex flex-col gap-2">
//                           <Image
//                             src={service.icon.url}
//                             alt={service.icon.alternativeText || ""}
//                             width={service.icon.width}
//                             height={service.icon.height}
//                             className="w-12 h-12 object-contain"
//                           />
//                           <p className="text-txt-body">
//                             {service.shortDescription}
//                           </p>
//                         </div>

//                         <h3 className="font-normal underline text-purple-600 text-right">
//                           {service.title}
//                         </h3>
//                       </div>
//                     </div>
//                   </Link>
//                 ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import Link from "next/link";
import Image from "next/image";

// interface ServiceItem {
//   id: number;
//   title: string;
//   link?: string;
//   isHighlighted?: boolean;
//   icon?: {
//     url: string;
//     width: number;
//     height: number;
//     alt: string;
//   };
//   ctaText?: string;
//   buttonText?: string;
//   logoUrl?: string;
// }

interface ServicesGridProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  services: any[];
}

const ServicesGrid = ({ services }: ServicesGridProps) => {
  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {services.map((service) => {
        // Regular service items (First row)
        if (!service.isHighlighted && !service.ctaText && !service.logoUrl) {
          return (
            <Link
              href={service.link || "#"}
              key={service.id}
              className="group relative min-h-[100px] sm:min-h-[300px] flex flex-col items-start justify-end p-8 border border-gray-200 hover:bg-blue-700 transition-colors duration-300"
            >
              <h2 className="text-2xl font-normal text-gray-900 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h2>
              {service.buttonText && (
                <span className="text-blue-700 group-hover:text-white transition-colors duration-300">
                  {service.buttonText}
                </span>
              )}
            </Link>
          );
        }

        // Highlighted service item (CAMO Services)
        if (service.isHighlighted) {
          return (
            <Link
              href={service.link || "#"}
              key={service.id}
              className="relative min-h-[100px] sm:min-h-[300px] flex flex-col items-start justify-end p-8 bg-blue-700"
            >
              <h2 className="text-2xl font-normal text-white">
                {service.title}
              </h2>
              {service.buttonText && (
                <span className="text-white">{service.buttonText}</span>
              )}
            </Link>
          );
        }

        // Logo items (Second row)
        if (service.logoUrl) {
          return (
            <Link
              href={service.link || "#"}
              key={service.id}
              className="relative min-h-[100px] sm:min-h-[300px] flex items-center sm:justify-center p-8 border border-gray-200 hover:bg-blue-700/5 transition-colors duration-300"
            >
              <Image
                src={service.logoUrl}
                alt={service.title}
                width={200}
                height={60}
                className="object-contain h-12 w-auto"
              />
            </Link>
          );
        }

        // CTA item (Contact Sales Now)
        if (service.ctaText) {
          return (
            <Link
              href={service.link || "#"}
              key={service.id}
              className="relative min-h-[100px] sm:min-h-[300px] flex flex-col sm:items-center justify-center p-8 bg-aero-primary hover:bg-opacity-80 transition-colors duration-300"
            >
              {service.icon && (
                <div className="mb-4">
                  <Image
                    src={service.icon.url}
                    alt={service.icon.alt}
                    width={100}
                    height={100}
                  />
                </div>
              )}
              <h3 className="sm:text-right sm:max-w-[180px] font-bold text-white">
                {service.ctaText}
              </h3>
            </Link>
          );
        }
      })}
    </div>
  );
};

export default ServicesGrid;

// Example CMS data structure
/*
const servicesData = [
  {
    id: 1,
    title: "Aircraft Asset Management Service",
    link: "/services/aircraft-asset-management",
    buttonText: "Know More"
  },
  {
    id: 2,
    title: "CAMO Services",
    link: "/services/camo",
    isHighlighted: true,
    buttonText: "Know More"
  },
  {
    id: 3,
    title: "Record Review Support ( In-house Team )",
    link: "/services/record-review",
    buttonText: "Know More"
  },
  {
    id: 4,
    title: "Record Digitalization & Management Setup",
    link: "/services/record-digitalization",
    buttonText: "Know More"
  },
  {
    id: 5,
    logoUrl: "/logos/aerobox.svg",
    title: "AeroBox",
    link: "/products/aerobox"
  },
  {
    id: 6,
    logoUrl: "/logos/aerooil.svg",
    title: "AeroOIL",
    link: "/products/aerooil"
  },
  {
    id: 7,
    logoUrl: "/logos/aeroops.svg",
    title: "AeroOPS",
    link: "/products/aeroops"
  },
  {
    id: 8,
    ctaText: "Contact Sales Now",
    link: "/contact",
    icon: {
      url: "/icons/external-link.svg",
      width: 40,
      height: 40,
      alt: "Contact sales icon"
    }
  }
];
*/
