/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  output: 'export', // 👈 Required for static site
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    unoptimized: true, // 👈 Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
