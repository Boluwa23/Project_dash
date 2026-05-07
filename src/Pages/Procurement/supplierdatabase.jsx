import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
    import * as XLSX from "xlsx";
import { FolderUp, FileInput, Download } from "lucide-react";

const supplierdatabase = () => {
   const navigate = useNavigate();

   const handleNext = () => {
     navigate("/matchsupplier"); // this goes to your new page 
  };
    const lastNext = () => {
      navigate("/sdatabase");
    };

    const [file, setFile] = useState(null);
 
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };



    const handleUpload = (e) => {
      e.preventDefault();

      if (!file) {
        alert("Choose a file first");
        return;
      }

      const reader = new FileReader();

      reader.onload = (evt) => {
        const data = evt.target.result;
        const workbook = XLSX.read(data, { type: "binary" });

        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        const jsonData = XLSX.utils.sheet_to_json(sheet);

        // store preview
        localStorage.setItem("supplierPreview", JSON.stringify(jsonData));

        // move to next page
        navigate("/matchsupplier");
      };

      reader.readAsBinaryString(file);
    };
    return (
      <div>
        <div className="align-items-center  justify-between mb-4">
          <h1 className="text-[32px] font-medium mt-3">SUPPLIER DATABASE</h1>
          <h3 className="text-[23px] font-medium pt-4">UPLOAD SUPPLIER DATA</h3>
          <h5 className="pt-2">
            {" "}
            Select And Upload An Existing Suppiler Data Of Your Choice{" "}
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
            <FolderUp className="h-13 w-190 text-blue-500 mt-20 " />
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
          <p className="text-gray-500 ">Supported Formats: XLS, XLSX, CSV</p>
          <p className="text-gray-500 ">Maximium Size: 25MB</p>
        </div>

        <div className="pt-5 pb-5">
          <p>
            <span className="text-blue-500 font-bold">Important!</span> Suppiler
            Dataset must have columns for
            <span className="font-semibold">
              "Family", "Catergory", "Item Name", "Item Number", "Status",
              "Suppiler Name", "Cost", "Barcode", and "Quantity"
            </span>
          </p>
        </div>

        <div className="w-full h-40 bg-white rounded-lg shadow-md p-4">
          <p className="flex items-end space-x-3 ">
            <FileInput className="text-blue-600 mr-2" />
            <span className="font-semibold ">Sample Data Set</span>
          </p>
          <p className="pt-3">
            You can download this sample data set as a starting point for your
            own file
          </p>
          <button
            onClick={() => {
              window.open("/sample-suppliers.xlsx", "_blank");
            }}
            className="flex mt-6 px-5 py-2 border border-gray-300 text-white rounded-md bg-blue-500 font-semibold"
          >
            <Download />
            Download
          </button>
        </div>

        <div className="flex justify-end space-x-3 mt-6">
          <button
            onClick={lastNext}
            className="px-5 py-2 border border-gray-300 text-white rounded-md bg-blue-500 font-semibold cursor-pointer"
          >
            View Suppiler Data
          </button>
          <button className="px-5 py-2 border border-gray-300 text-blue-500 rounded-md bg-white font-semibold ">
            Cancel
          </button>
          <button
            onClick={handleUpload}
            className="px-5 py-2 border border-gray-300 text-white rounded-md bg-blue-500 font-semibold "
          >
            Next Step
          </button>
        </div>
      </div>
    );
  };

  export default supplierdatabase;