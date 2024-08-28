import Aside from "/src/components/Aside";
import SearchInput from "/src/components/SearchComp/SearchInput";
import CardCompleteCourse from "../../components/Card/CardCompleteCourse";
import SearchFuncMobile from "../../components/SearchComp/SearchFuncMobile";
import Instructor from "../../components/Instructor";
import CardCompAdmin from "../../components/Card/CardCompAdmin";
import { Link } from "react-router-dom";

function DashboardAdmin() {
  return (
    <div className="h-screen flex flex-col md:flex-row">
      <Aside className="bg-gray-100 md:w-1/4 md:h-full" />

      <div className="flex flex-col flex-1">
        <section className="flex font-be-vietnam-pro text-title-home text-xl p-4 md:justify-start md:items-start md:pl-72">
          <div className="flex flex-col gap-10">
            <h1>
              Hello <span className="font-bold">Admin,</span> Selamat Datang
              Kembali
            </h1>
            <h1 className="font-bold">Manage your dashboard</h1>
          </div>
        </section>
        <div className="flex flex-col gap-1  md:pl-72">
          <section className="flex flex-wrap pt-3 gap-5 justify-center">
            <Link to="/allclasses">
              <div className="flex pt-1 rounded-lg flex-col shadow-xl bg-blue-500 opacity-90 text-gray-200 justify-center items-center w-[161px] hover:scale-105 hover:shadow-lg hover:shadow-green-200 cursor-pointer transition-transform duration-300 transform  ">
                <img src="/src/assets/course.svg" />
                <h1>Classes</h1>
                <h1 className="text-3xl ">4</h1>
                <div className="w-24 bg-white h-[3px]"></div>
              </div>
            </Link>
            <div className="flex pt-1 rounded-lg flex-col shadow-xl bg-green-500 opacity-90 text-gray-200 justify-center items-center w-[161px] hover:scale-105 hover:shadow-lg hover:shadow-green-200 cursor-pointer transition-transform duration-300 transform  ">
              <img src="/src/assets/course.svg" />
              <h1>Courses</h1>
              <h1 className="text-3xl ">4</h1>
              <div className="w-24 bg-white h-[3px]"></div>
            </div>
            <div className="flex pt-1 rounded-lg flex-col shadow-xl bg-orange-500 opacity-90 text-gray-200 justify-center items-center w-[161px] hover:scale-105 hover:shadow-lg hover:shadow-green-200 cursor-pointer transition-transform duration-300 transform  ">
              <img src="/src/assets/course.svg" />
              <h1>Mentor</h1>
              <h1 className="text-3xl ">4</h1>
              <div className="w-24 bg-white h-[3px]"></div>
            </div>
            <div className="flex pt-1 rounded-lg flex-col shadow-xl bg-cyan-500 opacity-90 text-gray-200 justify-center items-center w-[161px] hover:scale-105 hover:shadow-lg hover:shadow-green-200 cursor-pointer transition-transform duration-300 transform  ">
              <img src="/src/assets/course.svg" />
              <h1>Users</h1>
              <h1 className="text-3xl ">4</h1>
              <div className="w-24 bg-white h-[3px]"></div>
            </div>
          </section>

          <section className="pr-4">
            <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-14 lg:justify-between pt-10">
              <div className="flex gap-4 p-5  justify-center lg:justify-between w-full lg:w-auto">
                <h1 className="font-semibold font-be-vietnam-pro text-2xl">
                  Manage Your Classes and Courses
                </h1>
                <a
                  href="/dashboardasync"
                  className="text-sm flex items-end cursor-pointer text-btn-card hover:text-opacity-80"
                >
                  View all
                </a>
              </div>
              <div className="lg:hidden">
                <SearchFuncMobile />
              </div>
              <div className="hidden lg:flex bg-bg-sidebar rounded-lg">
                <SearchInput />
              </div>
            </div>
            <div className="flex flex-wrap  justify-center items-center gap-4 p-4 ">
              <CardCompAdmin className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" />
              <CardCompAdmin className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" />
              <CardCompAdmin className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" />
              <CardCompAdmin className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" />
              <CardCompAdmin className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" />
              <CardCompAdmin className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" />
            </div>
          </section>
          <div className="flex w-full flex-col justify-center items-center gap-8 pt-14  ">
            <div className="flex flex-wrap justify-center gap-4 ">
              <CardCompleteCourse className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" />
              <CardCompleteCourse className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" />
              <CardCompleteCourse className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" />
            </div>
            <div className="w-80 h-1 sm:w-96 lg:w-[900px] bg-[#F0F0F0]"></div>
          </div>

          <div className="pt-10">
            <Instructor />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardAdmin;
