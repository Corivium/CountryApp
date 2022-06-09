import Link from "next/link";
import { Image } from "../common/image/Image";
import { BorderingCountryStyled } from "./BorderingCountryStyled.styled";

//Hooks
import Apphook from "../../hooks/Apphook";

const BorderingCountry = ({ border }) => {
  const { name, capital, flags, population, cca2, cioc } = border;
  const { common: borderName } = name;
  const { formatPopulation } = Apphook();

  return (
      <BorderingCountryStyled>
        <Link 
          href={{
            pathname: `/country/${cioc}`
          }}
        >
          <a>
            <Image src={flags} small />
            <div className="info__panel">
              {borderName && <p className="country__title">{borderName}</p>}
              {capital && <p><span>Capital:</span> {capital}</p>}
              {population && <p><span>Population:</span> {formatPopulation(population)}</p>}
            </div>
          </a>
        </Link>
      </BorderingCountryStyled>
  )
}

export default BorderingCountry;