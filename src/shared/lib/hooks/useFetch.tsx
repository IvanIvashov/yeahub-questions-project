import { useEffect, useState } from "react";

function useFetchList(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);

        const response = await res.json();

        setData(Array.isArray(response) ? response : response.data || []);
      } catch (err) {
        console.log(err);
        setData([]);
      }
    }

    fetchData();
  }, [url]);

  return data;
}

export default useFetchList;
