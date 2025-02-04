import Image from "next/image";
import React from "react";
import { Button } from "../Button";

const CamoServices = () => {
  return (
    <section id="camo-services">
      <div className="py-10 lg:py-24 bg-aero-primary">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-start gap-8">
          <div className="text-white">
            <h2 className="text-4xl xl:text-6xl lg:max-w-[250px] font-bold">
              CAMO Services
            </h2>
            <p className="text-xl max-w-[200px] mt-4">
              Ensure airplane airworthiness during transitions
            </p>
          </div>
          <div className="flex flex-col lg:items-end gap-2">
            <p className="text-gray-200 text-xl">Approvals Available for</p>
            <div className="flex items-center justify-betweeen gap-8 bg-white rounded-xl max-w-[300px] p-4">
              <Image
                src="/easa-logo.png"
                alt="CAMO Approvals"
                width={500}
                height={500}
                className="object-cover"
              />
              <Image
                src="/caa-logo.png"
                alt="CAMO Approvals"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 container mx-auto text-gray-600">
        <p className="text-xl">
          Our CAMO Services provides continuing airworthiness management and
          review activities to help streamline the lease transition process. You
          can rely on the broad resources of Boeing to help simplify complex
          technical requirements. Our services include permit to fly an aircraft
          under its controlled environment, and we can provide airworthiness
          review certificate (ARC) recommendations for any aircraft under its
          scope.
        </p>
        <div className="pt-10 pb-10 lg:pb-0 [&>div]:flex-1 flex flex-col sm:flex-row gap-12 justify-between items-start">
          <div>
            <img
              src="/slide-img-aero.jpg"
              alt="CAMO Approvals"
              className="h-[500px] object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-black">CAMO Services Benefits</h4>
            <ul className="pl-8 list-disc text-xl">
              <li>
                Leverage our expertise in continuing airworthiness management
                and tailored review activities for seamless leasing transitions.
              </li>
              <li>
                Ensure full compliance with regulatory requirements across
                multiple jurisdictions.
              </li>
              <li>
                Choose between our comprehensive turnkey solutions or targeted
                support for specific leasing tasks.
              </li>
              <li>
                Take advantage of our cost-effective pricing tailored to your
                needs.
              </li>
              <li>
                Minimize risks with CAMO services backed by the engineering and
                technical proficiency of the Aeroconsultant team.
              </li>
            </ul>
            <Button
              type="button"
              title="Contact Sales Now"
              variant="secondary"
              className="[&>span]:text-black max-w-[250px] mt-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CamoServices;
