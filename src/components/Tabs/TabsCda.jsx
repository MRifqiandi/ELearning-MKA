import { Tabs } from "flowbite-react";
import { HiAdjustments, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
// import StatusCourses from "./StatusCourses";
import DropdownCda from "../Dropdown/DropdownCda";
import CardMentor from "../Card/CardMentor";

function PaginationCda() {
  return (
    <Tabs aria-label="Tabs with underline" variant="underline">
      <Tabs.Item title="Tentang Kelas" icon={MdDashboard}>
        This is
        <span className="font-medium text-gray-800 dark:text-white">
          Dashboard tabs associated content
        </span>
        . Clicking another tab will toggle the visibility of this one for the
        next. The tab JavaScript swaps classes to control the content visibility
        and styling.
      </Tabs.Item>
      <Tabs.Item title="Persiapan Kelas" icon={HiAdjustments}>
        This is
        <span className="font-medium text-gray-800 dark:text-white">
          Settings tabs associated content
        </span>
        . Clicking another tab will toggle the visibility of this one for the
        next. The tab JavaScript swaps classes to control the content visibility
        and styling.
      </Tabs.Item>
      <Tabs.Item active title="Courses" icon={HiUserCircle}>
        <div className="flex flex-col gap-5 lg:hidden justify-center p-2">
          <div className="flex lg:hidden gap-3">
            <CardMentor />
          </div>
          <div className="w-full gap-3 rounded-lg bg-gray-300 p-2">
            <DropdownCda />
          </div>
        </div>
      </Tabs.Item>
    </Tabs>
  );
}

export default PaginationCda;
