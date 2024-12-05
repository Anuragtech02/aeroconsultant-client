import React from "react";
import { cn } from "@/lib/utils";
import ServiceCard from "../ServiceCard";

interface ServicesSectionProps {
  className?: string;
}

const ServicesSection = ({ className }: ServicesSectionProps) => {
  return (
    <section
      className={cn("relative w-full border border-black/30", className)}
    >
      <div className="flex flex-col lg:flex-row">
        {/* Left Column - Title and Description */}
        <div className="w-full lg:w-[40%] p-8 flex flex-col justify-end">
          <h2 className="font-regular mb-8">
            We manage your
            <br />
            <span className="font-bold">Aircraft Assets</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Comprehensive aviation services, including aircraft transitions,
            CAMO support, and innovative digital tailored solutions. Trust us to
            deliver excellence in every aspect of aviation
          </p>
        </div>

        {/* Right Column - Service Cards Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Aircraft Transition"
              href="/services/transition"
              imageUrl="/services/service-1.jpg"
            />
            <ServiceCard
              title="Aircraft CAMO"
              href="/services/camo"
              imageUrl="/services/service-2.jpg"
            />
            <ServiceCard
              title="Aircraft Digital Services"
              href="/services/digital"
              imageUrl="/services/service-3.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
