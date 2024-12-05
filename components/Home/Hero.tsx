// components/hero.tsx
import React from "react";
import type { HeroSection } from "@/types/home";
import { Button } from "../Button";

interface HeroProps {
  data: HeroSection;
}

const Hero = ({}: HeroProps) => {
  return (
    <section className="relative w-full h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* <Image
          src={data.backgroundImage.data.attributes.url}
          alt={data.backgroundImage.data.attributes.alt}
          width={data.backgroundImage.data.attributes.width}
          height={data.backgroundImage.data.attributes.height}
          className="w-full h-full object-cover"
          priority
        /> */}
        <video
          autoPlay
          muted
          loop
          src="/hero-bg.mp4"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-4 md:px-8">
        <div className="max-w-3xl">
          <h1 className="text-h1 text-white mb-6">
            <span className="font-normal">Aviation made</span>
            <br />
            <span className="font-bold">Seamless</span>
          </h1>
          <p className="text-h5 font-normal text-gray-200 mb-10 max-w-2xl">
            Global Transition, Expert CAMO &<br />
            Next-Gen Digital solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button title="Let's Talk" variant="primary" link="/contact" />
            <Button
              title="Know our services"
              variant="outline"
              link="/services"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
