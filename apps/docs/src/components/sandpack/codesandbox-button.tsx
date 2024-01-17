import React from "react";
import { UnstyledOpenInCodeSandboxButton } from "@codesandbox/sandpack-react";

import { CodeSandboxIcon } from "@/components/icons";

export const CodeSandboxButton = () => {
  return (
    <UnstyledOpenInCodeSandboxButton
      style={{
        // width: "100%",
        // height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // reset button styles
        background: "none",
        border: "none",
        padding: 0,
        margin: 0,
        outline: "none",
        cursor: "pointer",
      }}
    >
      <CodeSandboxIcon
        className="text-white dark:text-zinc-500"
        height={20}
        width={20}
      />
    </UnstyledOpenInCodeSandboxButton>
  );
};
