import responsiveSizing from "@/styles/helpers/responsiveSizing";
import styled from "@emotion/styled";

export const BarWrapper = styled.div`
  position: fixed;
  bottom: ${responsiveSizing(3, 7)};
  left: ${responsiveSizing(3, 7)};
`;

export const BarContent = styled.div`
  min-width: ${responsiveSizing(155, 280)};
  min-height: ${responsiveSizing(60, 110)};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: ${responsiveSizing(20, 30)};
  padding-bottom: ${responsiveSizing(15, 30)};
  border-radius: 0 20px 0 0;
  background: #f4f3ff;
  border: 2px solid #000;
`;

export const BarText = styled.p`
  color: #2b2b2b;

  font-size: ${responsiveSizing(13, 25)};
`;
