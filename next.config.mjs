/**
 * NEXT.JS CONFIGURATION
 *
 * KEY CONCEPT: next.config.mjs
 * - Configure Next.js behavior
 * - Set up image domains, redirects, etc.
 *
 * images.remotePatterns:
 * - Required to use next/image with external URLs
 * - Security feature: only allow images from trusted sources
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
};

export default nextConfig;
