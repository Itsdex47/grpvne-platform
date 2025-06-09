/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client'],
  },
  images: {
    domains: [
      'images.clerk.dev',
      'www.gravatar.com',
      'cdn.midjourney.com',
      'oaidalleapiprodscus.blob.core.windows.net',
    ],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
}

module.exports = nextConfig