import { useState, useEffect } from "react";
import Chapter from "../../components/Dropdown/DropdownCda";
import Aside from "../../components/Aside";
import CardMentor from "../../components/Card/CardMentor";
import PaginationCourses from "../../components/Tabs/TabsCourses";
import useMateri from "../../hooks/useMateri";

function ClassAsynchronous() {
  const materi = useMateri();
  const [selectedMateriIndex, setSelectedMateriIndex] = useState(0);

  useEffect(() => {
    const storedIndex = localStorage.getItem("reactClassCurrentMateriIndex");
    if (storedIndex !== null) {
      setSelectedMateriIndex(parseInt(storedIndex, 10));
    }
  }, [materi]);

  const handleMateriSelect = (id) => {
    const index = materi.findIndex((item) => item.id === id);
    if (index !== -1) {
      // Ensure index is valid
      setSelectedMateriIndex(index);
      localStorage.setItem("reactClassCurrentMateriIndex", index);
    }
  };

  const selectedMateri = materi[selectedMateriIndex] || {};

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="fixed z-10 lg:static lg:translate-x-0 transform lg:transform-none md:w-64 w-64">
        <Aside />
      </div>
      {/* Content */}
      <div className="flex-1 lg:pl-5 md:pl-64 transition-all duration-300">
        <div className="flex w-full justify-between">
          {/* Main Content */}
          <div className="flex-1 overflow-auto lg:pt-2 h-screen">
            <div className=" md:p-3 lg:p-0 lg:w-[800px]">
              <PaginationCourses />
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="hidden lg:flex flex-col gap-3 p-2 bg-gray-200 w-[386px] h-screen sticky top-0">
            <CardMentor />
            <div className="pt-4">
              <Chapter onMateriSelect={handleMateriSelect} />
              <p>{selectedMateri.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassAsynchronous;
