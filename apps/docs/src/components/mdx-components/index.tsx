import { useMDXComponent } from "next-contentlayer/hooks";
import { components } from "./components";

interface MdxProps {
  code: string;
}

export function MdxComponent({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
