import React from 'react'
import { ChevronRight, Trash2, Plus } from "lucide-react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const customerreturns = () => {

    //route to next page
    const navigate = useNavigate();
  
      const handleNext = () => {
        navigate("/returnsTable"); // this goes to your new page
      };
  

  const returns = [
    {
      id: "01",
      family: "Books",
      category: "Mathematics",
      itemNumber: "10001001",
      productName: "Birkenstock Slippers",
      qty: 2,
      rate: 300000,
    },
     {
      id: "02",
      family: "Books",
      category: "Mathematics",
      itemNumber: "10001001",
      productName: "Birkenstock Slippers",
      qty: 2,
      rate: 300000,
    },
      {
      id: "03",
      family: "Books",
      category: "Mathematics",
      itemNumber: "10001001",
      productName: "Birkenstock Slippers",
      qty: 2,
      rate: 300000,
    },
       {
      id: "04",
      family: "Books",
      category: "Mathematics",
      itemNumber: "10001001",
      productName: "Birkenstock Slippers",
      qty: 2,
      rate: 300000,
    }
  ]

const InfoRow = ({ label, value }) => {
  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-600">{label}</span>
      <span className="font-medium text-gray-900">{value}</span>
    </div>
  );
};

  const [showReturnModal, setShowReturnModal] = useState(false);

  const [discountPercent, setDiscountPercent] = useState(0);
  const [products, setProducts] = useState([
    { id: 1, productName: "", qty: 0, rate: 0, total: 0 },
  ]);

  // Calculate totals
  const grandTotal = products.reduce((sum, product) => sum + product.total, 0);


  // Add a new product
  const addProduct = () => {
    if (products.length < 5) {
      const newProduct = {
        id: Date.now(), // Use timestamp for unique ID
        productName: "",
        qty: 0,
        rate: 0,
        total: 0,
      };
      setProducts([...products, newProduct]);
    }
  };

  // Update product details
  const updateProduct = (id, field, value) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        const updatedProduct = { ...product, [field]: value };

        // Recalculate total if qty or rate changes
        if (field === "qty" || field === "rate") {
          updatedProduct.total = updatedProduct.qty * updatedProduct.rate;
        }

        return updatedProduct;
      }
      return product;
    });

    setProducts(updatedProducts);
  };
  // Remove a product
  const removeProduct = (id) => {
    if (products.length <= 1) return; // Keep at least one product
    setProducts(products.filter((product) => product.id !== id));
  };
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log({
      products,
      subtotal,
      discountPercent,
      discountAmount,
      grandTotal,
    });
    alert("Purchase Order Created Successfully!");
  };

  return (
    <div className="p-5">
      <h1 className="text-gray-400 text-[32px] align items-center flex">
        SALES <ChevronRight className="mr-2 ml-3" />
        <p className="font-medium text-black">CREATE RETURNS</p>
      </h1>

      <div className="bg-white rounded-lg p-10 w-full mt-4 shadow-sm">
        <h1 className="mt-5 mb-6 font-medium text-[25px]">
          Add Returns Product(s)
        </h1>

        <div>
          {/* Product Table */}
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full  border-gray-300">
              <thead>
                <tr className="bg-gray-100 ">
                  <th className="  px-4 py-2 text-left font-semibold text-gray-700 text-nowrap">
                    Product Name
                  </th>
                  <th className="  px-4 py-2 text-left font-semibold text-gray-700">
                    QTY
                  </th>
                  <th className="  px-4 py-2 text-left font-semibold text-gray-700">
                    Rate
                  </th>
                  <th className="  px-4 py-2 text-left font-semibold text-gray-700">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <input
                        type="text"
                        value={product.productNumber}
                        onChange={(e) =>
                          updateProduct(
                            product.id,
                            "productNumber",
                            e.target.value
                          )
                        }
                        placeholder="Product Number"
                        className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <input
                        type="number"
                        value={product.qty}
                        onChange={(e) =>
                          updateProduct(
                            product.id,
                            "qty",
                            parseInt(e.target.value) || 0
                          )
                        }
                        className="w-20 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                        min="0"
                      />
                    </td>

                    <td className="px-4 py-3 whitespace-nowrap">
                      <input
                        type="text"
                        value={product.rate}
                        onChange={(e) =>
                          updateProduct(
                            product.id,
                            "rate",
                            parseFloat(e.target.value) || 0
                          )
                        }
                        className="w-24 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                        min="0"
                        step="0.01"
                      />
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap font-medium">
                      {product.total.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {products.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeProduct(product.id)}
                          className="text-black border border-gray-300 font-medium py-1 px-1 rounded-md"
                        >
                          <Trash2 size={18} />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add Product Button */}
          <div className="mt-4 flex mb-4 items-center space-x-2">
            <button
              type="button"
              onClick={addProduct}
              className="px-4 py-4 bg-gray-300 text-gray-700 rounded w-full flex items-center border border-dashed justify-center border-gray-500 "
            >
              <span className="mr-1 ">
                <Plus />
              </span>
              Add Product
            </button>
          </div>

          <div className="border-t border-gray-300 pt-6">
            {/* Grand Total */}
            <div className="flex justify-between items-center pb-8 border-b p-2 border-gray-300">
              <span className="text-lg font-bold text-[25px] text-gray-800">
                Grand Total:
              </span>
              <span className="text-[20px] font-bold px-3 py-3 border border-gray-300 rounded-md text-blue-600">
                #{grandTotal.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <form>
          <div className="flex items-start mt-5 justify-between gap-50">
            <div className="w-1/2">
              {/* customer Name */}
              <div className="mb-5">
                <label className="text-black text-[20px] font-medium ">
                  Customer Name <span>*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Name"
                  className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
                />
              </div>
              {/* customer Email */}
              <div className="mb-5">
                <label className="text-black text-[20px] font-medium text-nowrap">
                  Customer Email(Optional)
                </label>
                <input
                  type="text"
                  required
                  placeholder="example@gmail.com"
                  className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
                />
              </div>
              {/* Return Number */}
              <div className="mb-5">
                <label className="text-black text-[20px] font-medium ">
                  {" "}
                  Return Number
                </label>
                <input
                  type="text"
                  required
                  placeholder="RTN-100012"
                  className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
                />
              </div>
              {/* Return Request */}
              <div className="mb-4">
                <label className="block mb-1 text-[20px] text-black font-medium">
                  Return Request
                </label>

                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <select className="w-full p-3 bg-white focus:outline-none">
                    <option value="">Select Payment Method</option>
                    <option value="bank">Bank Transfer</option>
                    <option value="cash">Physical Cash</option>
                    <option value="card">Debit/Credit Card</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="w-1/2">
              {/* customer Phone */}
              <div className="mb-5">
                <label className="text-black text-[20px] font-medium mb-1">
                  Customer Phone <span>*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="0810756789"
                  className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
                />
              </div>
              {/* customer Address */}
              <div className="mb-5">
                <label className="text-black text-[20px] font-medium mb-1">
                  Customer Address (Optional)
                </label>
                <input
                  type="text"
                  required
                  placeholder="Address"
                  className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
                />
              </div>

              {/* Employee Name & ID(Auto Generated) */}
              <div className="mb-5">
                <label className="text-black text-[20px] font-medium mb-1">
                  Employee Name & ID(Auto Generated)
                </label>
                <input
                  type="text"
                  required
                  placeholder="Tamilore Olotu"
                  className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
                />
              </div>
            </div>
          </div>
        </form>

      
        <div className="flex justify-end gap-7 mt-8">
          {/* This is where the pop-up will be triggered from */}
          <button
            type="button"
            onClick={() => setShowReturnModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg border border-blue-600 font-medium"
          >
            Create Return and Generate PDF
          </button>
          <button
            onClick={handleNext}
            type="submit"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg border border-blue-100 font-medium "
          >
            View Return Table
          </button>
        </div>
      </div>

      {/* ================= RETURN TABLE MODAL ================= */}
      {showReturnModal && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setShowReturnModal(false)}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-white w-[95%] max-w-6xl rounded-lg shadow-lg relative max-h-[90vh] overflow-hidden">
              {/* Header */}
              <div className="flex justify-between items-start px-6 py-4 border-b">
                <h1 className="font-semibold text-lg">SUNSHINE BOOKSTORE</h1>

                <div className="text-right text-sm">
                  <p className="text-gray-500">TRANSACTION DATE</p>
                  <p className="text-blue-600 font-medium">23-Sep-2025</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto  max-h-[65vh]">
                {/* SUMMARY TABLE */}
                <div className="grid grid-cols gap-20 text-black text-sm mt-4 ">
                  <div className="space-y-3">
                    <InfoRow label="Customer Name" value="John Ademilua" />
                    <InfoRow
                      label="Customer Phone Number"
                      value="+121 894 231 765"
                    />
                    <InfoRow label="Customer Email" value="-" />
                    <InfoRow label="Return Number" value="INV-003" />
                    <InfoRow label="Customer Address" value="-" />
                    <InfoRow
                      label="Employee Name"
                      value="Oluwatamilore OIotu"
                    />
                    <InfoRow label="Employee ID" value="#567" />
                  </div>
                </div>

                {/* DETAILED TABLE */}
                <div className="overflow-x-auto mt-8">
                  <table className="w-full border text-sm min-w-[1200px]">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border px-3 py-2">S/N</th>
                        <th className="border px-3 py-2">Product Family</th>
                        <th className="border px-3 py-2">Product Catergory </th>
                        <th className="border px-3 py-2">Item Number</th>
                        <th className="border px-3 py-2">Product Name</th>
                        <th className="border px-3 py-2">Reason For Return</th>
                        <th className="border px-3 py-2">QTY</th>
                        <th className="border px-3 py-2">Rate</th>
                        <th className="border px-3 py-2">Unit Total</th>
                      </tr>
                    </thead>

                    <tbody>
                      {returns.map((item) => (
                        <tr>
                          <td className="border px-3 py-2">{item.id} </td>

                          <td className="border px-3 py-2">{item.family}</td>
                          <td className="border px-3 py-2">{item.category}</td>

                          <td className="border px-3 py-2">
                            {item.itemNumber}
                          </td>

                          <td className="border px-3 py-2">
                            {item.productName}
                          </td>
                          <td className="border px-3 py-2">
                            <select className="border rounded px-2 py-1 text-sm">
                              <option>Damaged</option>
                              <option>Offline</option>
                              <option>Forgotten</option>
                            </select>
                          </td>
                          <td className="border px-3 py-2 font-medium">
                            {item.qty}
                          </td>
                          <td className="border px-3 py-2">{item.rate}</td>
                          <td className="border px-3 py-2">
                            {item.qty * item.rate}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Totals */}
                <div className="flex justify-end mt-6 text-sm">
                  <div className="text-right">
                    <p>
                      Sub Total:
                      <span className="ml-2 font-medium">₦30,000.00</span>
                    </p>
                    <p className="text-blue-600 font-semibold text-base">
                      Total Amount: ₦32,500.00
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex justify-end gap-3 px-6 py-4 border-t">
                <button
                  onClick={() => setShowReturnModal(false)}
                  className="px-4 py-2 border rounded-md text-blue-600 shadow-md border-blue-200"
                >
                  View In Table
                </button>

                <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                  Send PDF
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {/* ================= END MODAL ================= */}
    </div>
  );
}

export default customerreturns