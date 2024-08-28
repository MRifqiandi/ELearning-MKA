// import { useState } from "react";
import Aside from "/src/components/Aside";
import CardWeekSync from "../../components/Card/CardWeekSync";
// import MeetDetailSync from "../../components/Card/MeetDetailSync";

function WeekDetailSync() {
  return (
    <div>
      <div className="h-screen flex  flex-col md:flex-row">
        <Aside className="bg-gray-100 md:w-1/4 md:h-full" />

        <section className="flex flex-col flex-1">
          <div className="flex flex-col gap-1 p-4 md:pl-72">
            <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-14 lg:justify-between">
              <div className="flex gap-4 pl-3 justify-center lg:justify-between w-full lg:w-auto">
                <h1 className="font-bold font-be-vietnam-pro text-2xl">
                  Kelas Python
                </h1>
              </div>
            </div>

            <div className="flex flex-wrap shadow-xl rounded-xl  justify-center items-center gap-4 p-2">
              <CardWeekSync className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" />
              <CardWeekSync className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" />
              <CardWeekSync className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" />
              <CardWeekSync className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" />
              <CardWeekSync className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" />
              <CardWeekSync className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default WeekDetailSync;
