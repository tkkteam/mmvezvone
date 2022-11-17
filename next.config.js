/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.ibb.co']
  }
}
module.exports = {
  experimental: {
    nextScriptWorkers: true,
  },
}
module.exports = nextConfig
