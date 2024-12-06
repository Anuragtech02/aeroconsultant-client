"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react"; // Changed to longer arrows
import { Button } from "../Button";

const slides = [
  {
    id: "aerobox",
    title: "AeroBox",
    features: [
      "IATA ABC Folder Structure",
      "Automatic OCR",
      "Automatic Report Generation",
      "AI Powered Search",
      "Secured Dashboard",
    ],
    heading: "Records Storage Systems",
    image: "/slide-img-aero.jpg",
  },
  {
    id: "aeroops",
    title: "AeroOPs",
    features: [
      "Flight Planning",
      "Crew Management",
      "Maintenance Tracking",
      "Real-time Monitoring",
      "Performance Analytics",
    ],
    heading: "Operations Management",
    image: "/slide-img-aero.jpg",
  },
  {
    id: "aerooil",
    title: "AeroOIL",
    features: [
      "Fuel Efficiency Tracking",
      "Cost Management",
      "Supply Chain Integration",
      "Usage Analytics",
      "Environmental Reporting",
    ],
    heading: "Oil & Fuel Management",
    image: "/slide-img-aero.jpg",
  },
];

const SliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full border-b border-black/30">
      {/* Top Heading Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between flex-wrap gap-6">
          <h2 className="font-normal max-w-2xl whitespace-break-spaces">
            The <span className="font-bold">Full Stack Solution</span> for your
            Hassle-free aircraft requirements
          </h2>
          <Button
            variant="outline"
            title="Get Your Demo Now"
            link="/contact"
            className="[&>span]:!text-gray-900 !border-black"
          />
        </div>
      </div>

      {/* Slider Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="flex items-center">
          {/* Product Navigation with Arrows */}
          <div className="flex items-center justify-start w-full flex-wrap gap-6">
            {/* Tab Buttons */}
            <div className="flex items-center gap-4 sm:gap-8 w-full sm:w-auto flex-wrap">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(index)}
                  className={cn(
                    "py-2 px-8 rounded-full text-lg font-medium transition-all",
                    currentSlide === index
                      ? "bg-purple-900 text-white"
                      : "text-gray-600 hover:text-white hover:bg-purple-900"
                  )}
                >
                  {slide.title}
                </button>
              ))}
            </div>

            {/* Navigation Arrows - Now positioned right after the tabs */}
            <div className="flex items-center gap-4 sm:ml-8">
              <button
                onClick={prevSlide}
                className="px-6 py-2 flex items-center justify-center rounded-full border border-black hover:bg-gray-100"
                aria-label="Previous slide"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="px-6 py-2 flex items-center justify-center rounded-full border border-black hover:bg-gray-100"
                aria-label="Next slide"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Slider Cards */}
        <div className="relative mt-8 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="w-full flex-shrink-0 sm:pr-8">
                <div className="flex flex-col sm:flex-row rounded-3xl overflow-hidden border border-purple-900">
                  {/* Content */}
                  <div className="w-full sm:w-1/2 p-6 sm:p-16">
                    <h2 className="font-bold mb-8">{slide.heading}</h2>
                    <ul className="space-y-4">
                      {slide.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-600">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="primary"
                      title="Know More"
                      className="mt-8 !bg-purple-900 [&>span]:!text-white"
                    />
                  </div>
                  {/* Image */}
                  <div className="w-full sm:w-1/2">
                    <img
                      src={slide.image}
                      alt={`${slide.title} screenshot`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
