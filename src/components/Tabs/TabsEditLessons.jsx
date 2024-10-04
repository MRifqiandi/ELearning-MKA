// import { useEffect, useState } from "react";
// import { Button, Spinner, Tabs } from "flowbite-react";
// import { HiAdjustments } from "react-icons/hi";
// import { MdDashboard, MdMenu } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
// import useMateri from "../../hooks/useMateri";
// import useProgress from "../../hooks/useProgress";
// import Chapter from "../Dropdown/DropdownCda";
// // import {} from "flowbite-react";

// function TabsEditLessons() {
//   const materi = useMateri();
//   const [selectedMateriIndex, setSelectedMateriIndex] = useState(0);
//   const [progress, updateProgress, resetProgress] = useProgress(materi.length);
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to control sidebar visibility

//   useEffect(() => {
//     const storedIndex = localStorage.getItem("reactClassCurrentMateriIndex");
//     if (storedIndex !== null) {
//       setSelectedMateriIndex(parseInt(storedIndex, 10));
//     }
//   }, [materi]);

//   useEffect(() => {
//     if (materi.length > 0) {
//       updateProgress(selectedMateriIndex + 1); // Update progress with the new index
//     }
//   }, [selectedMateriIndex, updateProgress, materi]);

//   const handleNext = () => {
//     if (selectedMateriIndex < materi.length - 1) {
//       const newIndex = selectedMateriIndex + 1;
//       setSelectedMateriIndex(newIndex);
//       localStorage.setItem("reactClassCurrentMateriIndex", newIndex);
//     }
//   };

//   const handleResetProgress = () => {
//     resetProgress();
//     setSelectedMateriIndex(0);
//     localStorage.setItem("reactClassCurrentMateriIndex", 0);
//   };

//   const handleComplete = async () => {
//     setIsLoading(true);
//     await new Promise((resolve) => setTimeout(resolve, 2000));
//     setIsLoading(false);
//     updateProgress(materi.length);
//     setTimeout(() => {
//       navigate("/question");
//     }, 1000);
//   };

//   const handlePrevious = () => {
//     if (selectedMateriIndex > 0) {
//       const newIndex = selectedMateriIndex - 1;
//       setSelectedMateriIndex(newIndex);
//       localStorage.setItem("reactClassCurrentMateriIndex", newIndex);
//     }
//   };

//   // const handleMateriSelect = (id) => {
//   //   const index = materi.findIndex((item) => item.id === id);
//   //   if (index !== -1) {
//   //     setSelectedMateriIndex(index);
//   //     localStorage.setItem("reactClassCurrentMateriIndex", index);
//   //     updateProgress(id);
//   //   }
//   // };

//   // const selectedMateri = materi[selectedMateriIndex] || {};
//   const handleMateriSelect = (id) => {
//     const index = materi.findIndex((item) => item.id === id);
//     if (index !== -1) {
//       setSelectedMateriIndex(index);
//       localStorage.setItem("reactClassCurrentMateriIndex", index);
//       updateProgress(id);
//     }
//   };

//   const selectedMateri = materi[selectedMateriIndex] || {};

//   return (
//     <div className="flex">
//       <div
//         className={`fixed top-0 right-0 h-full bg-blue-300 text-black w-[500px] transform transition-transform ${
//           isSidebarOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <button
//           onClick={() => setIsSidebarOpen(false)}
//           className="p-2 absolute top-2 left-2 text-white bg-blue-800 rounded-full"
//         >
//           &times;
//         </button>
//         <div className="p-4">
//           {materi.length === 0 ? (
//             <p>No Materi Available</p>
//           ) : (
//             <>
//               <h3 className="font-bold pl-6 text-lg mb-4">Daftar Materi</h3>
//               <div className="flex flex-col text-black gap-6 overflow-auto dark:text-white rounded-lg p-2 w-full">
//                 <Chapter onMateriSelect={handleMateriSelect} />
//                 <Chapter onMateriSelect={handleMateriSelect} />
//                 <Chapter onMateriSelect={handleMateriSelect} />
//                 <Chapter onMateriSelect={handleMateriSelect} />
//                 <Chapter onMateriSelect={handleMateriSelect} />
//                 <Chapter onMateriSelect={handleMateriSelect} />
//                 <Chapter onMateriSelect={handleMateriSelect} />
//                 <Chapter onMateriSelect={handleMateriSelect} />
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//       <div className="flex-1">
//         <button
//           onClick={() => setIsSidebarOpen(true)}
//           className="p-2 fixed top-4 right-4 text-white bg-blue-800 rounded-full z-10"
//         >
//           <MdMenu className="text-2xl" />
//         </button>
//         <Tabs aria-label="Tabs with underline" variant="underline">
//           <Tabs.Item title="Materi" icon={MdDashboard}>
//             <div className="flex flex-col md:flex-row gap-10 justify-between w-full">
//               <div className="flex flex-col w-full  md:w-11/12">
//                 {materi.length === 0 ? (
//                   <p>No Materi Available</p>
//                 ) : (
//                   <>
//                     <h3 className="font-bold text-lg">
//                       {selectedMateri.judul}
//                     </h3>
//                     <div className="h-[500px] overflow-auto">
//                       {/* Set height and allow scrolling */}
//                       <p className="text-justify">{selectedMateri.content}</p>
//                     </div>
//                     <div className="pt-4 flex flex-col w-full md:flex-row justify-between">
//                       <button
//                         onClick={handlePrevious}
//                         className="p-2 border rounded bg-gray-500 text-white"
//                         disabled={selectedMateriIndex === 0}
//                       >
//                         Previous
//                       </button>

//                       <Button>Edit</Button>
//                       {selectedMateriIndex === materi.length - 1 ? (
//                         <button
//                           onClick={handleComplete}
//                           disabled={isLoading}
//                           className={`p-2 border rounded bg-green-500 text-white ${
//                             isLoading
//                               ? "bg-blue-300 cursor-not-allowed"
//                               : "hover:bg-blue-600"
//                           } transition-all duration-500 ease-in-out transform ${
//                             isLoading ? "scale-95" : ""
//                           }`}
//                         >
//                           {isLoading ? (
//                             <span>
//                               <Spinner aria-label="Loading spinner" />{" "}
//                               Loading...
//                             </span>
//                           ) : (
//                             "Latihan"
//                           )}
//                         </button>
//                       ) : (
//                         <button
//                           onClick={handleNext}
//                           className="p-2 border rounded bg-blue-500 text-white"
//                         >
//                           Next
//                         </button>
//                       )}
//                     </div>
//                   </>
//                 )}
//               </div>
//             </div>
//           </Tabs.Item>

//           <Tabs.Item title="Persiapan Kelas" icon={HiAdjustments}>
//             <p>
//               This is the{" "}
//               <span className="font-medium text-gray-800 dark:text-white">
//                 Settings
//               </span>{" "}
//               tabs associated content. Clicking another tab will toggle the
//               visibility of this one for the next. The tab JavaScript swaps
//               classes to control the content visibility and styling.
//             </p>
//           </Tabs.Item>
//         </Tabs>
//       </div>
//     </div>
//   );
// }

// export default TabsEditLessons;

import { useEffect, useState } from "react";
import { Button, Spinner, Tabs } from "flowbite-react";
import { HiAdjustments } from "react-icons/hi";
import { MdDashboard, MdMenu } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useMateri from "../../hooks/useMateri";
import useProgress from "../../hooks/useProgress";
import Chapter from "../Dropdown/DropdownCda";
import MyEditor from "../TextEditor"; // Import editor

function TabsEditLessons() {
  const materi = useMateri();
  const [selectedMateriIndex, setSelectedMateriIndex] = useState(0);
  const [progress, updateProgress, resetProgress] = useProgress(materi.length);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isEditorVisible, setIsEditorVisible] = useState(false); //

  useEffect(() => {
    const storedIndex = localStorage.getItem("reactClassCurrentMateriIndex");
    if (storedIndex !== null) {
      setSelectedMateriIndex(parseInt(storedIndex, 10));
    }
  }, [materi]);

  useEffect(() => {
    if (materi.length > 0) {
      updateProgress(selectedMateriIndex + 1); // Update progress with the new index
    }
  }, [selectedMateriIndex, updateProgress, materi]);

  const handleNext = () => {
    if (selectedMateriIndex < materi.length - 1) {
      const newIndex = selectedMateriIndex + 1;
      setSelectedMateriIndex(newIndex);
      localStorage.setItem("reactClassCurrentMateriIndex", newIndex);
    }
  };

  const handleResetProgress = () => {
    resetProgress();
    setSelectedMateriIndex(0);
    localStorage.setItem("reactClassCurrentMateriIndex", 0);
  };

  const handleComplete = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    updateProgress(materi.length);
    setTimeout(() => {
      navigate("/question");
    }, 1000);
  };

  const handlePrevious = () => {
    if (selectedMateriIndex > 0) {
      const newIndex = selectedMateriIndex - 1;
      setSelectedMateriIndex(newIndex);
      localStorage.setItem("reactClassCurrentMateriIndex", newIndex);
    }
  };

  const handleMateriSelect = (id) => {
    const index = materi.findIndex((item) => item.id === id);
    if (index !== -1) {
      setSelectedMateriIndex(index);
      localStorage.setItem("reactClassCurrentMateriIndex", index);
      updateProgress(id);
    }
  };

  const selectedMateri = materi[selectedMateriIndex] || {};

  const toggleEditor = () => {
    setIsEditorVisible((prevState) => !prevState); // Toggle editor visibility
  };

  return (
    <div className="flex">
      <div
        className={`fixed top-0 right-0 h-full bg-blue-300 text-black w-[500px] transform transition-transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="p-2 absolute top-2 left-2 text-white bg-blue-800 rounded-full"
        >
          &times;
        </button>
        <div className="p-4">
          {materi.length === 0 ? (
            <p>No Materi Available</p>
          ) : (
            <>
              <h3 className="font-bold pl-6 text-lg mb-4">Daftar Materi</h3>
              <div className="flex flex-col text-black gap-6 overflow-auto dark:text-white rounded-lg p-2 w-full">
                <Chapter onMateriSelect={handleMateriSelect} />
              </div>
              <div className="flex items-center justify-center gap-3">
                <Button onClick={toggleEditor}>
                  <img src="/src/assets/edit.svg" />
                </Button>
                <Button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 20 20"
                  >
                    <g fill="currentColor">
                      <path d="M5 11a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2z" />
                      <path d="M9 5a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0z" />
                    </g>
                  </svg>
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex-1">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 fixed top-4 right-4 text-white bg-blue-800 rounded-full z-10"
        >
          <MdMenu className="text-2xl" />
        </button>
        <Tabs aria-label="Tabs with underline" variant="underline">
          <Tabs.Item title="Materi" icon={MdDashboard}>
            <div className="flex flex-col md:flex-row gap-10 justify-between w-full">
              <div className="flex flex-col w-full ">
                {materi.length === 0 ? (
                  <p>No Materi Available</p>
                ) : (
                  <>
                    <h3 className="font-bold text-lg">
                      {selectedMateri.judul}
                    </h3>
                    <div className="h-[500px] overflow-auto">
                      {/* Set height and allow scrolling */}
                      <p className="text-justify">{selectedMateri.content}</p>
                      <div className="rounded-lg mt-5 shadow-xl border max-w-screen-lg">
                        {isEditorVisible && <MyEditor />}
                      </div>
                    </div>
                    <div className="pt-4 flex flex-col w-full md:flex-row justify-between">
                      <button
                        onClick={handlePrevious}
                        className="p-2 border rounded bg-gray-500 text-white"
                        disabled={selectedMateriIndex === 0}
                      >
                        Previous
                      </button>

                      {/* <div className="flex gap-3">
                        <Button onClick={toggleEditor}>Edit Materi</Button>
                        <Button>Tambah Materi</Button>
                      </div> */}
                      {selectedMateriIndex === materi.length - 1 ? (
                        <button
                          onClick={handleComplete}
                          disabled={isLoading}
                          className={`p-2 border rounded bg-green-500 text-white ${
                            isLoading
                              ? "bg-blue-300 cursor-not-allowed"
                              : "hover:bg-blue-600"
                          } transition-all duration-500 ease-in-out transform ${
                            isLoading ? "scale-95" : ""
                          }`}
                        >
                          {isLoading ? (
                            <span>
                              <Spinner aria-label="Loading spinner" />{" "}
                              Loading...
                            </span>
                          ) : (
                            "Latihan"
                          )}
                        </button>
                      ) : (
                        <button
                          onClick={handleNext}
                          className="p-2 border rounded bg-blue-500 text-white"
                        >
                          Next
                        </button>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </Tabs.Item>

          <Tabs.Item title="Persiapan Kelas" icon={HiAdjustments}>
            <p>
              This is the{" "}
              <span className="font-medium text-gray-800 dark:text-white">
                Settings
              </span>{" "}
              tabs associated content. Clicking another tab will toggle the
              visibility of this one for the next. The tab JavaScript swaps
              classes to control the content visibility and styling.
            </p>
          </Tabs.Item>
        </Tabs>
      </div>
    </div>
  );
}

export default TabsEditLessons;
