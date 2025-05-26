/** @type {import('next').NextConfig} */
const path = require('path');

const isNetlify = process.env.NETLIFY === 'true';

const baseConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
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

const withNetlify = require('@netlify/next');

// Fix: Call as a function, not as a constructor
module.exports = isNetlify ? withNetlify()(baseConfig) : baseConfig;