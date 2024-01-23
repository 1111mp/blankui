import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../theme";

const button = recipe({
  base: [
    {
      outline: "none",
      borderWidth: 0,
      cursor: "pointer",
      transitionProperty:
        "transform,color,background,background-color,border-color,text-decoration-color,fill,stroke,opacity",
      transitionDuration: "0.25s",
      transitionTimingFunction: "ease",
    },
    sprinkles({
      opacity: {
        hover: "hover-opacity",
      },
    }),
    {
      ":active": {
        transform: "scale(0.97)",
      },
    },
  ],

  variants: {
    color: {
      default: sprinkles({
        boxColor: "default",
      }),
      primary: sprinkles({
        boxColor: "primary",
      }),
      secondary: sprinkles({
        boxColor: "secondary",
      }),
      success: sprinkles({
        boxColor: "success",
      }),
      warning: sprinkles({
        boxColor: "warning",
      }),
      danger: sprinkles({
        boxColor: "danger",
      }),
    },

    radius: {
      sm: sprinkles({
        borderRadius: "radius-small",
      }),
      md: sprinkles({
        borderRadius: "radius-medium",
      }),
      lg: sprinkles({
        borderRadius: "radius-large",
      }),
    },

    size: {
      sm: sprinkles({
        buttonSize: "sm",
      }),
      md: sprinkles({
        buttonSize: "md",
      }),
      lg: sprinkles({
        buttonSize: "lg",
      }),
    },
  },

  defaultVariants: {
    color: "default",
    radius: "md",
    size: "md",
  },
});

// Get the type
export type ButtonVariantProps = RecipeVariants<typeof button>;

export { button };
