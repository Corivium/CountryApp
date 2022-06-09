import styled from "styled-components";

const CountryDetailsStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 1.6rem;
  position: relative;
  gap: 2.4rem;

  @media only screen and (min-width: 767px) {
    width: 120rem;
    margin: 4rem auto;
  gap: 4rem;
  }

  .back__buton {

  }

  .image__panel {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
    overflow: hidden;

    @media only screen and (min-width: 767px) {
      height: 50rem;
    }

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 0.5rem;
    }
  }

  .content__panel {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2.4rem;
    border-radius: 0.5rem;
    background-color: #ffffff;
    box-shadow: rgb(2 36 41 / 10%) 0px 8px 16px 0px;
    gap: 4rem;

    p {

      span {
        font-size: 1.8rem;
        font-weight: 700;
        color: #ff5722;
        margin-right: 1.2rem;
      }

    }
  }

  .bordering__countries {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2.4rem;
    border-radius: 0.5rem;
    background-color: #ffffff;
    box-shadow: rgb(2 36 41 / 10%) 0px 8px 16px 0px;
    gap: 4rem;

    .border__countries {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2.4rem;

      @media only screen and (min-width: 767px) {
        display: grid;
        grid-template-columns: 50% 1fr;
      }
    }
  }
`;

export { CountryDetailsStyled };