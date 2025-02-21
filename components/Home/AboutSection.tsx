import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { StrapiImage } from "@/types/strapi";

interface AboutSectionProps {
  className?: string;
  aboutSectionHeading: string;
  aboutSectionDescription: string;
  aboutSectionImage: StrapiImage;
}

const AboutSection = ({
  className,
  aboutSectionHeading,
  aboutSectionDescription,
  aboutSectionImage,
}: AboutSectionProps) => {
  return (
    <section
      className={cn("relative w-full scroll-mt-20", className)}
      id="about"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Left Column - Image with gradient overlay */}
        <div className="relative w-full lg:w-[40%] aspect-[4/3]">
          {/* Base dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-19% to-black/65 to-65% z-10" />
          <Image
            src={aboutSectionImage.url}
            alt={aboutSectionImage.alternativeText || aboutSectionImage.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
            // Use smaller format for better performance on mobile
            blurDataURL={aboutSectionImage.formats?.small?.url}
          />
          <h3 className="absolute bottom-8 left-8 text-white z-20 max-w-[80%] font-medium">
            {aboutSectionHeading}
          </h3>
        </div>

        {/* Right Column - Description and watermark */}
        <div className="relative flex-1 sm:px-4 lg:px-16 pt-8 lg:pt-16">
          <div className="container mx-auto relative h-full">
            {/* Description text with higher z-index */}
            <div className="relative z-10 mb-24 lg:mb-32">
              <p className="text-gray-600 text-lg md:text-xl lg:text-2xl text-justify">
                {aboutSectionDescription}
              </p>
            </div>

            {/* Watermark text */}
            <div className="absolute bottom-0 left-0 select-none pointer-events-none">
              <span className="font-heading font-bold text-[60px] sm:text-[80px] md:text-[120px] lg:text-[180px] text-gray-100 leading-none whitespace-nowrap block">
                About us
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
