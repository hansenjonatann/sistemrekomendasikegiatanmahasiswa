/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    // Opsi tambahan untuk TypeScript
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;
