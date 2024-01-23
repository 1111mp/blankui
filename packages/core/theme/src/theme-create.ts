import { createGlobalTheme } from "@vanilla-extract/css";
import deepmerge from "deepmerge";
import { defaultColors, defaultLayout, themeVars } from "./theme/contract.css";
import { flattenThemeObject, layoutParser } from "./utils";

import type { BlankUIConfig } from "./utils/types";

export const createBlankUITheme = ({
  selector,
  tokens = {},
}: BlankUIConfig) => {
  const { colors = {}, layout = {} } = tokens;
  const flatColors = flattenThemeObject(
    deepmerge(defaultColors, colors),
  ) as Record<string, string>;
  const flatLayout = layoutParser(deepmerge(defaultLayout, layout));

  createGlobalTheme(selector, themeVars, {
    colors: { ...flatColors },
    layouts: { ...flatLayout },
  });
};
