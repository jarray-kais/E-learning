/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'tailwindui.com',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
