import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import loading from "../assets/img/loading.gif";
// COMPOSANT
import Selecteur from "../composant/Selecteur";
import Cookies from "js-cookie";

const Character = () => {
  const [isLoading, setIsloading] = useState(true);
  const [data, setData] = useState({});
  const [limit, setLimit] = useState("");
  const [skip, setSkip] = useState(0);
  const [name, setName] = useState("");
  const [favoris, setFavoris] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--q5p6j62kpgtk.code.run/character?limit=${limit}&skip=${skip}&name=${name}`
        );

        setData(response.data);

        setIsloading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [limit, skip, name, setData]);

  const handleFavorite = async (event) => {
    try {
      const newfavorie = await axios.post(
        "https://site--marvel-backend--q5p6j62kpgtk.code.run/favorite/add",
        {
          name: event.name,
          description: event.description,
          img: event.img,
          token: Cookies.get("token-marvel"),
        }
      );
      setFavoris(newfavorie);
      console.log(favoris);
    } catch (error) {}
  };

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
  ) : !Cookies.get("token-marvel") ? (
    navigate("/signup")
  ) : (
    <div className="container">
      <Selecteur
        tab={data.results}
        setName={setName}
        setSkip={setSkip}
        skip={skip}
        setLimit={setLimit}
      />
      <h1>PERSONNAGES</h1>
      <div className="block">
        {data.results.map((item) => {
          const id = item._id;
          return (
            <div className="charactere morph" key={item._id}>
              <Link to={`/character/${id}`}>
                <img
                  style={{
                    width: "200px",
                    height: "200px",
                  }}
                  src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  alt=""
                />
              </Link>

              <div
                style={{
                  backgroundColor: "black",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h4
                  style={{
                    marginBottom: "30px",
                    marginTop: "10px",
                    animation: "apparition 0.8s ease-out",
                  }}
                >
                  {item.name}
                </h4>
                <p style={{ width: "300px" }}>{item.description}</p>
                <button
                  className="selec"
                  onClick={() => {
                    handleFavorite({
                      img: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                      name: item.name,
                      description: item.description,
                    });
                  }}
                >
                  Ajoutez a vos favoris
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Character;
