/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:1000/:path*", // Ensure correct path structure
      },
    ];
  },
};

module.exports = nextConfig;
