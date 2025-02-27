import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  href: string;
  imageUrl: string;
  className?: string;
}

const ServiceCard = ({
  title,
  href,
  imageUrl,
  className,
}: ServiceCardProps) => {
  return (
    <Link
      href={href}
      className={cn(
        `group relative aspect-square sm:aspect-[3/4] overflow-hidden ${href}`,
        className
      )}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-19% to-black/65 to-65% z-10" />

      {/* Image */}
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Content */}
      <div className="absolute bottom-8 inset-x-0 z-20 text-center px-4">
        {/* Service text with underline - moves up first */}
        <span className="inline-block text-white/70 text-sm mb-2 font-medium relative transform-gpu transition-all duration-300 ease-out group-hover:-translate-y-1">
          service
          <span className="absolute -bottom-1 left-0 right-0 h-px bg-white/70"></span>
        </span>

        {/* Title - moves up with delay */}
        <h4 className="text-white font-bold transform-gpu transition-all duration-300 ease-out delay-[150ms] group-hover:-translate-y-1">
          {title}
        </h4>
      </div>
    </Link>
  );
};

export default ServiceCard;
