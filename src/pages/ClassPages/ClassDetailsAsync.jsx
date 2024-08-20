import React from "react";
import PaginationCda from "../../components/Tabs/TabsCda";
import ButtonBuyClass from "../../components/Button/ButtonBuyClass";
import DiscountPrice from "../../components/DiscountPrice";
import CoursesPaginationDesktop from "../../components/Tabs/CoursesPaginationDesktop";
import DropdownCda from "../../components/Dropdown/DropdownCda";
import Aside from "../../components/Aside";

function ClassDetailsAsync() {
  return (
    <div className="relative flex flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="fixed z-10 lg:static lg:translate-x-0 transform lg:transform-none md:w-64 w-64">
        <Aside />
      </div>

      {/* Content */}
      <div className="flex-1 lg:pl-5 md:pl-64 lg:pr-8 transition-all duration-300">
        <div className="hidden lg:flex lg:flex-col pt-6 ">
          <h1 className="font-bold text-3xl">Javascript Advanced</h1>
          <div className="flex gap-3">
            <h4 className="text-red-600">Steven Arnatouvic</h4>
            <div className="flex items-center">
              <img src="/src/assets/star.svg" alt="Star" />
              <h4>4.8 (1,812 ratings)</h4>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col lg:flex-row md:flex-row">
          <div className="lg:pb-4 lg:pt-2">
            <img
              src="/src/assets/Thumbnail.svg"
              className="w-auto lg:rounded-2xl"
              alt="Thumbnail"
            />
            {/* Desktop */}
            <div className="hidden lg:flex lg:w-[805px] pt-4 px-4 justify-between">
              <div className="flex gap-3">
                <img
                  src="/src/assets/logo-courses.svg"
                  className="w-7"
                  alt="Logo Courses"
                />
                <div>
                  <h3 className="text-blue-700 text-sm font-bold">
                    Media Kreasi Abadi
                  </h3>
                  <h4 className="text-xs font-medium">IT Consultant</h4>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex justify-center items-center gap-1 text-gray-500">
                  <img src="/src/assets/student.svg" alt="Student Icon" />
                  <p className="text-sm">2.3k</p>
                </div>
                <div className="flex justify-center items-center gap-1 text-gray-500">
                  <img src="/src/assets/review.svg" alt="Review Icon" />
                  <p className="text-sm">1.4k</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex lg:w-11/12 pt-5">
              <CoursesPaginationDesktop />
            </div>
          </div>
          <div className="hidden lg:flex lg:flex-col gap-10">
            <div className="flex flex-col w-[386px] h-[448px] p-3 bg-white shadow-xl z-10 relative">
              <div>
                <div className="flex items-center gap-5">
                  <h1 className="font-bold text-3xl">Gratis</h1>
                  <h3 className="text-gray-400">
                    <s>Rp 6.000.000</s>
                  </h3>
                </div>
                <DiscountPrice />
              </div>
              <div>
                <ButtonBuyClass />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <img
                    className="w-6"
                    src="/src/assets/section.svg"
                    alt="Section Icon"
                  />
                  <h4 className="text-gray-600">22 Section</h4>
                </div>
                <div className="flex gap-2">
                  <img
                    className="w-6"
                    src="/src/assets/lectures.svg"
                    alt="Lectures Icon"
                  />
                  <h4 className="text-gray-600">152 Lectures</h4>
                </div>
                <div className="flex gap-2">
                  <img
                    className="w-6"
                    src="/src/assets/live.svg"
                    alt="Live Icon"
                  />
                  <h4 className="text-gray-600">21h 33m total lengths</h4>
                </div>
                <div className="flex gap-2">
                  <img
                    className="w-6"
                    src="/src/assets/volume.svg"
                    alt="Volume Icon"
                  />
                  <h4 className="text-gray-600">English</h4>
                </div>
              </div>
            </div>
            {/* Dropdown Desktop */}
            <div className="w-full lg:w-auto flex flex-col gap-3 rounded bg-gray-300 p-2 z-10 relative">
              <DropdownCda />
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          <div className="flex pt-4 px-4 justify-between">
            <div className="flex gap-3">
              <img
                src="/src/assets/logo-courses.svg"
                className="w-7"
                alt="Logo Courses"
              />
              <div>
                <h3 className="text-blue-700 text-sm font-bold">
                  Media Kreasi Abadi
                </h3>
                <h4 className="text-xs font-medium">IT Consultant</h4>
              </div>
            </div>
            <div className="flex pr-4 gap-3">
              <div className="flex justify-center items-center gap-1 text-gray-500">
                <img src="/src/assets/student.svg" alt="Student Icon" />
                <p className="text-sm">2.3k</p>
              </div>
              <div className="flex justify-center items-center gap-1 text-gray-500">
                <img src="/src/assets/review.svg" alt="Review Icon" />
                <p className="text-sm">1.4k</p>
              </div>
            </div>
          </div>
          <div className="pt-5 flex md:hidden">
            <PaginationCda />
          </div>
        </div>
        <div className="lg:hidden mt-4">
          <ButtonBuyClass />
        </div>
      </div>
    </div>
  );
}

export default ClassDetailsAsync;
