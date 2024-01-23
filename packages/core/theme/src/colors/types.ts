export type ColorScale = Partial<{
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  foreground: string;
  DEFAULT: string;
}>;

export type BaseColors = {
  background: string;
  foreground: ColorScale;
  divider: Pick<ColorScale, "DEFAULT">;
  overlay: Pick<ColorScale, "DEFAULT">;
  focus: Pick<ColorScale, "DEFAULT">;
  content1: Pick<ColorScale, "DEFAULT" | "foreground">;
  content2: Pick<ColorScale, "DEFAULT" | "foreground">;
  content3: Pick<ColorScale, "DEFAULT" | "foreground">;
  content4: Pick<ColorScale, "DEFAULT" | "foreground">;
};

export type ThemeColors = BaseColors & {
  default: ColorScale;
  primary: ColorScale;
  secondary: ColorScale;
  success: ColorScale;
  warning: ColorScale;
  danger: ColorScale;
};

export type SemanticBaseColors = {
  light: BaseColors;
  dark: BaseColors;
};
