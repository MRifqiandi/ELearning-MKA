import React from "react";
import SearchFuncMobile from "../../components/SearchComp/SearchFuncMobile";
import PageHomeComp from "../../components/Tabs/PageHomeComp";
import Aside from "/src/components/Aside";
import SearchInput from "/src/components/SearchComp/SearchInput";
import RecentActivity from "../../components/RecentActivity";
import { Link } from "react-router-dom";
import CardCompAsync from "../../components/Card/CardCompAsync";

function DashboardAsynchronous() {
  return (
    <div>
      <div className="h-screen flex flex-col md:flex-row">
        <Aside className="bg-gray-100 md:w-1/4 md:h-full" />

        <div className="flex flex-col flex-1">
          <div className="flex justify-center items-center w-full h-96">
            <img
              src="/src/assets/dashboardhome.svg"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex font-be-vietnam-pro text-title-home text-xl p-4 md:justify-start md:items-start md:pl-72">
            <h1>
              Hello <span className="font-bold">Andi,</span> Welcome back
            </h1>
          </div>

          <div className="flex justify-center items-center md:justify-center md:pl-72">
            <PageHomeComp />
          </div>

          <div className="flex flex-col gap-1 p-4 md:pl-72">
            <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-14 lg:justify-between pt-14">
              <div className="flex gap-4 justify-center lg:justify-between w-full lg:w-auto">
                <h1 className="font-bold font-be-vietnam-pro text-2xl">
                  Asynchronous
                </h1>
                <a className="text-sm flex items-end cursor-pointer text-btn-card hover:text-opacity-80">
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

            <div className="flex flex-wrap justify-center items-center gap-4 p-4">
              <Link to="/cda">
                <CardCompAsync className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" />
              </Link>
              <Link to="/cda">
                <CardCompAsync className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" />
              </Link>
              <Link to="/cda">
                <CardCompAsync className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" />
              </Link>
              <Link to="/cda">
                <CardCompAsync className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" />
              </Link>
              <Link to="/cda">
                <CardCompAsync className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" />
              </Link>
              <Link to="/cda">
                <CardCompAsync className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" />
              </Link>
            </div>

            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardAsynchronous;
