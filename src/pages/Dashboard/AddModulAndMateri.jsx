// import React, { useState } from "react";
// import { TextInput, Textarea, Button, Label } from "flowbite-react";

// const AddModuleAndMateri = () => {
//   // State untuk menyimpan data modul
//   const [modul, setModul] = useState([]);
//   const [modulTitle, setModulTitle] = useState("");

//   // State untuk menyimpan data materi pada modul
//   const [selectedModulId, setSelectedModulId] = useState(null);
//   const [materiTitle, setMateriTitle] = useState("");
//   const [materiContent, setMateriContent] = useState("");
//   const [materiLabel, setMateriLabel] = useState("");
//   const [materiImage, setMateriImage] = useState(null); // Menyimpan gambar sebagai base64
//   const [previewImage, setPreviewImage] = useState(""); // Preview gambar

//   // Fungsi untuk menambahkan modul
//   const addModul = () => {
//     const newModul = {
//       id: modul.length + 1,
//       judul: modulTitle,
//       materi: [],
//     };
//     setModul([...modul, newModul]);
//     setModulTitle(""); // Mengosongkan input
//   };

//   // Fungsi untuk menambahkan materi ke modul yang dipilih
//   const addMateri = () => {
//     if (selectedModulId === null) return;

//     const updatedModul = modul.map((item) => {
//       if (item.id === selectedModulId) {
//         const newMateri = {
//           id: item.materi.length + 1,
//           judul: materiTitle,
//           content: materiContent,
//           label: materiLabel,
//           image: materiImage, // Menggunakan base64 image
//         };
//         return { ...item, materi: [...item.materi, newMateri] };
//       }
//       return item;
//     });

//     setModul(updatedModul);
//     setMateriTitle("");
//     setMateriContent("");
//     setMateriLabel("");
//     setMateriImage(null);
//     setPreviewImage(""); // Hapus preview setelah menambah materi
//   };

//   // Fungsi untuk menangani upload gambar
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setMateriImage(reader.result); // Simpan base64 dari gambar
//         setPreviewImage(reader.result); // Tampilkan preview
//       };
//       reader.readAsDataURL(file); // Mengonversi gambar ke base64
//     }
//   };

//   return (
//     <div className="min-h-screen p-8 bg-gray-100">
//       <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
//         <h1 className="text-3xl font-bold text-gray-700 mb-6">
//           Tambah Modul dan Materi
//         </h1>

//         {/* Form untuk menambahkan modul */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-semibold text-gray-700">Tambah Modul</h2>
//           <div className="mt-4 flex flex-col gap-4">
//             <TextInput
//               id="modulTitle"
//               type="text"
//               placeholder="Judul Modul"
//               value={modulTitle}
//               onChange={(e) => setModulTitle(e.target.value)}
//               required
//             />
//             <Button onClick={addModul}>Tambah Modul</Button>
//           </div>
//         </div>

//         {/* List Modul */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-semibold text-gray-700">
//             Modul yang Ditambahkan
//           </h2>
//           <ul className="mt-4 space-y-4">
//             {modul.map((modul) => (
//               <li
//                 key={modul.id}
//                 className={`p-4 border rounded-lg ${
//                   selectedModulId === modul.id ? "bg-blue-50" : ""
//                 }`}
//                 onClick={() => setSelectedModulId(modul.id)}
//               >
//                 <span className="font-bold text-gray-700">{modul.judul}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Form untuk menambahkan materi ke modul */}
//         {selectedModulId && (
//           <div>
//             <h2 className="text-2xl font-semibold text-gray-700">
//               Tambah Materi
//             </h2>
//             <div className="mt-4 flex flex-col gap-4">
//               <TextInput
//                 id="materiTitle"
//                 type="text"
//                 placeholder="Judul Materi"
//                 value={materiTitle}
//                 onChange={(e) => setMateriTitle(e.target.value)}
//                 required
//               />
//               <Textarea
//                 id="materiContent"
//                 placeholder="Konten Materi"
//                 value={materiContent}
//                 onChange={(e) => setMateriContent(e.target.value)}
//                 required
//               />
//               <TextInput
//                 id="materiLabel"
//                 type="text"
//                 placeholder="Label Materi"
//                 value={materiLabel}
//                 onChange={(e) => setMateriLabel(e.target.value)}
//                 required
//               />

//               {/* Input untuk Upload Gambar */}
//               <Label value="Upload Gambar (Opsional)" />
//               <input
//                 id="materiImage"
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//               />

//               {/* Preview Gambar */}
//               {previewImage && (
//                 <div className="mt-4">
//                   <h3 className="text-lg font-semibold">Preview Gambar:</h3>
//                   <img
//                     src={previewImage}
//                     alt="Preview"
//                     className="mt-2 w-48 h-48 object-cover border rounded-lg shadow"
//                   />
//                 </div>
//               )}

//               <Button onClick={addMateri}>Tambah Materi</Button>
//             </div>
//           </div>
//         )}

//         {/* Preview Data JSON */}
//         <div className="mt-8">
//           <h2 className="text-2xl font-semibold text-gray-700">
//             Data Modul dan Materi
//           </h2>
//           <pre className="mt-4 bg-gray-100 p-4 rounded-lg shadow-inner text-xs">
//             {JSON.stringify(modul, null, 2)}
//           </pre>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddModuleAndMateri;

import React, { useState } from "react";
import { TextInput, Textarea, Button, Label } from "flowbite-react";

const AddModuleAndMateri = () => {
  const [modul, setModul] = useState([]);
  const [modulTitle, setModulTitle] = useState("");
  const [selectedModulId, setSelectedModulId] = useState(null);
  const [materiTitle, setMateriTitle] = useState("");
  const [materiContent, setMateriContent] = useState("");
  const [materiLabel, setMateriLabel] = useState("");
  const [materiImage, setMateriImage] = useState(null); // Simpan base64
  const [previewImage, setPreviewImage] = useState(""); // Preview gambar

  const addModul = () => {
    const newModul = {
      id: modul.length + 1,
      judul: modulTitle,
      materi: [],
    };
    setModul([...modul, newModul]);
    setModulTitle("");
  };

  const addMateri = () => {
    if (selectedModulId === null) return;

    const updatedModul = modul.map((item) => {
      if (item.id === selectedModulId) {
        const newMateri = {
          id: item.materi.length + 1,
          judul: materiTitle,
          content: materiContent,
          label: materiLabel,
          image: materiImage,
        };
        return { ...item, materi: [...item.materi, newMateri] };
      }
      return item;
    });

    setModul(updatedModul);
    setMateriTitle("");
    setMateriContent("");
    setMateriLabel("");
    setMateriImage(null);
    setPreviewImage("");
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMateriImage(reader.result);
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Tambah Modul dan Materi
        </h1>

        {/* Form untuk menambahkan modul */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Tambah Modul
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <TextInput
              id="modulTitle"
              type="text"
              placeholder="Judul Modul"
              value={modulTitle}
              onChange={(e) => setModulTitle(e.target.value)}
              className="w-full sm:w-3/4"
            />
            <Button onClick={addModul} className="w-full sm:w-1/4">
              Tambah Modul
            </Button>
          </div>
        </div>

        {/* List Modul */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Modul yang Ditambahkan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modul.map((modul) => (
              <div
                key={modul.id}
                className={`p-4 border rounded-lg shadow transition-all duration-300 ease-in-out cursor-pointer ${
                  selectedModulId === modul.id
                    ? "bg-blue-100 border-blue-400"
                    : "bg-white"
                }`}
                onClick={() => setSelectedModulId(modul.id)}
              >
                <h3 className="text-lg font-bold text-gray-800">
                  {modul.judul}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Form untuk menambahkan materi */}
        {selectedModulId && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Tambah Materi ke Modul
            </h2>
            <div className="flex flex-col gap-4">
              <TextInput
                id="materiTitle"
                type="text"
                placeholder="Judul Materi"
                value={materiTitle}
                onChange={(e) => setMateriTitle(e.target.value)}
              />
              <Textarea
                id="materiContent"
                placeholder="Konten Materi"
                value={materiContent}
                onChange={(e) => setMateriContent(e.target.value)}
              />
              <TextInput
                id="materiLabel"
                type="text"
                placeholder="Label Materi"
                value={materiLabel}
                onChange={(e) => setMateriLabel(e.target.value)}
              />

              {/* Input untuk Upload Gambar */}
              <Label value="Upload Gambar (Opsional)" />
              <input
                id="materiImage"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-white"
              />

              {/* Preview Gambar */}
              {previewImage && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-700">
                    Preview Gambar:
                  </h3>
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="mt-2 w-48 h-48 object-cover border rounded-lg shadow"
                  />
                </div>
              )}

              <Button onClick={addMateri}>Tambah Materi</Button>
            </div>
          </div>
        )}

        {/* Preview Data JSON */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Data Modul dan Materi
          </h2>
          <pre className="p-4 bg-gray-50 rounded-lg shadow-inner text-xs overflow-auto">
            {JSON.stringify(modul, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default AddModuleAndMateri;
