"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface StatsProps {
  className?: string;
  statisticsCounters: Array<{
    id: number;
    title: string;
    countStart: number;
    countEnd: number;
    symbol: string;
    symbolPosition: "left" | "right";
  }>;
}

interface StatCardProps {
  countStart: number;
  countEnd: number;
  symbol: string;
  symbolPosition: "left" | "right";
  title: string;
}

const StatCard = ({
  countStart,
  countEnd,
  symbol,
  symbolPosition,
  title,
}: StatCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="text-white">
      <div className="text-5xl sm:text-7xl font-bold mb-2" ref={ref}>
        {symbolPosition === "left" && symbol}
        <CountUp
          start={inView ? countStart : 0}
          end={inView ? countEnd : 0}
          duration={2.5}
          separator=","
          suffix={symbolPosition === "right" ? symbol : ""}
          prefix={symbolPosition === "left" ? symbol : ""}
          scrollSpyOnce
          scrollSpyDelay={800}
        />
      </div>
      <div className="text-xl sm:text-2xl uppercase tracking-wider">
        {title}
      </div>
    </div>
  );
};

const Stats = ({ className, statisticsCounters }: StatsProps) => {
  return (
    <div className={`bg-aero-primary py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 items-start">
          {/* Stats */}
          {statisticsCounters.map((counter) => (
            <StatCard
              key={counter.id}
              countStart={counter.countStart}
              countEnd={counter.countEnd}
              symbol={counter.symbol}
              symbolPosition={counter.symbolPosition}
              title={counter.title}
            />
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
