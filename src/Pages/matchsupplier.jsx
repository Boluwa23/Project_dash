import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { X } from "lucide-react";

const matchsupplier = () => {

  const navigate = useNavigate();
   
    const handleNext = () => {
      navigate("/sdatabase"); // this goes to your new page
  };
  const anotherHandleNext = () => {
    navigate("/inventory/productdatabase"); // this goes to your new page
}

     const [suppilerColumns, setsuppilerColumns] = useState([
       { product: "Supplier Name", attribute: "Supplier Name" },
       { product: "Supplier ID", attribute: "Supplier ID" },
       { product: "Supplier Email", attribute: "Supplier Email" },
       { product: "Supplier Phone", attribute: "Supplier Phone" },
       { product: "Contact Person", attribute: "Contact Person" },
       { product: "Contact Mail", attribute: "Contact Mail" },
       { product: "Contact Phone", attribute: "Contact Phoner" },
       { product: "Address", attribute: "Address" },
       { product: "City", attribute: "City" },
       { product: "State", attribute: "State" },
       { product: "Country", attribute: "Country" },
       { product: "Bank Name", attribute: "Bank Name" },
     ]);

     const [suppilernames] = useState([
       "Books",
       "Stationery",
       "Sport",
       "Tools",
       "Electronics",
     ]);

     const handleAttributeChange = (index, value) => {
       const updatedColumns = [...suppilerColumns];
       updatedColumns[index].attribute = value;
       setsuppilerColumns(updatedColumns);
     };

  return (
    <div>

       {/* Header */}
              <div>
                <h1 className="text-gray-400 text-[30px] align pb-5 items-center flex">
                  UPLOAD SUPPILER DATASET <ChevronRight className="mr-2 ml-3" />
                  <p className="font-medium text-black">MATCH SUPPILER DETAILS </p>
                </h1>
              </div>
      
              {/* Main Content */}
              <div className="border border-gray-200 bg-white rounded-lg p-6 shadow-sm flex justify-between gap-6">
                <div className="w-[60%]">
                  <table className="min-w-full divide-y divide-black">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Product Columns
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Attributes{" "}
                        </th>
                      </tr>
                    </thead>
      
                    <tbody className="bg-white divide-y divide-gray-200">
                      {suppilerColumns.map((column, index) => (
                        <tr key={index} className="">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {column.product}
                          </td>
      
                          <td className="px-6 py-4 whitespace-nowrap">
                            {column.product === "Product Family" ? (
                              <select
                                value={column.attribute}
                                onChange={(e) =>
                                  handleAttributeChange(index, e.target.value)
                                }
                                className="px-5 py-2 border border-gray-300 rounded-full  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
                                <option value="">Product Family</option>
                                <option value="Books">Books</option>
                                <option value="Stationery">Stationery</option>
                                <option value="Sport">Sport</option>
                                <option value="Tools">Tools</option>
                                <option value="Electronics">Electronics</option>
                              </select>
                            ) : (
                              // For all other rows, show plain text (non-dropdown)
                              <div className="flex ">
                                <span className="flex items-center gap-2 border px-7 py-0.5 rounded-full border-gray-300 text-[14px] hover:bg-gray-50">
                                  {column.attribute} <X className="w-4" />
                                </span>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
      
                <div>
                  <div className="">
                    <div className="border border-gray-200 bg-gray-200 rounded-lg p-4 h-230 ">
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-60">
                        <div className="mb-2">
                          <span className="text-sm font-semibold text-black">
                           suppiler Name
                          </span>
                        </div>
                        <div className="space-y-2">
                          {" "}
                          {suppilernames.map((family, index) => (
                            <div
                              key={index}
                              className="px-3 py-2 bg-white border border-gray-200 rounded text-sm text-gray-700"
                            >
                              {family}
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 pt-3 border-t border-gray-200">
                          <p className="text-xs text-gray-500">
                            This preview shows only the selected data attribute and a
                            small portion of the column values
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      
              <div className=" flex justify-end space-x-3 ">
                <button
                  onClick={anotherHandleNext}
                  className="mt-6 px-5 py-2 border border-gray-300 text-blue-500 rounded-md bg-white font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleNext}
                  className="mt-6 px-5 py-2 border border-gray-300 text-white rounded-md bg-blue-500 font-semibold cursor-pointer"
                >
                  {" "}
                  Complete{" "}
                </button>
              </div>

    </div>

  )
}

export default matchsupplier