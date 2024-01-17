"use client";

import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from "@codesandbox/sandpack-react";

type Props = {};

export const Sandpack: React.FC<Props> = () => {
  return (
    <SandpackProvider
      customSetup={{
        dependencies: {
          "@blankui-org/react": "^2.0.1",
        },
        entry: "index.tsx",
      }}
      files={{
        "index.tsx": {
          code: `
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  );
          `,
          hidden: true,
        },
        "styles.css": `
        @import url("node_modules/@blankui-org/react/dist/index.css");

        body {
          font-family: sans-serif;
          -webkit-font-smoothing: auto;
          -moz-font-smoothing: auto;
          -moz-osx-font-smoothing: grayscale;
          font-smoothing: auto;
          text-rendering: optimizeLegibility;
          font-smooth: always;
          -webkit-tap-highlight-color: transparent;
          -webkit-touch-callout: none;
        }
        
        h1 {
          font-size: 1.5rem;
        }
        
        `,
        "/App.tsx": `import {Button} from "@blankui-org/react";

export default function App() {
  return (
    <Button primary={true} label="Button" onClick={() => alert("I'm Button")} />
  );
}
`,
      }}
      template="vite-react-ts"
    >
      <SandpackLayout>
        <SandpackCodeEditor />
        <SandpackPreview />
      </SandpackLayout>
    </SandpackProvider>
  );
};
