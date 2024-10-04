import AsideClass from "../../components/AsideClass";
// import PaginationCourses from "../../components/Tabs/TabsCourses";
import Breadcru from "../../components/Breadcrumb";
import CoursesTabs from "../../components/Tabs/CoursesTabs";
// import TabsEditLessons from "../../components/Tabs/TabsEditLessons";

function ClassAsynchronous() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="fixed z-10 lg:static lg:translate-x-0 transform lg:transform-none md:full">
        <AsideClass />
      </div>

      <div className="flex-1 transition-all duration-300">
        <div className="pl-10 lg:fixed w-full">
          <Breadcru />
        </div>
        <div className="flex w-full justify-between">
          <div className="flex-1 ">
            <div className="p-3 pl-5 flex justify-start overflow-auto lg:w-full lg:fixed pt-10 left-0 right-0">
              <CoursesTabs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassAsynchronous;
