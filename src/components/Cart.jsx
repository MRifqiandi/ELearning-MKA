import React from "react";
// import DiscountPrice from "./DiscountPrice";
// import ButtonBuyClass from "./ButtonBuyClass";

function Cart() {
  return (
    <div>
      <div className="flex flex-col w-[386px] h-fit p-3  bg-white shadow-xl gap-10">
        <div>
          <div className="flex items-center gap-5 ">
            <h2 className="font-bold text-xl">Detail Pembayaran</h2>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-gray-600">
          <div className="flex justify-between">
            <p className="text-sm">Harga Kelas</p>
            <p className="text-sm">Rp 6.000.000</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm">Harga Tambahan</p>
            <p className="text-sm">Rp 0</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm">Total Pembayaran</p>
            <p className="text-sm">Rp 6.000.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
