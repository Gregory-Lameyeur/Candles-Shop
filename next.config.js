/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  // async exportPathMap() {
  //   return {
  //     '/': { page: '/home' },
  //   };
  // },
};

module.exports = nextConfig;
