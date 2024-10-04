// import { useEffect, useState } from "react";

// function CommentSectionTask() {
//   const [comments, setComments] = useState([]);

//   useEffect(() => {
//     // Fetch data dari file JSON
//     fetch("/data/Comment.json")
//       .then((response) => response.json())
//       .then((data) => setComments(data))
//       .catch((error) => console.error("Error fetching comments:", error));
//   }, []);

//   return (
//     <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
//       <h2 className="text-2xl font-semibold mb-4">Comments</h2>
//       <div className="space-y-4">
//         {comments.map((comment) => (
//           <div
//             key={comment.id}
//             className="p-4 border border-gray-200 rounded-lg"
//           >
//             <div className="flex items-center mb-2">
//               <div className="text-lg font-bold text-blue-600">
//                 {comment.name}
//               </div>
//               <div className="ml-4 text-sm text-gray-500">
//                 {new Date(comment.date).toLocaleDateString()}
//               </div>
//             </div>
//             <p className="text-gray-700">{comment.comment}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CommentSectionTask;
