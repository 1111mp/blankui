module.exports = {
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules", "packages/**/**/node_modules"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
  // collectCoverage: true,
  collectCoverageFrom: [
    "packages/**/*.{ts,tsx}",
    "!packages/storybook/**",
    "!**/stories/**",
  ],
  // React is not defined
  // https://github.com/swc-project/swc-node/issues/635
  transform: {
    "\\.css\\.ts$": "@vanilla-extract/jest-transform",
    "\\.(ts|tsx|js|jsx)$": [
      "@swc/jest",
      {
        jsc: {
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
  transformIgnorePatterns: ["node_modules/.pnpm/(?!(flat))"],
  moduleNameMapper: {
    "\\.(less)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["./jest.setup.ts"],
};
