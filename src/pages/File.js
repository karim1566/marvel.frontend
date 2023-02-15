import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const File = () => {
  const [character, setCharater] = useState({});
  const [isLoading, setIsloading] = useState(true);

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3002/character/${id}`
        );

        setCharater(response.data);
        setIsloading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  console.log(character);

  return isLoading ? <p>En cour de chargement</p> : <div></div>;
};

export default File;
