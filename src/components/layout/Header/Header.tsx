import {
  HeaderContent,
  HeaderEmailText,
  HeaderEmailWrapper,
  HeaderTitle,
  HeaderWrapper,
} from "./Header.styled";
import { useSelector } from "react-redux";
import { selectEmail } from "@/store/slices/user/userSelectors";
import { Container } from "@/components/ui/Container/Container";

export function Header() {
  const userEmail = useSelector(selectEmail);

  return (
    <HeaderWrapper>
      <Container>
        <HeaderContent>
          <HeaderTitle>Ланцюжок Єдності</HeaderTitle>
          <HeaderEmailWrapper>
            <HeaderEmailText>{userEmail}</HeaderEmailText>
          </HeaderEmailWrapper>
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  );
}
