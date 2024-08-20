import SearchFuncMobile from "../../components/SearchComp/SearchFuncMobile";
import Aside from "/src/components/Aside";
import { Link } from "react-router-dom";
import CardCompAsync from "../../components/Card/CardCompAsync";
import PaginationSearchPage from "../../components/PaginationSearchPage";

function SearchingPage() {
  return (
    <div>
      <div className="h-screen flex flex-col md:flex-row">
        <Aside className="bg-gray-100 md:w-1/4 md:h-full" />

        <div className="flex flex-col flex-1">
          <div className="flex flex-col items-center justify-center gap-14 p-4 md:pl-72">
            <div className="flex flex-col gap-4 lg:gap-14 pt-14">
              <div className="flex flex-col items-center">
                <h1 className="font-bold text-2xl">Mau cari kelas apa?</h1>
                <h2 className="text-gray-400 text-center text-lg">
                  Temukan berbagai kelas yang bisa bermanfaat bagimu
                </h2>
              </div>

              <div className="w-full">
                <SearchFuncMobile />
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
            <PaginationSearchPage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchingPage;
