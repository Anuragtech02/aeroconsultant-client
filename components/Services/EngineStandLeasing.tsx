import React from "react";
import { Button } from "../Button";
import Link from "next/link";

const EngineStandLeasing = () => {
  return (
    <section className="pb-8" id="engine-stand-leasing">
      <div className="bg-aero-primary">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-stretch gap-8">
          <div className="flex-1 flex justify-start pt-10">
            <div className="h-full lg:max-w-[400px] flex flex-col items-start gap-4 justify-center rounded-t-[50px] bg-white">
              <img
                src="/home/hero-1.webp"
                alt="aerooil"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="text-white flex-1 py-8 lg:py-28 flex lg:justify-end">
            <h2 className="text-4xl xl:text-6xl lg:max-w-[300px] font-bold">
              Engine Stand Leasing
            </h2>
          </div>
        </div>
      </div>
      <div className="pt-8 container mx-auto text-gray-600">
        <div className="pt-10 [&>div]:flex-1 flex flex-col-reverse sm:flex-row gap-12 justify-between items-stretch">
          <div className="flex flex-col gap-4">
            <p className="text-xl">
              Real-Time Monitoring: Dynamic dashboard for tracking open items,
              pending tasks, and progress during lease transitions. <br />
              <br /> Daily Activity Tracking: Stay updated on task statuses to
              meet timelines and avoid oversights. <br />
              <br />
              Traceability: Track user activities and comments for
              accountability and issue resolution. <br />
              <br />
              Open Item Alerts: Receive real-time notifications for critical
              tasks requiring immediate action. <br />
              <br />
              Linked Photos/Docs: Attach relevant files to open items for
              efficient issue resolution. <br />
              <br />
              AeroBOX Integration: Seamlessly connect with AeroBOX for enhanced
              workflows and data sharing.
              <br />
              <br /> Granular Access Control: Manage user permissions for secure
              data handling and task delegation.
              <br />
              <br />
              Intuitive Dashboard: Simplified interface for easy navigation and
              faster task management.
            </p>
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
              src="/services/aerooil.webp"
              alt="CAMO Approvals"
              className="h-full lg:max-w-[400px] w-full rounded-xl sm:rounded-t-[50px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineStandLeasing;
