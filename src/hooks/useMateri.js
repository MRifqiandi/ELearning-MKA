import { useState, useEffect } from "react";

const useMateri = () => {
  const [materi, setMateri] = useState([]);

  useEffect(() => {
    const fetchMateri = async () => {
      try {
        const response = await fetch("/data/materi.json");
        const data = await response.json();
        setMateri(data.materi);
      } catch (error) {
        console.error("Failed to fetch materi:", error);
      }
    };

    fetchMateri();
  }, []);

  return materi;
};

export default useMateri;
