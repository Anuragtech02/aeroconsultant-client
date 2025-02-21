import React from "react";

const HowItWorks = () => {
  return (
    <div className="w-full container py-16">
      {/* Heading Section */}
      <h2 className="text-5xl font-semibold text-center mb-8">
        How does it work ?
      </h2>

      {/* Description Text */}
      <p className="text-xl text-center max-w-5xl mx-auto mb-16 leading-relaxed">
        Iron Mountain's secure digitization combined with AeroConsultant's
        aviation expertise means: Faster aircraft transitions; 99.9% accuracy in
        document scanning & classification; Reduced risk of losing critical
        records
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Document Pickup Card */}
        <div className="bg-gradient-to-bl from-[#0036FB] to-[#4F77FF] rounded-2xl p-8 text-white">
          <div className="mb-6">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              className="w-12 h-12"
            >
              <path
                d="M12 24h24M12 12h24M12 36h24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <rect
                x="16"
                y="8"
                width="16"
                height="32"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-medium leading-tight">
            Document
            <br />
            pickup & scanning
          </h3>
        </div>

        {/* Quality Assurance Card */}
        <div className="bg-gradient-to-br from-[#0166FF] to-[#9CB2D2] rounded-2xl p-8 text-white">
          <div className="mb-6">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              className="w-12 h-12"
            >
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 4"
                fill="none"
              />
              <path
                d="M16 24l6 6 12-12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-medium leading-tight">
            Quality Assurance
            <br />& Checks
          </h3>
        </div>

        {/* Digital Repo Card */}
        <div className="bg-gradient-to-br from-[#BFABD7] to-[#6D17CE] rounded-2xl p-8 text-white">
          <div className="mb-6">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              className="w-12 h-12"
            >
              <rect
                x="8"
                y="8"
                width="32"
                height="32"
                rx="4"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M16 24h16M16 32h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M24 12v24"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-medium leading-tight">
            Intelligent
            <br />
            Digital Repo
          </h3>
        </div>

        {/* Lifecycle Management Card */}
        <div className="bg-gradient-to-br from-[#BFABD7] to-[#6D17CE] rounded-2xl p-8 text-white">
          <div className="mb-6">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              className="w-12 h-12"
            >
              <circle
                cx="24"
                cy="24"
                r="18"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M24 14v20M14 24h20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M18 18l12 12M30 18L18 30"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-medium leading-tight">
            End-to-end
            <br />
            Lifecycle
            <br />
            Management
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
