import type { NextConfig } from "next";

const BASE_MEDIA_URL = "https://media.themomentsweshareandmiss.com";
const BASE_AUDIO_URL = "https://pub-f412b46c1b174c90bd26d7b54b3b4ed2.r2.dev";

const assetPaths = [
  "animations",
  "backgrounds",
  "illustrations",
  "logo",
  "memorycards",
];

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "media.themomentsweshareandmiss.com",
      },
      {
        hostname: "pub-f412b46c1b174c90bd26d7b54b3b4ed2.r2.dev",
      },
    ],
  },
  async redirects() {
    return [
      ...assetPaths.map((path) => ({
        source: `/${path}/:path*`,
        destination: `${BASE_MEDIA_URL}/${path}/:path*`,
        permanent: true,
      })),
      {
        source: "/audio/:path*",
        destination: `${BASE_AUDIO_URL}/audio/:path*`,
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)\\.(mp4|gif|webp|jpg)$",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
