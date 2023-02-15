import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

const Header = ({
  title,
  setTitle,
  limit,
  setlimit,
  skip,
  setSkip,
  token,
  setToken,
}) => {
  return (
    <header>
      <nav className="container displayraw">
        <Link to="/">
          <img src={logo} alt="" style={{ width: "200px" }} />
        </Link>
        <Link to="/character">
          <button>Personnages</button>
        </Link>
        <Link to="comics">
          <button>Comics</button>
        </Link>
        <Link to="favoris">
          <button>Favoris</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
