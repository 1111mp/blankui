import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  target: "esnext",
  format: ["cjs", "esm"],
  bundle: true,
  banner: { js: '"use client";' },
});
