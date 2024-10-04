import { Card } from "flowbite-react";
import { useState } from "react";
import MeetDetailSync from "../Card/MeetDetailSync";

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
        className="relative w-full md:max-w-sm bg-white border border-gray-200 rounded-xl shadow-md cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:border-gray-400"
        onClick={handleCardClick}
        style={{ zIndex: isPopupOpen ? 0 : 1 }}
      >
        <div className="relative">
          {/* Background Decorative SVG */}
          <img
            src="/src/assets/Intersect.svg"
            className="absolute object-cover top-0 left-1/2 w-40 h-16 opacity-10 transform -translate-x-1/2"
            alt="Top Decoration"
          />
          <div className="flex flex-col gap-6 z-10">
            {/* Card Header */}
            <div className="flex flex-col gap-2">
              <h5 className="text-2xl font-bold tracking-tight text-gray-800">
                Pertemuan 1
              </h5>
              <div className="w-full h-[1px] bg-gray-300"></div>
              <h6 className="text-lg font-medium tracking-tight text-gray-600">
                Variabel
              </h6>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Bottom Decorative SVG */}
          <img
            className="absolute bottom-0 right-0 w-32 h-20 opacity-20"
            src="/src/assets/Intersect-bottom-right.svg"
            alt="Bottom Decoration"
          />
        </div>
      </Card>

      {isPopupOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-6 transition-opacity duration-300 ease-in-out"
          style={{ zIndex: 9999 }}
        >
          <div className="relative  p-6 rounded-lg shadow-lg max-w-xl w-full">
            {/* Close Button */}
            <button
              className="absolute  text-3xl text-red-500 hover:text-gray-700"
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
