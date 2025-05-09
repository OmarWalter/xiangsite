import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
        return [
          {
            source: "/abouttt",        // The path redirect from
            destination: "/about",     // The path redirect to
            permanent: true,           // Permanent redirecting
          }
        ];
      },
};

export default nextConfig;
