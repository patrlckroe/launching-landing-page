import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enables React's strict mode for development

  webpack: (config) => {
    config.module.rules.push({
      test: /\.json$/, // Matches all `.json` files
      include: [__dirname + "/content"], // Includes the `content` directory
      type: "json", // Treats `.json` files as JSON modules
    });

    return config;
  },

  trailingSlash: true, // Optional: Adds trailing slashes to URLs (e.g., `/about/` -> `/about/`)
  output: "standalone", // Optimizes for serverless platforms like Netlify
};

export default nextConfig;
