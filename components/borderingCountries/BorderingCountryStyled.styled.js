import styled from "styled-components";

const BorderingCountryStyled = styled.div`
  display: flex;
  flex-direction: column; 
  background-color: #f3f3f3;
  padding: 1.6rem;
  position: relative;
  min-height: 15rem;
  transition: ease-in-out all 0.3s;
  width: 100%;

  @media only screen and (min-width: 767px) {
    flex-direction: row;
    padding: 2.4rem;
  }

  &:hover {
    cursor: pointer;
    background-color: #ff5722;
    
    .info__panel {

      p {
        color: #ffffff;

        &.country__title {
          color: #ffffff;
        }

        span {
          color: #000000;
        }
      }
    }
  }

  a {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: row;
    gap: 1.6rem;

    .info__panel {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      transition: ease-in-out all 0.3s;

      p {
        font-size: 1.4rem; 
        transition: ease-in-out all 0.3s;

        &.country__title {
          font-weight: 700;
          font-size: 2rem;
          transition: ease-in-out all 0.3s;
        }

        span {
          color: #ff5722;
          font-weight: 700;
          margin-right: 1.2rem;
          transition: ease-in-out all 0.3s;
        }
      }
    }
  }
`;

export { BorderingCountryStyled };