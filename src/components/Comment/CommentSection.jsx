import { useState, useEffect } from "react";

function CommentSection() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    // Fetch data comments dari file JSON
    fetch("/data/Comment.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Untuk debugging
        setComments(data);
      })
      .catch((error) => console.error("Error fetching comments:", error));
  }, []);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() === "") return;

    // Tambahkan komentar baru ke state
    const newCommentObject = {
      text: newComment,
      id: comments.length ? comments[comments.length - 1].id + 1 : 1, // Auto increment id
      avatar: "/src/assets/instructor.jpg", // Avatar default
    };

    // Update state dengan komentar baru
    setComments([...comments, newCommentObject]);

    // Reset input
    setNewComment("");
  };

  return (
    <div className="flex flex-col max-w-lg gap-5 comment-section">
      <form
        className="p-3 shadow-xl border rounded-lg"
        onSubmit={handleCommentSubmit}
      >
        <textarea
          className="w-full p-2 border-none rounded mb-2"
          placeholder="Tambahkan komentar kamu terkait tugas ya!"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <hr />
        <div className="flex pt-6 justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
      <h3 className="text-lg font-semibold ">Comments</h3>
      <div className="shadow-xl p-6 rounded-lg border">
        <h1 className="text-xl font-medium ">
          Komentar dari Mentor untuk kamu
        </h1>
        <ul className="mb-4 pt-5">
          {comments.map((comment) => (
            <li
              key={comment.name}
              className="flex items-start gap-4 border-b pb-2 mb-2"
            >
              <img
                src={comment.avatar}
                alt="Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div>
                  <p>{comment.comment}</p>
                </div>
                <div className="ml-4 text-xs text-gray-500">
                  {new Date(comment.date).toLocaleDateString()}
                </div>
              </div>
              <li key={comment.id} className="border-b pb-2 mb-2">
                <p>{comment.text}</p>
              </li>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CommentSection;
