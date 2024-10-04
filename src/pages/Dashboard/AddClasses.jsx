// import { Label, TextInput, Textarea } from "flowbite-react";
// import FileInputTask from "../../components/FileInput";
// import Aside from "/src/components/Aside";
// import ButtonSubmit from "../../components/Button/ButtonSubmit";

// function AddClasses() {
//   return (
//     <div>
//       <div className="min-h-screen flex flex-col md:flex-row">
//         <Aside className="bg-gray-100 md:w-1/4 md:h-full" />

//         <div className="flex flex-col flex-1 p-4 md:pl-72">
//           <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-14 md:pt-6 lg:justify-between">
//             <section className="flex flex-col gap-1 p-3 border shadow-xl rounded-lg justify-center w-full lg:w-auto">
//               <h1 className="font-medium text-3xl text-center lg:text-left">
//                 Upload Kelas Baru!
//               </h1>
//               <h4 className="text-lg text-gray-500 text-center lg:text-left">
//                 Education Dashboard
//               </h4>
//             </section>
//           </div>
//           <section className="bg-card-task p-5 text-gray-100 rounded-lg mt-5">
//             <div className="flex flex-col gap-3">
//               <h1 className="text-2xl font-semibold">File Upload</h1>
//               <hr />
//             </div>
//             <div className="flex flex-col lg:flex-row gap-5 items-center justify-center pt-6">
//               <div className="flex flex-col gap-3 w-full lg:w-1/2">
//                 <h2 className="text-2xl">Image File</h2>
//                 <FileInputTask />
//               </div>

//               <div className="hidden lg:block w-px h-[300px] bg-gray-300"></div>

//               <div className="flex flex-col gap-3 w-full lg:w-1/2">
//                 <h2 className="text-2xl">Additional File</h2>
//                 <FileInputTask />
//               </div>
//             </div>

//             <div className="flex flex-col md:flex-row gap-5 justify-between pt-6 max-w-xl">
//               <div className="flex-1">
//                 <Label htmlFor="judul" value="Judul*" />
//                 <TextInput
//                   id="judul"
//                   placeholder="Masukkan Judul Kelas"
//                   type="text"
//                   sizing="md"
//                 />
//               </div>
//             </div>
//             <div className="max-w-xl pt-4">
//               <div className=" block">
//                 <Label htmlFor="description" value="Deskripsi" />
//               </div>
//               <Textarea
//                 id="description"
//                 placeholder="Deskripsi Kelas"
//                 required
//                 rows={4}
//               />
//             </div>
//             <div className="flex pt-2">
//               <button className="flex items-center font-semibold text-white rounded-lg  hover:opacity-80">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="30px"
//                   height="30px"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeWidth={1.5}
//                     d="M12 17V7m-5 5h10"
//                   ></path>
//                 </svg>
//                 Tugas
//               </button>
//             </div>
//             <div className="flex pt-2">
//               <button className="flex items-center font-semibold text-white rounded-lg  hover:opacity-80">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="30px"
//                   height="30px"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeWidth={1.5}
//                     d="M12 17V7m-5 5h10"
//                   ></path>
//                 </svg>
//                 Attendance
//               </button>
//             </div>
//             <div className="flex justify-center pt-4">
//               <ButtonSubmit />
//             </div>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddClasses;

import { Label, TextInput, Textarea } from "flowbite-react";
import FileInputTask from "../../components/FileInput";
import Aside from "/src/components/Aside";
import ButtonSubmit from "../../components/Button/ButtonSubmit";

function AddClasses() {
  return (
    <div>
      <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
        <Aside className="bg-gray-800 text-white md:w-1/4 md:h-full shadow-lg" />

        <div className="flex flex-col flex-1 p-6 md:pl-80 bg-white shadow-md">
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-14 md:pt-6 lg:justify-between">
            <section className="flex flex-col gap-2 p-5 border border-gray-300 shadow-lg rounded-lg justify-center w-full lg:w-auto">
              <h1 className="font-semibold text-4xl text-gray-800 text-center lg:text-left">
                Upload Kelas Baru!
              </h1>
              <h4 className="text-lg text-gray-500 text-center lg:text-left">
                Education Dashboard
              </h4>
            </section>
          </div>

          <section className="bg-white p-6 border text-gray-700 rounded-lg mt-8 shadow-lg">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-semibold">File Upload</h1>
              <hr className="border-gray-300" />
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-center justify-center pt-6">
              <div className="flex flex-col gap-3 w-full lg:w-1/2">
                <h2 className="text-xl font-medium text-gray-700">
                  Image File
                </h2>
                <FileInputTask />
              </div>

              <div className="hidden lg:block w-px h-[300px] bg-gray-200"></div>

              <div className="flex flex-col gap-3 w-full lg:w-1/2">
                <h2 className="text-xl font-medium text-gray-700">
                  Additional File
                </h2>
                <FileInputTask />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-between pt-8 max-w-xl">
              <div className="flex-1">
                <Label
                  htmlFor="judul"
                  value="Judul*"
                  className="text-lg font-medium text-gray-700"
                />
                <TextInput
                  id="judul"
                  placeholder="Masukkan Judul Kelas"
                  type="text"
                  sizing="md"
                  className="mt-2"
                />
              </div>
            </div>

            <div className="max-w-xl pt-6">
              <div>
                <Label
                  htmlFor="description"
                  value="Deskripsi"
                  className="text-lg font-medium text-gray-700"
                />
              </div>
              <Textarea
                id="description"
                placeholder="Deskripsi Kelas"
                required
                rows={4}
                className="mt-2"
              />
            </div>

            <div className="flex flex-row gap-4 justify-start pt-6">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth={2}
                >
                  <path d="M12 17V7m-5 5h10" />
                </svg>
                Tugas
              </button>

              <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth={2}
                >
                  <path d="M12 17V7m-5 5h10" />
                </svg>
                Attendance
              </button>
            </div>

            <div className="flex justify-center pt-8">
              <ButtonSubmit />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AddClasses;
