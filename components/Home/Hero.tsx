"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Button } from "../Button";
import Link from "next/link";
import { StrapiImage } from "@/types/strapi";

interface HeroProps {
  heroHeading: string;
  heroDescription: string;
  heroImages: Array<{
    desktopImage: StrapiImage;
    mobileImage: StrapiImage;
  }>;
  heroCTAList: Array<{
    id: number;
    title: string;
    link: string;
    iconPosition: string | null;
    variant: "primary" | "outline";
  }>;
}

export function Hero({ heroImages, heroCTAList }: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="relative w-full mt-24">
      {/* Background Images */}
      <div className="relative w-full">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`w-full transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex
                ? "opacity-100"
                : "opacity-0 absolute inset-0"
            }`}
          >
            {/* Desktop Image */}
            <div className="relative w-full hidden sm:block aspect-[16/9]">
              <Image
                src={image.desktopImage.url}
                alt={image.desktopImage.alternativeText || "Hero background"}
                fill
                className="object-contain"
                priority={index === 0}
                sizes="100vw"
              />
            </div>
            {/* Mobile Image */}
            <div className="relative w-full block sm:hidden aspect-[4/3]">
              <Image
                src={image.mobileImage.url}
                alt={image.mobileImage.alternativeText || "Hero background"}
                fill
                className="object-contain"
                priority={index === 0}
                sizes="100vw"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute hidden inset-y-0 left-0 z-20 sm:flex px-4 items-center justify-center">
        <button
          onClick={goToPreviousImage}
          className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full focus:outline-none"
          aria-label="Previous Slide"
        >
          <FiChevronLeft className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute hidden inset-y-0 right-0 z-20 px-4 sm:flex items-center justify-center">
        <button
          onClick={goToNextImage}
          className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full focus:outline-none"
          aria-label="Next Slide"
        >
          <FiChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Content */}
      <div className="absolute bottom-44 left-1/2 -translate-x-1/2 z-10 w-full px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-4">
            {heroCTAList.map((cta) => (
              <Link key={cta.id} href={cta.link}>
                <Button title={cta.title} variant={cta.variant} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
