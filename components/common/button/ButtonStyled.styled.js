import styled from "styled-components";

const BackButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkgrey;
  color: ${props => props.theme.white};
  min-width: 10rem;
  min-height: 4rem;
  padding: 1.2rem;
  border-radius: 0.5rem;
  transition: ease-in-out all 0.3s;

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.black};
    background-color: ${props => props.theme.orange};
  }

  &.back__button {
    position: relative;
    margin: 2.4rem auto;

    @media only screen and (min-width: 767px) {
      position: absolute;
      left: 2.5rem;
      top: 0;
    }
  }
`;

export { BackButtonStyled };