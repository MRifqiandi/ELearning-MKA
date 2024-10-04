// import Aside from "/src/components/Aside";
// import CardWeekSync from "../../components/Card/CardWeekSync";

// function ClassDetailSync() {
//   return (
//     <div>
//       <div className="h-screen flex flex-col md:flex-row bg-gray-50">
//         {/* Aside (Sidebar) */}
//         <Aside className="bg-white md:w-1/4 md:h-full shadow-lg border-r border-gray-200" />

//         {/* Main Content */}
//         <div className="flex flex-col flex-1">
//           {/* Header */}
//           <div className="p-6 md:p-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white md:pl-72">
//             <div className="flex justify-between items-center">
//               <h1 className="font-bold font-be-vietnam-pro text-3xl md:text-4xl">
//                 Kelas Python
//               </h1>
//               <p className="text-md md:text-lg text-gray-100">
//                 120 peserta terdaftar
//               </p>
//             </div>
//             <p className="mt-2 text-lg">
//               Mulai perjalanan belajar Python Anda dari dasar hingga mahir.
//             </p>
//           </div>

//           {/* Content Section */}
//           <div className="p-6 md:pl-72">
//             <h2 className="font-semibold text-xl text-gray-800 mb-4">
//               Materi Kelas
//             </h2>

//             {/* Cards Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               <CardWeekSync />
//               <CardWeekSync />
//               <CardWeekSync />
//               <CardWeekSync />
//               <CardWeekSync />
//               <CardWeekSync />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ClassDetailSync;

import Aside from "/src/components/Aside";
import CardWeekSync from "../../components/Card/CardWeekSync";
import { FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";

function ClassDetailSync() {
  return (
    <div className="bg-gray-50">
      <div className="h-screen flex flex-col md:flex-row">
        {/* Aside (Sidebar) */}
        <Aside className="bg-white md:w-1/4 md:h-full shadow-lg border-r border-gray-200" />

        {/* Main Content */}
        <div className="flex flex-col flex-1">
          {/* Header Section */}
          <div className="flex justify-between items-center bg-gradient-to-r bg-title-login text-white p-6 md:pl-72 md:p-10 relative">
            {/* <img src="/src/assets/logo.png" alt="Logo" className="h-10" /> */}
            <h1 className="font-bold font-be-vietnam-pro text-3xl md:text-4xl">
              Kelas Python
            </h1>
          </div>

          {/* Statistics Section */}
          <div className="flex justify-around items-center bg-white p-4 shadow-lg rounded-md pt-5 md:pl-72">
            <div className="flex items-center">
              <FaUserGraduate className="text-blue-600 text-3xl mr-2" />
              <span className="text-lg font-medium">120 Peserta</span>
            </div>
            <div className="flex items-center">
              <FaChalkboardTeacher className="text-blue-600 text-3xl mr-2" />
              <span className="text-lg font-medium">10 Instruktur</span>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 md:pl-72">
            <h2 className="font-semibold text-2xl text-gray-800 mb-4">
              Materi Kelas
            </h2>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 shadow-2xl bg-blue-500 rounded-lg p-5">
              <CardWeekSync />
              <CardWeekSync />
              <CardWeekSync />
              <CardWeekSync />
              <CardWeekSync />
              <CardWeekSync />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassDetailSync;
