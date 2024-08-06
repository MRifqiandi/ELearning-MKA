import React from "react";
import DropdownCda from "./DropdownCda";

function Chapter() {
  const chapter1Items = [
    { label: "Introduction", href: "#" },
    { label: "Overview", href: "#" },
    { label: "Key Concepts", href: "#" },
  ];

  const chapter2Items = [
    { label: "Chapter 2 Overview", href: "#" },
    { label: "Detailed Study", href: "#" },
    { label: "Important Points", href: "#" },
  ];

  return (
    <div className="space-y-4">
      <DropdownCda title="Chapter 1: Course Overvie]]" items={chapter1Items} />
      <DropdownCda title="Chapter 2: Advanced Topics" items={chapter2Items} />
    </div>
  );
}

export default Chapter;
