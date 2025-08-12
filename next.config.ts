import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  // Vercel specific optimizations
  compress: true,
  poweredByHeader: false,
  // Enable logging for debugging Sanity integration
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
