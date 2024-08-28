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
    <div className="">
      <div className="flex flex-col md:flex-row items-center gap-4 p-3 bg-bg-sidebar">
        <Avatar img={user.img} size="xl" rounded bordered>
          <div className="flex flex-col gap-1 items-center md:items-start">
            <div>
              <h1 className="font-medium text-white">{user.name}</h1>
              <h2 className="text-gray-400">{user.email}</h2>
            </div>
            <button className="bg-transparent border border-gray-300 text-white p-2 rounded-xl mt-2">
              Change Picture
            </button>
          </div>
        </Avatar>
      </div>

      <div className="flex gap-4 p-2 pt-4">
        <div className="hidden lg:flex flex-col p-4 shadow-md bg-white rounded-lg items-center">
          <div className="flex gap-2 items-center">
            <img src="/src/assets/profile-black.svg" alt="Edit Profile" />
            <button className=" text-gray-500 p-1 rounded-lg ">
              Edit Profile
            </button>
          </div>
        </div>

        <div className="w-full lg:w-3/4 p-4 md:p-6 bg-gray-100 rounded-xl shadow-xl">
          <form className="flex flex-col w-full gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Display Name" />
              </div>
              <TextInput
                id="name"
                type="text"
                placeholder="John Doe"
                required
                shadow
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email" />
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder="JohnDoe@gmail.com"
                required
                shadow
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password2" value="Password" />
              </div>
              <TextInput
                id="password2"
                type="password"
                placeholder="******"
                required
                shadow
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="repeat-password" value="Repeat password" />
              </div>
              <TextInput
                id="repeat-password"
                type="password"
                placeholder="******"
                required
                shadow
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="number" value="Number phone" />
              </div>
              <TextInput
                id="number"
                type="number"
                placeholder="08676578097"
                required
                shadow
              />
            </div>
            <Button type="submit">Save Changes</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SettingPage;
