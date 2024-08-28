import { useEffect, useState } from "react";
import { Tabs } from "flowbite-react";
import { HiAdjustments } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useMateri from "../../hooks/useMateri";
import useProgress from "../../hooks/useProgress";
import CardCompSync from "../Card/CardCompSync";
import Chapter from "../Dropdown/DropdownCda";
import { Spinner } from "flowbite-react";

function PaginationCourses() {
  const materi = useMateri();
  const [selectedMateriIndex, setSelectedMateriIndex] = useState(0);
  const [progress, updateProgress, resetProgress] = useProgress(materi.length);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <div>
      <Tabs aria-label="Tabs with underline" variant="underline">
        <Tabs.Item title="Materi" icon={MdDashboard}>
          {materi.length === 0 ? (
            <p>No Materi Available</p>
          ) : (
            <div>
              <h3 className="font-bold text-lg">{selectedMateri.judul}</h3>
              <p className="text-justify">{selectedMateri.content}</p>
              <div className="pt-4 flex justify-between">
                <button
                  onClick={handlePrevious}
                  className="p-2 border rounded bg-gray-500 text-white"
                  disabled={selectedMateriIndex === 0}
                >
                  Previous
                </button>
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
                        <Spinner aria-label="Loading spinner" /> Loading...
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
            </div>
          )}
          <div className="pt-4">
            <Chapter onMateriSelect={handleMateriSelect} />
          </div>

          <div className="pt-4">
            <p className="text-lg font-bold">Overall Progress: {progress}%</p>
            <button
              onClick={handleResetProgress}
              className="pt-2 p-2 border rounded bg-red-500 text-white"
            >
              Reset Progress
            </button>
          </div>
          <CardCompSync />
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
  );
}

export default PaginationCourses;
