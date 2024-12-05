import React from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: {
    url: string;
    alt: string;
  };
}

interface TeamSectionProps {
  title: string;
  description: string;
  members: TeamMember[];
}

const TeamSection = ({
  title = "Meet our Team",
  description = "Bringing together a diverse set of voices with new technology, we collaborate closely, ideate freely and swiftly apply breakthrough innovations that drive big impact.",
  members = [
    {
      name: "Neha Mishra",
      role: "CEO/CTO",
      image: {
        url: "/neha.jpg",
        alt: "Neha Mishra",
      },
    },
    {
      name: "Rohit Kumar",
      role: "CCO",
      image: {
        url: "/rohit.jpg",
        alt: "Rohit Kumar",
      },
    },
    {
      name: "Kunal Sabharwal",
      role: "COO",
      image: {
        url: "/kunal.jpg",
        alt: "Kunal Sabharwal",
      },
    },
    {
      name: "Akash Mishra",
      role: "CMO",
      image: {
        url: "/akash.jpg",
        alt: "Akash Mishra",
      },
    },
    {
      name: "Lakshya Mishra",
      role: "COS",
      image: {
        url: "/lakshya.jpg",
        alt: "Lakshya Mishra",
      },
    },
  ],
}: TeamSectionProps) => {
  return (
    <section className="pt-24 bg-white">
      <div className="container mx-auto px-4 mb-16">
        {/* Header */}
        <div className="flex justify-between items-center flex-wrap gap-8">
          <h2 className="text-5xl font-proxima font-normal">{title}</h2>
          <p className="text-txt-body leading-relaxed max-w-[500px]">
            {description}
          </p>
        </div>
      </div>

      {/* Team Members Grid - Full width */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {members.map((member) => (
          <div key={member.name} className="group relative overflow-hidden">
            {/* Image Container */}
            <div className="aspect-square sm:aspect-[4/5] relative overflow-hidden bg-gray-100">
              <Image
                src={member.image.url}
                alt={member.image.alt}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              {/* Full overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/90" />
            </div>

            {/* Text content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-semibold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-white/80 text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
