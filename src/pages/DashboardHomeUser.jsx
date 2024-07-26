import CardComp from "/src/components/CardComp";
import Aside from "/src/components/Aside";
import SearchInput from "/src/components/SearchInput";
import PageHomeComp from "../components/PageHomeComp";

function DashboardHomeUser() {
  return (
    <div className="w-fit">
      <div>
        <Aside className="flex-shrink-0 sm:w-1/4  bg-gray-100" />
      </div>

      <img
        src="/src/assets/dashboardhome.svg"
        className="flex justify-center w-full h-96 items-center object-cover"
      />
      <div className="flex flex-col items-start pl-5 pt-5 text-xl sm:pl-72 ">
        <h1 className="font-be-vietnam-pro text-title-home sm:text-2xl">
          Hello Andi, Welcome back
        </h1>
      </div>
      <div className="flex items-center py-7 justify-center ">
        <PageHomeComp />
      </div>
      <div className="flex flex-col sm:pl-36 justify-center sm:flex-row min-h-screen">
        <div className="flex flex-col sm:pt-10 w-full gap-10 sm:w-3/4 p-1">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full">
            <div className="flex items-end w-fit gap-5 sm:w-fit px-10 sm:gap-3  sm:px-10 ">
              <h1 className="font-bold font-be-vietnam-pro text-2xl">
                Synchronous
              </h1>
              <a className="flex items-end cursor-pointer text-btn-card hover:text-opacity-80">
                View all
              </a>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-4 w-full sm:w-auto px-10 sm:px-0">
              <div className="bg-bg-sidebar rounded-lg">
                <SearchInput />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center  gap-4">
            <CardComp className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" />
            <CardComp className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" />
            <CardComp className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" />
            <CardComp className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" />
            <CardComp className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" />
            <CardComp className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" />
            <CardComp className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" />
            <CardComp className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHomeUser;
