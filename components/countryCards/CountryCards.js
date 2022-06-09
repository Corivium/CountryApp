import propTypes from "prop-types";
import Link from 'next/link'
import CountryCardStyled from "./CountryCards.styled";
import { CountryCardContainer } from "./CountryCardContainer.styled";
import { Image } from "../common/image/Image";

const CountryCards = ({ countries }) => {

  return (
    <CountryCardContainer>
      {countries?.map((country) => {
        // destructure all values from country props
        const { name, capital, flags, population, cca2, cioc } = country;
        // destructure common from name and rename as countryName
        const { common: countryName } = name;
        return (
          <CountryCardStyled key={cca2}>
            <Link
              href={{
                pathname: `/country/${cioc}`
              }}
            >
            <a>
              <div className="left__panel">
                <Image src={flags} large/>
              </div>
              <div className="right__panel">
                <h2 className="country__name">{countryName}</h2>
                <p><span>Capital:</span> {capital}</p>
                <p><span>Population:</span> {population}</p>
              </div>
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
