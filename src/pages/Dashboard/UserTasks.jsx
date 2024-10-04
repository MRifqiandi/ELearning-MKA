import { useEffect, useState } from "react";
import tasksData from "../../../public/data/tasks.json";

const UserTasks = ({ userId }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Filter tasks based on userId
    const userTasks = tasksData.find((user) => user.userId === userId);
    if (userTasks) {
      setTasks(userTasks.tasks);
    }
  }, [userId]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Daftar Tugas
      </h1>
      {tasks.length > 0 ? (
        <div className="bg-white rounded-lg border shadow-lg p-6">
          <ul className="space-y-4">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="border-b hover:bg-blue-100 p-2 rounded-lg border-gray-200 pb-4"
              >
                <h2 className="text-lg font-semibold text-blue-600">
                  {task.title}
                </h2>
                <p className="text-gray-700">{task.description}</p>
                <div className="flex justify-between items-center text-gray-500">
                  <span>Due Date: {task.due_date}</span>
                  <span
                    className={`inline-block px-2 py-1 text-xs font-medium rounded ${
                      task.status === "Completed"
                        ? "bg-green-200 text-green-800"
                        : task.status === "In Progress"
                        ? "bg-yellow-200 text-yellow-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {task.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-gray-600 text-center">
          Tidak ada tugas yang tersedia untuk pengguna ini.
        </p>
      )}
    </div>
  );
};

export default UserTasks;
