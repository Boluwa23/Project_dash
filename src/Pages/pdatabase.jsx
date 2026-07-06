// import React from 'react'
// import { Plus } from "lucide-react";

// const pdatabase = () => {

//       const products = [
//         {
//           id: "01",
//           family: "Books",
//           category: "Mathematics",
//           name: "New General Maths JSS1",
//           lifecycle: "Active",
//           supplier: "Learn Africa PLC",
//           cost: 3000,
//           bsp: 7000,
//           msp: 8000,
//           lsp: 3900,
//           uom: "Each",
//         },
//         {
//           id: "02",
//           family: "Books",
//           category: "Mathematics",
//           name: "New General Maths JSS1",
//           lifecycle: "Active",
//           supplier: "Learn Africa PLC",
//           cost: 3000,
//           bsp: 7000,
//           msp: 8000,
//           lsp: 3900,
//           uom: "Each",
//         },
//         {
//           id: "03",
//           family: "Books",
//           category: "Mathematics",
//           name: "New General Maths JSS1",
//           lifecycle: "Active",
//           supplier: "Learn Africa PLC",
//           cost: 3000,
//           bsp: 7000,
//           msp: 8000,
//           lsp: 3900,
//           uom: "Each",
//         },
//         {
//           id: "04",
//           family: "Books",
//           category: "Mathematics",
//           name: "New General Maths .JSS1",
//           lifecycle: "Discontinued",
//           supplier: "Learn Africa PLC",
//           cost: 3000,
//           bsp: 7000,
//           msp: 8000,
//           lsp: 3900,
//           uom: "Each",
//         },
//         {
//           id: "05",
//           family: "Books",
//           category: "Mathematics",
//           name: "New General Maths JSS1",
//           lifecycle: "Active",
//           supplier: "Learn Africa PLC",
//           cost: 3000,
//           bsp: 7000,
//           msp: 8000,
//           lsp: 3900,
//           uom: "Each",
//         },
//         {
//           id: "06",
//           family: "Books",
//           category: "Mathematics",
//           name: "New General Maths JSS1",
//           lifecycle: "Under Development",
//           supplier: "Learn Africa PLC",
//           cost: 3000,
//           bsp: 7000,
//           msp: 8000,
//           lsp: 3900,
//           uom: "Each",
//         },
//         {
//           id: "07",
//           family: "Books",
//           category: "Mathematics",
//           name: "New General Maths JSS1",
//           lifecycle: "Active",
//           supplier: "Learn Africa PLC",
//           cost: 3000,
//           bsp: 7000,
//           msp: 8000,
//           lsp: 3900,
//           uom: "Each",
//         },
//         {
//           id: "08",
//           family: "Books",
//           category: "Mathematics",
//           name: "New General Maths JSS1",
//           lifecycle: "Out Of Stock",
//           supplier: "Learn Africa PLC",
//           cost: 3000,
//           bsp: 7000,
//           msp: 8000,
//           lsp: 3900,
//           uom: "Each",
//         },
//         {
//           id: "09",
//           family: "Books",
//           category: "Mathematics",
//           name: "New General Maths JSS1",
//           lifecycle: "Discontinued",
//           supplier: "Learn Africa PLC",
//           cost: 3000,
//           bsp: 7000,
//           msp: 8000,
//           lsp: 3900,
//           uom: "Each",
//         },
//         {
//           id: "10",
//           family: "Books",
//           category: "Mathematics",
//           name: "New General Maths JSS1",
//           lifecycle: "Out Of Stock",
//           supplier: "Learn Africa PLC",
//           cost: 3000,
//           bsp: 7000,
//           msp: 8000,
//           lsp: 3900,
//           uom: "Each",
//         },
//         {
//           id: "11",
//           family: "Books",
//           category: "Mathematics",
//           name: "New General Maths JSS1",
//           lifecycle: "Out Of Stock",
//           supplier: "Learn Africa PLC",
//           cost: 3000,
//           bsp: 7000,
//           msp: 8000,
//           lsp: 3900,
//           uom: "Each",
//         },
//         {
//           id: "12",
//           family: "Books",
//           category: "Mathematics",
//           name: "New General Maths JSS1",
//           lifecycle: "Under Development",
//           supplier: "Learn Africa PLC",
//           cost: 3000,
//           bsp: 7000,
//           msp: 8000,
//           lsp: 3900,
//           uom: "Each",
//         },
//       ];

//       const handleStatusChange = (id, newStatus) => {
//     setProducts(
//       products.map((p) =>
//         p.id === id ? { ...p, status: newStatus } : p
//       )
//     );
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Active":
//         return "bg-green-100 text-green-700";
//       case "Discontinued":
//         return "bg-red-100 text-red-700";
//       case "Under Development":
//         return "bg-yellow-100 text-yellow-700";
//       case "Out Of Stock":
//         return "bg-gray-100 text-gray-700";
//       default:
//         return "";
//     };
//   }

//   return (
//     <div>
//       <div className="p-6">
//         <div className="flex justify-between">
//           <h1 className="text-[30px] font-medium mb-4">PRODUCT DATABASE</h1>
//           <button className="border flex bg-blue-700  rounded-lg text-white items-center px-4 py-2 mb-4 ">
//             <Plus />
//             Export Product CSV
//           </button>
//         </div>

//         <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-blue-700 ">
//               <tr>
//                 <th className=" text-xs font-medium text-white uppercase text-nowrap">
//                   ID
//                 </th>
//                 <th className="px-2 py-3 text-left text-xs font-medium text-white uppercase text-nowrap">
//                   Product Family
//                 </th>
//                 <th className="px-3 py-3 text-left text-xs font-medium text-white uppercase text-nowrap">
//                   Product Category
//                 </th>
//                 <th className="px-3 py-3  text-xs font-medium text-white uppercase text-nowrap">
//                   Item Name
//                 </th>
//                 <th className="px-3 py-3 text-left text-xs font-medium text-white uppercase text-nowrap">
//                   Item Life Cycle
//                 </th>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase text-nowrap">
//                   Supplier
//                 </th>
//                 <th className="px-3 py-3 text-left text-xs font-medium text-white uppercase text-nowrap">
//                   Cost
//                 </th>
//                 <th className="px-3 py-3 text-left text-xs font-medium text-white uppercase text-nowrap">
//                   Best Selling Price
//                 </th>
//                 <th className="px-3 py-3 text-left text-xs font-medium text-white uppercase text-nowrap">
//                   Mid Selling Price
//                 </th>
//                 <th className="px-3 py-3 text-left text-xs font-medium text-white uppercase text-nowrap">
//                   Lowest Selling Price
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase text-nowrap">
//                   Unit of Measure
//                 </th>
//               </tr>
//             </thead>

//             <tbody className="bg-white divide-y  divide-gray-200">
//               {products.map((product) => (
//                 <tr className="hover:bg-gray-50">
//                   <td className="px-6 py-4 text-sm text-gray-900">
//                     {product.id}
//                   </td>
//                   <td className="px-6 py-4">
//                     <div
//                       className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
//                         product.family
//                       )}`}
//                     >
//                       <select
//                         value={product.family}
//                         onChange={(e) =>
//                           handleStatusChange(product.id, e.target.value)
//                         }
//                         className="bg-transparent outline-none cursor-pointer "
//                       >
//                         <option value="Books">Books</option>
//                         <option value="Sports">Sports</option>
//                         <option value="Stationery">Stationery</option>

//                       </select>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-500">
//                     {product.category}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-900 text-nowrap">
//                     {product.name}
//                   </td>
//                   <td className="px-6 py-4">
//                     <div
//                       className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
//                         product.status
//                       )}`}
//                     >
//                       <select
//                         value={product.status}
//                         onChange={(e) =>
//                           handleStatusChange(product.id, e.target.value)
//                         }
//                         className="bg-transparent outline-none cursor-pointer "
//                       >
//                         <option value="Active">Active</option>
//                         <option value="Discontinued">Discontinued</option>
//                         <option value="Under Development">
//                           Under Development
//                         </option>
//                         <option value="Out Of Stock">Out Of Stock</option>
//                       </select>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-500 text-nowrap">
//                     {product.supplier}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-500 text-nowrap">
//                     ₦{product.cost}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-500 text-nowrap">
//                     ₦{product.bsp}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-500 text-nowrap">
//                     ₦{product.msp}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-500  text-nowrap">
//                     ₦{product.lsp}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-500 text-nowrap">
//                     {product.uom}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default pdatabase

import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";

const ProductDatabaseList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const API_URL =
    "https://project-genesis-dashboard.onrender.com/api/products/";

  const fetchProducts = async (pageNum = 1) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}?page=${pageNum}&limit=20`);
      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }
      const data = await res.json();
      setProducts(data.products || []);
      setTotalPages(data.pages || 1);
      setPage(data.page || 1);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFamilyChange = (id, newFamily) => {
    setProducts((prev) =>
      prev.map((p) => (p._id === id ? { ...p, productFamily: newFamily } : p)),
    );
    // NOTE: this only updates local state. If you want the change to persist,
    // you'll need a PATCH/PUT request to your backend here.
  };

  const handleLifecycleChange = (id, newStatus) => {
    setProducts((prev) =>
      prev.map((p) =>
        p._id === id ? { ...p, articleLifeCycle: newStatus } : p,
      ),
    );
    // Same note as above — persist via API call if needed.
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "Discontinued":
        return "bg-red-100 text-red-700";
      case "Under Development":
        return "bg-yellow-100 text-yellow-700";
      case "Out Of Stock":
        return "bg-gray-100 text-gray-700";
      default:
        return "";
    }
  };

  const handleExportCSV = () => {
    if (!products.length) return;
    const headers = [
      "ID",
      "Product Family",
      "Product Category",
      "Item Name",
      "Life Cycle",
      "Supplier",
      "Cost",
      "BSP",
      "MSP",
      "LSP",
      "UOM",
    ];
    const rows = products.map((p) => [
      p._id,
      p.productFamily,
      p.productCategory,
      p.itemName,
      p.articleLifeCycle,
      p.supplier,
      p.cost,
      p.bsp,
      p.msp,
      p.lsp,
      p.uom,
    ]);
    const csvContent = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "products.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return <div className="p-6 text-gray-500">Loading products...</div>;
  }

  if (error) {
    return (
      <div className="p-6 text-red-600">
        Failed to load products: {error}
        <button
          onClick={() => fetchProducts(page)}
          className="ml-4 underline text-blue-700"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="p-6">
        <div className="flex justify-between">
          <h1 className="text-[30px] font-medium mb-4">PRODUCT DATABASE</h1>
          <button
            onClick={handleExportCSV}
            className="border flex bg-blue-700 rounded-lg text-white items-center px-4 py-2 mb-4"
          >
            <Plus />
            Export Product CSV
          </button>
        </div>

        <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-700">
              <tr>
                <th className="px-6 py-3 text-xs font-medium text-white uppercase text-nowrap">
                  ID
                </th>
                <th className="px-2 py-3 text-left text-xs font-medium text-white uppercase text-nowrap">
                  Product Family
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-white uppercase text-nowrap">
                  Product Category
                </th>
                <th className="px-3 py-3 text-xs font-medium text-white uppercase text-nowrap">
                  Item Name
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-white uppercase text-nowrap">
                  Item Life Cycle
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase text-nowrap">
                  Supplier
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-white uppercase text-nowrap">
                  Cost
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-white uppercase text-nowrap">
                  Best Selling Price
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-white uppercase text-nowrap">
                  Mid Selling Price
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-white uppercase text-nowrap">
                  Lowest Selling Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase text-nowrap">
                  Unit of Measure
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {product._id}
                  </td>
                  <td className="px-6 py-4">
                    <div
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(product.productFamily)}`}
                    >
                      <select
                        value={product.productFamily}
                        onChange={(e) =>
                          handleFamilyChange(product._id, e.target.value)
                        }
                        className="bg-transparent outline-none cursor-pointer"
                      >
                        <option value="Books">Books</option>
                        <option value="Sports">Sports</option>
                        <option value="Stationery">Stationery</option>
                      </select>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {product.productCategory}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 text-nowrap">
                    {product.itemName}
                  </td>
                  <td className="px-6 py-4">
                    <div
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(product.articleLifeCycle)}`}
                    >
                      <select
                        value={product.articleLifeCycle}
                        onChange={(e) =>
                          handleLifecycleChange(product._id, e.target.value)
                        }
                        className="bg-transparent outline-none cursor-pointer"
                      >
                        <option value="Active">Active</option>
                        <option value="Discontinued">Discontinued</option>
                        <option value="Under Development">
                          Under Development
                        </option>
                        <option value="Out Of Stock">Out Of Stock</option>
                      </select>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 text-nowrap">
                    {product.supplier}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 text-nowrap">
                    ₦{product.cost}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 text-nowrap">
                    ₦{product.bsp}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 text-nowrap">
                    ₦{product.msp}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 text-nowrap">
                    ₦{product.lsp}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 text-nowrap">
                    {product.uom}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4">
          <button
            disabled={page <= 1}
            onClick={() => fetchProducts(page - 1)}
            className="px-4 py-2 border rounded disabled:opacity-40"
          >
            Previous
          </button>
          <span className="text-sm text-gray-600">
            Page {page} of {totalPages}
          </span>
          <button
            disabled={page >= totalPages}
            onClick={() => fetchProducts(page + 1)}
            className="px-4 py-2 border rounded disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDatabaseList;