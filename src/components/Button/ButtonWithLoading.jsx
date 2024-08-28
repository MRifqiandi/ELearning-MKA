import { useState } from "react";

const ButtonWithLoading = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className={`px-4 py-2 text-white bg-blue-500 rounded-md ${
        isLoading ? "bg-blue-300 cursor-not-allowed" : "hover:bg-blue-600"
      }`}
    ></button>
  );
};

export default ButtonWithLoading;
