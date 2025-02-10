import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hmweb-dev-bucket.s3.us-west-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "aero-cms.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
