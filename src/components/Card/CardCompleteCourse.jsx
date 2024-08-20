import React from "react";

function CardCompleteCourse() {
  return (
    <div className="cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:bg-transparent hover:shadow-lg hover:shadow-blue-100">
      <img src="/src/assets/Placeholder 1.svg" />
      <div className="">
        <h1 className="font-bold">Java Programming Beginner</h1>
        <div className="flex">
          <img src="/src/assets/profile-black.svg" />
          <h1 className="text-title-home">Kitani Studio</h1>
        </div>
        <h2>4/10 Videos Completed</h2>
      </div>
    </div>
  );
}

export default CardCompleteCourse;
