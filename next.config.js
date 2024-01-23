/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://todo-black-gamma.vercel.app/:path*", // Ensure correct path structure
      },
    ];
  },
};

module.exports = nextConfig;
