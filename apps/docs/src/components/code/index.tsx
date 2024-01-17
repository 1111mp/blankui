"use client";

import { themes } from "prism-react-renderer";
// import { useTranslations } from "next-intl";
import { LiveProvider, LivePreview, LiveError, LiveEditor } from "react-live";
import * as Components from "@blankui-org/react";

type Props = {
  code: string;
};

export const scope = {
  ...Components,
} as Record<string, unknown>;

export const Code: React.FC<Props> = ({
  code = "<strong>Hello World!</strong>",
}) => {
  // const t = useTranslations("Button");

  return (
    <LiveProvider code={code} noInline={true} scope={scope}>
      <LiveEditor theme={themes.oneDark} />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  );
};
