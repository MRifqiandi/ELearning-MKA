// import { Avatar, Button, Label, TextInput } from "flowbite-react";
// import { useEffect, useState } from "react";

// function SettingPage() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem("user"));
//     setUser(userData);
//   }, []);

//   if (!user) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <div className="">
//       <div className="flex flex-col md:flex-row items-center gap-4 p-3 bg-bg-sidebar">
//         <Avatar img={user.img} size="xl" rounded bordered>
//           <div className="flex flex-col gap-1 items-center md:items-start">
//             <div>
//               <h1 className="font-medium text-white">{user.name}</h1>
//               <h2 className="text-gray-400">{user.email}</h2>
//             </div>
//             <button className="bg-transparent border border-gray-300 text-white p-2 rounded-xl mt-2">
//               Change Picture
//             </button>
//           </div>
//         </Avatar>
//       </div>

//       <div className="flex gap-4 p-2 pt-4">
//         <div className="hidden lg:flex flex-col p-4 shadow-md bg-white rounded-lg items-center">
//           <div className="flex gap-2 items-center">
//             <img src="/src/assets/profile-black.svg" alt="Edit Profile" />
//             <button className=" text-gray-500 p-1 rounded-lg ">
//               Edit Profile
//             </button>
//           </div>
//         </div>

//         <div className="w-full lg:w-3/4 p-4 md:p-6 bg-gray-100 rounded-xl shadow-xl">
//           <form className="flex flex-col w-full gap-4">
//             <div>
//               <div className="mb-2 block">
//                 <Label htmlFor="name" value="Display Name" />
//               </div>
//               <TextInput
//                 id="name"
//                 type="text"
//                 placeholder="John Doe"
//                 required
//                 shadow
//               />
//             </div>
//             <div>
//               <div className="mb-2 block">
//                 <Label htmlFor="email" value="Email" />
//               </div>
//               <TextInput
//                 id="email"
//                 type="email"
//                 placeholder="JohnDoe@gmail.com"
//                 required
//                 shadow
//               />
//             </div>
//             <div>
//               <div className="mb-2 block">
//                 <Label htmlFor="password2" value="Password" />
//               </div>
//               <TextInput
//                 id="password2"
//                 type="password"
//                 placeholder="******"
//                 required
//                 shadow
//               />
//             </div>
//             <div>
//               <div className="mb-2 block">
//                 <Label htmlFor="repeat-password" value="Repeat password" />
//               </div>
//               <TextInput
//                 id="repeat-password"
//                 type="password"
//                 placeholder="******"
//                 required
//                 shadow
//               />
//             </div>
//             <div>
//               <div className="mb-2 block">
//                 <Label htmlFor="number" value="Number phone" />
//               </div>
//               <TextInput
//                 id="number"
//                 type="number"
//                 placeholder="08676578097"
//                 required
//                 shadow
//               />
//             </div>
//             <Button type="submit">Save Changes</Button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SettingPage;

import { Avatar, Button, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";

function SettingPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    setUser(userData);
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      {/* Header Avatar Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-blue-600 rounded-lg shadow-lg w-full max-w-5xl mb-6">
        <Avatar img={user.img} size="xl" rounded bordered>
          <div className="flex flex-col gap-2 items-center md:items-start">
            <h1 className="text-2xl font-bold text-white">{user.name}</h1>
            <h2 className="text-gray-300">{user.email}</h2>
            <button className="bg-white text-blue-600 font-medium p-2 rounded-xl mt-3 hover:bg-gray-100 transition duration-300">
              Change Picture
            </button>
          </div>
        </Avatar>
      </div>

      {/* Settings Section */}
      <div className="flex flex-col lg:flex-row w-full max-w-5xl gap-6">
        {/* Sidebar for Profile Actions */}
        <div className="hidden lg:flex flex-col p-6 shadow-lg bg-white rounded-lg items-center w-1/4">
          <div className="flex gap-2 items-center mb-4">
            <img
              src="/src/assets/profile-black.svg"
              alt="Edit Profile"
              className="w-6 h-6"
            />
            <button className="text-gray-700 font-semibold hover:text-blue-600">
              Edit Profile
            </button>
          </div>
          <div className="flex gap-2 items-center">
            <img
              src="/src/assets/settings-icon.svg"
              alt="Settings"
              className="w-6 h-6"
            />
            <button className="text-gray-700 font-semibold hover:text-blue-600">
              Account Settings
            </button>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-3/4 p-6 bg-white rounded-xl shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-gray-700">Settings</h2>
          <form className="flex flex-col w-full gap-6">
            <div>
              <Label htmlFor="name" value="Display Name" />
              <TextInput
                id="name"
                type="text"
                placeholder={user.name || "John Doe"}
                required
                shadow
                className="rounded-lg focus:ring-blue-500"
              />
            </div>
            <div>
              <Label htmlFor="email" value="Email" />
              <TextInput
                id="email"
                type="email"
                placeholder={user.email || "john.doe@gmail.com"}
                required
                shadow
                className="rounded-lg focus:ring-blue-500"
              />
            </div>
            <div>
              <Label htmlFor="password" value="New Password" />
              <TextInput
                id="password"
                type="password"
                placeholder="********"
                required
                shadow
                className="rounded-lg focus:ring-blue-500"
              />
            </div>
            <div>
              <Label htmlFor="repeat-password" value="Repeat New Password" />
              <TextInput
                id="repeat-password"
                type="password"
                placeholder="********"
                required
                shadow
                className="rounded-lg focus:ring-blue-500"
              />
            </div>
            <div>
              <Label htmlFor="number" value="Phone Number" />
              <TextInput
                id="number"
                type="tel"
                placeholder={user.phone || "08xxxxxxx"}
                required
                shadow
                className="rounded-lg focus:ring-blue-500"
              />
            </div>
            <Button
              type="submit"
              className="mt-4 bg-blue-600 hover:bg-blue-700 transition duration-300"
            >
              Save Changes
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SettingPage;
