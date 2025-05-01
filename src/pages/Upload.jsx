import React, { useState } from 'react';

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      // TODO: Implement file upload logic
      console.log('Uploading file:', selectedFile);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">Upload Image</h2>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
        <div className="mb-8 text-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full p-4 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:border-blue-500 transition-colors duration-200"
          />
        </div>
        {previewUrl && (
          <div className="my-8 text-center">
            <img
              src={previewUrl}
              alt="Preview"
              className="max-w-full max-h-[400px] rounded-md shadow-md mx-auto"
            />
          </div>
        )}
        <button
          type="submit"
          disabled={!selectedFile}
          className={`w-full py-4 text-white rounded-md transition-colors duration-200 ${
            selectedFile
              ? 'bg-blue-500 hover:bg-blue-600'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default Upload; 