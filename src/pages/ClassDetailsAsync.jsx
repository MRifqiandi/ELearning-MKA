import React from "react";
import PaginationCda from "../components/PaginationCda";
import NavbarReact from "../components/NavbarReact";
import ButtonBuyClass from "../components/ButtonBuyClass";
import DiscountPrice from "../components/DiscountPrice";
import CoursesPaginationDesktop from "../components/CoursesPaginationDesktop";
import DropdownCda from "../components/DropdownCda";

function ClassDetailsAsync() {
  return (
    <div>
      <NavbarReact />
      <div>
        <div className="hidden lg:flex lg:flex-col lg:pl-10 lg:pt-10 ">
          <h3>Development / Mobile Engineer</h3>
          <h1 className="font-bold text-2xl">Javascript Advanced</h1>
          <div className="flex gap-3">
            <h4 className="text-red-600">Steven Arnatouvic</h4>
            <div className="flex">
              <img src="/src/assets/star.svg" />
              <h4>4.8 (1,812 ratings)</h4>
            </div>
          </div>
        </div>

        <div className="flex w-full">
          <div className="lg:pl-10 lg:pb-4 lg:pt-2">
            <img
              src="/src/assets/Thumbnail.svg"
              className="w-auto lg:rounded-2xl "
            />

            {/* Desktop */}
            <div className="lg:flex lg:w-[805px] pt-4 px-4 hidden justify-between">
              <div className="flex lg:pl-2 gap-3">
                <img src="/src/assets/logo-courses.svg" className="w-7" />
                <div>
                  <h3 className="text-blue-700 text-sm font-bold">
                    Media Kreasi Abadi
                  </h3>
                  <h4 className=" text-xs font-medium">IT Consultant</h4>
                </div>
              </div>
              <div className="flex pr-4 gap-3">
                <div className="flex justify-center items-center gap-1 text-gray-500">
                  <img src="/src/assets/student.svg" />
                  <p className="text-sm">2.3k</p>
                </div>
                <div className="flex justify-center items-center gap-1 text-gray-500">
                  <img src="/src/assets/review.svg" />
                  <p className="text-sm">1.4k</p>
                </div>
              </div>
            </div>
            <div className=" lg:w-5/12 pt-5 hidden lg:flex">
              <CoursesPaginationDesktop />
            </div>
          </div>
          <div className="hidden lg:flex lg:flex-col lg:pr-10 gap-10  lg:pl-14">
            <div className="flex flex-col w-[386px] h-[448px] p-3  bg-white shadow-xl">
              <div>
                <div className="flex items-center gap-5 ">
                  <h1 className="font-bold text-3xl">Gratis</h1>
                  <h3 className="text-gray-400">
                    <s> Rp 6.000.000 </s>
                  </h3>
                </div>

                <DiscountPrice />
              </div>
              <div>
                <ButtonBuyClass />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <img className="w-6" src="/src/assets/section.svg" />
                  <h4 className="text-gray-600">22 Section</h4>
                </div>
                <div className="flex gap-2">
                  <img className="w-6" src="/src/assets/lectures.svg" />
                  <h4 className="text-gray-600">152 Lectures</h4>
                </div>
                <div className="flex gap-2">
                  <img className="w-6" src="/src/assets/live.svg" />
                  <h4 className="text-gray-600">21h 33m total lenghts</h4>
                </div>
                <div className="flex gap-2">
                  <img className="w-6" src="/src/assets/volume.svg" />
                  <h4 className="text-gray-600">English</h4>
                </div>
              </div>
            </div>
            {/* Dropdown Desktop  */}
            <div className="w-full lg:w-auto  flex flex-col gap-3 rounded bg-gray-300 p-2">
              <DropdownCda />
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="">
          <div className=" lg:hidden">
            <h1 className="font-bold pt-4 pl-4 text-xl">JAVASCRIPT ADVANCED</h1>
          </div>
          <div className="flex  lg:hidden pt-4 px-4 justify-between">
            <div className="flex gap-3">
              <img src="/src/assets/logo-courses.svg" className="w-7" />
              <div>
                <h3 className="text-blue-700 text-sm font-bold">
                  Media Kreasi Abadi
                </h3>
                <h4 className=" text-xs font-medium">IT Consultant</h4>
              </div>
            </div>
            <div className="flex pr-4 gap-3">
              <div className="flex justify-center items-center gap-1 text-gray-500">
                <img src="/src/assets/student.svg" />
                <p className="text-sm">2.3k</p>
              </div>
              <div className="flex justify-center items-center gap-1 text-gray-500">
                <img src="/src/assets/review.svg" />
                <p className="text-sm">1.4k</p>
              </div>
            </div>
          </div>
          <div className="pt-5 flex lg:hidden">
            <PaginationCda />
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <ButtonBuyClass />
      </div>
    </div>
  );
}

export default ClassDetailsAsync;
