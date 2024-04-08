/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
        loader: 'akamai',
        path: '',
      },
    ],
  },
  assetPrefix: './',
};

export default nextConfig;