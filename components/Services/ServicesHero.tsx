import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button";

const contactUrl = process.env.NEXT_PUBLIC_CONTACT_URL;

const services = [
  {
    icon: "/airplane.png",
    title: "Aircraft Asset Management",
    description:
      "Simplify your operations with our seamless management services",
    href: "/services/asset-management",
  },
  {
    icon: "/report.png",
    title: "Record Digitalization",
    description:
      "Simplify your operations with our seamless management services",
    href: "/services/record-digitalization",
  },
  {
    icon: "",
    title: "Digital Solutions",
    description:
      "Simplify your operations with our seamless management services",
    href: "/services/digital-solutions",
  },
];

export default function ServicesHero() {
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
                <Link href={contactUrl as string}>
                  <Button variant="primary" title="Let's Talk" size="lg" />
                </Link>
                {/* <Button variant="outline" title="Know our services" size="lg" /> */}
              </div>
            </div>
          </div>

          {/* Right Column - Service Cards */}
          <div className="relative -mx-4">
            {/* Full-width background */}
            <div className="absolute inset-0" />

            <div className="relative grid grid-rows-3 h-full">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="relative bg-white hover:bg-gray-50 transition-colors"
                >
                  {/* Extended background */}
                  <div className="absolute inset-0 bg-inherit border border-black/30" />

                  {/* Contained content */}
                  <div className="relative h-full px-4">
                    <div className="h-full p-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
                      <div className="flex flex-col gap-2">
                        {service.icon ? (
                          <img src={service.icon} alt="" className="w-12" />
                        ) : (
                          <div></div>
                        )}
                        <p className="text-txt-body">{service.description}</p>
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
