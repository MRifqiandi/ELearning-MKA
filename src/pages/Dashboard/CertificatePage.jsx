import { Button } from "flowbite-react";

function CertificatePage() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center pt-10 gap-5">
        <h1 className="font-bold text-xl">
          Silahkan Klaim Sertifikat Anda😁🚀
        </h1>
        <div>
          <img src="/src/assets/Sertifikat.svg" />
        </div>
        <div>
          <Button size="xl">Klaim Sertifikat</Button>
        </div>
      </div>
    </div>
  );
}

export default CertificatePage;
