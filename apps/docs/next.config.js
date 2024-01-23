import withNextIntl from "next-intl/plugin";
import { withContentlayer } from "next-contentlayer";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["@blankui-org/react"],
  webpack: (config) => {
    // https://github.com/contentlayerdev/contentlayer/issues/272
    config.infrastructureLogging = {
      level: "error",
    };

    return config;
  },
};

export default withNextIntl()(withVanillaExtract(withContentlayer(config)));
