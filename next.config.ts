import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  i18n: {
    locales: ['fr', 'en'], 
    defaultLocale: 'fr', 
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',  
        destination: 'http://pod.qemsoh.home:8084/:path*', 
      },
    ];
  },
};

export default nextConfig;
