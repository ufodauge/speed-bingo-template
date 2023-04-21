require("dotenv").config();
const randomBytes = require("crypto").randomBytes(128).toString("hex");
const debug = process.env.NODE_ENV !== "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: !debug ? "/speed-bingo-share" : "",
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_PASSWORD: randomBytes,
  },
};

module.exports = nextConfig;