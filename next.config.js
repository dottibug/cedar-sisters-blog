/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    storyblokApiToken: process.env.STORYBLOK_API_TOKEN,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a-us.storyblok.com',
        port: '',
        pathname: '/f/**',
      },
    ],
  },
};

module.exports = nextConfig;
