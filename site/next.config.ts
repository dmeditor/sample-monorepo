import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  webpack: (config, {}) => {
    const loaderList = config.module.rules.find((rule) => rule.oneOf);
    const babelLoader =
      loaderList &&
      loaderList.oneOf.filter(
        (loader) =>
          loader.test &&
          loader.test instanceof RegExp &&
          loader.test.test(".tsx")
      );

    babelLoader.forEach((loader) => {
      loader.include.push(path.resolve(__dirname, "../shared/"));
    });
    return config;
  },
};

export default nextConfig;
