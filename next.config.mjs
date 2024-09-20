/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "overlays.co",
        port: "",
        pathname: "/cdn/**",
      },
    ],
  },
};

export default nextConfig;
