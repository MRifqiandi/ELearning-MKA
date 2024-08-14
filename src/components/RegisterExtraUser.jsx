import React from "react";
import { Label, TextInput } from "flowbite-react";
// import DropdownJob from "./DropdownJob";
import LocationDropdowns from "./LocationDropdowns";
import DropdownJenjang from "./DropdownJenjang";
import DropdownCategory from "./DropdownCategory";

function RegisterExtraUser() {
  return (
    <div>
      <form className="flex flex-col gap-3">
        <div>
          <DropdownJenjang />
        </div>
        <div className="flex flex-col justify-center">
          <DropdownCategory />
        </div>

        <div>
          <div className="pb-2">
            <Label htmlFor="school" value="Sekolah Kamu" />
          </div>
          <TextInput
            id="school"
            type="text"
            placeholder="Sekolah/Universitas Kamu"
          />
        </div>
        <div>
          <LocationDropdowns />
        </div>
      </form>
    </div>
  );
}

export default RegisterExtraUser;
