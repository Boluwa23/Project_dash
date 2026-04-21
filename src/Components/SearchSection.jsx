import React, { useState } from "react";
export const SearchSection = ({
  number,
  title,
  inputType = "text",
  inputPlaceholder = "",
  selectOptions = [],
  showDateRange = true,
  onView,
  hasResults,
}) => {

  
    // Search results state
    const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [supplierName, setSupplierName] = useState("");
  
  const handleSearch = () => {
    if (!supplierName.trim()) {
      alert("Please enter a supplier name");
      return;
    }
  }
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-semibold">
          {number}
        </span>
        <h2 className="text-[25px] font-semibold text-blue-600 uppercase tracking-wide">
          {title}
        </h2>
      </div>

      <div className="flex flex-wrap items-center gap-3 px-4 py-3">
        {inputType === "text" ? (
          <input
            type="text"
            placeholder={inputPlaceholder}
            className="w-40 h-9 px-3 text-sm  border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          <select className="w-48 h-9 px-3 text-sm rounded-md border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="" disabled selected>
              {inputPlaceholder}
            </option>
            {selectOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}

        {showDateRange && (
          <>
            <span className="text-md font-semibold text-gray-700">FROM</span>
            <select className="w-36 h-9 px-3 text-sm rounded-md bg-blue-100 text-blue-600 border-blue-500 focus:outline-none">
              <option value="jan-2025">Jan 01, 2025</option>
              <option value="feb-2025">Feb 01, 2025</option>
              <option value="mar-2025">Mar 01, 2025</option>
            </select>

            <span className="text-md font-semibold text-gray-700">TO</span>
            <select className="w-36 h-9 px-3 text-sm rounded-md bg-blue-100 text-blue-600 border-blue-500 focus:outline-none">
              <option value="aug-2025">Aug 11, 2025</option>
              <option value="sep-2025">Sep 11, 2025</option>
              <option value="oct-2025">Oct 11, 2025</option>
            </select>
          </>
        )}

        <button
          onClick={onView}
          className="h-9 px-6 rounded-md bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition-colors"
        > 
          VIEW
        </button>
      </div>

      {!hasResults && (
        <div className="w-full h-40 p-9 rounded-lg bg-white flex items-center pr-5 ">
          <p className="text-gray-700">
            Enter the required search input and click VIEW to see transaction
            details. <br />
            Results will show the information and transaction history{" "}
          </p>
        </div>
      )}
    </div>
  );
};
