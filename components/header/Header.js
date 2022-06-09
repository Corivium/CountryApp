import Link from "next/link";
import { HeaderStyled } from "./HeaderStyled.styled";

const Header = () => {
  
  return (
    <HeaderStyled>
      <Link href="/">
        <a>
          <h1>Countries App</h1>
        </a>
      </Link>
    </HeaderStyled>
  )
}

export default Header;