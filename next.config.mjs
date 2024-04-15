/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true, // 코드 경량화
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ["https://yeyak.seoul.go.kr/"],
        formats: ["image/avif", "image/webp"],
        minimumCacheTTL: 31536000,
        imageSizes: [32, 64, 96, 128, 256],
        deviceSizes: [750, 1080, 1200, 1920, 2048],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
