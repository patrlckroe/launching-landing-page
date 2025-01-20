import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enables React's strict mode for development
  swcMinify: true,       // Enables SWC for faster builds and minification

  webpack: (config) => {
    config.module.rules.push({
      test: /\.json$/, // Matches all `.json` files
      include: [__dirname + "/content"], // Ensures `/content` directory is included
      type: "json",    // Treats `.json` files as JSON modules
    });

    return config;
  },

  // Optional: Enables trailing slashes in URLs (useful for static sites)
  trailingSlash: true,

  // Optional: Customizes the output directory for your build
  output: "standalone", // Optimizes the build for serverless deployments
};

export default nextConfig;
