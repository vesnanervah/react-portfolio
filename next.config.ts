import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production'; 

const prodConfig: NextConfig = {
  output: "export",
  basePath: "/react-portfolio",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
  images: {
    unoptimized: true
  }
}

const devConfig: NextConfig = {

}

const nextConfig: NextConfig = isProd ? prodConfig : devConfig;
console.log(`Env: ${process.env.NODE_ENV}`);

export default nextConfig;
