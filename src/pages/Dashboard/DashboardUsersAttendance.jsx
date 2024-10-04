import { useState } from "react";
import { Spinner } from "flowbite-react";
import BackgroundParticles from "../../components/BackgroundParticles"; // Pastikan pathnya benar

function DashboardUsersAttendance() {
  const [nama, setNama] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [waktuPresensi, setWaktuPresensi] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleNamaChange = (event) => {
    setNama(event.target.value);
  };

  const handleKeteranganChange = (event) => {
    setKeterangan(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (nama.trim() === "" || keterangan === "") {
      setError("Semua field harus diisi.");
      return;
    }

    setIsLoading(true);
    setError(""); // Clear previous errors

    setTimeout(() => {
      // Get the current date and time
      const now = new Date();

      // Format the date as dd/mm/yyyy
      const formattedDate = now.toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });

      // Format the time as hh:mm:ss
      const formattedTime = now.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      });

      const presensiData = {
        nama,
        waktuPresensi: `${formattedDate} - ${formattedTime}`,
        keterangan,
      };

      // Store presensi data in localStorage or send it to the server
      localStorage.setItem("presensiData", JSON.stringify(presensiData));

      // Reset the form
      setNama("");
      setKeterangan("");
      setWaktuPresensi(presensiData.waktuPresensi);
      setMessage("Presensi berhasil!");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="relative flex justify-center items-center h-screen bg-gray-100">
      <BackgroundParticles />
      <div className="relative z-10 w-full max-w-md p-8 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-6">Presensi</h2>
        {message && <p className="text-green-200 mb-4">{message}</p>}
        {error && <p className="text-red-200 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-200 mb-2" htmlFor="nama">
              Nama Lengkap:
            </label>
            <input
              type="text"
              id="nama"
              value={nama}
              onChange={handleNamaChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-opacity-30 bg-gray-900 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-200 mb-2" htmlFor="keterangan">
              Keterangan:
            </label>
            <select
              id="keterangan"
              value={keterangan}
              onChange={handleKeteranganChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-opacity-30 bg-gray-900 text-white"
              required
            >
              <option value="" disabled>
                Pilih Keterangan
              </option>
              <option value="Tepat waktu">Tepat Waktu</option>
              <option value="Terlambat">Terlambat</option>
              <option value="Sakit">Sakit</option>
              <option value="Izin">Izin</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-200 mb-2">Waktu Presensi:</label>
            <input
              type="text"
              placeholder={
                waktuPresensi || "Waktu akan muncul setelah presensi"
              }
              readOnly
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-900 bg-opacity-30 text-white focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            disabled={isLoading}
          >
            {isLoading ? (
              <Spinner aria-label="Loading spinner" className="mr-2" />
            ) : (
              "Kirim Presensi"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default DashboardUsersAttendance;
