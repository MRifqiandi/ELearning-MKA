import React from "react";

function Payment() {
  return (
    <div>
      <div className="w-fit p-3 bg-white shadow-xl ">
        <h1 className="font-bold text-lg">Pembayaran Didukung Oleh :</h1>
        <div className="flex gap-5 pt-3">
          <img src="/src/assets/BNI.svg " />
          <img src="/src/assets/BCA.svg " />
          <img src="/src/assets/GOPAY.svg " />
        </div>
      </div>
    </div>
  );
}

export default Payment;
