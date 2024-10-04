import FileInputTask from "../../components/FileInput";
import Aside from "/src/components/Aside";
import ButtonSubmit from "../../components/Button/ButtonSubmit";
import { List } from "flowbite-react";
import CommentSection from "../../components/Comment/CommentSection";

function TaskUploader() {
  return (
    <div>
      <div className="h-screen flex flex-col md:flex-row">
        <Aside className="bg-gray-100 md:w-1/4 md:h-full" />
        <div className="flex flex-col flex-1">
          <div className="flex flex-col gap-5 p-4 md:pl-72">
            <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-14 md:pt-6 lg:justify-between">
              <section className="flex flex-col gap-4 p-3 border shadow-xl rounded-lg pl-3 justify-center lg:justify-between w-full lg:w-auto">
                <h1 className="font-medium font-be-vietnam-pro text-3xl">
                  Task Uploader!
                </h1>
                <div>
                  <p className="font-semibold">🔍 Instruksi Pengumpulan</p>
                  <List ordered nested>
                    <List.Item>
                      Buatlah sebuah aplikasi kalkulator sederhana menggunakan
                      Python yang dapat melakukan operasi penjumlahan,
                      pengurangan, perkalian, dan pembagian.
                    </List.Item>
                    <List.Item>
                      Kirimkan source code aplikasi Anda beserta dokumentasi
                      dalam format ZIP melalui [Nama Platform].
                    </List.Item>
                    <List.Item>
                      Nama file ZIP: ProyekAkhir_NamaLengkap.zip (contoh:
                      ProyekAkhir_RahmaPutri.zip).
                    </List.Item>
                  </List>
                </div>
                <div>
                  <p className="font-semibold">⚡Catatan Penting</p>
                  <List ordered nested>
                    <List.Item>
                      Pastikan Anda telah menguji aplikasi Anda dan memastikan
                      tidak ada bug.
                    </List.Item>
                    <List.Item>
                      Penyerahan setelah deadList.Itemne akan mengurangi 20%
                      dari total nilai proyek.
                    </List.Item>
                    <List.Item>
                      Pastikan dokumentasi mencakup cara penggunaan dan
                      penjelasan kode.
                    </List.Item>
                  </List>
                </div>
                <div>
                  <p className="font-semibold">
                    📞 Pertanyaan lebih lanjut, hubungi :
                  </p>
                  <List ordered nested>
                    <List.Item> Email: email@example.com</List.Item>
                    <List.Item> Telepon: (022) 987-6543</List.Item>
                  </List>
                </div>
              </section>
            </div>
            <section className="bg-card-task p-10 text-gray-100 rounded-lg">
              <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-semibold ">
                  Kumpulkan Tugas Kamu!
                </h1>
                <h3 className="text-md pl-3 font-medium">
                  🔧 Tugas: Proyek Akhir - Aplikasi Kalkulator Sederhana dengan
                  Python
                </h3>
                <List ordered nested className="pl-10">
                  <List.Item className="text-white">
                    🗓️ Deadline: Senin, 30 Juni 2024
                  </List.Item>
                  <List.Item className="text-white">
                    🕕 Waktu Pengumpulan: Hingga pukul 17:00 WIB
                  </List.Item>
                </List>
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
            <section className="pt-7">
              <CommentSection />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskUploader;
