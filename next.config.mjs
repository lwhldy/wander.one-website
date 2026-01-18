/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // 允许生产构建在存在 ESLint 错误时完成
    ignoreDuringBuilds: true,
  },
};


export default nextConfig;
