import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "6021684780mshb2332a64bcacc34p1fee40jsna4c42358adb9",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: {
      ...query,
    },
  };

  const fetchData = async () => {
    setIsloading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsloading(false);
    } catch (error) {
      setError(error);
      alert("There is an error");
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsloading(true);
    fetchData();
  };

  return { data, isloading, error, refetch };
};

export default useFetch;
