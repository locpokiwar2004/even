// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.google.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/events',
        destination: 'https://eventorize-api.kiet.site/events', // API URL cần proxy
      },
    ];
  },
};

export default nextConfig;
