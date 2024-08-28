// import React from "react";
import { useEffect } from "react";
import CoursesSide from "../../components/CoursesSide";
import Payment from "../../components/Payment";
import Aside from "../../components/Aside";
import { useNavigate } from "react-router-dom";

function PaymentPages() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/payconfirm");
    }, 6000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div>
      <div className="fixed z-10 lg:static lg:translate-x-0 transform lg:transform-none md:w-64 w-64">
        <Aside />
      </div>
      <div className="lg:flex">
        <div className="lg:pl-60 lg:pt-10 ">
          <CoursesSide />
        </div>

        <div className="flex flex-col justify-center items-center md:pl-60 lg:pl-0 gap-5 pt-7 lg:pt-32 ">
          <div className="flex flex-col w-[386px] h-fit p-3  bg-white shadow-xl gap-1">
            <div className="flex items-center">
              <h2 className="font-bold text-xl">Detail Pembayaran</h2>
            </div>
            <div className="flex flex-col gap-2 text-gray-600">
              <div className="flex flex-col justify-between">
                <p className="text-sm font-semibold">Pembayaran Menggunakan</p>
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

          <Payment />
        </div>
      </div>
    </div>
  );
}

export default PaymentPages;
