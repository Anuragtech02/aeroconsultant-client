import React from "react";
import { Button } from "../Button";
import { IServicePageResponse } from "@/types/strapi";

type Props = { camoServices: IServicePageResponse["data"]["camoServices"] };

const CamoServices: React.FC<Props> = ({ camoServices }) => {
  const { title, subTitle, logoList, upperDescription, benefitsList, image } =
    camoServices;

  const servicesList = subTitle.split(",").map((service) => service.trim());
  return (
    <section id="camo-services">
      <div className="py-10 lg:py-24 bg-aero-primary">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="text-white">
            <h2 className="text-4xl xl:text-6xl lg:max-w-[250px] font-bold">
              {title}
            </h2>
            <div className="flex max-w-full sm:max-w-[300px] lg:max-w-[400px] xl:max-w-[800px] flex-wrap gap-4 mt-2">
              {servicesList?.map((service) => (
                <div key={service} className="border p-2 rounded-xl bg-white">
                  <p className="text-sm text-black">{service}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col lg:items-end gap-2">
            <p className="text-gray-200 text-xl">Approvals Available for</p>
            <div className="flex items-center flex-wrap justify-betweeen gap-4 bg-white rounded-xl w-full sm:w-[450px] p-4">
              {/* <img
                src="/easa-logo.png"
                alt="CAMO Approvals"
                className="flex-1 max-w-[30%] w-full"
              />
              <img
                src="/2reg.webp"
                alt="2Reg"
                className="flex-1 max-w-[30%] w-full"
              />
              <img
                src="/caa-logo.png"
                alt="CAMO Approvals"
                className="flex-1 max-w-[30%] w-full"
              /> */}
              {logoList?.map((logo) => (
                <img
                  key={logo.url}
                  src={logo.url}
                  alt={logo.alternativeText || ""}
                  className="flex-1 max-w-[30%] w-full"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 container mx-auto text-gray-600">
        <p
          className="text-xl"
          dangerouslySetInnerHTML={{ __html: upperDescription }}
        ></p>
        <div className="pt-10 pb-10 lg:pb-0 [&>div]:flex-1 flex flex-col sm:flex-row gap-12 justify-between items-start">
          <div>
            <img
              src={image.url}
              alt={image.alternativeText || ""}
              className="h-[500px] object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-black">CAMO Services Benefits</h4>
            <div
              className="[&>ul]:pl-8 [&>ul]:list-disc [&>ul]:text-xl"
              dangerouslySetInnerHTML={{ __html: benefitsList }}
            ></div>
            <div className="pb-2">
              <Button
                type="button"
                title="Contact Now"
                variant="secondary"
                className="[&>span]:text-black max-w-[250px] mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CamoServices;
