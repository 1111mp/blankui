"use client";

import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from "@codesandbox/sandpack-react";
// import { CodeSandboxButton } from "./codesandbox-button";

import { type UseSandpackProps, useSandpack } from "./use-sandpack";

export interface SandpackProps extends UseSandpackProps {
  showTabs?: boolean;
  showPreview?: boolean;
  showEditor?: boolean;
  showCopyCode?: boolean;
  showReportBug?: boolean;
  defaultExpanded?: boolean;
  showOpenInCodeSandbox?: boolean;
  children?: React.ReactNode;
}

export const Sandpack: React.FC<SandpackProps> = ({
  files: filesProp,
  template,
  highlightedLines,
  typescriptStrict = false,
  // showPreview = false,
  // showEditor = true,
  // defaultExpanded = false,
  // showOpenInCodeSandbox = true,
  // showReportBug = true,
  // showCopyCode = true,
  // showTabs,
  // children,
}) => {
  const {
    files,
    // decorators,
    customSetup,
    sandpackTemplate,
    // hasTypescript,
    // setCurrentTemplate,
  } = useSandpack({
    files: filesProp,
    template,
    typescriptStrict,
    highlightedLines,
  });

  return (
    <SandpackProvider
      customSetup={customSetup}
      files={files}
      template={sandpackTemplate}
    >
      {/* <CodeSandboxButton /> */}
      <SandpackLayout>
        <SandpackCodeEditor />
        <SandpackPreview />
      </SandpackLayout>
    </SandpackProvider>
  );
};
