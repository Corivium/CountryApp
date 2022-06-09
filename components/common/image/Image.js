import { ImageStyled } from "./ImageStyled.styled";

const Image = ({ src, large, small }) => {

  const { svg, png } = src;

  return (
    <ImageStyled src={svg ? svg : png} large={large} small={small} />
  );
}
export { Image };