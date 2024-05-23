import { Link } from "react-router-dom";
import { HeaderWrapper, HeaderIcon } from "./Header-styled";
import icons from "../../assets/icons.svg";


const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <HeaderIcon>
          <use href={`${icons}#logo-header`}></use>
        </HeaderIcon>
      </Link>
    </HeaderWrapper>
  );
};

export default Header;