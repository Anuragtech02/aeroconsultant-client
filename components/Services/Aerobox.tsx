import React from "react";

const Aerobox = () => {
  return (
    <section id="aerobox">
      <div className="bg-aero-primary">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-stretch gap-8">
          <div className="text-white flex-1 py-8 lg:py-28">
            <h2 className="text-4xl xl:text-6xl max-w-[450px] font-bold">
              Aerobox
            </h2>
            <p className="text-xl text-justify max-w-[600px] mt-4">
              Empowers lessors, operators, and asset owners to streamline their
              records management processes with a secure, user-friendly, and
              highly efficient platform. By digitizing and organizing records in
              compliance with industry standards, AeroBOX ensures smoother
              transitions, faster audits, and better operational control.
            </p>
          </div>
          <div className="flex-1 flex justify-center pt-10">
            <div className="h-full max-w-[400px] flex flex-col items-start gap-4 justify-center rounded-t-[50px] bg-white p-4">
              <img
                src="/aerobox-logo.png"
                alt="aerobox"
                className="object-cover"
              />
              <h3 className="font-bold">
                Transform your record management with
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 container mx-auto text-gray-600">
        <div className="pt-10 pb-10 lg:pb-0 [&>div]:flex-1 flex flex-col sm:flex-row gap-12 justify-between items-start">
          <div>
            <img
              src="/slide-img-aero.jpg"
              alt="CAMO Approvals"
              className="h-[400px] lg:max-w-[400px] rounded-t-[50px] object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <p>Key Features of AeroBOX</p>
            <ul className="pl-8 list-disc text-xl [&>li>span]:font-bold [&>li>span]:text-black">
              <li>
                <span> IATA ABC Folder Structure:</span> Organizes records in
                line with industry-standard IATA ABC folder structures, ensuring
                compliance and simplifying audits, inspections, and transitions.
              </li>
              <li>
                <span> AI-Powered Search:</span> Quickly locate specific records
                with intelligent search, eliminating manual searches and
                boosting productivity.
              </li>
              <li>
                <span> OCR Technology:</span> Automates data extraction from
                scanned documents, making records searchable, organized, and
                accurate.
              </li>
              <li>
                <span> Automatic Report Generation:</span> Generates lease
                transition summaries, compliance reports, and maintenance
                histories with ease, saving time and ensuring consistency.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aerobox;
