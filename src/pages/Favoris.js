import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import loading from "../assets/img/loading.gif";

const Favoris = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsloading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const FetchData = async () => {
      try {
        if (!Cookies.get("token-marvel")) {
          return navigate("/signup");
        }

        const response = await axios.post(
          `https://site--marvel-backend--q5p6j62kpgtk.code.run/favoris/${Cookies.get(
            "token-marvel"
          )}`
        );

        setData(response.data);
        setIsloading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    FetchData();
  }, [navigate]);

  return isLoading ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={loading}
        alt=""
        style={{
          width: "100vh",
        }}
      />
    </div>
  ) : (
    <div>
      <h1>Favoris</h1>
      {data.map((item) => {
        const { img, description, name } = item;
        return (
          <div key={item._id} className="fav container">
            <img
              style={{ width: "100px", flex: "1", objectFit: "contain" }}
              src={img}
              alt=""
            />

            <h4 style={{ color: "white", flex: "2" }}>{name}</h4>
            <p style={{ color: "white", flex: "2" }}>{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Favoris;
