// components/hero.tsx
import React from "react";
import { Button } from "../Button";
import Link from "next/link";

// components/sections/Hero.tsx
interface HeroProps {
  heroHeading: string;
  heroDescription: string;
  heroBGVideo: {
    url: string;
  };
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
  heroBGVideo,
  heroCTAList,
}: HeroProps) {
  const headingParts = heroHeading.split(/<span>|<\/span>/);
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroBGVideo.url} type="video/mp4" />
      </video>

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
          {/* <h1 className="text-h1 text-white mb-6">
            <span className="font-normal">Aviation made</span>
            <br />
            <span className="font-bold">Seamless</span>
          </h1> */}
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
