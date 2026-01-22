import type { ChildrenProps } from "@/types";
import { StyledBackdrop } from "./Backdrop.styled";

export function Backdrop({ children }: ChildrenProps) {
  return <StyledBackdrop>{children}</StyledBackdrop>;
}
