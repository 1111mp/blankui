import { themes } from "@storybook/theming";

import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      current: "dark",
      stylePreview: true,
      darkClass: "dark",
      lightClass: "light",
      classTarget: "html",
      dark: {
        ...themes.dark,
        appBg: "#161616",
        barBg: "black",
        background: "black",
        appContentBg: "black",
        appBorderRadius: 14,
      },
      light: {
        ...themes.light,
        appBorderRadius: 14,
      },
    },
  },
};

export default preview;
