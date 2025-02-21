import React from "react";
import { Shield, DollarSign, FileText, Key } from "lucide-react";

const BenefitsSection = () => {
  return (
    <div className="w-full container my-[50px] flex flex-col md:flex-row gap-6">
      {/* Left side - Aircraft Image */}
      <div className="w-full md:w-1/3 h-[400px] md:h-auto relative rounded-3xl overflow-hidden">
        <img
          src="/aeroplane.png"
          alt="Aircraft in hangar"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        {/* Text overlay */}
        <div className="absolute bottom-12 left-12">
          <h2 className="text-white text-6xl font-semibold leading-tight">
            The
            <br />
            Benefits
          </h2>
        </div>
      </div>

      {/* Right side - Benefits Grid */}
      <div className="w-full md:w-2/3 bg-[#000C35] rounded-3xl overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
          {/* Cost Savings */}
          <div className="p-12 border-b border-r border-white/10">
            <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white text-3xl font-semibold mb-4">
              Cost Savings
            </h3>
            <p className="text-white/70 text-lg leading-relaxed">
              Reduce upto 30% operational expenses by digitizing aviation
              records at scale
            </p>
          </div>

          {/* Regulatory Compliance */}
          <div className="p-12 border-b border-white/10">
            <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white text-3xl font-semibold mb-4">
              Regulatory Compliance
            </h3>
            <p className="text-white/70 text-lg leading-relaxed">
              Stay audit-ready with structured, IATA-compliant documentation.
            </p>
          </div>

          {/* Security & Risk Reduction */}
          <div className="p-12 border-r border-white/10">
            <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white text-3xl font-semibold mb-4">
              Security & Risk Reduction
            </h3>
            <p className="text-white/70 text-lg leading-relaxed">
              Protect critical records with world-class secure storage
            </p>
          </div>

          {/* Seamless Access & Workflow */}
          <div className="p-12">
            <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
              <Key className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white text-3xl font-semibold mb-4">
              Seamless Access
              <br />& Workflow
            </h3>
            <p className="text-white/70 text-lg leading-relaxed">
              Retrieve and manage aviation documents anytime, anywhere
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
