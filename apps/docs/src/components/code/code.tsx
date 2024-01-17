"use client";

import { themes } from "prism-react-renderer";
import { LiveProvider, LivePreview, LiveError, LiveEditor } from "react-live";
import * as Components from "@blankui-org/react";
import { useCode } from "./use-code";

import type { SandpackFiles } from "@codesandbox/sandpack-react";

type Props = {
  files?: SandpackFiles;
};

export const scope = {
  ...Components,
} as Record<string, unknown>;

export const Code: React.FC<Props> = ({ files = {} }) => {
  const { noInline, code } = useCode({
    files,
  });

  return (
    <LiveProvider code={code} noInline={noInline} scope={scope}>
      <LiveEditor theme={themes.oneDark} />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  );
};
