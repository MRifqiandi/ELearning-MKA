import React from "react";
import CoursesSide from "../components/CoursesSide";
import Payment from "../components/Payment";
import Cart from "../components/Cart";

function PaymentPages() {
  return (
    <div>
      <div>
        <CoursesSide />
      </div>
      <div className="flex flex-col items-center gap-5">
        <Cart />
        <Payment />
      </div>
    </div>
  );
}

export default PaymentPages;
