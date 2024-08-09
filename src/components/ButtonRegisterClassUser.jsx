import React from "react";
// import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

function ButtonRegisterClass() {
  return (
    <div className="p-10 flex justify-center gap-3 lg:flex-col-reverse ">
      <Link to="/checkout">
        <button className="w-36 h-10  lg:w-full hover:bg-blue-500 rounded-lg bg-btn-card border border-gray-400 text-white ">
          Daftar
        </button>
      </Link>
    </div>
  );
}

export default ButtonRegisterClass;
