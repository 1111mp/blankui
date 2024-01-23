import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../theme";

const link = recipe({
  base: {
    cursor: "pointer",
  },

  variants: {
    color: {
      default: sprinkles({
        color: "default",
      }),
      primary: sprinkles({
        color: "primary",
      }),
      secondary: sprinkles({
        color: "secondary",
      }),
      success: sprinkles({
        color: "success",
      }),
      warning: sprinkles({
        color: "warning",
      }),
      danger: sprinkles({
        color: "danger",
      }),
    },
  },

  defaultVariants: {
    color: "default",
  },
});

// Get the type
export type LinkVariantProps = RecipeVariants<typeof link>;

export { link };
