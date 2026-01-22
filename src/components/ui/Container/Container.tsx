import type { ChildrenProps } from "@/types";
import { StyledContainer } from "./Container.styled";

export function Container({ children }: ChildrenProps) {
  return <StyledContainer>{children}</StyledContainer>;
}
