import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<T extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<T>) {
  const Component = as || "div";
  return <Component {...props}>{children}</Component>;
}
