// import { useEffect, useState } from "react";
// import Aside from "/src/components/Aside";
// import { Table } from "flowbite-react";

// function ListUsers() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch data dari file JSON
//     fetch("/data/Data.json")
//       .then((response) => response.json())
//       .then((data) => setUsers(data))
//       .catch((error) => console.error("Error fetching users:", error));
//   }, []);

//   return (
//     <div className="h-screen flex flex-col md:flex-row">
//       <Aside className="bg-gray-100 md:w-1/4 md:h-full" />

//       <div className="flex flex-col flex-1">
//         <section className="flex flex-col md:flex-row p-4 md:pl-72 md:justify-start md:items-start text-title-home">
//           <div className="flex flex-col">
//             <h1 className="font-bold text-2xl">List Users</h1>
//             <h2 className="text-gray-500">Education Dashboard</h2>
//           </div>
//         </section>
//         <div className="flex flex-col flex-1 gap-4 md:pl-72 p-4">
//           <section className="overflow-x-auto">
//             <div className="border rounded-lg">
//               <Table striped>
//                 <Table.Head>
//                   <Table.HeadCell className="sticky left-0 bg-white dark:bg-gray-800">
//                     ID
//                   </Table.HeadCell>
//                   <Table.HeadCell>Name</Table.HeadCell>
//                   <Table.HeadCell>Email</Table.HeadCell>
//                   <Table.HeadCell>Date</Table.HeadCell>
//                   <Table.HeadCell>Status</Table.HeadCell>
//                   {/* <Table.HeadCell>Password</Table.HeadCell> */}
//                   <Table.HeadCell>Role</Table.HeadCell>
//                 </Table.Head>
//                 <Table.Body className="divide-y ">
//                   {users.map((user) => (
//                     <Table.Row
//                       key={user.id}
//                       className="bg-white sticky dark:border-gray-700 dark:bg-gray-800"
//                     >
//                       <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white sticky left-0 bg-white dark:bg-gray-800">
//                         {user.id}
//                       </Table.Cell>
//                       <Table.Cell>{user.name}</Table.Cell>
//                       <Table.Cell>{user.email}</Table.Cell>
//                       <Table.Cell>
//                         {new Date(user.date).toLocaleDateString()}
//                       </Table.Cell>
//                       <Table.Cell>
//                         <span
//                           className={`inline-block px-2 py-1 text-xs font-medium rounded ${
//                             user.status === "Active"
//                               ? "bg-green-200 text-green-800"
//                               : "bg-red-200 text-red-800"
//                           }`}
//                         >
//                           {user.status}
//                         </span>
//                       </Table.Cell>
//                       {/* <Table.Cell>{user.password}</Table.Cell> */}
//                       <Table.Cell>
//                         <span
//                           className={`inline-block px-2 py-1 text-xs font-medium rounded ${
//                             user.role === "admin"
//                               ? "bg-blue-200 text-blue-800"
//                               : user.role === "mentor"
//                               ? "bg-yellow-200 text-yellow-800"
//                               : "bg-gray-200 text-gray-800"
//                           }`}
//                         >
//                           {user.role}
//                         </span>
//                       </Table.Cell>
//                     </Table.Row>
//                   ))}
//                 </Table.Body>
//               </Table>
//             </div>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ListUsers;

import { useEffect, useState } from "react";
import Aside from "/src/components/Aside";
import { Table } from "flowbite-react";

function ListUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data dari file JSON
    fetch("/data/Data.json")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  // Pisahkan pengguna aktif dan tidak aktif
  const activeUsers = users.filter((user) => user.status === "Active");
  const inactiveUsers = users.filter((user) => user.status === "Inactive");

  return (
    <div className="h-screen flex flex-col md:flex-row">
      <Aside className="bg-gray-100 md:w-1/4 md:h-full" />

      <div className="flex flex-col flex-1">
        <section className="flex flex-col md:flex-row p-4 md:pl-72 md:justify-start md:items-start text-title-home">
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl">List Users</h1>
            <h2 className="text-gray-500">Education Dashboard</h2>
          </div>
        </section>
        <div className="flex flex-col flex-1 gap-4 md:pl-72 p-4">
          <section className="overflow-x-auto">
            <div className="border rounded-lg">
              <Table striped>
                <Table.Head>
                  <Table.HeadCell className="sticky left-0 bg-white dark:bg-gray-800">
                    ID
                  </Table.HeadCell>
                  <Table.HeadCell>Name</Table.HeadCell>
                  <Table.HeadCell>Email</Table.HeadCell>
                  <Table.HeadCell>Date</Table.HeadCell>
                  <Table.HeadCell>Status</Table.HeadCell>
                  <Table.HeadCell>Role</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {activeUsers.map((user) => (
                    <Table.Row
                      key={user.id}
                      className="bg-white sticky dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white sticky left-0 bg-white dark:bg-gray-800">
                        {user.id}
                      </Table.Cell>
                      <Table.Cell>{user.name}</Table.Cell>
                      <Table.Cell>{user.email}</Table.Cell>
                      <Table.Cell>
                        {new Date(user.date).toLocaleDateString()}
                      </Table.Cell>
                      <Table.Cell>
                        <span
                          className={`inline-block px-2 py-1 text-xs font-medium rounded ${
                            user.status === "Active"
                              ? "bg-green-200 text-green-800"
                              : "bg-red-200 text-red-800"
                          }`}
                        >
                          {user.status}
                        </span>
                      </Table.Cell>
                      <Table.Cell>
                        <span
                          className={`inline-block px-2 py-1 text-xs font-medium rounded ${
                            user.role === "admin"
                              ? "bg-blue-200 text-blue-800"
                              : user.role === "mentor"
                              ? "bg-yellow-200 text-yellow-800"
                              : "bg-gray-200 text-gray-800"
                          }`}
                        >
                          {user.role}
                        </span>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                  {inactiveUsers.map((user) => (
                    <Table.Row
                      key={user.id}
                      className="bg-red-100 dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white sticky left-0 bg-red-100 dark:bg-gray-800">
                        {user.id}
                      </Table.Cell>
                      <Table.Cell>{user.name}</Table.Cell>
                      <Table.Cell>{user.email}</Table.Cell>
                      <Table.Cell>
                        {new Date(user.date).toLocaleDateString()}
                      </Table.Cell>
                      <Table.Cell>
                        <span
                          className={`inline-block px-2 py-1 text-xs font-medium rounded bg-red-200 text-red-800`}
                        >
                          {user.status}
                        </span>
                      </Table.Cell>
                      <Table.Cell>
                        <span
                          className={`inline-block px-2 py-1 text-xs font-medium rounded ${
                            user.role === "admin"
                              ? "bg-blue-200 text-blue-800"
                              : user.role === "mentor"
                              ? "bg-yellow-200 text-yellow-800"
                              : "bg-gray-200 text-gray-800"
                          }`}
                        >
                          {user.role}
                        </span>
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

export default ListUsers;
