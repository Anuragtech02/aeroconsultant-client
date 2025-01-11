"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Service } from "@/types/services";

interface ServicesLayoutProps {
  services: Service[];
}

const ServicesLayout = ({ services }: ServicesLayoutProps) => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const currentSlug =
    segments.length > 1 ? segments[segments.length - 1] : null;

  // Find active service based on slug
  const findService = (services: Service[]): Service | null => {
    return services.find((service) => service.slug === currentSlug) || null;
  };

  const activeService = currentSlug
    ? findService(services) || services[0]
    : services[0];

  // Scroll to service section if slug is present
  useEffect(() => {
    if (currentSlug) {
      const element = document.getElementById(currentSlug);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [currentSlug]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Left Sidebar */}
      <div className="w-full md:w-80 bg-gray-200 p-6">
        <nav className="space-y-6">
          {services.map((service) => (
            <div key={service.id} className="space-y-2">
              <Link
                href={`/services/${service.slug}`}
                className={`block text-lg font-bold ${
                  activeService?.slug === service.slug
                    ? "text-blue-600"
                    : "text-gray-900"
                }`}
              >
                {service.title}
              </Link>
              {service.tableOfContent && (
                <div className="pl-4 space-y-2">
                  {service.tableOfContent.map((item) => (
                    <Link
                      key={item.id}
                      href={`/services/${service.slug}#${item.id}`}
                      className="block text-gray-700"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Right Content */}
      <div className="flex-1 p-8">
        {services.map((service) => (
          <div
            key={service.id}
            id={service.slug}
            className={`mb-16 ${
              activeService?.slug === service.slug ? "scroll-mt-16" : ""
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <Image
                src={service.icon.url}
                alt={service.icon.alternativeText || service.title}
                width={service.icon.width}
                height={service.icon.height}
                className="w-12 h-12 object-contain"
              />
              <h1 className="text-3xl font-bold">{service.title}</h1>
            </div>
            <p className="text-gray-700 mb-4">{service.shortDescription}</p>
            <div
              className="prose max-w-none mt-8"
              dangerouslySetInnerHTML={{ __html: service.htmlDescription }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesLayout;
