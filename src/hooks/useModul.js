import { useState, useEffect } from "react";

const useModul = () => {
  const [modul, setModul] = useState([]);

  useEffect(() => {
    const fetchModul = async () => {
      try {
        const response = await fetch("/data/materi.json");
        const data = await response.json();
        setModul(data.modul);
      } catch (error) {
        console.error("Failed to fetch modul:", error);
      }
    };

    fetchModul();
  }, []);

  return modul;
};

export default useModul;
