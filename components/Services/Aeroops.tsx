import React from "react";
import { Button } from "../Button";
import Link from "next/link";
import { IServicePageResponse } from "@/types/strapi";

type Props = {
  aeroops: IServicePageResponse["data"]["aeroops"];
};

const Aeroops: React.FC<Props> = ({ aeroops }) => {
  return (
    <section id="aeroops">
      <div className="bg-aero-primary">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-stretch gap-8">
          <div className="flex-1 flex justify-start pt-10">
            <div className="h-full max-w-[400px] flex flex-col items-start gap-4 justify-center rounded-t-[50px] bg-white p-4">
              <img
                src="/aeroops-logo.png"
                alt="aeroops"
                className="object-cover"
              />
              <h3 className="font-bold">{aeroops?.subTitle}</h3>
            </div>
          </div>
          <div className="text-white flex-1 py-8 lg:py-28 flex justify-end">
            <h2 className="text-4xl xl:text-6xl lg:max-w-[300px] font-bold">
              {aeroops?.title}
            </h2>
          </div>
        </div>
      </div>
      <div className="pt-8 container mx-auto text-gray-600">
        <div className="pt-10 pb-10 lg:pb-0 [&>div]:flex-1 flex flex-col sm:flex-row gap-12 justify-between items-start">
          <div className="flex flex-col gap-4">
            <div
              dangerouslySetInnerHTML={{
                __html: aeroops?.description,
              }}
            ></div>
            <div className="pb-2">
              <Link href="/#contact">
                <Button
                  type="button"
                  title="Contact Now"
                  variant="secondary"
                  className="[&>span]:text-black max-w-[250px] mt-4"
                />
              </Link>
            </div>
          </div>
          <div className="flex justify-center sm:justify-end pb-4">
            <img
              src={
                aeroops?.rightImage?.formats?.medium?.url ||
                aeroops?.rightImage?.url
              }
              alt="Aeroops"
              className="h-[400px] lg:max-w-[400px] w-full rounded-[50px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aeroops;
