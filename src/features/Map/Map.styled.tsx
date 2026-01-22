import styled from "@emotion/styled";

const scaleValue = 0.3 + (1 - 0.3) * ((window.innerWidth - 320) / (1036 - 320));

export const MapWrapper1 = styled.div`
  position: relative;
  width: 1036px;
  height: 779px;
  padding: 54px 19px 57px 11px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--bg-map);
  box-shadow: var(--shadow-md);
  transform: scale(1);
  @media (max-width: 1036px) {
    transform: scale(${scaleValue}) translateY(0);
  }
  @media (max-width: 900px) {
    transform: scale(${scaleValue}) translateY(-10%);
  }
  @media (max-width: 800px) {
    transform: scale(${scaleValue}) translateY(-25%);
  }
    @media (max-width: 700px) {
    transform: scale(${scaleValue}) translateY(-35%);
  }
  @media (max-width: 600px) {
    transform: scale(${scaleValue}) translateY(-45%);
  }
  @media (max-width: 500px) {
    transform: scale(${scaleValue}) translateY(-50%);
  }
  @media (max-width: 400px) {
    transform: scale(${scaleValue}) translateY(-60%);
  }
`;

export const MapWrapper2 = styled.div`
  width: 1006px;
  height: 688px;
  flex: 1;
  border-radius: var(--radius-lg);
  overflow: hidden;
`;

export const MapImage = styled.img``;
