import styled from "@emotion/styled";
import { ignite } from "./ignite";

interface PointWrapperProps {
  left: string;
  top: string;
}

export const PointWrapper = styled.div<PointWrapperProps>`
  position: absolute;
  left: ${({ left }) => left};
  top: ${({ top }) => top};
`;

export const StyledPoint = styled.button`
  position: absolute;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: var(--point-main);
  border: 2px solid var(--point-main);
  box-shadow: 0 0 0 1.5px var(--point-shadow);
`;

export const FillPoint = styled(StyledPoint)`
  cursor: pointer;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease;
  transform: scale(1.1);
  &:hover {
    transform: scale(1.25);
    box-shadow: 0 0 0 2.5px var(--point-shadow);
  }
`;

export const EmptyPoint = styled(StyledPoint)`
  background: transparent;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease;
  border: 1px solid var(--point-shadow);
`;

export const ActivePoint = styled(StyledPoint)`
  background: var(--danger);
  border: 2px solid var(--danger);
  box-shadow: 0 0 0 2.5px var(--point-shadow);
  transform: scale(1.25);
  cursor: auto;
`;

export const UserPoint = styled(StyledPoint)`
  cursor: pointer;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease;
  border-radius: 999px;
  transform: scale(1.1);
  &:hover {
    transform: scale(1.25);
    box-shadow: 0 0 0 2.5px var(--point-shadow);
  }
  &::after {
    animation: ${ignite} 3s ease-out forwards;
    content: "";
    position: absolute;
    inset: -4px;

    border-radius: 50%;

    background: var(--point-shadow);

    pointer-events: none;
    transform: scale(0.5);
  }
`;
