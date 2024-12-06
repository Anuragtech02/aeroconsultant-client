import React from "react";
import Image from "next/image";

const ServiceItem = ({ icon, title }) => (
  <div className="flex flex-col items-center gap-3">
    <Image
      src={icon}
      alt={title}
      width={40}
      height={40}
      className="w-10 h-10 object-contain"
    />
    <span className="text-md uppercase text-center">{title}</span>
  </div>
);

const ProductDetailsSection = () => {
  return (
    <section className="container">
      <div className="w-full mx-auto py-24">
        {/* Header Above Card */}
        <div className="w-full sm:text-right">
          <h2 className="font-normal">
            From <span className="font-bold">Review to Digital</span>
          </h2>
          <h2 className="font-normal">We have got you covered</h2>
        </div>

        {/* Main Card */}
        <div className="mt-10 bg-gray-100 rounded-3xl overflow-hidden">
          {/* Single Row Layout */}
          <div className="p-8 flex items-center justify-between">
            {/* Left Side: Title */}
            <h2 className="font-bold text-purple-900">
              Logistics &<br />
              Digitization
            </h2>

            {/* Vertical Divider */}
            <div className="h-20 w-[2px] bg-gray-300" />

            {/* Powered By Section */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">powered by</span>
              <Image
                src="/iron-mountain.png"
                alt="Iron Mountain"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>

            {/* Service Items */}
            <ServiceItem icon="/delivery.png" title="Client-Side Scanning" />
            <ServiceItem icon="/delivery.png" title="On-Site Doc Pickup" />
            <ServiceItem icon="/delivery.png" title="On-Site Doc Pickup" />
          </div>

          {/* Bottom Content Row */}
          <div className="mt-8 bg-[#46739A] p-8 flex justify-between items-center">
            <p className="text-white text-lg max-w-xl">
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis
            </p>
            <h3 className="text-white font-bold">
              Content about
              <br />
              the Partnerships
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsSection;
