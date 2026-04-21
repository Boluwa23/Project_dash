import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from "lucide-react";
import { X } from "lucide-react";

const matchproducts = () => {

    const navigate = useNavigate();
  
    const handleNext = () => {
      navigate("/pdatabase"); // this goes to your new page
  };
  const anotherHandleNext = () => {
    navigate("/inventory/productdatabase"); // this goes to your new page
}

     const [productColumns, setProductColumns] = useState([
       { product: "Product Family", attribute: "Product Family" },
       { product: "Product Category", attribute: "Select attribute" },
       { product: "Product Name", attribute: "Item Name" },
       { product: "Product Number", attribute: "Item Number" },
       { product: "Product LifeCycle", attribute: "LifeCycle" },
       { product: "Product Supplier", attribute: "Supplier Name" },
       { product: "Product Cost", attribute: "Total Cost" },
       { product: "Best Selling Price", attribute: "Best Selling Price" },
       { product: "Mid Selling Price", attribute: "Mid Selling Price" },
       { product: "Lowest Selling Price", attribute: "Lowest Selling Price" },
       { product: "Product Unit Cost", attribute: "Unit Of Measure" },
     ]);

     const [productFamilies] = useState([
       "Books",
       "Stationery",
       "Sport",
       "Tools",
       "Electronics",
     ]);

  const productLifeCycles = [
    "Active",
    "Discontinued",
    "Under Development",
    "Out of Stock",
  ];

     const handleAttributeChange = (index, value) => {
       const updatedColumns = [...productColumns];
       updatedColumns[index].attribute = value;
       setProductColumns(updatedColumns);
     };


    return (
      <div className="">
        {/* Header */}
        <div>
          <h1 className="text-gray-400 text-[30px] align pb-5 items-center flex">
            UPLOAD PRODUCT DATASET <ChevronRight className="mr-2 ml-3" />
            <p className="font-medium text-black">MATCH PRODUCT DETAILS </p>
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
                {productColumns.map((column, index) => (
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
                          className="px-5 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        >
                          <option value="">Product Family</option>
                          {productFamilies.map((family) => (
                            <option key={family} value={family}>
                              {family}
                            </option>
                          ))}
                        </select>
                      ) : column.product === "Product LifeCycle" ? (
                        <select
                          value={column.attribute}
                          onChange={(e) =>
                            handleAttributeChange(index, e.target.value)
                          }
                          className="px-5 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        >
                          <option value="">LifeCycle</option>
                          {productLifeCycles.map((life) => (
                            <option key={life} value={life}>
                              {life}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <div className="flex">
                          <span className="flex items-center gap-2 border px-7 py-0.5 rounded-full border-gray-300 text-[14px] hover:bg-gray-50">
                            {column.attribute}
                            <X className="w-4" />
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
                      Product Family
                    </span>
                  </div>
                  <div className="space-y-2">
                    {" "}
                    {productFamilies.map((family, index) => (
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
    );
}

export default matchproducts









