"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../Button";

export interface SliderTab {
  id: number;
  tabTitle: string;
  heading: string;
  description: string; // This contains HTML string with <ul><li> elements
}

interface SliderSectionProps {
  sliderSectionTitle: string;
  sliderTabs: SliderTab[];
}

const SliderSection = ({
  sliderSectionTitle,
  sliderTabs,
}: SliderSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderTabs.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + sliderTabs.length) % sliderTabs.length
    );
  };

  // Split the title into parts based on <span> tags
  const titleParts = sliderSectionTitle.split(/<span>|<\/span>/);

  return (
    <div className="w-full border-b border-black/30">
      {/* Top Heading Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between flex-wrap gap-6">
          <h2 className="font-normal max-w-2xl whitespace-break-spaces">
            {titleParts.map((part, index) =>
              index % 2 === 0 ? (
                <span key={index}>{part}</span>
              ) : (
                <span key={index} className="font-bold">
                  {part}
                </span>
              )
            )}
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
          <div className="flex items-center justify-start w-full flex-wrap gap-6">
            {/* Tab Buttons */}
            <div className="flex items-center gap-4 sm:gap-8 w-full sm:w-auto flex-wrap">
              {sliderTabs.map((slide, index) => (
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
                  {slide.tabTitle}
                </button>
              ))}
            </div>

            {/* Navigation Arrows */}
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
            {sliderTabs.map((slide) => (
              <div key={slide.id} className="w-full flex-shrink-0 sm:pr-8">
                <div className="flex flex-col sm:flex-row rounded-3xl overflow-hidden border border-purple-900">
                  {/* Content */}
                  <div className="w-full sm:w-1/2 p-6 sm:p-16">
                    <h2 className="font-bold mb-8">{slide.heading}</h2>
                    <div
                      className="space-y-4 [&>ul]:list-disc [&>ul]:pl-4"
                      dangerouslySetInnerHTML={{ __html: slide.description }}
                    />
                    <Button
                      variant="primary"
                      title="Know More"
                      className="mt-8 !bg-purple-900 [&>span]:!text-white"
                    />
                  </div>
                  {/* Image */}
                  <div className="w-full sm:w-1/2">
                    <img
                      src="/slide-img-aero.jpg" // You might want to add this to Strapi
                      alt={`${slide.tabTitle} screenshot`}
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
