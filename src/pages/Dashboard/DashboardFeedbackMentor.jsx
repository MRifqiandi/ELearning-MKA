import { useEffect, useState } from "react";
import Aside from "/src/components/Aside";
import { Table } from "flowbite-react";
import { FaStar } from "react-icons/fa";

function FeedbackMentor() {
  const [users, setUsers] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  const getUserNameById = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : "Unknown";
  };

  useEffect(() => {
    fetch("/data/Data.json")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  useEffect(() => {
    fetch("/data/FeedbackMentor.json")
      .then((response) => response.json())
      .then((data) => setFeedbacks(data))
      .catch((error) => console.error("Error fetching feedbacks:", error));
  }, []);

  return (
    <div className="h-screen flex flex-col md:flex-row bg-gray-50">
      <Aside className="bg-gray-100 md:w-1/4 md:h-full" />

      <div className="flex flex-col flex-1">
        <section className="flex flex-col md:flex-row p-6 md:pl-72 bg-gradient-to-r from-blue-200 to-blue-300 text-white">
          <div className="flex flex-col">
            <h1 className="font-bold text-3xl">Feedback from Users</h1>
            <h2 className="text-blue-800 text-lg">Mentor Feedback Dashboard</h2>
          </div>
        </section>

        {/* Feedback Section */}
        <div className="flex flex-col flex-1 gap-6 md:pl-72 p-6">
          <section className="overflow-x-auto mb-8">
            <h2 className="font-bold text-2xl mb-4 text-blue-700">
              List of Feedback
            </h2>
            <div className="border border-gray-300 rounded-lg shadow-lg bg-white">
              <Table striped className="min-w-full">
                <Table.Head>
                  <Table.HeadCell className="bg-blue-100 text-blue-800">
                    User Name
                  </Table.HeadCell>
                  <Table.HeadCell className="bg-blue-100 text-blue-800">
                    Mentor ID
                  </Table.HeadCell>
                  <Table.HeadCell className="bg-blue-100 text-blue-800">
                    Feedback
                  </Table.HeadCell>
                  <Table.HeadCell className="bg-blue-100 text-blue-800">
                    Rating
                  </Table.HeadCell>
                  <Table.HeadCell className="bg-blue-100 text-blue-800">
                    Date
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y divide-gray-200">
                  {feedbacks.map((feedback) => (
                    <Table.Row
                      key={feedback.id}
                      className="hover:bg-gray-100 transition-colors duration-300"
                    >
                      <Table.Cell>
                        {getUserNameById(feedback.userId)}
                      </Table.Cell>
                      <Table.Cell>{feedback.mentorId}</Table.Cell>
                      <Table.Cell>{feedback.feedback}</Table.Cell>
                      <Table.Cell>
                        <div className="flex items-center">
                          {[...Array(feedback.rating)].map((_, index) => (
                            <FaStar key={index} className="text-yellow-500" />
                          ))}
                        </div>
                      </Table.Cell>
                      <Table.Cell>
                        {new Date(feedback.date).toLocaleDateString()}
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default FeedbackMentor;
