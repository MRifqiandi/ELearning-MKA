import { Card } from "flowbite-react";
import ButtonComp from "../Button/ButtonComp";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CardCompAsync() {
  const [progress, setProgress] = useState(0);

  // Mengambil progress dari localStorage ketika komponen dimuat
  useEffect(() => {
    const storedProgress = localStorage.getItem("reactClassAsyncProgress");
    if (storedProgress) {
      setProgress(parseInt(storedProgress, 10));
    }
  }, []);

  return (
    <Card className="w-auto md:max-w-sm rounded-xl drop-shadow-custom-card cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-300">
      <Link to={""}>
        <img
          src="/src/assets/Intersect.svg"
          className="absolute object-cover top-7 left-16 -z-0 w-32 h-14 transform -translate-x-1/2 -translate-y-1/2"
        />
        <div className="flex gap-14 md:gap-20">
          <div className="flex flex-col gap-4 md:gap-10">
            <div>
              <h5 className="text-mds md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-be-vietnam-pro ">
                React Js
              </h5>
              <p className="text-xs font-normal text-gray-700 dark:text-gray-400 font-be-vietnam-pro">
                35 Lessons
              </p>
              <p className="text-xs font-normal text-gray-700 dark:text-gray-400 font-be-vietnam-pro">
                Progress: {progress}%
              </p>
            </div>
            <ButtonComp />
          </div>
          <img className="w-20 md:w-28" src="/src/assets/react.svg" />
          <img
            className="absolute object-cover bottom-14 right-20 -z-0 w-40 h-28 transform translate-x-1/2 translate-y-1/2"
            src="/src/assets/Intersect-bottom-right.svg"
          />
        </div>
      </Link>
    </Card>
  );
}

export default CardCompAsync;
