import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function MyEditor() {
  const [value, setValue] = useState("");

  const handleChange = (content, delta, source, editor) => {
    setValue(content);
  };

  return (
    <div>
      <h2>My React Quill Editor</h2>
      <ReactQuill
        value={value}
        onChange={handleChange}
        theme="snow" // Pilih tema Quill (snow, bubble, dll.)
        modules={MyEditor.modules}
        formats={MyEditor.formats}
      />
      <div>
        <h3>Preview</h3>
        <div dangerouslySetInnerHTML={{ __html: value }} />
      </div>
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
