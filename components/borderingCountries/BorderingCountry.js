import { Image } from "../common/image/Image";
import { BorderingCountryStyled } from "./BorderingCountryStyled.styled";

const BorderingCountry = ({ border }) => {
  const { name, capital, flags, population, cca2 } = border;
  const { common: borderName } = name;

  return (
      <BorderingCountryStyled>
        <Image src={flags} small />
        <p>{borderName}</p>
      </BorderingCountryStyled>
  )
}

export default BorderingCountry;