import React from "react";
import { Datepicker } from "flowbite-react";
import { Label, TextInput } from "flowbite-react";
import DropdownJob from "./DropdownJob";

function RegisterPersonalDataUser() {
  return (
    <div>
      <form className="flex flex-col gap-3">
        <div className="flex justify-center">
          <h1 className="font-bold text-gray-700 text-xl ">
            Isi Data Diri Kamu Ya!
          </h1>
        </div>
        <div>
          <div className="pb-2">
            <Label htmlFor="fullName" value="Nama Lengkap" />
          </div>
          <TextInput id="fullName" type="text" placeholder="Nama Kamu" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="pb-2">
            <Label htmlFor="date" value="Tempat, Tanggal Lahir" />
          </div>
          <div className="flex justify-between">
            <TextInput
              id="date"
              type="text"
              placeholder="Tempat Lahir"
              required
            />

            <Datepicker />
          </div>
        </div>
        <div>
          <DropdownJob />
        </div>
      </form>
    </div>
  );
}

export default RegisterPersonalDataUser;
