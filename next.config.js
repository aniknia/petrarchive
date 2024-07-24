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
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env: {
    API_HOST: process.env.API_HOST,
    API_KEY_UPDATE_LIKES: process.env.API_KEY_UPDATE_LIKES,
    API_KEY_ADD_PETR: process.env.API_KEY_ADD_PETR,
  },
};
module.exports = nextConfig;
