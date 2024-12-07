import React from "react";
import { Search, FolderOpen } from "lucide-react";

interface SupportCardProps {
  title: string;
  icon: React.ReactNode;
  description?: string;
}

const SupportCard = ({ title, icon, description }: SupportCardProps) => {
  return (
    <div className="border border-black p-2 h-[200px] flex flex-col justify-between">
      <div className="mb-6">{icon}</div>
      <div>
        <h4 className="font-normal">{title}</h4>
        {description && <p className="text-txt-body text-sm">{description}</p>}
      </div>
    </div>
  );
};

const ProductsSupportSection = () => {
  return (
    <section className="py-16 border-b border-black/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start justify-between gap-16">
          {/* Left side - Services Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SupportCard
              title="Camo Services"
              description="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis"
              icon={
                <img
                  alt="camo-service"
                  src="/camo-service.png"
                  className="w-30 object-contain"
                />
              }
            />
            <SupportCard
              title="Record Review Support"
              icon={<Search className="w-8 h-8 stroke-[1.5]" />}
            />
            <SupportCard
              title="Record Digitalization & Management Support"
              icon={<FolderOpen className="w-8 h-8 stroke-[1.5]" />}
            />
          </div>

          {/* Right side - Text */}
        </div>
      </div>
    </section>
  );
};

export default ProductsSupportSection;
