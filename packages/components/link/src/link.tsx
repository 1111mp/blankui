import { useMemo } from "react";
import { forwardRef, type HTMLBlankUIProps } from "@blankui-org/system";
import { link, LinkVariantProps } from "@blankui-org/theme";
import { useDOMRef } from "@blankui-org/react-utils";

export type LinkProps = HTMLBlankUIProps<"a"> &
  LinkVariantProps & {
    children?: React.ReactNode;
  };

export const Link = forwardRef<"a", LinkProps>(
  ({ as, color, children, ...props }, ref) => {
    const domRef = useDOMRef(ref);

    const styles = useMemo(() => link({ color }), [color]);

    const Component = as || "a";

    return (
      <Component ref={domRef} className={styles} {...props}>
        {children}
      </Component>
    );
  },
);
