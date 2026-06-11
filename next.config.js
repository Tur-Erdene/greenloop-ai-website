/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // For static export to Vercel
  distDir: 'dist',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
