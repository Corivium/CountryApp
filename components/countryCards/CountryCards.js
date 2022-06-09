import propTypes from "prop-types";
import Link from 'next/link'
import CountryCardStyled from "./CountryCards.styled";
import { CountryCardContainer } from "./CountryCardContainer.styled";
import { Image } from "../common/image/Image";

const CountryCards = ({ countries }) => {

  return (
    <CountryCardContainer>
      {countries?.map((country) => {
        const { name, capital, flags, population, cca2, cioc, currencies } = country;
        const { common: countryName } = name;
        const code = Object.keys(currencies)[0];
        return (
          <CountryCardStyled key={cca2}>
            <Link
              href={{
                pathname: `/country/${cioc}`
              }}
            >
            <a>
              <Image src={flags} />
              <h4>{countryName}</h4>
              <p>{capital}</p>
              <span>{population}</span>
            </a>
            </Link>
          </CountryCardStyled>
        );
      })}
    </CountryCardContainer>
  );
};

export default CountryCards;

/* CountryCards.propTypes = {
  countries: PropTypes.array
} */
