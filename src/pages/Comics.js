import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import loading from "../assets/img/loading.gif";
// COMPOSANT
import Selecteur from "../composant/Selecteur";
import Cookies from "js-cookie";

const Comics = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsloading] = useState(true);
  const [title, setTitle] = useState("");
  const [limit, setLimit] = useState(100);
  const [skip, setSkip] = useState(0);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://site--marvel-backend--q5p6j62kpgtk.code.run/comics?title=${title}&limit=${limit}&skip=${skip}`
      );

      setData(response.data);

      setIsloading(false);
    };
    fetchData();
  }, [limit, skip, title, setData]);
  console.log(data);
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
        setTitle={setTitle}
        setSkip={setSkip}
        setLimit={setLimit}
        skip={skip}
      />
      <h1>COMICS</h1>
      <div>
        {data.results.map((item, index) => {
          // const id = item._id;

          return (
            <div
              key={item._id}
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginBottom: "10px",
                marginTop: "20px",
                borderBottom: "10px solid white",
                borderRight: "10px solid red",
                borderLeft: "10px solid red",
              }}
            >
              {/* <Link to={`/comics/${id}`}> */}
              <div>
                <img
                  style={{ width: "200px" }}
                  src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  alt=""
                />
              </div>
              {/* </Link> */}
              <div
                style={{
                  width: "600px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  backgroundColor: "white",
                  padding: "25px",
                }}
              >
                <h3 style={{ borderBottom: "grey solid 2px" }}>{item.title}</h3>
                <p style={{ fontSize: "17px" }}>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comics;
