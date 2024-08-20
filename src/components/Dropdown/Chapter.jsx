// // src/components/Chapter.jsx
// import React from "react";
// import useMateri from "../../hooks/useMateri";
// import DropdownCda from "./DropdownCda";

// function Chapter({ onMateriSelect }) {
//   const materi = useMateri();
//   const dropdownItems = materi.map((item) => ({
//     text: item.judul,
//     imgSrc: "/src/assets/play.svg", // Sesuaikan dengan gambar yang ada
//     description: item.content.slice(0, 50) + "...", // Menampilkan potongan isi
//     url: `/lesson/${item.id}`,
//     id: item.id,
//   }));

//   return (
//     <div className="flex flex-col font-semibold justify-start w-full">
//       <DropdownCda
//         label="Materi"
//         items={dropdownItems}
//         onSelect={(id) => onMateriSelect(id)}
//       />
//     </div>
//   );
// }

// export default Chapter;
