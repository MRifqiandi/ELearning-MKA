import React, { useState } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
// Komponen Dropdown
function Dropdown({ label, items }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left pb-4">
      <button
        onClick={toggleDropdown}
        className=" flex justify-between  w-full items-center p-2 hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 cursor-pointer"
        type="button"
      >
        {label}
        <img
          src="/src/assets/arrow-down.svg" // Pastikan path gambar benar
          className="ml-2 w-5 h-5"
          alt="Arrow Down"
        />
      </button>

      <div
        className={`relative right-0 mt-2 w-full  bg-white divide-y divide-gray-100 rounded-lg shadow ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="py-2 text-md  text-gray-700">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
            >
              <img src={item.imgSrc} alt={item.text} className="w-6 h-6" />
              <Link to={item.url} className="flex flex-col">
                <span className="font-medium">{item.text}</span>
                <span className="text-xs text-gray-500">
                  {item.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// Komponen App
function Chapter() {
  const chapter1Items = [
    {
      text: "Introduction",
      imgSrc: "/src/assets/play.svg",
      description: "Learn the basics",
      url: "/",
    },
    {
      text: "Basics",
      imgSrc: "/src/assets/play.svg",
      description: "Fundamental concepts",
      url: "/",
    },
    {
      text: "Getting Started",
      imgSrc: "/src/assets/play.svg",
      description: "How to begin",
      url: "/",
    },
  ];

  const chapter2Items = [
    {
      text: "Advanced Courses",
      imgSrc: "/src/assets/play.svg",

      description: "In-depth topics",
      url: "/",
    },
    {
      text: "Expert Techniques",
      imgSrc: "/src/assets/play.svg",

      description: "Professional skills",
      url: "/",
    },
    {
      text: "Mastering Skills",
      imgSrc: "/src/assets/play.svg",

      description: "Become a master",
      url: "/",
    },
  ];

  return (
    <div className="flex flex-col font-semibold justify-start w-full">
      <Dropdown label="Chapter 1 : Course Overview" items={chapter1Items} />
      <Dropdown label="Chapter 2 : Advanced Courses" items={chapter2Items} />
    </div>
  );
}

export default Chapter;
