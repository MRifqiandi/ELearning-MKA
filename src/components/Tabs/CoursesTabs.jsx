import { useState } from "react";
import { Tabs } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import DropdownCda from "../Dropdown/DropdownCda";

function CoursesTabs() {
  const [selectedMateri, setSelectedMateri] = useState(null);
  const [materiList, setMateriList] = useState([]);
  const [currentMateriIndex, setCurrentMateriIndex] = useState(0);

  const handleSelectMateri = (materi) => {
    setSelectedMateri(materi);
    const index = materiList.findIndex((item) => item.id === materi.id);
    setCurrentMateriIndex(index); // Set indeks saat memilih materi
  };

  const handleNext = () => {
    if (currentMateriIndex < materiList.length - 1) {
      const nextMateri = materiList[currentMateriIndex + 1];
      setSelectedMateri(nextMateri);
      setCurrentMateriIndex(currentMateriIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentMateriIndex > 0) {
      const previousMateri = materiList[currentMateriIndex - 1];
      setSelectedMateri(previousMateri);
      setCurrentMateriIndex(currentMateriIndex - 1);
    }
  };

  return (
    <div className="flex w-full">
      {/* Container for Tabs */}
      <div className="flex-1">
        <Tabs aria-label="Default tabs" variant="default" className="mt-5">
          <Tabs.Item active title="Materi" icon={HiUserCircle}>
            {selectedMateri ? (
              <div>
                <h3 className="text-xl font-semibold">
                  {selectedMateri.judul}
                </h3>
                {selectedMateri.image && (
                  <img
                    src={selectedMateri.image}
                    alt={selectedMateri.judul}
                    className="mb-2"
                  />
                )}
                <p className="mt-2">{selectedMateri.content}</p>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={handlePrevious}
                    className="bg-gray-300 text-black rounded px-4 py-2 disabled:opacity-50"
                    disabled={currentMateriIndex === 0}
                  >
                    Previous
                  </button>
                  <button
                    onClick={handleNext}
                    className="bg-blue-500 text-white rounded px-4 py-2 disabled:opacity-50"
                    disabled={currentMateriIndex === materiList.length - 1}
                  >
                    Next
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-center text-gray-500">
                Silakan pilih materi untuk melihat kontennya.
              </p>
            )}
          </Tabs.Item>
          <Tabs.Item title="Dashboard" icon={MdDashboard}>
            <p>
              This is{" "}
              <span className="font-medium text-gray-800 dark:text-white">
                Dashboard tabs associated content
              </span>
              .
            </p>
          </Tabs.Item>
        </Tabs>
      </div>

      {/* Dropdown Container */}
      <div className="pl-5">
        <DropdownCda
          setSelectedMateri={handleSelectMateri}
          setMateriList={setMateriList}
        />
      </div>
    </div>
  );
}

export default CoursesTabs;
