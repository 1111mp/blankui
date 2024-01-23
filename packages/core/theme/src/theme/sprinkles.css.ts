import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { themeVars } from "./contract.css";

const { colors, layouts } = themeVars;

type LayoutProperties = {
  borderRadius: Record<string, string>;
  lineHeight: Record<string, string>;
  fontSize: Record<string, string>;
  opacity: Record<string, string>;
  spacingUnit: Record<string, string>;
};

const {
  spacingUnit,
  fontSize,
  lineHeight,
  borderRadius,
  opacity,
  ...layoutProperties
} = Object.entries(layouts).reduce<LayoutProperties>(
  (acc, [key, value]) => {
    if (key.startsWith("radius")) {
      acc["borderRadius"][key] = value;
    }

    if (key.startsWith("line-height")) {
      acc["lineHeight"][key] = value;
    }

    if (key.startsWith("font-size")) {
      acc["fontSize"][key] = value;
    }

    if (key.endsWith("opacity")) {
      acc["opacity"][key] = value;
    }

    if (key.startsWith("spacing-unit")) {
      acc["spacingUnit"][key] = value;
    }

    return acc;
  },
  {
    borderRadius: {},
    lineHeight: {},
    fontSize: {},
    opacity: {},
    spacingUnit: {},
  },
);

const opacityProperties = defineProperties({
  conditions: {
    hover: { selector: "&:hover" },
    disabled: { selector: "&:disabled" },
  },
  defaultCondition: false,
  properties: {
    opacity,
  },
});

const commonProperties = defineProperties({
  properties: {
    ...layoutProperties,

    color: colors,
    backgroundColor: colors,

    borderRadius,

    paddingTop: spacingUnit,
    paddingBottom: spacingUnit,
    paddingLeft: spacingUnit,
    paddingRight: spacingUnit,

    minWidth: spacingUnit,
    minHeight: spacingUnit,

    width: spacingUnit,
    height: spacingUnit,

    fontSize,
    lineHeight,

    boxColor: {
      default: {
        color: colors["default-foreground"],
        backgroundColor: colors["default"],
      },
      primary: {
        color: colors["primary-foreground"],
        backgroundColor: colors["primary"],
      },
      secondary: {
        color: colors["secondary-foreground"],
        backgroundColor: colors["secondary"],
      },
      success: {
        color: colors["success-foreground"],
        backgroundColor: colors["success"],
      },
      warning: {
        color: colors["warning-foreground"],
        backgroundColor: colors["warning"],
      },
      danger: {
        color: colors["danger-foreground"],
        backgroundColor: colors["danger"],
      },
    },

    buttonSize: {
      sm: {
        minWidth: spacingUnit["spacing-unit-16"],
        height: spacingUnit["spacing-unit-8"],
        paddingLeft: spacingUnit["spacing-unit-3"],
        paddingRight: spacingUnit["spacing-unit-3"],
        fontSize: fontSize["font-size-tiny"],
        lineHeight: lineHeight["line-height-tiny"],
      },
      md: {
        minWidth: spacingUnit["spacing-unit-20"],
        height: spacingUnit["spacing-unit-10"],
        paddingLeft: spacingUnit["spacing-unit-4"],
        paddingRight: spacingUnit["spacing-unit-4"],
        fontSize: fontSize["font-size-small"],
        lineHeight: lineHeight["line-height-small"],
      },
      lg: {
        minWidth: spacingUnit["spacing-unit-24"],
        height: spacingUnit["spacing-unit-12"],
        paddingLeft: spacingUnit["spacing-unit-6"],
        paddingRight: spacingUnit["spacing-unit-6"],
        fontSize: fontSize["font-size-medium"],
        lineHeight: lineHeight["line-height-medium"],
      },
    },
  },

  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
  },
});

export const sprinkles = createSprinkles(commonProperties, opacityProperties);
