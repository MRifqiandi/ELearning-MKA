import { useState } from "react";
import PropTypes from "prop-types";
import useMateri from "../../hooks/useMateri";

function DropdownCda({ label, items, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left pb-4">
      <button
        onClick={toggleDropdown}
        className="flex justify-between w-full items-center p-2 hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 cursor-pointer"
        type="button"
      >
        {label}
        <img
          src="/src/assets/arrow-down.svg"
          className="ml-2 w-5 h-5"
          alt="Arrow Down"
        />
      </button>

      <div
        className={`relative right-0 mt-2 w-full bg-white divide-y divide-gray-100 rounded-lg shadow ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="py-2 text-md text-gray-700">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                onSelect(item.id); // Pass only id to onSelect
                setIsOpen(false);
              }}
            >
              <img src={item.imgSrc} alt={item.text} className="w-6 h-6" />
              <div className="flex flex-col">
                <span className="font-medium">{item.text}</span>
                <span className="text-xs text-gray-500">
                  {item.description}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

DropdownCda.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired, // Add id prop
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
};

function Chapter({ onMateriSelect }) {
  const materi = useMateri();
  const dropdownItems = materi.map((item) => ({
    text: item.judul,
    imgSrc: "/src/assets/play.svg", // Sesuaikan dengan gambar yang ada
    description: item.content.slice(0, 50) + "...", // Menampilkan potongan isi
    url: `/lesson/${item.id}`,
    id: item.id,
  }));

  return (
    <div className="flex flex-col font-semibold justify-start w-full">
      <DropdownCda
        label="Materi"
        items={dropdownItems}
        onSelect={(id) => onMateriSelect(id)}
      />
    </div>
  );
}

Chapter.propTypes = {
  onMateriSelect: PropTypes.func.isRequired,
};

export default Chapter;
