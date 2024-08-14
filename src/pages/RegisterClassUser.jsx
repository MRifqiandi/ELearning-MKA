import React, { useState } from "react";
import PaginationCda from "../components/PaginationCda";

import Aside from "../components/Aside";
import CoursesPaginationDesktop from "../components/CoursesPaginationDesktop";
import DropdownCda from "../components/DropdownCda";
import RegisterPersonalDataUser from "../components/RegisterPersonalDataUser";
import RegisterExtraUser from "../components/RegisterExtraUser";

function RegisterClassUser() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [step, setStep] = useState(1); // State untuk mengatur step

  const handleRegisterClick = () => {
    setIsPopupVisible(true);
    setStep(1); // Reset ke step 1 setiap kali popup dibuka
  };

  const handleNextStep = () => {
    setStep(2); // Pindah ke step 2
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const handleSubmit = () => {
    // Logic untuk mengirim data atau tindakan yang diinginkan
    alert("Data telah dikirim!");
    handleClosePopup(); // Menutup popup setelah mengirim
  };
  return (
    <div>
      <div className="fixed z-10 lg:static lg:translate-x-0 transform lg:transform-none md:w-64 w-64">
        <Aside />
      </div>
      <div className="flex-1 lg:pl-72 lg:pt-5 md:pl-64 lg:pr-8 transition-all duration-300">
        <div className="hidden lg:flex lg:flex-col pt-4">
          <h1 className="font-bold text-2xl">Javascript Advanced</h1>
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
              className="w-auto lg:rounded-2xl "
            />
            {/* Desktop */}
            <div className="lg:flex lg:w-[805px] pt-4 px-4 hidden justify-between">
              <div className="flex  gap-3">
                <img src="/src/assets/logo-courses.svg" className="w-7" />
                <div>
                  <h3 className="text-blue-700 text-sm font-bold">
                    Media Kreasi Abadi
                  </h3>
                  <h4 className=" text-xs font-medium">IT Consultant</h4>
                </div>
              </div>
              <div className="flex gap-3">
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
          <div className="hidden lg:flex lg:flex-col gap-10">
            <div className="flex flex-col w-[386px] p-3 bg-white shadow-xl">
              <div className="flex flex-col gap-2 ">
                <h1 className="font-bold text-xl">Selamat Belajar yaa 😁</h1>
                <h2 className="text-md text-gray-600 font-light">
                  Silahkan daftar agar kamu bisa belajar sepenuhnya !
                </h2>
              </div>
              <div className="py-5">
                <button
                  onClick={handleRegisterClick}
                  className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded"
                >
                  Daftar
                </button>
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
            <div className="w-full  flex flex-col gap-3 rounded bg-gray-300 p-2">
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
      <div className="lg:hidden md:pl-64 p-10 flex justify-center">
        <div className="flex flex-col w-[386px] p-3  bg-white shadow-xl">
          <div className="flex flex-col items-center gap-2 ">
            <h1 className="font-bold text-xl">Selamat Belajar yaa 😁</h1>
            <h2 className="text-md text-gray-600 font-light">
              Silahkan daftar agar kamu bisa belajar sepenuhnya !
            </h2>
          </div>
          <div className="flex flex-col gap-3 pt-3">
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
          <div className="pt-5">
            <button
              onClick={handleRegisterClick}
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded"
            >
              Daftar
            </button>
          </div>
        </div>
      </div>

      {isPopupVisible && (
        <div className="fixed inset-0 z-50  flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-lg max-w-lg w-full">
            {step === 1 && (
              <>
                <RegisterPersonalDataUser />
                <div className="flex flex-col gap-2 pt-6">
                  <button
                    onClick={handleNextStep}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                  >
                    Lanjutkan
                  </button>
                  <button
                    onClick={handleClosePopup}
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded"
                  >
                    Tutup
                  </button>
                </div>
              </>
            )}
            {step === 2 && (
              <>
                <RegisterExtraUser />
                <div className="flex justify-center pt-6">
                  <button
                    onClick={handleSubmit}
                    className="bg-blue-500 w-full text-white font-bold py-2 px-4 rounded"
                  >
                    Kirim
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default RegisterClassUser;
