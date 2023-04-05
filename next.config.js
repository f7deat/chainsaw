/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'dist',
  images: {
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig
