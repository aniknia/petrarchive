/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
    ],
  },
  env: {
    API_HOST: process.env.API_HOST,
    API_KEY: process.env.API_KEY,
  },
};
module.exports = nextConfig;
