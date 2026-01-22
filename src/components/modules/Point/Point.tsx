import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import {
  ActivePoint,
  EmptyPoint,
  FillPoint,
  PointWrapper,
  UserPoint,
} from "./Point.styled";
import { setActivePoint } from "@/store/slices/activePoint/activePointSlice";

interface PointProps {
  data: {
    fill: boolean;
    id: string;
  };
  left: string;
  top: string;
  isActive: boolean;
  isUserPoint: boolean;
}

export function Point({ data, left, top, isActive, isUserPoint }: PointProps) {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setActivePoint(data.id));
  };

  return (
    <PointWrapper left={left} top={top}>
      {isActive ? (
        <ActivePoint />
      ) : isUserPoint ? (
        <UserPoint onClick={handleClick} />
      ) : data.fill ? (
        <FillPoint onClick={handleClick} />
      ) : (
        <EmptyPoint/>
      )}
    </PointWrapper>
  );
}
