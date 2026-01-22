import responsiveSizing from "@/styles/helpers/responsiveSizing";
import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  padding: 20px;

  display: flex;
  align-items: center;

  background: var(--bg-card);
  box-shadow: var(--shadow-sm);
  background-color: var(--accent);
  color: var(--text-main);
`;

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
`;

export const HeaderTitle = styled.h1`
  font-weight: 600;
  font-size: ${responsiveSizing(20, 40)};
`;

export const HeaderEmailWrapper = styled.div`
  padding: 3px 6px;
  border: 1px solid var(--text-main);
  border-width: ${responsiveSizing(2, 5)};
  border-radius: 10px;
`;

export const HeaderEmailText = styled.p`
  font-weight: 500;
  font-size: ${responsiveSizing(15, 25)};
  border-radius: 10px;
`;
