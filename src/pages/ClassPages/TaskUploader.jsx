import FileInputTask from "../../components/FileInput";
import Aside from "/src/components/Aside";
// import { Button } from "flowbite-react";
import ButtonSubmit from "../../components/Button/ButtonSubmit";

function TaskUploader() {
  return (
    <div>
      <div className="h-screen flex flex-col md:flex-row">
        <Aside className="bg-gray-100 md:w-1/4 md:h-full" />

        <div className="flex flex-col flex-1">
          <div className="flex flex-col gap-5 p-4 md:pl-72">
            <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-14 md:pt-10 lg:justify-between">
              <section className="flex flex-col gap-4 p-3 shadow-xl rounded-lg pl-3 justify-center lg:justify-between w-full lg:w-auto">
                <h1 className="font-medium font-be-vietnam-pro text-3xl">
                  Task Uploader!
                </h1>
                <div>
                  <p className="font-semibold">🔍 Instruksi Pengumpulan</p>
                  <ol>
                    <li>
                      1. Buatlah sebuah aplikasi kalkulator sederhana
                      menggunakan Python yang dapat melakukan operasi
                      penjumlahan, pengurangan, perkalian, dan pembagian.
                    </li>
                    <li>
                      2. Kirimkan kode sumber aplikasi Anda beserta dokumentasi
                      dalam format ZIP melalui [Nama Platform].
                    </li>
                    <li>
                      3. Nama file ZIP: ProyekAkhir_NamaLengkap.zip (contoh:
                      ProyekAkhir_RahmaPutri.zip).
                    </li>
                  </ol>
                </div>
                <div>
                  <p className="font-semibold">⚡Catatan Penting</p>
                  <ol>
                    <li>
                      1. Pastikan Anda telah menguji aplikasi Anda dan
                      memastikan tidak ada bug.
                    </li>
                    <li>
                      2. Penyerahan setelah deadline akan mengurangi 20% dari
                      total nilai proyek.
                    </li>
                    <li>
                      3. Pastikan dokumentasi mencakup cara penggunaan dan
                      penjelasan kode.
                    </li>
                  </ol>
                </div>
                <div>
                  <p className="font-semibold">
                    📞 Pertanyaan lebih lanjut, hubungi :
                  </p>
                  <ol>
                    <li>1. Email: email@example.com</li>
                    <li>2. Telepon: (022) 987-6543</li>
                  </ol>
                </div>
              </section>
            </div>
            <section className="bg-card-task p-10 text-gray-100 rounded-2xl">
              <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-semibold ">
                  Kumpulkan Tugas Kamu!
                </h1>
                <h3 className="text-md pl-3 font-medium">
                  🔧 Tugas: Proyek Akhir - Aplikasi Kalkulator Sederhana dengan
                  Python
                </h3>
                <ol className="pl-10">
                  <li>1. 🗓️ Deadline: Senin, 30 Juni 2024</li>
                  <li>2. 🕕 Waktu Pengumpulan: Hingga pukul 17:00 WIB</li>
                </ol>
              </div>
              <div className="flex items-center justify-center pt-6">
                <div className="w-full max-w-md">
                  <FileInputTask />
                </div>
              </div>
              <div className="flex items-center justify-center pt-4">
                <ButtonSubmit />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskUploader;
