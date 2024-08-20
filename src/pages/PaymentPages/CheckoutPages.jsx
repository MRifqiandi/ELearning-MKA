import React from "react";
import Aside from "../../components/Aside";
import Cart from "../../components/Cart";
import { Button } from "flowbite-react";
import Payment from "../../components/Payment";
import CoursesSide from "../../components/CoursesSide";
import { Link } from "react-router-dom";

function CheckoutPages() {
  return (
    <div>
      <div className="fixed z-10 lg:static lg:translate-x-0 transform lg:transform-none md:w-64 w-64">
        <Aside />
      </div>
      <div className="lg:flex gap-10 lg:pl-60 lg:pr-10 lg:pt-10 lg:justify-center lg:items-center ">
        <CoursesSide />
        <div className="hidden lg:flex  flex-col gap-5 justify-center">
          <Cart />
          <div className="flex items-center justify-center">
            <Link to="/pay">
              <Button>Lanjutkan Pembayaran</Button>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Payment />
          </div>
        </div>
      </div>
      <div className="flex pt-10 flex-col gap-7 justify-center items-center md:pl-64 lg:hidden">
        <Cart />
        <div className="flex items-center justify-center">
          <Link to="/pay">
            <Button>Lanjutkan Pembayaran</Button>
          </Link>
        </div>
        <div>
          <Payment />
        </div>
      </div>
    </div>
  );
}

export default CheckoutPages;
