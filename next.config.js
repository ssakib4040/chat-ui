/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
   unoptimized: true,
   disableStaticImages: true,
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
