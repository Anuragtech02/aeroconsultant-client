import React from "react";
import { Button } from "../Button";
import Link from "next/link";
import { IServicePageResponse } from "@/types/strapi";

type Props = {
  aerooil: IServicePageResponse["data"]["aerooil"];
};

const Aerooil: React.FC<Props> = ({ aerooil }) => {
  return (
    <section className="pb-8" id="aerooil">
      <div className="bg-aero-primary">
        <div className="container mx-auto flex flex-col-reverse sm:flex-row justify-between items-stretch gap-8">
          <div className="flex-1 flex justify-start pt-10">
            <div className="h-full lg:max-w-[400px] flex flex-col items-start gap-4 justify-center rounded-t-[50px] bg-white p-4">
              <img
                src="/aerooil-logo.png"
                alt="aerooil"
                className="object-cover"
              />
              <h3 className="font-bold">{aerooil?.subTitle}</h3>
            </div>
          </div>
          <div className="text-white flex-1 py-8 lg:py-28 flex lg:justify-end">
            <h2 className="text-4xl xl:text-6xl lg:max-w-[300px] font-bold">
              {aerooil?.title}
            </h2>
          </div>
        </div>
      </div>
      <div className="pt-8 container mx-auto text-gray-600">
        <div className="pt-10 [&>div]:flex-1 flex flex-col-reverse sm:flex-row gap-12 justify-between items-stretch">
          <div className="flex flex-col gap-4">
            <div
              dangerouslySetInnerHTML={{
                __html: aerooil?.description,
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
          <div className="flex sm:justify-end">
            <img
              src={
                aerooil?.rightImage?.formats?.medium?.url ||
                aerooil?.rightImage?.url
              }
              alt="CAMO Approvals"
              className="h-full lg:max-w-[400px] w-full rounded-xl sm:rounded-t-[50px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aerooil;
