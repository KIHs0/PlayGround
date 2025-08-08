import React, { useState, useRef } from 'react';
import { useSnapshot } from 'valtio';
import state from '../store/store'
const FilePickerHelper = ({
  onFileChange,
  accept = '*',
  multiple = false,
  label = 'Choose file',
  showPreview = true,
  setedittab
}) => {
  const snap = useSnapshot(state)
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFiles = (files) => {
    const fileArray = Array.from(files);
    setSelectedFiles(fileArray);
    if (onFileChange) {
      onFileChange(fileArray);
    }
  };

  const handleInputChange = (e) => {
    handleFileChange(e)
    handleFiles(e.target.files);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const validTypes = ["image/jpeg", "image/png", "image/gif"];
    if (validTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onloadend = () => {
        state.fullDecal = reader.result
        state.logoDecal = reader.result; // Set the decal image
      };
      reader.readAsDataURL(file);
    } else {
      // Handle other file types or show error
    }
  };

  return (
    <div className="w-full max-w-md mx-auto filepicker-container" >
      <label
        htmlFor="file-input"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-blue-500 transition"
        onClick={() => fileInputRef.current.click()}
      >
        <p className="text-gray-500">Drag & drop files here or click to upload</p>
        <input
          ref={fileInputRef}
          id="file-input"
          type="file"
          accept={accept}
          multiple={multiple}
          className="hidden"
          onChange={handleInputChange}
        />
      </div>

      {showPreview && selectedFiles.length > 0 && (
        <div className="mt-4 space-y-2">
          {selectedFiles.map((file, idx) => (
            < div key={idx} className="flex items-center space-x-4" >
              {
                file.type.startsWith('image/') && (
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="w-8 h-8 object-cover rounded border"
                  />
                )
              }

            </div>
          ))
          }
        </div >
      )}
      <button
        className="mt-2 px-4 py-2 bg-gray-800 text-white rounded w-full"
        onClick={() => { setedittab(""); setPrompt(""); setResult(""); }}
      >
        Close
      </button>
    </div >
  );
};

export default FilePickerHelper;
