"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Import icons
import { Button } from "../Button";
import Link from "next/link";

interface HeroProps {
  heroHeading: string;
  heroDescription: string;
  heroImages: Array<{
    url: string;
    alt?: string;
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
    }, 5000); // Change image every 5 seconds

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
    <section className="relative flex w-full h-[720px] items-center overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.url}
            alt={image.alt || "Hero background"}
            fill
            className="object-cover"
            priority={index === 0}
            // sizes="100vw"
          />
        </div>
      ))}

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/40" /> */}

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
      <div className="container absolute bottom-16 left-1/2 -translate-x-1/2  z-10  px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* <h1 className="text-h1 text-white mb-6">
            {headingParts.map((part, index) =>
              index % 2 === 0 ? (
                <span key={index} className="font-normal">
                  {part}
                </span>
              ) : (
                <>
                  <span key={index} className="font-bold">
                    {part}
                  </span>
                  <br />
                </>
              )
            )}
          </h1> */}
          {/* <p className="text-xl text-white/90 mb-8">{heroDescription}</p> */}
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
