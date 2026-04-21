import React from 'react'
import { Plus } from "lucide-react";


const pdatabase = () => {

      const products = [
        {
          id: "01",
          family: "Books",
          category: "Mathematics",
          name: "New General Maths JSS1",
          lifecycle: "Active",
          supplier: "Learn Africa PLC",
          cost: 3000,
          bsp: 7000,
          msp: 8000,
          lsp: 3900,
          uom: "Each",
        },
        {
          id: "02",
          family: "Books",
          category: "Mathematics",
          name: "New General Maths JSS1",
          lifecycle: "Active",
          supplier: "Learn Africa PLC",
          cost: 3000,
          bsp: 7000,
          msp: 8000,
          lsp: 3900,
          uom: "Each",
        },
        {
          id: "03",
          family: "Books",
          category: "Mathematics",
          name: "New General Maths JSS1",
          lifecycle: "Active",
          supplier: "Learn Africa PLC",
          cost: 3000,
          bsp: 7000,
          msp: 8000,
          lsp: 3900,
          uom: "Each",
        },
        {
          id: "04",
          family: "Books",
          category: "Mathematics",
          name: "New General Maths .JSS1",
          lifecycle: "Discontinued",
          supplier: "Learn Africa PLC",
          cost: 3000,
          bsp: 7000,
          msp: 8000,
          lsp: 3900,
          uom: "Each",
        },
        {
          id: "05",
          family: "Books",
          category: "Mathematics",
          name: "New General Maths JSS1",
          lifecycle: "Active",
          supplier: "Learn Africa PLC",
          cost: 3000,
          bsp: 7000,
          msp: 8000,
          lsp: 3900,
          uom: "Each",
        },
        {
          id: "06",
          family: "Books",
          category: "Mathematics",
          name: "New General Maths JSS1",
          lifecycle: "Under Development",
          supplier: "Learn Africa PLC",
          cost: 3000,
          bsp: 7000,
          msp: 8000,
          lsp: 3900,
          uom: "Each",
        },
        {
          id: "07",
          family: "Books",
          category: "Mathematics",
          name: "New General Maths JSS1",
          lifecycle: "Active",
          supplier: "Learn Africa PLC",
          cost: 3000,
          bsp: 7000,
          msp: 8000,
          lsp: 3900,
          uom: "Each",
        },
        {
          id: "08",
          family: "Books",
          category: "Mathematics",
          name: "New General Maths JSS1",
          lifecycle: "Out Of Stock",
          supplier: "Learn Africa PLC",
          cost: 3000,
          bsp: 7000,
          msp: 8000,
          lsp: 3900,
          uom: "Each",
        },
        {
          id: "09",
          family: "Books",
          category: "Mathematics",
          name: "New General Maths JSS1",
          lifecycle: "Discontinued",
          supplier: "Learn Africa PLC",
          cost: 3000,
          bsp: 7000,
          msp: 8000,
          lsp: 3900,
          uom: "Each",
        },
        {
          id: "10",
          family: "Books",
          category: "Mathematics",
          name: "New General Maths JSS1",
          lifecycle: "Out Of Stock",
          supplier: "Learn Africa PLC",
          cost: 3000,
          bsp: 7000,
          msp: 8000,
          lsp: 3900,
          uom: "Each",
        },
        {
          id: "11",
          family: "Books",
          category: "Mathematics",
          name: "New General Maths JSS1",
          lifecycle: "Out Of Stock",
          supplier: "Learn Africa PLC",
          cost: 3000,
          bsp: 7000,
          msp: 8000,
          lsp: 3900,
          uom: "Each",
        },
        {
          id: "12",
          family: "Books",
          category: "Mathematics",
          name: "New General Maths JSS1",
          lifecycle: "Under Development",
          supplier: "Learn Africa PLC",
          cost: 3000,
          bsp: 7000,
          msp: 8000,
          lsp: 3900,
          uom: "Each",
        },
      ];

      const handleStatusChange = (id, newStatus) => {
    setProducts(
      products.map((p) =>
        p.id === id ? { ...p, status: newStatus } : p
      )
    );
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
    };
  }

  return (
    <div>
      <div className="p-6">
        <div className="flex justify-between">
          <h1 className="text-[30px] font-medium mb-4">PRODUCT DATABASE</h1>
          <button className="border flex bg-blue-700  rounded-lg text-white items-center px-4 py-2 mb-4 ">
            <Plus />
            Export Product CSV
          </button>
        </div>

        <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-700 ">
              <tr>
                <th className=" text-xs font-medium text-white uppercase text-nowrap">
                  ID
                </th>
                <th className="px-2 py-3 text-left text-xs font-medium text-white uppercase text-nowrap">
                  Product Family
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-white uppercase text-nowrap">
                  Product Category
                </th>
                <th className="px-3 py-3  text-xs font-medium text-white uppercase text-nowrap">
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

            <tbody className="bg-white divide-y  divide-gray-200">
              {products.map((product) => (
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {product.id}
                  </td>
                  <td className="px-6 py-4">
                    <div
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                        product.family
                      )}`}
                    >
                      <select
                        value={product.family}
                        onChange={(e) =>
                          handleStatusChange(product.id, e.target.value)
                        }
                        className="bg-transparent outline-none cursor-pointer "
                      >
                        <option value="Books">Books</option>
                        <option value="Sports">Sports</option>
                        <option value="Stationery">Stationery</option>

                      </select>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 text-nowrap">
                    {product.name}
                  </td>
                  <td className="px-6 py-4">
                    <div
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                        product.status
                      )}`}
                    >
                      <select
                        value={product.status}
                        onChange={(e) =>
                          handleStatusChange(product.id, e.target.value)
                        }
                        className="bg-transparent outline-none cursor-pointer "
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
                  <td className="px-6 py-4 text-sm text-gray-500  text-nowrap">
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
      </div>
    </div>
  );
}

export default pdatabase