import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Character = ({ name, setName, limit, skip }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3002/characters?limit=${limit}&skip=${skip}&name=${name}`
        );

        setData(response.data);

        setIsloading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [limit, skip, name]);
  console.log(data.results);

  return isLoading ? (
    <p>En cours de chargement</p>
  ) : (
    <div className="container">
      {data.results.map((item) => {
        console.log(item);
        const id = item._id;
        return (
          <div key={item._id}>
            <h4>{item.name}</h4>
            <Link to={`/File/${id}`}>
              <img
                style={{ width: "200px" }}
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                alt=""
              />
            </Link>

            <p style={{ width: "200px" }}>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Character;
