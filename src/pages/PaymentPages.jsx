import React from "react";
import { useEffect } from "react";
import CoursesSide from "../components/CoursesSide";
import Payment from "../components/Payment";
// import Cart from "../components/Cart";
import NavbarReact from "../components/NavbarReact";
import { useNavigate } from "react-router-dom";

function PaymentPages() {
  const navigate = useNavigate();

  useEffect(() => {
    // Set delay in milliseconds (e.g., 3000ms = 3 seconds)
    const timer = setTimeout(() => {
      navigate("/payconfirm"); // Replace with your desired route
    }, 7000); // 6 seconds delay

    // Cleanup the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div>
      <NavbarReact />
      <div className="lg:flex lg:items-center lg:gap-10">
        <CoursesSide />

        <div className="flex flex-col items-center gap-5 pt-5 lg:pt-20 ">
          <div>
            <div className="flex flex-col w-[386px] h-fit p-3  bg-white shadow-xl gap-1">
              <div className="flex items-center">
                <h2 className="font-bold text-xl">Detail Pembayaran</h2>
              </div>

              <div className="flex flex-col gap-2 text-gray-600">
                <div className="flex flex-col justify-between">
                  <p className="text-sm font-semibold">
                    Pembayaran Menggunakan
                  </p>
                  <img className="w-fit" src="/src/assets/BNI.svg" />
                  <p className="text-sm">PT Media Kreasi Abadi</p>
                  <p className="text-sm pt-1  ">182754820</p>
                  <p className="text-sm font-semibold pt-3">
                    Pembayaran kamu akan dikonfirmasi otomatis ya😊
                  </p>
                </div>
                <div className="w-full h-[1px] bg-gray-400"></div>
                <div className="flex justify-between">
                  <p className="text-sm">Harga Kelas</p>
                  <p className="text-sm">Rp 6.000.000</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm">Harga Tambahan</p>
                  <p className="text-sm">Rp 0</p>
                </div>
                <div className="flex justify-between pt-2">
                  <p className="text-sm">Total Pembayaran</p>
                  <p className="text-sm">Rp 6.000.000</p>
                </div>
              </div>
            </div>
          </div>
          <Payment />
        </div>
      </div>
    </div>
  );
}

export default PaymentPages;
