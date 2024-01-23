/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: "/api/:path*",
          destination: "http://localhost:1000/:path*",
          // destination: "https://todo-mern-livid.vercel.app/:path*",
        },
      ];
    },
  }
  
  module.exports = nextConfig;
