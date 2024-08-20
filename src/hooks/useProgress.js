import { useState, useEffect } from "react";

const useProgress = (totalLessons) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const storedProgress = localStorage.getItem("reactClassProgress");
    if (storedProgress) {
      setProgress(parseFloat(storedProgress));
    }
  }, []);

  const updateProgress = (completedLessonId) => {
    const newProgress = Math.max(
      progress,
      (completedLessonId / totalLessons) * 100
    );

    if (newProgress > 100) {
      setProgress(100);
      localStorage.setItem("reactClassProgress", 100);
    } else {
      setProgress(newProgress);
      localStorage.setItem("reactClassProgress", newProgress);
    }
  };
  const resetProgress = () => {
    setProgress(0);
    localStorage.removeItem("reactClassProgress");
  };

  return [progress, updateProgress, resetProgress];
};

export default useProgress;
