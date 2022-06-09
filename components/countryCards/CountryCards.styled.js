import styled from "styled-components";

const CountryCardStyled = styled.div`
  width: 100%;
  min-height: 50rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: lightgrey;
  margin: 0 auto;
  position: relative;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0.4rem 0.4rem 2.5rem -0.2rem rgba(0, 0, 0, 0.1);
  transition: ease-in-out all 0.3s;

  @media only screen and (min-width: 767px) {
    width: 80rem; 
  }

  &:hover {
    cursor: pointer;
    background-color: #ff5722;

    .left__panel {
      left: -8rem;
    }

    .right__panel {

      .country__name {
        color: #ffffff;

        &:after {
          background-color: #000000;
        }
      }

      p {
        color: #ffffff;

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
  }

  .left__panel {
    height: 24rem;
    width: 100%;
    transition: ease-in-out all 0.3s;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    overflow: hidden;

    @media only screen and (min-width: 767px) {
      height: 85%;
      width: 50rem;
      left: -10rem;
      position: absolute;
      max-height: 60rem;
      top: 4rem;
      border-radius: 0.5rem;
      box-shadow: -1rem 0.8rem 2rem -0.2rem rgba(0, 0, 0, 0.1);
    }

    img {    
      width: 100%;
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
      object-fit: cover;
      overflow: hidden;

      @media only screen and (min-width: 767px) {
        height: 100%;
      }
    }
    
  }

  .right__panel {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 4rem 3rem;
    height: auto;
    width: 100%;

    @media only screen and (min-width: 767px) {
      height: 100%;
      width: 40rem;
      padding: 5rem;
      margin-left: 40rem;
    }

    .country__name {
      position: relative;
      transition: ease-in-out all 0.3s;
      margin-bottom: 4rem;

      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -8px;
        width: 100%;
        height: 2px;
        margin: 5px 0 0;
        background-color: #ff5722;
        transition: ease-in-out all 0.3s;
      }
    }

    h2 {
      @media only screen and (max-width: 767px) {
        font-size: 3rem;
      }
    }

    p {
      transition: ease-in-out all 0.3s;
      font-size: 2rem;

      span {
        transition: ease-in-out all 0.3s;
        font-size: 2rem;
        line-height: 4rem;
        font-weight: 700;
        color: #ff5722;
      }
    }
  }

  
`;

export default CountryCardStyled;