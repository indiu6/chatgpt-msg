/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com'],
    // remotePatterns: ['links.papareact.com'],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: '**.papareact.com',
    //     port: '',
    //     // pathname: '',
    //     search: '',
    //   },
    // ],
  },
}

module.exports = nextConfig
