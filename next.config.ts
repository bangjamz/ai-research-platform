import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/belajar/ai', // Added for subdirectory deployment
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
