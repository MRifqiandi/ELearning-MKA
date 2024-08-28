import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PaymentConfirm() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(4); // Initial countdown time in seconds

  useEffect(() => {
    // Set interval to update countdown every second
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Set timeout to navigate to next page after countdown ends
    const timer = setTimeout(() => {
      navigate("/class");
    }, 4000);
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [navigate]);
  return (
    <div className="flex justify-center items-center p-10 ">
      <div className=" flex items-center flex-col gap-3 p-3 rounded-lg bg-blue-500">
        <h1 className="font-bold text-2xl text-white">Yeayy Berhasil !!</h1>
        <h2 className="text-white">
          Selamat pembayaran kamu berhasil ter-konfirmasi.
        </h2>
        <h3 className="text-white">
          Kamu bisa belajar kapan pun dan dimana pun🚀
        </h3>
        <div className="w-full h-[1px] bg-white"></div>
        <h3 className="text-gray-200">
          Tunggu sebentar ya, kamu akan diarahkan kembali ke halaman kelas😁
        </h3>
        <p className="text-gray-300">Redirecting in {timeLeft} seconds</p>
      </div>
    </div>
  );
}

export default PaymentConfirm;
