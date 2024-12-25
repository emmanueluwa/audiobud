import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      { protocol: "https", hostname: "d7hftxdivxxvm.cloudfront.net" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "original-tapir-158.convex.cloud" },
    ],
  },
};

export default nextConfig;
