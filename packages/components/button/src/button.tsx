import { useMemo } from "react";
import { forwardRef, type HTMLBlankUIProps } from "@blankui-org/system";
import { button, ButtonVariantProps } from "@blankui-org/theme";
import { useDOMRef } from "@blankui-org/react-utils";

export type ButtonProps = HTMLBlankUIProps<"button"> &
  ButtonVariantProps & {
    children: React.ReactNode;
    /**
     * The native button click event handler.
     */
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  };

export const Button = forwardRef<"button", ButtonProps>(
  ({ as, color, size, children, ...props }, ref) => {
    const domRef = useDOMRef(ref);

    const styles = useMemo(() => button({ color, size }), [color, size]);

    const Component = as || "button";

    return (
      <Component ref={domRef} className={styles} {...props}>
        {children}
      </Component>
    );
  },
);
