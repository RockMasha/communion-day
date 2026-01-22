import styled from "@emotion/styled";
import { LoginForm } from "../features/LoginForm/LoginForm";

const StyledMain = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function Login() {
  return (
    <StyledMain>
      <LoginForm />
    </StyledMain>
  );
}
