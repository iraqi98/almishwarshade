import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/almishwarshade",
  assetPrefix: "/almishwarshade",
};

export default nextConfig;
