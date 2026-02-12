import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/mainsearch-ai",
        destination: "https://ai.onmain.co.uk",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

// next.config.ts (only if you're already setting CSP headers)
const csp = [
  "default-src 'self'",
  "img-src 'self' data: blob: https://lh3.googleusercontent.com https://*.googleusercontent.com",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' فهم", // keep whatever you already had here
].join("; ");
