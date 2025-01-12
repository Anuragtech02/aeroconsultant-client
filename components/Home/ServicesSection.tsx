// components/sections/ServicesSection.tsx
import React from "react";
import { cn } from "@/lib/utils";
import ServiceCard from "../ServiceCard";
import { ServicesSectionProps } from "@/types/services";

const ServicesSection = ({
  className,
  heading,
  description,
  services,
}: ServicesSectionProps) => {
  const headingParts = heading.split(/<span>|<\/span>/);
  return (
    <section
      className={cn("relative w-full border border-black/30", className)}
    >
      <div className="flex flex-col lg:flex-row">
        {/* Left Column - Title and Description */}
        <div className="w-full lg:w-[40%] p-4 sm:p-8 flex flex-col justify-end">
          <h2 className="font-normal mb-8">
            {headingParts.map((part, index) =>
              index % 2 === 0 ? (
                <>
                  {" "}
                  <span key={index}>{part}</span> <br />
                </>
              ) : (
                <span key={index} className="font-bold block md:inline">
                  {part}
                </span>
              )
            )}
          </h2>
          <p className="text-gray-600 text-lg">{description}</p>
        </div>

        {/* Right Column - Service Cards Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services
              .sort((a, b) => a.title.localeCompare(b.title))
              .map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  href={`/services/${service.documentId}`}
                  imageUrl={service.highlightImage.url}
                  className="border-l border-black/30 border-b"
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
