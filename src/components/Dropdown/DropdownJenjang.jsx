import React, { useState } from "react";

const DropdownJenjang = () => {
  const [selectedLevel, setLevel] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const level = [
    "Sekolah Dasar (SD)",
    "Sekolah Menengah Pertama (SMP)",
    "Sekolah Menengah Atas (SMA)",
    "Sekolah Menengah Kejuruan (SMK)",
    "Diploma (D3/D4)",
    "Sarjana (S1)",
    "Magister (S2)",
    "Doktor (S3)",
  ];

  const handleSelect = (job) => {
    setLevel(job);
    setIsOpen(false); // Tutup dropdown setelah memilih
  };

  const toogleDropdownLevel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block w-full text-left">
      <label
        htmlFor="job-dropdown"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Jenjang pendidikan
      </label>
      <button
        onClick={toogleDropdownLevel}
        className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex justify-between items-center"
        type="button"
      >
        {selectedLevel || "Pilih Jenjang Pendidikan Anda"}
        <svg
          className={`w-5 h-5 ml-2 transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
            {level.map((job, index) => (
              <li key={index}>
                <button
                  onClick={() => handleSelect(job)}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {job}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownJenjang;