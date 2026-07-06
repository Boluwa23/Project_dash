import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FolderUp, FileInput, Download } from "lucide-react";

const ProductDatabaseUpload = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL =
    "https://project-genesis-dashboard.onrender.com/api/products/bulk-upload";

  const lastNext = () => {
    navigate("/pdatabase");
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError(null);
  };

  const handleNext = async () => {
    if (!file) {
      setError("Please choose a file first!");
      return;
    }

    setUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file); // must match upload.single("file") on the backend

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        body: formData, // do NOT set Content-Type manually — browser sets the multipart boundary
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || data.details || "Upload failed");
      }

      // Success — go straight to the product database view
      navigate("/pdatabase");
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <div className="align-items-center justify-between mb-4">
        <h1 className="text-[32px] font-medium mt-3">PRODUCT DATABASE</h1>
        <h3 className="text-[23px] font-medium pt-4">UPLOAD PRODUCT DATA</h3>
        <h5 className="pt-2">
          Select And Upload An Existing Product Data Of Your Choice
        </h5>
      </div>

      <div className="border-2 border-dashed border-gray-300 bg-blue-50 rounded-lg p-10 h-89 text-center transition-colors">
        <input
          type="file"
          id="fileInput"
          onChange={handleFileChange}
          className="hidden"
        />
        <label
          htmlFor="fileInput"
          className="cursor-pointer flex flex-col items-center"
        >
          <FolderUp className="h-13 w-190 text-blue-500 mt-20" />
          <p className="text-gray-600">
            Drag & Drop file here or{" "}
            <span className="text-blue-500 font-bold">Choose File</span>
          </p>
        </label>
        {file && (
          <p className="mt-3 text-sm text-gray-500">
            Selected File: {file.name}
          </p>
        )}
      </div>

      <div className="flex items-start justify-between gap pt-2">
        <p className="text-gray-500">Supported Formats: XLS, XLSX, CSV</p>
        <p className="text-gray-500">Maximium Size: 25MB</p>
      </div>

      {error && (
        <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm">
          {error}
        </div>
      )}

      <div className="pt-5 pb-5">
        <p>
          <span className="text-blue-500 font-bold">Important!</span> Product
          Dataset must have columns for{" "}
          <span className="font-semibold">
            "Family", "Catergory", "Item Name", "Item Number", "Status",
            "Suppiler Name", "Cost", "Barcode", and "Quantity"
          </span>
        </p>
      </div>

      <div className="w-full h-40 bg-white rounded-lg shadow-md p-4">
        <p className="flex items-end space-x-3">
          <FileInput className="text-blue-600 mr-2" />
          <span className="font-semibold">Sample Data Set</span>
        </p>
        <p className="pt-3">
          You can download this sample data set as a starting point for your own
          file
        </p>
        <button className="flex mt-6 px-5 py-2 border border-gray-300 text-white rounded-md bg-blue-500 font-semibold">
          <Download />
          Download
        </button>
      </div>

      <div className="flex justify-end space-x-3 mt-6">
        <button
          onClick={lastNext}
          className="px-5 py-2 border border-gray-300 text-white rounded-md bg-blue-500 font-semibold cursor-pointer"
        >
          View Product Data
        </button>
        <button className="px-5 py-2 border border-gray-300 text-blue-500 rounded-md bg-white font-semibold">
          Cancel
        </button>
        <button
          onClick={handleNext}
          disabled={uploading}
          className="px-5 py-2 border border-gray-300 text-white rounded-md bg-blue-500 font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {uploading ? "Uploading..." : "Next Step"}
        </button>
      </div>
    </div>
  );
};

export default ProductDatabaseUpload;
