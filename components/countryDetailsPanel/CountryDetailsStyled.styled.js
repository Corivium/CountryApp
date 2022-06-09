import styled from "styled-components";

const CountryDetailsStyled = styled.div`
  width: 80rem;
  min-height: 50rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: lightgrey;
  margin: 0 auto;
  position: relative;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 4px 4px 25px -2px rgba(0, 0, 0, 0.1);

  .leftpanel {
	  box-shadow: 4px 4px 25px -2px rgba(0, 0, 0, 0.3);
    border-radius: 0.5rem;
    overflow: hidden;
    height: 90%;
    width: 45rem;
    left: -5rem;
    position: absolute;
    max-height: 60rem;
    top: 5rem;

    img {
      object-fit: cover;   
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }

  .rightpanel {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 5rem;
    height: 100%;
    width: 40rem;
    margin-left: 40rem;
    gap: 4rem;

    .country__name {
      position: relative;
      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -22px;
        width: 100%;
        height: 2px;
        margin: 5px 0 0;
        background-color: orange;
      }
    }

    .border__countries {
      width: 100%;
      display: grid;
      grid-template-columns: 50% 1fr;
      gap: 2.4rem;
      justify-content: center;
      align-items: center;
    }
  }
`;

export { CountryDetailsStyled };