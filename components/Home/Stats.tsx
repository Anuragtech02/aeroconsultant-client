"use client";
import React from "react";
import CountUp from "react-countup";

interface StatCardProps {
  number: string;
  label: string;
}

const StatCard = ({ number, label }: StatCardProps) => {
  // Extract the numeric value and the plus sign
  const numericValue = parseInt(number.replace(/\D/g, ""));

  return (
    <div className="text-white">
      <div className="text-5xl sm:text-7xl font-bold mb-2">
        <CountUp
          end={numericValue}
          duration={2.5}
          separator=","
          suffix="+"
          enableScrollSpy
          scrollSpyOnce
        />
      </div>
      <div className="text-xl sm:text-2xl uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

interface StatsProps {
  className?: string;
}

const Stats = ({ className }: StatsProps) => {
  const stats = [
    {
      number: "3700+",
      label: "Consultants",
    },
    {
      number: "155+",
      label: "Countries Present",
    },
    {
      number: "50+",
      label: "Projects Across Countries",
    },
  ];

  return (
    <div className={`bg-purple-900 py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 items-center">
          {/* Stats */}
          {stats.map((stat, index) => (
            <StatCard key={index} number={stat.number} label={stat.label} />
          ))}

          {/* Heading */}
          <div className="text-white lg:text-right">
            <h2 className="text-4xl font-light uppercase">
              Numbers That <br />
              Lead <span className="font-bold">Globally</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
