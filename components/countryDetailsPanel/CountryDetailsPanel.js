import { useRouter } from "next/router";
import { CountryDetailsStyled } from "./CountryDetailsStyled.styled";
import { Image } from "../common/image/Image";
import BorderingCountry from "../borderingCountries/BorderingCountry";
import { BackButtonStyled } from "../common/button/ButtonStyled.styled";

//Hooks
import Apphook from "../../hooks/Apphook";

const CountryDetailsPanel = ({ data, borderingCountries }) => {

  const { name, capital, flags, population, cca2, currencies, languages } = data;
  const { common: countryName } = name;
  const { formatPopulation } = Apphook();
  const router = useRouter();

  const countryCurrency = Object.keys(currencies)[0];
  const currencyName = currencies[countryCurrency].name;
  const currencySymbol = currencies[countryCurrency].symbol;

  const countryLanguages = Object.keys(languages);
  const allLanguages = countryLanguages.map(language => languages[language]);

  return (
    <>
    {console.log("borders: ", borderingCountries)}
      <BackButtonStyled
        className="back__button"
        onClick={() => router.push("/")}
      >
        Back to homepage
      </BackButtonStyled>
      <CountryDetailsStyled>
        <div className="image__panel">{flags && <Image src={flags} large />}</div>

        <div className="content__panel">
          {countryName && <h2 className="country__name">{countryName}</h2>}
          {capital && (
            <p>
              <span>Capital city:</span> {capital}
            </p>
          )}
          {population && (
            <p>
              <span>Population:</span> {formatPopulation(population)}
            </p>
          )}
          {languages && (
            <p>
              <span>Language(s):</span> {allLanguages.join(", ")}
            </p>
          )}
          {cca2 && (
            <p>
              <span>Country Code:</span> {cca2}
            </p>
          )}
          {currencies && (
            <p>
              <span>Currency:</span>  ({currencySymbol}) {currencyName}
            </p>
          )}
        </div>

        {/* Check if borders data exists and that its length is greater than 0 before showing this area */}
        {borderingCountries && borderingCountries.length > 0 && (
          <div className="bordering__countries">
            <h5>Bordering Countries:</h5>
            <div className="border__countries">
              {borderingCountries.map((border) => {
                return <BorderingCountry border={border} key={border.cca2} />;
              })}
            </div>
          </div>
        )}
      </CountryDetailsStyled>
    </>
  );
};

export default CountryDetailsPanel;
