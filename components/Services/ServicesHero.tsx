// components/Services/ServicesHero.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button";
import { Service } from "@/types/services";

interface ServicesHeroProps {
  services: Service[];
}

export default function ServicesHero({ services }: ServicesHeroProps) {
  return (
    <div className="relative lg:h-[600px] mt-24">
      {/* Left column background image wrapper */}
      <div className="absolute top-0 bottom-0 left-0 w-full lg:w-1/2 bg-gray-900">
        <Image
          src="/service-hero.jpg"
          alt="Aircraft Engine"
          fill
          className="object-cover opacity-70"
          priority
        />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 lg:h-full">
        <div className="grid lg:grid-cols-2 lg:h-full">
          {/* Left Column - Hero Content */}
          <div className="relative flex items-center h-[300px] lg:h-auto">
            <div>
              <h1 className="font-bold text-white mb-12 font-heading leading-tight">
                Providing solutions your aircrafts need
              </h1>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={"/#contact"}>
                  <Button variant="primary" title="Let's Talk" size="lg" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Service Cards */}
          <div className="relative -mx-4">
            {/* Full-width background */}
            <div className="absolute inset-0" />

            <div className="relative grid grid-rows-3 h-full">
              {[services[2], services[0], services[1]].map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="relative bg-white hover:bg-gray-50 transition-colors"
                >
                  {/* Extended background */}
                  <div className="absolute inset-0 bg-inherit border border-black/30" />

                  {/* Contained content */}
                  <div className="relative h-full px-4">
                    <div className="h-full p-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
                      <div className="flex flex-col gap-2">
                        <Image
                          src={service.icon.url}
                          alt={service.icon.alternativeText || ""}
                          width={service.icon.width}
                          height={service.icon.height}
                          className="w-12 h-12 object-contain"
                        />
                        <p className="text-txt-body">
                          {service.shortDescription}
                        </p>
                      </div>

                      <h3 className="font-normal underline text-purple-600 text-right">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
