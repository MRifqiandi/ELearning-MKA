import { useEffect, useState } from "react";
import { Card, Progress, Button } from "flowbite-react";
import ButtonComp from "../Button/ButtonComp";
import { Link } from "react-router-dom";

function CardCompSync() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const storedProgress = localStorage.getItem("reactClassProgress");
    if (storedProgress) {
      setProgress(parseFloat(storedProgress));
    }
  }, []);

  console.log("Current progress:", progress);

  return (
    <Card className="w-auto md:max-w-sm rounded-xl drop-shadow-custom-card cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-300">
      <Link to={"/cds"}>
        <img
          src="/src/assets/Intersect.svg"
          className="absolute object-cover top-7 left-16 -z-0 w-32 h-14 transform -translate-x-1/2 -translate-y-1/2"
        />
        <div className="flex gap-14 md:gap-20">
          <div className="flex flex-col gap-4 md:gap-10">
            <div>
              <h5 className="text-md md:text-lg font-bold tracking-tight text-gray-900 dark:text-white font-be-vietnam-pro">
                Class React Js
              </h5>
              <p className="text-sm font-normal text-gray-700 dark:text-gray-400 font-be-vietnam-pro ">
                11 Lessons
              </p>
              <Progress size="md" progress={progress} color="blue" max={100} />
            </div>
            <Link to="/cds">
              <Button className="flex justify-center items-center bg-btn-card h-8 md:w-28 md:h-9">
                Details
              </Button>
            </Link>
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

export default CardCompSync;
