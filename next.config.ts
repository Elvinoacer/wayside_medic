import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "z-cdn.chatglm.cn",
      },
      {
        protocol: "https",
        hostname: "sfile.chatglm.cn",
      },
    ],
  },
};

export default nextConfig;
