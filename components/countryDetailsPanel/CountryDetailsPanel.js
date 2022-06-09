import { CountryDetailsStyled } from "./CountryDetailsStyled.styled";
import { Image } from "../common/image/Image";
import BorderingCountry from "../borderingCountries/BorderingCountry";

const CountryDetailsPanel = ({ data, borders }) => {

  const { name, capital, flags, population, cca2 } = data;
  const { common: countryName } = name;
  return (
    <CountryDetailsStyled>
      <div className="leftpanel">
        {flags && <Image src={flags} large/>}
      </div>
      <div className="rightpanel">
        <h2 className="country__name">{countryName}</h2>
        <p>Capital city: <b>{capital}</b></p>
        <p>Population: <b>{population}</b></p>
        <p>Country Code: <b>{cca2}</b></p>

        <p>Bordering Countries:</p>
        <div className="border__countries">
          {borders?.map((border) => {
            return <BorderingCountry border={border} />
          })}
        </div>
      </div>
    </CountryDetailsStyled>
  );
}

export default CountryDetailsPanel;