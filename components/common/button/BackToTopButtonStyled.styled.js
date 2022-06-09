import styled from "styled-components";

const BackToTopButtonStyled = styled.button`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  padding: 2.4rem 1.2rem;
  width: 5rem;
  height: 5rem;
  background-color: #000000;
  color: #ffffff;
  bottom: 5rem;
  right: 5rem;
  transition: ease-in-out all 0.3s;

  &:hover {
    cursor: pointer;
    background-color: #ff5722;
    color: #000000;
  }

  svg {
    pointer-events: none;
  }
`;

export { BackToTopButtonStyled };