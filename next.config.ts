import type { NextConfig } from "next";

const assetPaths = [
  "animations",
  "audio",
  "backgrounds",
  "illustrations",
  "logo",
  "memorycards",
];

const BASE_MEDIA_URL = "https://media.themomentsweshareandmiss.com";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "media.themomentsweshareandmiss.com",
      },
    ],
  },
  async redirects() {
    return assetPaths.map((path) => ({
      source: `/${path}/:path*`,
      destination: `${BASE_MEDIA_URL}/${path}/:path*`,
      permanent: true,
    }));
  },
};

export default nextConfig;
