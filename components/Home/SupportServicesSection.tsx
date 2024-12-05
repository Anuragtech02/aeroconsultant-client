import React from "react";
import { Laptop, Search, FolderOpen } from "lucide-react";

interface SupportCardProps {
  title: string;
  icon: React.ReactNode;
}

const SupportCard = ({ title, icon }: SupportCardProps) => {
  return (
    <div className="border border-black p-2 h-[200px] flex flex-col justify-between">
      <div className="mb-6">{icon}</div>
      <h4 className="font-normal">{title}</h4>
    </div>
  );
};

const SupportSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start justify-between gap-16">
          <div className="w-full sm:text-right">
            <h2 className="font-normal">
              From <span className="font-bold">Review to Digital</span>
            </h2>
            <h2 className="font-normal">We have got you covered</h2>
          </div>
          {/* Left side - Services Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SupportCard
              title="Record Digitalization Support"
              icon={<Laptop className="w-8 h-8 stroke-[1.5]" />}
            />
            <SupportCard
              title="Record Review Support"
              icon={<Search className="w-8 h-8 stroke-[1.5]" />}
            />
            <SupportCard
              title="Record Management Support"
              icon={<FolderOpen className="w-8 h-8 stroke-[1.5]" />}
            />
          </div>

          {/* Right side - Text */}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
