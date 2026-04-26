import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  logging: {
    fetches: {
      fullUrl: true,
    },
    // Enables browser logs in the terminal
    browserToTerminal: true, 
  },
};

export default nextConfig;
