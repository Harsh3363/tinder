/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // since we are using moralis & sanity we have to add this line of code else will throw error ->
  images: {
    domains: ['moralis.io', 'cdn.sanity.io'],
  },
}

module.exports = nextConfig