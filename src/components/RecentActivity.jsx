// import React from "react";

// function RecentActivity() {
//   return (
//     <div className="flex h-screen pt-10 justify-center content-center">
//       <div className="w-[874px] h-[391px] rounded-2xl bg-white drop-shadow-custom-card">
//         <h1 className="font-semibold pl-4 font-be-vietnam-pro text-2xl text-title-card">
//           Recent Activity
//         </h1>
//         <div className="pl-5 pt-4 flex gap-5 flex-col">
//           <div className="flex gap-3 p-3 bg-card-ra bg-opacity-65 rounded-lg w-[830px] ">
//             <div className="flex justify-center items-center rounded-full w-9 h-9 bg-blue-400">
//               <img src="/src/assets/task.svg" />
//             </div>
//             <div>
//               <h1 className="text-btn-card opacity-70 font-bold tracking-wide">
//                 Sedang Dipelajari
//               </h1>
//               <h3 className="text-title-card">Belajar Python Dasar</h3>
//             </div>
//           </div>
//           <div className="flex gap-3 p-3 bg-card-ra rounded-lg bg-opacity-65 w-[830px] ">
//             <div className="flex justify-center items-center rounded-full w-9 h-9 bg-blue-400">
//               <img src="/src/assets/task.svg" />
//             </div>
//             <div>
//               <h1 className="text-btn-card opacity-70 font-bold tracking-wide">
//                 Sedang Dipelajari
//               </h1>
//               <h3 className="text-title-card">Belajar Python Dasar</h3>
//             </div>
//           </div>
//           <div className="flex gap-3 p-3 bg-card-ra rounded-lg bg-opacity-65 w-[830px] ">
//             <div className="flex justify-center items-center rounded-full w-9 h-9 bg-blue-400">
//               <img src="/src/assets/task.svg" />
//             </div>
//             <div>
//               <h1 className="text-btn-card opacity-70 font-bold tracking-wide">
//                 Sedang Dipelajari
//               </h1>
//               <h3 className="text-title-card">Belajar Python Dasar</h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RecentActivity;

import React from "react";

function RecentActivity() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-full max-w-2xl h-auto rounded-2xl bg-white drop-shadow-custom-card p-6">
        <h1 className="font-semibold text-center md:text-left font-be-vietnam-pro text-2xl text-title-card">
          Recent Activity
        </h1>
        <div className="mt-6 flex flex-col gap-5">
          <div className="flex gap-3 p-3 bg-card-ra bg-opacity-65 rounded-lg w-full">
            <div className="flex justify-center items-center rounded-full w-9 h-9 bg-blue-400">
              <img src="/src/assets/task.svg" alt="task icon" />
            </div>
            <div>
              <h1 className="text-btn-card opacity-70 font-bold tracking-wide">
                Sedang Dipelajari
              </h1>
              <h3 className="text-title-card">Belajar Python Dasar</h3>
            </div>
          </div>
          <div className="flex gap-3 p-3 bg-card-ra bg-opacity-65 rounded-lg w-full">
            <div className="flex justify-center items-center rounded-full w-9 h-9 bg-blue-400">
              <img src="/src/assets/task.svg" alt="task icon" />
            </div>
            <div>
              <h1 className="text-btn-card opacity-70 font-bold tracking-wide">
                Sedang Dipelajari
              </h1>
              <h3 className="text-title-card">Belajar Python Dasar</h3>
            </div>
          </div>
          <div className="flex gap-3 p-3 bg-card-ra bg-opacity-65 rounded-lg w-full">
            <div className="flex justify-center items-center rounded-full w-9 h-9 bg-blue-400">
              <img src="/src/assets/task.svg" alt="task icon" />
            </div>
            <div>
              <h1 className="text-btn-card opacity-70 font-bold tracking-wide">
                Sedang Dipelajari
              </h1>
              <h3 className="text-title-card">Belajar Python Dasar</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentActivity;
