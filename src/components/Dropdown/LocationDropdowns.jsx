import React, { useState, useEffect } from "react";

function LocationDropdowns() {
  const [provinces, setProvinces] = useState([]);
  const [regencies, setRegencies] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedRegency, setSelectedRegency] = useState("");

  // Fetch provinces on component mount
  useEffect(() => {
    fetch("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
      .then((response) => response.json())
      .then((data) => setProvinces(data))
      .catch((error) => console.error("Error fetching provinces:", error));
  }, []);

  // Fetch regencies when a province is selected
  useEffect(() => {
    if (selectedProvince) {
      fetch(
        `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvince}.json`
      )
        .then((response) => response.json())
        .then((data) => setRegencies(data))
        .catch((error) => console.error("Error fetching regencies:", error));
    }
  }, [selectedProvince]);

  // Fetch districts when a regency is selected
  useEffect(() => {
    if (selectedRegency) {
      fetch(
        `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${selectedRegency}.json`
      )
        .then((response) => response.json())
        .then((data) => setDistricts(data))
        .catch((error) => console.error("Error fetching districts:", error));
    }
  }, [selectedRegency]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col w-full">
        <label className="font-semibold">Provinsi:</label>
        <select
          value={selectedProvince}
          onChange={(e) => setSelectedProvince(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="">Pilih Provinsi</option>
          {provinces.map((province) => (
            <option key={province.id} value={province.id}>
              {province.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col w-full">
        <label className="font-semibold">Kabupaten/Kota:</label>
        <select
          value={selectedRegency}
          onChange={(e) => setSelectedRegency(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
          disabled={!selectedProvince}
        >
          <option value="">Pilih Kabupaten/Kota</option>
          {regencies.map((regency) => (
            <option key={regency.id} value={regency.id}>
              {regency.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col w-full">
        <label className="font-semibold">Kecamatan:</label>
        <select
          className="p-2 border border-gray-300 rounded-md"
          disabled={!selectedRegency}
        >
          <option className="" value="">
            Pilih Kecamatan
          </option>
          {districts.map((district) => (
            <option key={district.id} value={district.id}>
              {district.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default LocationDropdowns;
