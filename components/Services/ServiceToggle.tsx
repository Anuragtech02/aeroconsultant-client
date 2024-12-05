"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface ServiceItem {
  id: string;
  title: string;
  content: string;
  subItems?: ServiceItem[];
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "aircraft-asset-management",
    title: "Aircraft Asset Management",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    subItems: [
      {
        id: "aircraft-redelivery",
        title: "Aircraft Redelivery",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: "aircraft-camo",
        title: "Aircraft CAMO",
        content:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        id: "aircraft-delivery",
        title: "Aircraft Delivery",
        content:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
  },
  {
    id: "record-digitalization",
    title: "Record Digitalization",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    subItems: [
      {
        id: "record-review",
        title: "Record Review",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: "record-digitalization-sub",
        title: "Record Digitalization",
        content:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: "record-management",
        title: "Record Management",
        content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      },
    ],
  },
  {
    id: "digital-product",
    title: "Digital Product",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    subItems: [
      {
        id: "aerobox",
        title: "AeroBOX",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: "aeroops",
        title: "AeroOPS",
        content: "Sed do eiusmod tempor incididunt ut labore.",
      },
      {
        id: "aerooil",
        title: "AeroOIL",
        content: "Ut enim ad minim veniam, quis nostrud exercitation.",
      },
    ],
  },
];

const ServicesLayout = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const slug = segments.length > 1 ? segments[segments.length - 1] : null;

  // Find active service based on slug
  const findService = (services: ServiceItem[]): ServiceItem | null => {
    for (const service of services) {
      if (service.id === slug) {
        return service;
      }
      if (service.subItems) {
        const subService = service.subItems.find((sub) => sub.id === slug);
        if (subService) {
          return subService;
        }
      }
    }
    return null;
  };

  const activeService = slug
    ? findService(SERVICES_DATA) || SERVICES_DATA[0]
    : SERVICES_DATA[0];

  // Scroll to service section if slug is present
  React.useEffect(() => {
    if (slug) {
      const element = document.getElementById(slug);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [slug]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Left Sidebar */}
      <div className="w-full md:w-80 bg-gray-200 p-6">
        <nav className="space-y-6">
          {SERVICES_DATA.map((service) => (
            <div key={service.id} className="space-y-2">
              <Link
                href={`/services/${service.id}`}
                className={`block text-lg font-bold ${
                  activeService?.id === service.id
                    ? "text-blue-600"
                    : "text-gray-900"
                }`}
              >
                {service.title}
              </Link>
              {service.subItems && (
                <div className="pl-4 space-y-2">
                  {service.subItems.map((subItem) => (
                    <Link
                      key={subItem.id}
                      href={`/services/${subItem.id}`}
                      className={`block ${
                        activeService?.id === subItem.id
                          ? "text-blue-600"
                          : "text-gray-700"
                      }`}
                    >
                      {subItem.title}
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
        {/* Render all services, but only highlight/scroll to active one */}
        {SERVICES_DATA.map((service) => (
          <div
            key={service.id}
            id={service.id}
            className={`mb-16 ${
              activeService?.id === service.id ? "scroll-mt-16" : ""
            }`}
          >
            <h1 className="text-3xl font-bold mb-6">{service.title}</h1>
            <p className="text-gray-700 mb-4">{service.content}</p>
            <div className="bg-gray-200 w-full aspect-video mt-8"></div>

            {service.subItems?.map((subItem) => (
              <div
                key={subItem.id}
                id={subItem.id}
                className={`mt-12 ${
                  activeService?.id === subItem.id ? "scroll-mt-16" : ""
                }`}
              >
                <h2 className="text-2xl font-bold mb-4">{subItem.title}</h2>
                <p className="text-gray-700">{subItem.content}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesLayout;
