import React from "react";
import { Button } from "../Button";
import { IServicePageResponse } from "@/types/strapi";
import Link from "next/link";

type Props = {
  recordReview: IServicePageResponse["data"]["recordReview"];
};

const RecordReviewSupport: React.FC<Props> = ({ recordReview }) => {
  const {
    title,
    subTitle,
    highlightImage,
    leftImage,
    shortDescription,
    helpPoints,
  } = recordReview;

  return (
    <section id="record-review-support">
      <div className="bg-aero-primary">
        <div className="container pt-8 lg:pt-0 mx-auto h-[450px] flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="text-white flex-1">
            <h2 className="text-4xl xl:text-6xl max-w-[450px] font-bold">
              {title}
            </h2>
            <p className="text-xl max-w-[350px] mt-4">{subTitle}</p>
          </div>
          <div className="flex-1 h-full">
            <img
              src={highlightImage.url}
              alt={title}
              className="h-full max-h-[200px] md:max-h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="pt-8 container mx-auto text-gray-600">
        <p
          className="text-xl"
          dangerouslySetInnerHTML={{ __html: shortDescription }}
        ></p>
        <div className="pt-10 [&>div]:flex-1 flex flex-col sm:flex-row gap-12 justify-between items-start">
          <div>
            <img
              src={leftImage.url}
              alt={title}
              className="h-[300px] object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-black">How do we help?</h4>
            {/* <ul className="pl-8 list-disc text-xl">
              <li>Comprehensive Record Audits</li>
              <li>Seamless Aircraft Transitions</li>
              <li>Regulatory Expertise</li>
              <li>Gap Analysis & Reduction</li>
              <li>Tailored Solution</li>
            </ul> */}
            <div
              dangerouslySetInnerHTML={{
                __html: helpPoints,
              }}
              className="[&>ul]:pl-8 [&>ul]:list-disc [&>ul]:text-xl"
            ></div>
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

export default RecordReviewSupport;
