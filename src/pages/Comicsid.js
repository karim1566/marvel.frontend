import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import loading from "../assets/img/loading.gif";

const Comicsid = () => {
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/comics/${id}`);

        setData(response.data);
        setIsloading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

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
  ) : (
    <div></div>
  );
};

export default Comicsid;
