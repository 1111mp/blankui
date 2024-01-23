import {
  createGlobalTheme,
  createGlobalThemeContract,
} from "@vanilla-extract/css";

import { semanticColors } from "../colors";
import { lightLayout as defaultLayout, darkLayout } from "./layout";
import { flattenThemeObject, layoutParser } from "../utils";

const flatLightLayout = layoutParser(defaultLayout);

const flatDarkLayout = layoutParser(darkLayout);

// const flatCommonColors = flattenThemeObject(commonColors) as Record<
//   string,
//   string
// >;
// const commonColorsVars = Object.keys(flatCommonColors).reduce<
//   Record<string, string>
// >((acc, cur) => {
//   acc[cur] = `color-${cur}`;

//   return acc;
// }, {});

const { light: defaultColors, dark } = semanticColors;

const flatLightColors = flattenThemeObject(defaultColors) as Record<
  string,
  string
>;
const flatDarkColors = flattenThemeObject(dark) as Record<string, string>;
const semanticColorsVars = Object.keys(flatLightColors).reduce<
  Record<string, string>
>((acc, cur) => {
  acc[cur] = `color-${cur}`;

  return acc;
}, {});

const themeVars = createGlobalThemeContract(
  {
    colors: {
      // ...commonColorsVars,
      ...semanticColorsVars,
    },
    layouts: Object.keys(flatLightLayout).reduce<Record<string, string>>(
      (acc, cur) => {
        acc[cur] = cur;

        return acc;
      },
      {},
    ),
  },
  (value) => `blankui-${value}`,
);

createGlobalTheme(":root,.light,[data-theme=light]", themeVars, {
  colors: {
    // ...flatCommonColors,
    ...flatLightColors,
  },
  layouts: flatLightLayout,
});

createGlobalTheme(".dark,[data-theme=dark]", themeVars, {
  colors: {
    // ...flatCommonColors,
    ...flatDarkColors,
  },
  layouts: flatDarkLayout,
});

export { themeVars, defaultColors, defaultLayout };
