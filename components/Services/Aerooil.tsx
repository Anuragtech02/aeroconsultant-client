import React from "react";

const Aerooil = () => {
  return (
    <section>
      <div className="bg-aero-primary">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-stretch gap-8">
          <div className="flex-1 flex justify-start pt-10">
            <div className="h-full max-w-[400px] flex flex-col items-start gap-4 justify-center rounded-t-[50px] bg-white p-4">
              <img
                src="/aerooil-logo.png"
                alt="aerooil"
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
              AeroOIL: Lease Transition Communication Platform
            </h2>
          </div>
        </div>
      </div>
      <div className="pt-8 container mx-auto text-gray-600">
        <div className="pt-10 [&>div]:flex-1 flex flex-col sm:flex-row gap-12 justify-between items-stretch">
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
          </div>
          <div>
            <img
              src="/slide-img-aero.jpg"
              alt="CAMO Approvals"
              className="h-full max-w-[400px] rounded-t-[50px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aerooil;
