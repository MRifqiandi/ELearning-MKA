import React from "react";

function CardMentor() {
  return (
    <div className="w-80 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex gap-3">
        <img
          className="w-24 h-24"
          src="/src/assets/instructor.jpg"
          alt="Mentor"
        />
        <div className="flex items-center gap-3 justify-center">
          <div>
            <h1 className="font-bold opacity-80 text-lg">Muhammad Rifqiandi</h1>
            <h3 className="font-normal opacity-70 text-md">
              Front End Specialist
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardMentor;
