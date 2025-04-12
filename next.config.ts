import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'c.ndtvimg.com',
        // pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;
