/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    disableStaticImages: true,
  },
  webpack(config) {
    config.resolve.alias["react-router-dom"] = "./src/utils/next-router-compat.tsx";
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg|pdf|doc|docx|xls|xlsx)$/i,
      type: "asset/resource",
    });
    return config;
  },
};

export default nextConfig;
