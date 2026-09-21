/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/dental',
        destination: '/dental/index.html',
      },
      {
        source: '/dentel',
        destination: '/dental/index.html',
      },
      {
        source: '/dentel-website',
        destination: '/dentel-website/index.html',
      },
    ];
  },
};

export default nextConfig;
