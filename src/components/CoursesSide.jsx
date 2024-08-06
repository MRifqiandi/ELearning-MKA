import React from "react";

function CoursesSide() {
  return (
    <div>
      <div className="hidden lg:flex lg:flex-col lg:pl-10 lg:pt-10 ">
        <h3 className="text-gray-600">Development / Mobile Engineer</h3>
        <h1 className="font-bold text-2xl">Javascript Advanced</h1>
        <div className="flex gap-3">
          <h4 className="text-red-600">Steven Arnatouvic</h4>
          <div className="flex">
            <img src="/src/assets/star.svg" />
            <h4>4.8 (1,812 ratings)</h4>
          </div>
        </div>
      </div>

      <div className="flex w-full gap-10 items-start">
        <div className="lg:pl-10 lg:pb-4 lg:pt-2">
          <img
            src="/src/assets/Thumbnail.svg"
            className="w-auto lg:rounded-2xl "
          />
        </div>
      </div>

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
          {/* <div className="flex pr-4 gap-3">
            <div className="flex justify-center items-center gap-1 text-gray-500">
              <img src="/src/assets/student.svg" />
              <p className="text-sm">2.3k</p>
            </div>
            <div className="flex justify-center items-center gap-1 text-gray-500">
              <img src="/src/assets/review.svg" />
              <p className="text-sm">1.4k</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default CoursesSide;
