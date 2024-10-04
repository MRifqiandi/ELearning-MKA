// import { Label, TextInput, Textarea } from "flowbite-react";
// import FileInputTask from "../../components/FileInput";
// import ButtonSubmit from "../../components/Button/ButtonSubmit";
// import Aside from "/src/components/Aside";

// function AddTask() {
//   return (
//     <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
//       <Aside className="bg-gray-800 text-white md:w-1/4 md:h-full shadow-lg" />

//       <div className="flex flex-col flex-1 p-6 md:pl-80 bg-white shadow-md">
//         <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-14 md:pt-6 lg:justify-between">
//           <section className="flex flex-col gap-2 p-5 border border-gray-300 shadow-lg rounded-lg justify-center w-full lg:w-auto">
//             <h1 className="font-semibold text-4xl text-gray-800 text-center lg:text-left">
//               Tambah Tugas Baru!
//             </h1>
//             <h4 className="text-lg text-gray-500 text-center lg:text-left">
//               Education Dashboard
//             </h4>
//           </section>
//         </div>

//         <section className="bg-white p-6 text-gray-700 rounded-lg mt-8 shadow-lg">
//           <div className="flex flex-col gap-4">
//             <h1 className="text-3xl font-semibold">Form Tugas</h1>
//             <hr className="border-gray-300" />
//           </div>

//           <div className="flex flex-col gap-5 pt-6 max-w-xl">
//             <div className="flex-1">
//               <Label
//                 htmlFor="judul"
//                 value="Judul Tugas*"
//                 className="text-lg font-medium text-gray-700"
//               />
//               <TextInput
//                 id="judul"
//                 placeholder="Masukkan Judul Tugas"
//                 type="text"
//                 sizing="md"
//                 className="mt-2"
//               />
//             </div>

//             <div className="flex-1">
//               <Label
//                 htmlFor="description"
//                 value="Deskripsi Tugas"
//                 className="text-lg font-medium text-gray-700"
//               />
//               <Textarea
//                 id="description"
//                 placeholder="Deskripsi Tugas"
//                 required
//                 rows={4}
//                 className="mt-2"
//               />
//             </div>

//             <div className="flex flex-1 flex-col gap-3 pt-6">
//               <h2 className="text-xl font-medium text-gray-700">File Tugas</h2>
//               <FileInputTask />
//             </div>
//           </div>

//           <div className="flex justify-center pt-8">
//             <ButtonSubmit />
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default AddTask;

import { Label, TextInput, Textarea } from "flowbite-react";
import FileInputTask from "../../components/FileInput";
import ButtonSubmit from "../../components/Button/ButtonSubmit";
import Aside from "/src/components/Aside";

function AddTask() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-r from-blue-50 to-gray-50">
      {/* Sidebar */}
      <Aside className="bg-gray-800 text-white md:w-1/4 md:h-full shadow-lg" />

      {/* Main Content */}
      <div className="flex flex-col flex-1 p-6 md:pl-80 bg-white shadow-md">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-14 md:pt-6 lg:justify-between">
          <section className="flex flex-col gap-2 p-6 border border-gray-200 shadow-md rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 justify-center w-full lg:w-auto">
            <h1 className="font-extrabold text-4xl text-gray-800 text-center lg:text-left">
              Tambah Tugas Baru!
            </h1>
            <h4 className="text-lg text-gray-500 text-center lg:text-left">
              Kelola Tugas dengan Mudah
            </h4>
          </section>
        </div>

        {/* Form Section */}
        <section className="bg-white p-8 text-gray-700 rounded-lg mt-8 shadow-lg border-t-4 border-blue-500">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold text-gray-800">Form Tugas</h1>
            <p className="text-gray-500">
              Silakan isi detail tugas berikut untuk menambahkan tugas baru ke
              dalam kelas.
            </p>
            <hr className="border-gray-300" />
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-5 pt-6">
            {/* Task Title */}
            <div className="flex-1">
              <Label
                htmlFor="judul"
                value="Judul Tugas*"
                className="text-lg font-medium text-gray-700"
              />
              <TextInput
                id="judul"
                placeholder="Masukkan Judul Tugas"
                type="text"
                sizing="md"
                className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Task Description */}
            <div className="flex-1">
              <Label
                htmlFor="description"
                value="Deskripsi Tugas"
                className="text-lg font-medium text-gray-700"
              />
              <Textarea
                id="description"
                placeholder="Deskripsi Tugas"
                required
                rows={4}
                className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* File Upload */}
            <div className="flex flex-1 flex-col gap-5 pt-6">
              <h2 className="text-xl font-medium text-gray-700">
                Unggah File Tugas
              </h2>
              <FileInputTask />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-8">
            <ButtonSubmit />
          </div>
        </section>
      </div>
    </div>
  );
}

export default AddTask;
