import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed 'output: export' to enable API routes in production
  // If you need static export, consider using a third-party form service
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
