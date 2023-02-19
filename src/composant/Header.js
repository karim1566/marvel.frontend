import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import Cookies from "js-cookie";

const Header = ({ token, handleToken }) => {
  const navigate = useNavigate();
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
      {Cookies.get("token-marvel") ? (
        <div className="connect container">
          <button
            className="action"
            onClick={() => {
              handleToken(null);
              navigate("/signup");
            }}
          >
            Se deconnecter
          </button>
        </div>
      ) : (
        <div className="connect container">
          <Link to="/signup" className="margin">
            <button className="action">S'inscrire</button>
          </Link>
          <span>||</span>
          <Link to="/login">
            <button className="action">Se connecter</button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
