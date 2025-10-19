import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove output: 'export' for Vercel deployment
  // Vercel handles static optimization automatically
  images: {
    // Keep unoptimized for now, but Vercel can optimize images
    unoptimized: true,
  },
};

export default nextConfig;
