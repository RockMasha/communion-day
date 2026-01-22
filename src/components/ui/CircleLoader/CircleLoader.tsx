import { StyledWrapper } from "./CircleLoader.styled";

interface CircleLoaderProps {
  size?: string;
  className?: string;
}

function CircleLoader({ size, className }: CircleLoaderProps) {
  return (
    <StyledWrapper className={className}>
      <svg viewBox="25 25 50 50" width={size} height={size}>
        <circle r={20} cy={50} cx={50} />
      </svg>
    </StyledWrapper>
  );
}

export default CircleLoader;
