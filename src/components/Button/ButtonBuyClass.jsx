import React from "react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

function ButtonBuyClass() {
  return (
    <div className="p-10 flex justify-center gap-3 lg:flex-col-reverse ">
      <button className="w-36 flex  justify-center gap-1 items-center lg:w-full h-10 rounded-lg bg-white border border-gray-400 hover:bg-gray-100 text-gray-400 ">
        <img className="w-5" src="/src/assets/heart-wishlist.svg" />
        Wishlist
      </button>

      <Link to="/checkout">
        <button className="w-36 h-10  lg:w-full hover:bg-blue-500 rounded-lg bg-btn-card border border-gray-400 text-white ">
          Buy
        </button>
      </Link>
    </div>
  );
}

export default ButtonBuyClass;
