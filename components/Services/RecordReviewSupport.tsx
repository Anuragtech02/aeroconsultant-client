import React from "react";

const RecordReviewSupport = () => {
  return (
    <section>
      <div className="bg-aero-primary">
        <div className="container mx-auto h-[450px] flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="text-white flex-1">
            <h2 className="text-6xl max-w-[450px] font-bold">
              Record Review Support
            </h2>
            <p className="text-xl max-w-[350px] mt-4">
              Managing aircraft records and lease contract data for both
              airlines and lessors
            </p>
          </div>
          <div className="flex-1 h-full">
            <img
              src="/slide-img-aero.jpg"
              alt="CAMO Approvals"
              className="h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="pt-8 container mx-auto text-gray-600">
        <p className="text-xl">
          AeroConsultant&apos;s Record Review Support services ensure the
          accuracy, completeness, and compliance of your aircraft documentation.
          With an experienced in-house team, we provide detailed reviews and
          actionable insights to navigate aircraft transitions, lease
          agreements, and regulatory audits.
        </p>
        <div className="pt-10 [&>div]:flex-1 flex flex-col sm:flex-row gap-12 justify-between items-start">
          <div>
            <img
              src="/slide-img-aero.jpg"
              alt="CAMO Approvals"
              className="h-[300px] object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-black">How do we help?</h4>
            <ul className="pl-8 list-disc text-xl">
              <li>Comprehensive Record Audits</li>
              <li>Seamless Aircraft Transitions</li>
              <li>Regulatory Expertise</li>
              <li>Gap Analysis & Reduction</li>
              <li>Tailored Solution</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecordReviewSupport;
