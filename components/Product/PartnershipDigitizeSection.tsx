import React from "react";

const DigitizeSection = () => {
  return (
    <div className="w-full container py-16">
      <div className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-16">
        {/* Left Column - Heading */}
        <div className="flex-1">
          <h2 className="font-bold text-[#5A0066] leading-tight">
            Digitize your
            <br />
            Aviation Records
            <br />
            today
          </h2>
        </div>

        {/* Right Column - Description */}
        <div className="flex-1">
          <p className="text-2xl leading-relaxed">
            No more paper clutter or lost records! Our digital-first approach
            helps you track, retrieve, and manage all your aviation documents in
            one secure place—ensuring full regulatory compliance and audit
            readiness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitizeSection;
