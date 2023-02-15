import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

const Comics = ({ title, limit, skip }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3002/comics?title=${title}&limit=${limit}&skip=${skip}`
      );

      setData(response.data);

      setIsloading(false);
    };
    fetchData();
  }, [limit, skip, title]);

  return isLoading ? (
    <span>en cour de telechargement</span>
  ) : (
    <div className="fiche container">
      <h1>COMICS</h1>
      {data.results.map((item, index) => {
        console.log(item);

        return (
          <div
            key={item._id}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <img
                style={{ width: "200px" }}
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                alt=""
              />
            </div>

            <div
              style={{
                width: "600px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <h3>{item.title}</h3>
              <p style={{ fontSize: "25px" }}>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comics;
