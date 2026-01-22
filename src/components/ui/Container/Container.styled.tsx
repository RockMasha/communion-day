import responsiveSizing from "@/styles/helpers/responsiveSizing";
import styled from "@emotion/styled";

export const StyledContainer = styled.div`
  width: 100%;
  padding: 0 ${responsiveSizing(5, 40)};
`;
