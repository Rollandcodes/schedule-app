/** @type {import('next').NextConfig} */
require("dotenv").config({ path: "../../.env" });

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@schedule/lib"],
};

module.exports = nextConfig;
