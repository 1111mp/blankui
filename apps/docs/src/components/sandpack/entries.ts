export const rootFile = `
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="w-screen h-screen p-8 flex items-start justify-center">
      <App />
    </div>
  </React.StrictMode>
);`;

export const getHtmlFile = (
  theme: string,
  entryFile: string,
) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body class="${theme} text-foreground bg-background">
    <div id="root"></div>
    <script type="module" src="/${entryFile}"></script>
  </body>
</html>`;

export const viteConfig = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vanillaExtractPlugin(), react()],
})
`;
