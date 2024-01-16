import withNextIntl from "next-intl/plugin";
import { withContentlayer } from "next-contentlayer";

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    // https://github.com/contentlayerdev/contentlayer/issues/272
    config.infrastructureLogging = {
      level: "error",
    };

    return config;
  },
};

export default withNextIntl()(withContentlayer(config));
