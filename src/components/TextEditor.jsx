import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "flowbite-react";

function MyEditor() {
  const [value, setValue] = useState("");
  const [confirmedText, setConfirmedText] = useState(""); // State to store confirmed text

  const handleChange = (content) => {
    setValue(content);
  };

  const handleConfirm = () => {
    setConfirmedText(value); // Simpan teks yang dikonfirmasi
    alert("Teks materi berhasil disimpan!");
    // Anda bisa menambahkan logic untuk menyimpan teks ke backend di sini
  };

  return (
    <div className="max-w-full p-4">
      <h2 className="text-lg font-bold mb-4">Edit Isi Materi</h2>

      {/* Text Editor */}
      <ReactQuill
        value={value}
        onChange={handleChange}
        theme="snow"
        modules={MyEditor.modules}
        formats={MyEditor.formats}
        className="mb-4"
      />

      {/* Preview of the Text */}
      <div className="editor-preview border p-3 rounded bg-gray-100 max-w-full">
        <h3 className="text-md font-semibold mb-2">Preview</h3>
        <div
          className="preview-content"
          dangerouslySetInnerHTML={{ __html: value }}
        />
      </div>

      {/* Confirm Button */}
      <div className="mt-4">
        <Button onClick={handleConfirm} color="green">
          Konfirmasi Teks Materi
        </Button>
      </div>

      {/* Display Confirmed Text */}
      {confirmedText && (
        <div className="mt-6 border p-3 bg-green-100 rounded">
          <h3 className="text-md font-semibold mb-2">
            Teks Materi yang Dikonfirmasi
          </h3>
          <div
            className="preview-content"
            dangerouslySetInnerHTML={{ __html: confirmedText }}
          />
        </div>
      )}
    </div>
  );
}

// Optionally, you can define custom modules and formats here
MyEditor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

MyEditor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export default MyEditor;
