import React from "react";

const Aeroops = () => {
  return (
    <section>
      <div className="bg-aero-primary">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-stretch gap-8">
          <div className="flex-1 flex justify-start pt-10">
            <div className="h-full max-w-[400px] flex flex-col items-start gap-4 justify-center rounded-t-[50px] bg-white p-4">
              <img
                src="/aeroops-logo.png"
                alt="aeroops"
                className="object-cover"
              />
              <h3 className="font-bold">
                The ultimate tool for managing the airworthiness of fleets of
                all sizes
              </h3>
            </div>
          </div>
          <div className="text-white flex-1 py-28 flex justify-end">
            <h2 className="text-6xl max-w-[300px] font-bold">
              AeroOPS: Airworthiness Management Platform
            </h2>
          </div>
        </div>
      </div>
      <div className="pt-8 container mx-auto text-gray-600">
        <div className="pt-10 [&>div]:flex-1 flex flex-col sm:flex-row gap-12 justify-between items-start">
          <div className="flex flex-col gap-4">
            <p className="text-xl">
              <span className="text-black font-bold">
                Comprehensive Airworthiness Tracking:
              </span>{" "}
              Manage airworthiness tasks and ensure compliance with EASA, FAA,
              and ICAO standards.{" "}
              <span className="text-black font-bold">
                Aircraft Status Reports:
              </span>{" "}
              Generate clear, up-to-date fleet performance and compliance
              summaries. <br />
              <span className="text-black font-bold">
                AI Delivery Binder:
              </span>{" "}
              Automate creation and organization of delivery/redelivery binders,
              saving time and reducing errors. Automated Task Tracking: Stay
              ahead of deadlines with automated tracking and real-time alerts
              for maintenance tasks. Work Orders and Workscopes: Create, manage,
              and track work orders and detailed workscopes for efficient
              maintenance. E-Techlogs: Replace paperwork with digital tech logs
              for accessible and efficient record-keeping. Component Monitoring:
              Monitor and track aircraft components for optimal performance and
              compliance. Team Collaboration: Streamline communication and
              workflows for maintenance teams and lessors. DFP Integration:
              Optimize planning, scheduling, and resource allocation with
              Digital Fleet Planning tools.
            </p>
          </div>
          <div>
            <img
              src="/slide-img-aero.jpg"
              alt="CAMO Approvals"
              className="h-[400px] max-w-[400px] rounded-t-[50px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aeroops;
