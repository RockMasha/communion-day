import { StyledWrapper } from "./MainLoader.styled";

function MainLoader() {
  return (
    <StyledWrapper>
      <div className="spinnerContainer">
        <div className="spinner" />
        <div className="loader"></div>
      </div>
    </StyledWrapper>
  );
}

export default MainLoader;
