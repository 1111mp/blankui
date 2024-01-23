import { forwardRef as forwardReactRef } from "react";
import { As, ComponentWithAs, PropsOf, RightJoinProps } from "./system.types";

export function forwardRef<
  Component extends As,
  Props extends object,
  OmitKeys extends keyof any = never,
>(
  component: React.ForwardRefRenderFunction<
    any,
    RightJoinProps<PropsOf<Component>, Props> & {
      as?: As;
    }
  >,
) {
  return forwardReactRef(component) as ComponentWithAs<
    Component,
    Props,
    OmitKeys
  >;
}
