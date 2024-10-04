// import { useState, useEffect } from "react";

// const DropdownCda = ({ setSelectedMateri }) => {
//   const [modulData, setModulData] = useState([]); // Menyimpan data modul dan materi
//   const [loading, setLoading] = useState(true); // Status loading
//   const [error, setError] = useState(null); // Menyimpan error jika ada
//   const [openModul, setOpenModul] = useState(null); // Menyimpan modul yang terbuka
//   const [isOpen, setIsOpen] = useState(false); // State untuk kontrol dropdown

//   // Fetch data menggunakan useEffect
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/public/data/materi.json"); // Ganti dengan URL API Anda
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const data = await response.json();
//         setModulData(data.modul); // Asumsi response berisi objek modul
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []); // Fetch hanya dilakukan sekali saat komponen pertama kali dimuat

//   // Tampilkan pesan loading atau error jika ada
//   if (loading) {
//     return <p className="text-center">Loading...</p>;
//   }

//   if (error) {
//     return <p className="text-center text-red-500">{error}</p>;
//   }

//   const toggleModul = (modulId) => {
//     // Jika modul yang sama diklik, tutup; jika tidak, buka modul baru
//     setOpenModul(openModul === modulId ? null : modulId);
//   };

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen); // Toggle dropdown
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 pr-10 ">
//       {/* Hamburger Button */}
//       <button
//         className={`fixed z-50 top-10 right-10 p-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl ${
//           isOpen ? "rotate-180" : ""
//         }`}
//         onClick={toggleDropdown}
//       >
//         {isOpen ? (
//           <svg
//             className="h-6 w-6 transition-transform duration-300 ease-in-out transform rotate-45"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         ) : (
//           <div className="flex flex-col justify-between h-6 w-8">
//             {/* Garis pertama lebih panjang */}
//             <span className="block h-1 bg-white rounded-full w-8 transform transition-all duration-300"></span>
//             {/* Garis kedua lebih pendek */}
//             <span className="block h-1 bg-white rounded-full w-6 transform transition-all duration-300"></span>
//             {/* Garis ketiga paling pendek */}
//             <span className="block h-1 bg-white rounded-full w-4 transform transition-all duration-300"></span>
//           </div>
//         )}
//       </button>

//       {isOpen && (
//         <div className="flex flex-col gap-4  h-screen w-full">
//           <h2 className="text-2xl font-bold text-center mb-5">
//             Modul dan Materi
//           </h2>
//           {modulData.map((modul) => (
//             <div key={modul.id} className="border border-gray-300 rounded-md">
//               {/* Header modul dengan toggle */}
//               <div
//                 className="p-4 bg-gray-200 flex justify-between items-center cursor-pointer hover:bg-gray-300 transition-colors duration-200"
//                 onClick={() => toggleModul(modul.id)} // Toggle dropdown saat diklik
//               >
//                 <span className="text-lg font-semibold">{modul.judul}</span>
//                 <span className="text-lg">
//                   {openModul === modul.id ? "▲" : "▼"}
//                 </span>
//               </div>

//               {/* Daftar materi di dalam modul */}
//               {openModul === modul.id && (
//                 <div className="p-4 bg-white border-t border-gray-300">
//                   {modul.materi.map((materi) => (
//                     <button
//                       key={materi.id}
//                       onClick={() => setSelectedMateri(materi)} // Panggil fungsi untuk set materi yang dipilih
//                       className="block text-left text-gray-800 hover:bg-gray-200 transition-colors duration-200 rounded-md p-2 w-full"
//                     >
//                       {materi.judul}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default DropdownCda;

import { useState, useEffect } from "react";

const DropdownCda = ({ setSelectedMateri, setMateriList }) => {
  const [modulData, setModulData] = useState([]); // Menyimpan data modul dan materi
  const [loading, setLoading] = useState(true); // Status loading
  const [error, setError] = useState(null); // Menyimpan error jika ada
  const [openModul, setOpenModul] = useState(null); // Menyimpan modul yang terbuka
  const [isOpen, setIsOpen] = useState(false); // State untuk kontrol dropdown

  // Fetch data menggunakan useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/public/data/materi.json"); // Ganti dengan URL API Anda
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setModulData(data.modul); // Asumsi response berisi objek modul
        const allMateri = data.modul.flatMap(modul => modul.materi); // Mengambil semua materi
        setMateriList(allMateri); // Set daftar materi di CoursesTabs
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Fetch hanya dilakukan sekali saat komponen pertama kali dimuat

  // Tampilkan pesan loading atau error jika ada
  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  const toggleModul = (modulId) => {
    setOpenModul(openModul === modulId ? null : modulId);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown
  };

  return (
    <div className="max-w-md mx-auto mt-10 pr-10 ">
      {/* Hamburger Button */}
      <button
        className={`fixed z-50 top-10 right-10 p-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl ${
          isOpen ? "rotate-180" : ""
        }`}
        onClick={toggleDropdown}
      >
        {isOpen ? (
          <svg
            className="h-6 w-6 transition-transform duration-300 ease-in-out transform rotate-45"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <div className="flex flex-col justify-between h-6 w-8">
            <span className="block h-1 bg-white rounded-full w-8 transform transition-all duration-300"></span>
            <span className="block h-1 bg-white rounded-full w-6 transform transition-all duration-300"></span>
            <span className="block h-1 bg-white rounded-full w-4 transform transition-all duration-300"></span>
          </div>
        )}
      </button>

      {isOpen && (
        <div className="flex flex-col gap-4  h-screen w-full">
          <h2 className="text-2xl font-bold text-center mb-5">
            Modul dan Materi
          </h2>
          {modulData.map((modul) => (
            <div key={modul.id} className="border border-gray-300 rounded-md">
              {/* Header modul dengan toggle */}
              <div
                className="p-4 bg-gray-200 flex justify-between items-center cursor-pointer hover:bg-gray-300 transition-colors duration-200"
                onClick={() => toggleModul(modul.id)} // Toggle dropdown saat diklik
              >
                <span className="text-lg font-semibold">{modul.judul}</span>
                <span className="text-lg">
                  {openModul === modul.id ? "▲" : "▼"}
                </span>
              </div>

              {/* Daftar materi di dalam modul */}
              {openModul === modul.id && (
                <div className="p-4 bg-white border-t border-gray-300">
                  {modul.materi.map((materi) => (
                    <button
                      key={materi.id}
                      onClick={() => setSelectedMateri(materi)} // Panggil fungsi untuk set materi yang dipilih
                      className="block text-left text-gray-800 hover:bg-gray-200 transition-colors duration-200 rounded-md p-2 w-full"
                    >
                      {materi.judul}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownCda;
