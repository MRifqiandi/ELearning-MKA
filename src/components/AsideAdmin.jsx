import { useState } from "react";
import SearchInput from "./SearchComp/SearchInput";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Avatar } from "flowbite-react";

function AsideAdmin() {
  const [user, setUser] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    setUser(userData);
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleSidebar}
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-100 rounded-lg md:hidden hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 bg-bg-sidebar dark:bg-gray-800`}
        aria-label="Sidebar"
      >
        <button
          onClick={toggleSidebar}
          type="button"
          className="absolute top-4 right-0 p-2 text-gray-200 hover:bg-gray-700 rounded-full md:hidden"
        >
          <span className="sr-only">Close sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.293 4.293a1 1 0 011.414 0L12 7.586l4.293-3.293a1 1 0 111.414 1.414L13.414 9l4.293 4.293a1 1 0 01-1.414 1.414L12 10.414l-4.293 4.293a1 1 0 01-1.414-1.414L10.586 9 6.293 4.293a1 1 0 010-1.414z"
            />
          </svg>
        </button>

        <div className="h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-blue-400 dark:hover:bg-gray-700 group"
              >
                <Avatar
                  img={user.img}
                  size="md"
                  status="online"
                  rounded
                  bordered
                />
                <Link to="/setting">
                  <span className="text-sm ">{user.name}</span>
                </Link>
              </a>
            </li>
            <li>
              <SearchInput />
              <button
                type="button"
                className="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-blue-400 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <img src="./src/assets/home.svg" />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap text-whites font-normal font-be-vietnam-pro">
                  Dashboard
                </span>
              </button>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-blue-400 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap pl-5 font-normal font-be-vietnam-pro">
                  Home
                </span>
              </a>
            </li>
            <li>
              <a
                href="/cda"
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-blue-400 dark:hover:bg-gray-700 group"
              >
                <img src="./src/assets/course.svg" />
                <span className="flex-1 ms-3 whitespace-nowrap font-normal font-be-vietnam-pro">
                  My Courses
                </span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-blue-400 dark:hover:bg-gray-700 group"
              >
                <img src="./src/assets/profile.svg" />
                <span className="flex-1 ms-3 whitespace-nowrap font-normal font-be-vietnam-pro">
                  User Profile
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-blue-400 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap font-normal font-be-vietnam-pro">
                  Products
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-blue-400 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap font-normal font-be-vietnam-pro">
                  Logout
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-blue-400 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap font-normal font-be-vietnam-pro">
                  Sign Up
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default AsideAdmin;