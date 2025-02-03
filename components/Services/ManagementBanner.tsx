import Image from "next/image";
import React from "react";

const ManagementBanner = () => {
  return (
    <section className="pt-[50px] bg-aero-primary">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-8">
        <h2 className="text-white font-bold max-w-[300px]">
          Aircraft Asset Management Service
        </h2>
        <Image
          src="/aeroplane.png"
          alt="Aircraft cockpit"
          width={500}
          height={500}
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default ManagementBanner;
