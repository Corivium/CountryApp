import { css } from "styled-components";

const ThemeStyles = css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    font-variant-numeric: lining-nums;
  }
  html {
    -webkit-text-size-adjust: 100%;
  }
  html,
  body {
    font-family: "Kdam Thmor Pro", sans-serif;
    font-weight: normal;
    padding: 0;
    margin: 0;
    max-width: 100%;
    width: 100%;
    word-wrap: break-word;
    -webkit-font-smoothing: antialiased;
    font-size: 10px;
  }
  body {
    margin: 0 auto;
    background-color: #f3f3f3;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 10px;
    font-family: inherit;
    vertical-align: baseline;
    font-size: 1.6rem;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
	
  img {
    max-width: 100%;
    color: transparent;
  }

  h1 {
    font-size: 3rem;
    line-height: 3.6rem;

    @media only screen and (min-width: 767px) {
      font-size: 4.8rem;
      line-height: 5.6rem;
    }
  }

  h2 {
    font-size: 2.2rem;
    line-height: 2.8rem;

    @media only screen and (min-width: 767px) {
      font-size: 3.6rem;
      line-height: 4.2rem;
    }
  }

  h3 {
    font-size: 2rem;
    line-height: 2.8rem;

    @media only screen and (min-width: 767px) {
      font-size: 3rem;
      line-height: 3.6rem;
    }
  }

  h4 {
    font-size: 1.8rem;
    line-height: 2.2rem;

    @media only screen and (min-width: 767px) {
      font-size: 2.6rem;
      line-height: 3.1rem;
    }
  }

  h5 {
    font-size: 1.6rem;
    line-height: 2.4rem;

    @media only screen and (min-width: 767px) {
      font-size: 2.2rem;
      line-height: 2.6rem;
    }
  }

  h6 {
    font-size: 1.4rem;
    line-height: 2.4rem;

    @media only screen and (min-width: 767px) {
      font-size: 2rem;
      line-height: 2.6rem;
    }
  }
  p {
    font-size: 1.4rem;
    line-height: 2.4rem;

    @media only screen and (min-width: 767px) {
      font-size: 1.8rem;
      line-height: 2.6rem;
    }
  }
`;

export { ThemeStyles };
