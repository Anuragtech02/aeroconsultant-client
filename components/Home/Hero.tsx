"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../Button";
import Link from "next/link";
import Image from "next/image";

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

export function Hero({
  heroHeading,
  heroDescription,
  heroImages,
  heroCTAList,
}: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const headingParts = heroHeading.split(/<span>|<\/span>/);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.url}
            alt={image.alt || "Hero background"}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-h1 text-white mb-6">
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
          </h1>
          <p className="text-xl text-white/90 mb-8">{heroDescription}</p>
          <div className="flex flex-wrap gap-4">
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
