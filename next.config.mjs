/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
