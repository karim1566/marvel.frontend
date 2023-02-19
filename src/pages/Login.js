import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [good, setGood] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3002/login", {
        email: email,
        password: password,
      });

      if (response.data.token) {
        handleToken(response.data.token);
        setGood("");
        navigate("/");
      }
    } catch (error) {
      if (error.response.data.message) {
        setGood(error.response.data.message);
      }
      console.log(error.response.data);
    }
  };

  return Cookies.get("token-marvel") ? (
    navigate("/")
  ) : (
    <form className="container" onSubmit={handleSubmit}>
      <h2 className="tform">Rencontre tes heros</h2>
      <label>Email</label>
      <input
        type="email"
        placeholder="email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      ></input>
      <label>Password</label>
      <input
        type="password"
        placeholder="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      ></input>

      <button className={good ? "nogood" : "selec"} type="submit">
        Connectez-vous!
      </button>

      <button
        className="selec"
        onClick={() => {
          navigate("/signup");
        }}
      >
        Si tu n'a pas de compte!
      </button>
      {good && (
        <span style={{ color: "red" }}>Vos identifiant sont incorrect</span>
      )}
    </form>
  );
};

export default Login;
