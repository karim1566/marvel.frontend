import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Signup = ({ handleToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handlSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3002/signup", {
        email: email,
        username: username,
        password: password,
        newsletter: newsletter,
      });

      if (response.data.token) {
        handleToken(response.data.token);

        navigate("/");
      }
    } catch (error) {
      if (error.response.data.message === "This email already has an account") {
        setErrorMessage(
          "Cet email est déjà utilisé, veuillez créer un compte avec un mail valide."
        );
      }
      if (error.response.data.message === "Missing parameters") {
        setErrorMessage("Veuillez remplir tous les champs svp.");
      }
    }
  };

  return Cookies.get("token-marvel") ? (
    navigate("/")
  ) : (
    <form onSubmit={handlSubmit} className="container">
      <h1 className="tform">Rencontre tes heros</h1>
      <label>Username</label>
      <input
        placeholder="username"
        type="text"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      ></input>
      <label>Email</label>
      <input
        placeholder="email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        type="email"
      ></input>
      <label>Password</label>
      <input
        placeholder="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        type="password"
      ></input>
      <label>Newsletter</label>
      <input
        onChange={(event) => {
          setNewsletter(!newsletter);
        }}
        type="checkbox"
      ></input>
      <button className={errorMessage ? "nogood" : "selec"} type="submit">
        Inscrit-toi!
      </button>
      <button
        className="selec"
        onClick={() => {
          navigate("/login");
        }}
      >
        Si tu a deja un compte
      </button>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </form>
  );
};

export default Signup;
