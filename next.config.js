/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dummyimage.com",
      },

      {
        protocol: "https",
        hostname: "picsum.photos",
      },

      {
        protocol: "https",
        hostname: "cloudflare-ipfs.com",
      },

      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

module.exports = nextConfig;
