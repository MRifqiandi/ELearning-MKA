import { useState } from "react";
import { Label, TextInput } from "flowbite-react";
import LocationDropdowns from "./Dropdown/LocationDropdowns";
import DropdownJenjang from "./Dropdown/DropdownJenjang";
import DropdownCategory from "./Dropdown/DropdownCategory";
import { useNavigate } from "react-router-dom";

function RegisterExtraUser() {
  const [jenjang, setJenjang] = useState("");
  const [category, setCategory] = useState("");
  const [school, setSchool] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (school) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate("/classasync");
      }, 2000);
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <div>
          <DropdownJenjang value={jenjang} onChange={setJenjang} />
        </div>
        <div className="flex flex-col justify-center">
          <DropdownCategory value={category} onChange={setCategory} />
        </div>
        <div>
          <div className="pb-2">
            <Label htmlFor="school" value="Sekolah Kamu" />
          </div>
          <TextInput
            id="school"
            type="text"
            placeholder="Sekolah/Universitas Kamu"
            required
            value={school}
            onChange={(e) => setSchool(e.target.value)}
          />
        </div>
        <div>
          <LocationDropdowns value={location} onChange={setLocation} />
        </div>
        <div className="flex justify-center pt-6">
          <button
            type="submit"
            onClick={handleSubmit}
            className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Loading..." : "Kirim"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterExtraUser;
