import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import loading from "../assets/img/loading.gif";
const File = () => {
  const [character, setCharater] = useState({});
  const [isLoading, setIsloading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--q5p6j62kpgtk.code.run/comics/${id}`
        );

        setCharater(response.data);
        setIsloading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

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
          width: "1400px",
        }}
      />
    </div>
  ) : (
    <div className="container">
      <h1>{character.name}</h1>
      <div className="file">
        <img
          style={{ width: "600px", borderRadius: "10px", objectFit: "contain" }}
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt=""
        />
        <h4 style={{ color: "white" }}>Apparue dans les comics</h4>
        <div className="block">
          {character.comics.map((item) => {
            console.log(item);
            return (
              <div key={item._id} className="menu">
                <img
                  style={{ width: "100px", objectFit: "cover" }}
                  src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  alt=""
                />
                <div>
                  <h2 style={{ width: "200px" }}>{item.title}</h2>
                  <p style={{ width: "200px", fontSize: "10px" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default File;
