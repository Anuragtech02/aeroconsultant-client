import React from "react";

const RecordDigitization = () => {
  return (
    <section id="record-digitalization">
      <div className="bg-aero-primary">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-stretch gap-8">
          <div className="text-white flex-1 py-8 lg:py-28">
            <h2 className="text-4xl xl:text-6xl max-w-[450px] font-bold">
              Record Digitalization & Management
            </h2>
          </div>
          <div className="flex-1 flex justify-center pt-10">
            <img
              src="/slide-img-aero.jpg"
              alt="CAMO Approvals"
              className="h-full lg:max-w-[400px] rounded-t-[50px] object-cover"
            />
          </div>
        </div>
      </div>
      <div className="pt-8 container mx-auto text-gray-600">
        <p className="text-xl">
          In the fast-paced aviation industry, efficient record management is
          essential for operational efficiency, compliance, and asset value.
          AeroConsultant provides advanced Record Digitization and Management
          Support services to transform physical aircraft records into secure,
          easily accessible digital formats.
        </p>
        <div className="pt-10 pb-10 lg:pb-0 [&>div]:flex-1 flex flex-col lg:flex-row gap-12 justify-between items-start">
          <div>
            <img
              src="/slide-img-aero.jpg"
              alt="CAMO Approvals"
              className="h-[400px] lg:max-w-[400px] rounded-t-[50px] object-cover"
            />
          </div>
          <div className="flex flex-col gap-8">
            <h4 className="font-bold text-black">How do we help?</h4>
            <ul className="pl-8 list-disc text-xl">
              <li>Comprehensive Digitization Services</li>
              <li>Advanced Management Solutions</li>
              <li>Regulatory Compliance and Accessibility</li>
              <li>Tailored Solutions for Lessors and Operators</li>
              <li>Partnership with Iron Mountain</li>
            </ul>
            <div className="flex justify-between flex-wrap items-center gap-4 p-4 rounded-xl border border-black">
              <img
                src="/easa-logo.png"
                alt="easa"
                className="h-[40px] xl:h-[60px]"
              />
              <img
                src="/caa-logo.png"
                alt="caa"
                className="h-[40px] xl:h-[60px]"
              />
              <img
                src="/iron-mountain.png"
                alt="iron-mountain"
                className="h-[40px] xl:h-[60px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecordDigitization;
