// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Button } from "flowbite-react";

// // Daftar materi yang tersedia
// const lessons = [
//   { id: 1, title: "Introduction to React", content: "Content for Lesson 1" },
//   { id: 2, title: "React Components", content: "Content for Lesson 2" },
//   { id: 3, title: "State and Props", content: "Content for Lesson 3" },
//   { id: 4, title: "Event Handling", content: "Content for Lesson 4" },
//   { id: 5, title: "Lifecycle Methods", content: "Content for Lesson 5" },
//   { id: 6, title: "React Hooks", content: "Content for Lesson 6" },
//   { id: 7, title: "React Router", content: "Content for Lesson 7" },
//   { id: 8, title: "Form Handling", content: "Content for Lesson 8" },
//   { id: 9, title: "Styling Components", content: "Content for Lesson 9" },
//   { id: 10, title: "Deploying React Apps", content: "Content for Lesson 10" },
// ];

// function LessonPage() {
//   const { id } = useParams(); // Mengambil ID materi dari URL
//   const [progress, setProgress] = useState(0);
//   const navigate = useNavigate();

//   const lessonId = parseInt(id, 10); // Mengubah ID materi dari string menjadi integer
//   const lesson = lessons.find((lesson) => lesson.id === lessonId); // Menemukan materi berdasarkan ID

//   // Mengambil progress dari localStorage saat halaman dimuat
//   useEffect(() => {
//     const storedProgress = localStorage.getItem("reactClassProgress");
//     if (storedProgress) {
//       setProgress(parseInt(storedProgress, 10)); // Mengatur progress dari localStorage
//     }
//   }, []);

//   // Fungsi untuk memperbarui progress
//   const completeLesson = () => {
//     const newProgress = Math.min(progress + 10, 100); // Tambah 10% atau sampai 100%
//     setProgress(newProgress);
//     localStorage.setItem("reactClassProgress", newProgress); // Simpan progress ke localStorage

//     // Jika semua materi selesai, redirect ke halaman selesai
//     if (lessonId === lessons.length) {
//       navigate("/completed"); // Misalnya ke halaman selesai
//     } else {
//       // Redirect ke materi berikutnya
//       navigate(`/lesson/${lessonId + 1}`);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center">
//       <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
//       <p className="text-lg mb-8">{lesson.content}</p>

//       {/* Button to complete the lesson */}
//       <Button onClick={completeLesson} className="mb-4">
//         Complete Lesson
//       </Button>

//       <p className="text-gray-700">Current progress: {progress}%</p>
//     </div>
//   );
// }

// export default LessonPage;
