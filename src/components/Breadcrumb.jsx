import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

function Breadcru() {
  return (
    <Breadcrumb
      aria-label="Solid background breadcrumb example"
      className="bg-gray-50 px-5 p-6 dark:bg-gray-800"
    >
      <Breadcrumb.Item href="/" icon={HiHome}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="/dashboardasync">
        Dashboard Asynchronous
      </Breadcrumb.Item>
      <Breadcrumb.Item href="/classasync">Python</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default Breadcru;
