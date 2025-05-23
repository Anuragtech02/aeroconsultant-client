import React from "react";
import { Button } from "../Button";
import { IServicePageResponse } from "@/types/strapi";
import Link from "next/link";

type Props = {
  recordDigitization: IServicePageResponse["data"]["recordDigitization"];
};

const RecordDigitization: React.FC<Props> = ({ recordDigitization }) => {
  const {
    title,
    highlightImage,
    helpDescription,
    shortDescription,
    leftImage,
    logoList,
  } = recordDigitization;

  return (
    <section id="record-digitalization">
      <div className="bg-aero-primary">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-stretch gap-8">
          <div className="text-white flex-1 py-8 lg:py-28">
            <h2 className="text-4xl xl:text-6xl max-w-[450px] font-bold">
              {title}
            </h2>
          </div>
          <div className="flex-1 flex justify-center pt-10">
            <img
              src={highlightImage.url}
              alt={highlightImage.alternativeText || "Record Digitization"}
              className="h-full lg:max-w-[400px] rounded-t-[50px] object-cover"
            />
          </div>
        </div>
      </div>
      <div className="pt-8 container mx-auto text-gray-600">
        <p
          className="custom-render text-xl"
          dangerouslySetInnerHTML={{
            __html: shortDescription,
          }}
        ></p>
        <div className="pt-10 pb-10 lg:pb-4 [&>div]:flex-1 flex flex-col lg:flex-row gap-12 justify-between items-start">
          <div>
            <img
              src={leftImage.url}
              alt={leftImage.alternativeText || "Record Digitization"}
              className="h-[400px] lg:max-w-[400px] rounded-[50px] object-cover"
            />
          </div>
          <div className="flex flex-col gap-8">
            <h4 className="font-bold text-black">How do we help?</h4>
            <div
              dangerouslySetInnerHTML={{
                __html: helpDescription,
              }}
              className="custom-render [&>ul]:pl-8 [&>ul]:list-disc [&>ul]:text-xl"
            ></div>
            <div className="flex justify-start flex-wrap w-max items-center gap-4 p-4 rounded-xl border border-black">
              {/* <img
                src="/iron-mountain.png"
                alt="iron-mountain"
                className="h-[40px] xl:h-[60px]"
              /> */}
              {logoList.map((logo) => (
                <img
                  key={logo.id}
                  src={logo.url}
                  alt={logo.alternativeText || "logo"}
                  className="max-w-[100px]"
                />
              ))}
            </div>
            <div className="pb-2">
              <Link href="/#contact">
                <Button
                  type="button"
                  title="Contact Us Now"
                  variant="secondary"
                  className="[&>span]:text-black max-w-[250px] mt-4"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecordDigitization;
