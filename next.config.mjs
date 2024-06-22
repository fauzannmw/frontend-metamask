/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["s2.coinmarketcap.com"],
  },
  env: {
    CMC_API_KEY: process.env.CMC_API_KEY,
  },
};

export default nextConfig;
