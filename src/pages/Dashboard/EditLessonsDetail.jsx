import AsideClass from "../../components/AsideClass";
import PaginationCourses from "../../components/Tabs/TabsCourses";
import Breadcru from "../../components/Breadcrumb";
import TabsEditLessons from "../../components/Tabs/TabsEditLessons";
// import { Button } from "flowbite-react";

function EditLessonsDetail() {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="fixed z-10 lg:static lg:translate-x-0 transform lg:transform-none md:full">
        <AsideClass />
      </div>

      {/* Content */}
      <div className="flex-1 transition-all duration-300">
        <div className="pl-10 lg:fixed w-full">
          <Breadcru />
        </div>
        <div className="flex w-full justify-between">
          <div className="flex-1 ">
            <div className="p-3 pl-5 flex justify-start overflow-auto lg:w-full lg:fixed top-16 left-0 right-0">
              <TabsEditLessons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditLessonsDetail;
