import NextImage from "next/image";
import * as Components from "@blankui-org/react";
import { Code } from "../code";

import type { MDXComponents } from "mdx/types";
import { Sandpack } from "../sandpack";

export const components: MDXComponents = {
  NextImage,

  ...Components,

  Code,

  Sandpack,

  h1: (props: React.HTMLAttributes<HTMLHeadElement>) => (
    <h1 className="mb-4 text-4xl font-bold" {...props}>
      {props.children}
    </h1>
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadElement>) => (
    <h2 className="mb-4 text-3xl font-bold" {...props}>
      {props.children}
    </h2>
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadElement>) => (
    <h3 {...props}>{props.children}</h3>
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadElement>) => (
    <h4 {...props}>{props.children}</h4>
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-medium" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} className="my-2">
      {props.children}
    </p>
  ),
  a: (props: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a {...props}>{props.children}</a>
  ),
  Steps: ({ ...props }) => (
    <div
      className="[&>h3]:step [&>h4]:step border-default-100 relative mb-12 ml-4 border-l pl-[1.625rem] [counter-reset:step] [&>h3>a]:pt-0.5 [&>h4>a]:pt-0.5"
      {...props}
    />
  ),
};
