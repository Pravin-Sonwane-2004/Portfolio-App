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

let config = baseConfig;
if (isNetlify) {
  const { withNetlify } = require('@netlify/next');
  config = withNetlify(baseConfig);
}

module.exports = config;