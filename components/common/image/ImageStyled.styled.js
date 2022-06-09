import styled, { css } from "styled-components";

const ImageStyled = styled.img`
  width: 5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;  

  ${props => props.large && css`
    width: 20rem;
    height: auto;

    @media only screen and (min-width: 767px) {
        width: 80rem;
    }
  `}

  ${props => props.small && css`
    width: 10rem;
    height: 6rem;

    @media only screen and (min-width: 767px) {
      width: 15rem;
      height: 10rem;
    }
  `}
`;

export { ImageStyled };