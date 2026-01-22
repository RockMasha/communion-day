import { Map } from "@/features/Map/Map";
import { Container } from "@/components/ui/Container/Container";
import styled from "@emotion/styled";
import responsiveSizing from "@/styles/helpers/responsiveSizing";
import { PointBar } from "@/features/PointBar/PointBar";
import { activePoint } from "@/api/activePoint";
import { useEffect } from "react";

const StyledMain = styled.main`
  padding-top: ${responsiveSizing(10, 25)};
  padding-bottom: ${responsiveSizing(40, 100)};
`;

export function Home() {
  const activePointAtHome = () => {
    activePoint();
  };
  useEffect(() => {
    activePointAtHome();
  }, []);

  return (
    <StyledMain>
      <Container>
        <Map />
      </Container>
      <PointBar />
    </StyledMain>
  );
}
