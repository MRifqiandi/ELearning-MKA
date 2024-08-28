import { Card } from "flowbite-react";
import { useState } from "react";
import MeetDetailSync from "./MeetDetailSync";

function CardWeekSync() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCardClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <Card
        className="w-full md:max-w-sm rounded-xl shadow-lg border-gray-300 cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-300"
        onClick={handleCardClick}
        style={{ zIndex: isPopupOpen ? 0 : 1 }}
      >
        <div className="relative">
          <img
            src="/src/assets/Intersect.svg"
            className="absolute object-cover top-7 left-16 -z-0 w-32 h-14 transform -translate-x-1/2 -translate-y-1/2"
          />
          <div className="flex flex-col gap-14 md:gap-20">
            <div className="flex flex-col gap-3">
              <h5 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-be-vietnam-pro">
                Pertemuan 1
              </h5>
              <div className="w-full h-[1px] bg-black"></div>
              <h5 className="text-lg tracking-tight text-gray-900 dark:text-white font-be-vietnam-pro">
                Variabel
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>

            <img
              className="absolute object-cover bottom-14 right-20 -z-0 w-40 h-28 transform translate-x-1/2 translate-y-1/2"
              src="/src/assets/Intersect-bottom-right.svg"
            />
          </div>
        </div>
      </Card>

      {isPopupOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-5"
          style={{ zIndex: 9999 }}
        >
          <div className="relative rounded-lg shadow-lg max-w-xl w-full">
            <button
              className="absolute top-2 right-2 text-2xl text-red-500"
              onClick={handleClosePopup}
            >
              ✖
            </button>
            <MeetDetailSync />
          </div>
        </div>
      )}
    </div>
  );
}

export default CardWeekSync;
