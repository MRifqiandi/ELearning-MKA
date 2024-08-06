import React from "react";

function Instructor() {
  return (
    <div className="flex flex-col p-4 lg:p-8">
      <div>
        <h1 className="font-bold text-3xl mb-2">Popular Instructor</h1>
        <h3 className="text-lg mb-6 text-gray-600">
          We know the best things for you. Top picks for you
        </h3>
      </div>
      <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
        <div className="relative w-[285px] flex-shrink-0">
          <img
            className="w-full h-[400px] rounded-2xl shadow-inner"
            src="/src/assets/instructor.jpg"
            alt="Instructor"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black opacity-50 pointer-events-none"></div>
          <h1 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white px-4 py-2 rounded-lg text-center text-xl w-full font-semibold">
            Muhammad Rifqiandi
          </h1>
          <h1 className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-white px-4 py-2 rounded-lg text-center text-md w-full font-light">
            Front End Developer
          </h1>
        </div>
        <div className="relative w-[285px] flex-shrink-0">
          <img
            className="w-full h-[400px] rounded-2xl shadow-inner"
            src="/src/assets/instructor.jpg"
            alt="Instructor"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black opacity-50 pointer-events-none"></div>
          <h1 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white px-4 py-2 rounded-lg text-center text-xl w-full font-semibold">
            Muhammad Rifqiandi
          </h1>
          <h1 className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-white px-4 py-2 rounded-lg text-center text-md w-full font-light">
            Front End Developer
          </h1>
        </div>
        <div className="relative w-[285px] flex-shrink-0">
          <img
            className="w-full h-[400px] rounded-2xl shadow-inner"
            src="/src/assets/instructor.jpg"
            alt="Instructor"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black opacity-50 pointer-events-none"></div>
          <h1 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white px-4 py-2 rounded-lg text-center text-xl w-full font-semibold">
            Muhammad Rifqiandi
          </h1>
          <h1 className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-white px-4 py-2 rounded-lg text-center text-md w-full font-light">
            Front End Developer
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Instructor;
