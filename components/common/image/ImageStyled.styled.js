import styled, { css } from "styled-components";

const ImageStyled = styled.img`
  width: 5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;  

  ${props => props.large && css`
    width: 50rem;
    height: auto;
  `}
`;

export { ImageStyled };