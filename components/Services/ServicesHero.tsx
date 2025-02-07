/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";
import Link from "next/link";

// import { Service } from "@/types/services";

// interface ServicesHeroProps {
//   services: Service[];
// }

export default function ServicesHero({ services }: any) {
  return (
    <div className="container mx-auto px-4 mt-24">
      {/* Grid of service cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service: any) => (
          <Link
            key={service.id}
            href={`/services/${service.slug}`}
            className="relative group overflow-hidden rounded-3xl hover:rounded-3xl aspect-[4/3]"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={service.image?.url || "/default-service-bg.jpg"} // Fallback image
                alt={service.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                priority
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 opacity-90 hover:!bg-blue-600" />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-6">
              <h2 className="text-2xl font-normal text-white mb-2">
                {service.title}
              </h2>
              <span className="text-white/90 text-sm">Know More</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
