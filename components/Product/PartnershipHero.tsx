import Image from "next/image";
import React from "react";
import { Button } from "../Button";

const PartnershipHero = () => {
  return (
    <div className="w-full mt-36 container">
      <div className="bg-[#B00DFF] rounded-[40px] overflow-hidden">
        {/* Main hero container */}
        <div className="flex flex-col md:flex-row rounded-[40px] overflow-hidden">
          {/* Left side - dark blue section */}
          <div className="w-full md:w-1/2 bg-gradient-to-b from-[#001A78] to-black p-8 sm:p-16">
            <h1 className=" md:text-6xl font-semibold text-white leading-tight mb-12">
              Transforming Aviation Records with Digital Efficiency
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button title="Let's Talk" />
              <Button title="About Partnernship" variant="outline" />
            </div>
          </div>

          {/* Right side - light blue section */}
          <div className="w-full md:w-1/2 bg-[#E6F4FF] p-8 sm:p-16 flex flex-col justify-center items-center space-y-6 sm:space-y-16">
            {/* Iron Mountain logo */}
            <div className="w-full max-w-sm">
              <Image
                src="/iron-mountain-big.png"
                width={400}
                height={200}
                alt="iron-mountain"
              />
            </div>

            {/* Divider line */}
            <div className="w-full h-px bg-black" />

            {/* AeroConsultant logo */}
            <div className="w-full max-w-sm">
              <div className="flex items-center gap-4">
                <Image
                  src="/aero-consultant-bg.png"
                  width={400}
                  height={200}
                  alt="iron-mountain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Purple banner section */}
        <div className="py-8 px-4 sm:px-16">
          <p className="text-white text-2xl font-semibold leading-relaxed">
            Say goodbye to missing documents, compliance headaches, and
            operational inefficiencies. Our partnership ensures seamless,
            secure, and structured aviation record management, aligned with IATA
            standards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartnershipHero;
