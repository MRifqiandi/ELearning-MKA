import Aside from "/src/components/Aside";
import SearchInput from "/src/components/SearchComp/SearchInput";
import SearchFuncMobile from "../../components/SearchComp/SearchFuncMobile";
import Instructor from "../../components/Instructor";
import CardCompAdmin from "../../components/Card/CardCompAdmin";
import { Link } from "react-router-dom";

function AllClassesAdmin() {
  return (
    <div className="h-screen flex flex-col md:flex-row">
      <Aside className="bg-gray-100 md:w-1/4 md:h-full" />

      <div className="flex flex-col flex-1">
        <section className="flex font-be-vietnam-pro text-title-home text-xl p-4 md:justify-start md:items-start md:pl-72">
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl">All Classes</h1>
            <h1 className="text-gray-500">Education Dashboard</h1>
          </div>
        </section>
        <div className="flex flex-col gap-1  md:pl-72">
          <section className="pr-4 ">
            <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-14 lg:justify-between pt-14">
              <div className="flex gap-4 justify-center lg:justify-between w-full lg:w-auto">
                <h1 className="font-semibold font-be-vietnam-pro text-2xl">
                  Synchronous
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
            <div className="flex justify-end pt-5 pr-11">
              <Link to="/addclass">
                <button className="flex items-center font-semibold text-white bg-title-home w-32 justify-center rounded-lg p-1 hover:opacity-80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth={1.5}
                      d="M12 17V7m-5 5h10"
                    ></path>
                  </svg>
                  Class
                </button>
              </Link>
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
          <section className="pr-4 ">
            <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-14 lg:justify-between pt-14">
              <div className="flex gap-4 justify-center lg:justify-between w-full lg:w-auto">
                <h1 className="font-semibold font-be-vietnam-pro text-2xl">
                  Asynchronous
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
            <div className="flex justify-end pt-5 pr-11">
              <button className="flex items-center font-semibold text-white bg-title-home w-32 justify-center rounded-lg p-1 hover:opacity-80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth={1.5}
                    d="M12 17V7m-5 5h10"
                  ></path>
                </svg>
                Class
              </button>
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

          <div className="pt-10">
            <Instructor />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllClassesAdmin;
