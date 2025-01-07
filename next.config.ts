import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  domains: ["aero-cms.s3.ap-south-1.amazonaws.com"],
  remotePatterns: [
    {
      protocol: "https",
      hostname: "aero-cms.s3.ap-south-1.amazonaws.com",
    },
  ],
};

export default nextConfig;
