import React from "react";
import NavbarReact from "../components/NavbarReact";
import Cart from "../components/Cart";
import { Button } from "flowbite-react";
import Payment from "../components/Payment";
import CoursesSide from "../components/CoursesSide";

function Checkout() {
  return (
    <div>
      <NavbarReact />
      <div className="lg:flex gap-10 ">
        <CoursesSide />
        <div className="hidden lg:flex lg:pr-5 flex-col gap-5 justify-center">
          <Cart />
          <div className="flex items-center justify-center">
            <Button>Lanjutkan Pembayaran</Button>
          </div>
          <div className="flex items-center justify-center">
            <Payment />
          </div>
        </div>
      </div>
      <div className="flex pt-10 flex-col gap-7 justify-center items-center lg:hidden">
        <Cart />
        <div className="flex items-center justify-center">
          <Button>Lanjutkan Pembayaran</Button>
        </div>
        <div>
          <Payment />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
