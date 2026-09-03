// import React from 'react'
// import {useState} from "react"
// import { ChevronRight } from "lucide-react";
// import { Trash2 } from "lucide-react";
// import { Plus } from "lucide-react";
// import { useNavigate } from 'react-router-dom';

// const createpo = () => {
//   //route to next page
//   const navigate = useNavigate();

//     const handleNext = () => {
//       navigate("/generatepdf"); // this goes to your new page
//     };

//   // State for form fields
//   const [supplierName, setSupplierName] = useState("");
//   const [contactPerson, setContactPerson] = useState("");
//   const [contactEmail, setContactEmail] = useState("");
//   const [contactPhone, setContactPhone] = useState("");
//   const [discountPercent, setDiscountPercent] = useState(0);
//     const [products, setProducts] = useState([
//       { id: 1, productNumber: "", qty: 0, rate: 0, total: 0 },
//     ]);

//   // Calculate totals
//   const subtotal = products.reduce((sum, product) => sum + product.total, 0);
//   const discountAmount = (subtotal * discountPercent/100) ;
//   const grandTotal = subtotal - discountAmount;

//   // Add a new product
//   const addProduct = () => {
//      if (products.length < 5) {
//        const newProduct = {
//          id: Date.now(), // Use timestamp for unique ID
//          productNumber: "",
//          qty: 0,
//          rate: 0,
//          total: 0,
//        };
//        setProducts([...products, newProduct]);
//      }
//   };

//   // Update product details
//    const updateProduct = (id, field, value) => {
//      const updatedProducts = products.map((product) => {
//        if (product.id === id) {
//          const updatedProduct = { ...product, [field]: value };

//          // Recalculate total if qty or rate changes
//          if (field === "qty" || field === "rate") {
//            updatedProduct.total = updatedProduct.qty * updatedProduct.rate;
//          }

//          return updatedProduct;
//        }
//        return product;
//      });

//      setProducts(updatedProducts);
//    };

//   // Remove a product
//   const removeProduct = (id) => {
//     if (products.length <= 1) return; // Keep at least one product
//     setProducts(products.filter((product) => product.id !== id));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically send the data to your backend
//     console.log({
//       supplierName,
//       contactPerson,
//       contactEmail,
//       contactPhone,
//       products,
//       subtotal,
//       discountPercent,
//       discountAmount,
//       grandTotal,
//     });
//     alert("Purchase Order Created Successfully!");
//   };

//   return (
//     <div>
//       {/* Header */}
//       <div className="">
//         <h1 className="text-gray-400 text-[30px] align pb-5 items-center flex">
//           SUPPLIERS <ChevronRight className="mr-2 text-gray-700 ml-3" />
//           <p className="font-medium text-black">CREATE NEW PO </p>
//         </h1>

//         <div className="border w-full  bg-white border-white p-6 rounded-lg shadow-md">
//           <form onSubmit={handleSubmit}>
//             <div className="flex items-start justify-between gap-10">
//               {/* Supplier Info */}
//               <div className="w-1/2">
//                 <div>
//                   <label className="text-black text-[19px] font-medium mb-1">
//                     Supplier Name <span>*</span>
//                   </label>
//                   <input
//                     type="text"
//                     value={supplierName}
//                     onChange={(e) => setSupplierName(e.target.value)}
//                     placeholder="Supplier Name"
//                     className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none mb-5"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="text-black text-[19px] font-medium mb-1">
//                     Contact Person <span>*</span>
//                   </label>
//                   <input
//                     type="text"
//                     value={contactPerson}
//                     onChange={(e) => setContactPerson(e.target.value)}
//                     placeholder="Name"
//                     className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none mb-5"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="text-black text-[19px] font-medium mb-1">
//                     Contact Email
//                   </label>
//                   <input
//                     type="email"
//                     value={contactEmail}
//                     onChange={(e) => setContactEmail(e.target.value)}
//                     placeholder="Mail"
//                     className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none mb-5"
//                   />
//                 </div>
//                 <div>
//                   <label className="text-black text-[19px] font-medium mb-1">
//                     Contact Phone
//                   </label>
//                   <input
//                     type="tel"
//                     value={contactPhone}
//                     onChange={(e) => setContactPhone(e.target.value)}
//                     placeholder="Phone"
//                     className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none mb-5"
//                   />
//                 </div>
//                 <div>
//                   <label className="text-black text-[19px] font-medium mb-1">
//                     Suppiler ID
//                   </label>
//                   <input
//                     type="tel"
//                     value={contactPhone}
//                     onChange={(e) => setContactPhone(e.target.value)}
//                     placeholder="Suppiler ID"
//                     className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none mb-5"
//                   />
//                 </div>
//               </div>

//               <div className="w-2/3">
//                 {/* Product Section */}
//                 <div>
//                   <h2 className="text-black text-[20px] font-semibold mb-4">
//                     Supplied Products
//                   </h2>
//                   {/* Product Table */}
//                   <div className="overflow-x-auto mb-6">
//                     <table className="min-w-full  border-gray-300">
//                       <thead>
//                         <tr className="bg-gray-100 ">
//                           <th className="  px-4 py-2 text-left font-semibold text-gray-700 text-nowrap">
//                             Product Number
//                           </th>
//                           <th className="  px-4 py-2 text-left font-semibold text-gray-700">
//                             QTY
//                           </th>
//                           <th className="  px-4 py-2 text-left font-semibold text-gray-700">
//                             Rate
//                           </th>
//                           <th className="  px-4 py-2 text-left font-semibold text-gray-700">
//                             Total
//                           </th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {products.map((product) => (
//                           <tr key={product.id}>
//                             <td className="px-4 py-3 whitespace-nowrap">
//                               <input
//                                 type="text"
//                                 value={product.productNumber}
//                                 onChange={(e) =>
//                                   updateProduct(
//                                     product.id,
//                                     "productNumber",
//                                     e.target.value
//                                   )
//                                 }
//                                 placeholder="Product Number"
//                                 className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
//                               />
//                             </td>
//                             <td className="px-4 py-3 whitespace-nowrap">
//                               <input
//                                 type="number"
//                                 value={product.qty}
//                                 onChange={(e) =>
//                                   updateProduct(
//                                     product.id,
//                                     "qty",
//                                     parseInt(e.target.value) || 0
//                                   )
//                                 }
//                                 className="w-20 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
//                                 min="0"
//                               />
//                             </td>

//                             <td className="px-4 py-3 whitespace-nowrap">
//                               <input
//                                 type="text"
//                                 value={product.rate}
//                                 onChange={(e) =>
//                                   updateProduct(
//                                     product.id,
//                                     "rate",
//                                     parseFloat(e.target.value) || 0
//                                   )
//                                 }
//                                 className="w-24 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
//                                 min="0"
//                                 step="0.01"
//                               />
//                             </td>
//                             <td className="px-4 py-3 whitespace-nowrap font-medium">
//                               {product.total.toLocaleString()}
//                             </td>
//                             <td className="px-4 py-3 whitespace-nowrap">
//                               {products.length > 1 && (
//                                 <button
//                                   type="button"
//                                   onClick={() => removeProduct(product.id)}
//                                   className="text-black border border-gray-300 font-medium py-1 px-1 rounded-md"
//                                 >
//                                   <Trash2 size={18} />
//                                 </button>
//                               )}
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>

//                   {/* Add Product Button */}
//                   <div className="mt-4 flex mb-4 items-center space-x-2">
//                     <button
//                       type="button"
//                       onClick={addProduct}
//                       className="px-4 py-4 bg-gray-300 text-gray-700 rounded w-full flex items-center border border-dashed justify-center border-gray-500 "
//                     >
//                       <span className="mr-1 ">
//                         <Plus />
//                       </span>
//                       Add Product
//                     </button>
//                   </div>

//                   <div className="border-t border-gray-300 pt-6">
//                     {/* Sub Total */}
//                     <div className="flex justify-between items-center mb-2">
//                       <span className="text-gray-700 text-[17px] font-semibold">
//                         Sub Total
//                       </span>
//                       <span className="text-gray-600 px-3 py-3 border border-gray-300 rounded-md w-27">
//                         {subtotal.toLocaleString()}
//                       </span>
//                     </div>

//                     {/* Discount Section */}
//                     <div className="flex justify-between items-center mb-2">
//                       <span className="text-gray-700 text-[17px] font-semibold">
//                         {" "}
//                         Discount (%)
//                       </span>
//                       <input
//                         type="text"
//                         value={discountPercent}
//                         onChange={(e) =>
//                           setDiscountPercent(parseFloat(e.target.value) || 0)
//                         }
//                         className=" px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-27"
//                       />
//                     </div>
//                     <div className="flex justify-between items-center mb-6">
//                       <span className="text-gray-700 text-[17px] font-semibold">
//                         Discount Amount
//                       </span>
//                       <span className="text-gray-600 px-3 py-3 border border-gray-300 rounded-md w-27">
//                         {discountAmount.toLocaleString()}
//                       </span>
//                     </div>

//                     {/* Grand Total */}
//                     <div className="flex justify-between items-center pb-8">
//                       <span className="text-lg font-bold text-[25px] text-gray-800">
//                         Grand Total:
//                       </span>
//                       <span className="text-[20px] font-bold px-3 py-3 border border-gray-300 rounded-md text-blue-600">
//                         #{grandTotal.toLocaleString()}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="border-t items-center border-gray-300 ">
//               {/* Buttons */}
//               <div className="flex justify-end mt-6 gap-4">
//                 <button
//                   type="button"
//                   className="px-5 py-2 border  rounded-md border-gray-300 text-shadow-blue-600 font-semibold "
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   onClick={handleNext}
//                   className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-semibold"
//                 >
//                   Create PO
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

//   export default createpo;

import React, { useState, useEffect } from "react";
import { ChevronRight, Trash2, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CreatePO = () => {
  const navigate = useNavigate();

  const SUPPLIERS_URL =
    "https://project-genesis-dashboard.onrender.com/api/suppliers/";
  const PRODUCTS_URL =
    "https://project-genesis-dashboard.onrender.com/api/products/";
  const PROCUREMENT_URL =
    "https://project-genesis-dashboard.onrender.com/api/procurement/";

  const [suppliers, setSuppliers] = useState([]);
  const [products, setProducts] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  const [selectedSupplierId, setSelectedSupplierId] = useState("");
  const [transactionNumber, setTransactionNumber] = useState(
    `PO-${Date.now()}`,
  );
  const [dateReceived, setDateReceived] = useState(
    new Date().toISOString().slice(0, 10),
  );
  const [discountPercent, setDiscountPercent] = useState(0);

  const [lineItems, setLineItems] = useState([
    { id: 1, productId: "", qty: 0, rate: 0, total: 0 },
  ]);

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [supRes, prodRes] = await Promise.all([
          fetch(SUPPLIERS_URL),
          fetch(PRODUCTS_URL),
        ]);
        const supData = await supRes.json();
        const prodData = await prodRes.json();
        setSuppliers(supData.suppliers || []);
        setProducts(prodData.products || []);
      } catch (err) {
        setError("Failed to load suppliers or products");
      } finally {
        setLoadingData(false);
      }
    };
    fetchData();
  }, []);

  const selectedSupplier = suppliers.find((s) => s._id === selectedSupplierId);

  const subtotal = lineItems.reduce((sum, item) => sum + item.total, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const grandTotal = subtotal - discountAmount;

  const addLineItem = () => {
    if (lineItems.length < 5) {
      setLineItems([
        ...lineItems,
        { id: Date.now(), productId: "", qty: 0, rate: 0, total: 0 },
      ]);
    }
  };

  const removeLineItem = (id) => {
    if (lineItems.length <= 1) return;
    setLineItems(lineItems.filter((item) => item.id !== id));
  };

  const updateLineItem = (id, field, value) => {
    setLineItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        const updated = { ...item, [field]: value };

        // Auto-fill the supplier's cost as the default rate when a product is picked
        if (field === "productId") {
          const product = products.find((p) => p._id === value);
          if (product) updated.rate = product.cost;
        }

        if (field === "qty" || field === "rate" || field === "productId") {
          updated.total = (updated.qty || 0) * (updated.rate || 0);
        }

        return updated;
      }),
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!selectedSupplierId) {
      setError("Please select a supplier");
      return;
    }
    const invalidItem = lineItems.find(
      (item) => !item.productId || item.qty <= 0,
    );
    if (invalidItem) {
      setError(
        "Every product line needs a product selected and a quantity greater than 0",
      );
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(PROCUREMENT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          transactionNumber,
          transactionType: "Goods Receipt",
          supplier: selectedSupplierId,
          dateReceived,
          items: lineItems.map((item) => ({
            product: item.productId,
            quantity: item.qty,
            cost: item.rate,
          })),
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to create PO");

const data = await res.json();
if (!res.ok) throw new Error(data.message || "Failed to create PO");

const data = await res.json();
if (!res.ok) throw new Error(data.message || "Failed to create PO");

const poData = {
  transactionNumber,
  dateReceived,
  supplier: selectedSupplier,
  items: lineItems.map((item) => {
    const product = products.find((p) => p._id === item.productId);
    return {
      productFamily: product?.productFamily || "",
      productCategory: product?.productCategory || "",
      itemName: product?.itemName || "",
      qty: item.qty,
      rate: item.rate,
      total: item.total,
    };
  }),
  subtotal,
  discountPercent,
  discountAmount,
  grandTotal,
};

sessionStorage.setItem("poData", JSON.stringify(poData));
navigate("/generatepdf");
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (loadingData) {
    return (
      <div className="p-6 text-gray-500">Loading suppliers and products...</div>
    );
  }

  return (
    <div>
      <div>
        <h1 className="text-gray-400 text-[30px] align pb-5 items-center flex">
          SUPPLIERS <ChevronRight className="mr-2 text-gray-700 ml-3" />
          <p className="font-medium text-black">CREATE NEW PO</p>
        </h1>

        <div className="border w-full bg-white border-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm">
                {error}
              </div>
            )}

            <div className="flex items-start justify-between gap-10">
              {/* Supplier Info */}
              <div className="w-1/2">
                <div>
                  <label className="text-black text-[19px] font-medium mb-1">
                    Supplier <span>*</span>
                  </label>
                  <select
                    value={selectedSupplierId}
                    onChange={(e) => setSelectedSupplierId(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none mb-5"
                    required
                  >
                    <option value="">Select a supplier</option>
                    {suppliers.map((s) => (
                      <option key={s._id} value={s._id}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Read-only autofilled supplier details */}
                <div>
                  <label className="text-black text-[19px] font-medium mb-1">
                    Contact Person
                  </label>
                  <input
                    type="text"
                    value={selectedSupplier?.contactPerson || ""}
                    readOnly
                    placeholder="Auto-filled from supplier"
                    className="w-full border border-gray-300 rounded-lg p-3 mt-2 bg-gray-50 mb-5"
                  />
                </div>
                <div>
                  <label className="text-black text-[19px] font-medium mb-1">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    value={
                      selectedSupplier?.contactEmail ||
                      selectedSupplier?.email ||
                      ""
                    }
                    readOnly
                    className="w-full border border-gray-300 rounded-lg p-3 mt-2 bg-gray-50 mb-5"
                  />
                </div>
                <div>
                  <label className="text-black text-[19px] font-medium mb-1">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    value={
                      selectedSupplier?.contactPhone ||
                      selectedSupplier?.phone ||
                      ""
                    }
                    readOnly
                    className="w-full border border-gray-300 rounded-lg p-3 mt-2 bg-gray-50 mb-5"
                  />
                </div>
                <div>
                  <label className="text-black text-[19px] font-medium mb-1">
                    Supplier ID
                  </label>
                  <input
                    type="text"
                    value={selectedSupplier?.supplierId || ""}
                    readOnly
                    className="w-full border border-gray-300 rounded-lg p-3 mt-2 bg-gray-50 mb-5"
                  />
                </div>

                <div>
                  <label className="text-black text-[19px] font-medium mb-1">
                    Transaction Number
                  </label>
                  <input
                    type="text"
                    value={transactionNumber}
                    onChange={(e) => setTransactionNumber(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:outline-none mb-5"
                    required
                  />
                </div>
                <div>
                  <label className="text-black text-[19px] font-medium mb-1">
                    Date Received
                  </label>
                  <input
                    type="date"
                    value={dateReceived}
                    onChange={(e) => setDateReceived(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:outline-none mb-5"
                    required
                  />
                </div>
              </div>

              <div className="w-2/3">
                <div>
                  <h2 className="text-black text-[20px] font-semibold mb-4">
                    Supplied Products
                  </h2>
                  <div className="overflow-x-auto mb-6">
                    <table className="min-w-full border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="px-4 py-2 text-left font-semibold text-gray-700 text-nowrap">
                            Product
                          </th>
                          <th className="px-4 py-2 text-left font-semibold text-gray-700">
                            QTY
                          </th>
                          <th className="px-4 py-2 text-left font-semibold text-gray-700">
                            Rate
                          </th>
                          <th className="px-4 py-2 text-left font-semibold text-gray-700">
                            Total
                          </th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {lineItems.map((item) => (
                          <tr key={item.id}>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <select
                                value={item.productId}
                                onChange={(e) =>
                                  updateLineItem(
                                    item.id,
                                    "productId",
                                    e.target.value,
                                  )
                                }
                                className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                                required
                              >
                                <option value="">Select product</option>
                                {products.map((p) => (
                                  <option key={p._id} value={p._id}>
                                    {p.articleNumber} — {p.itemName}
                                  </option>
                                ))}
                              </select>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <input
                                type="number"
                                value={item.qty}
                                onChange={(e) =>
                                  updateLineItem(
                                    item.id,
                                    "qty",
                                    parseInt(e.target.value) || 0,
                                  )
                                }
                                className="w-20 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                                min="0"
                              />
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <input
                                type="number"
                                value={item.rate}
                                onChange={(e) =>
                                  updateLineItem(
                                    item.id,
                                    "rate",
                                    parseFloat(e.target.value) || 0,
                                  )
                                }
                                className="w-24 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                                min="0"
                                step="0.01"
                              />
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap font-medium">
                              {item.total.toLocaleString()}
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              {lineItems.length > 1 && (
                                <button
                                  type="button"
                                  onClick={() => removeLineItem(item.id)}
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

                  <div className="mt-4 flex mb-4 items-center space-x-2">
                    <button
                      type="button"
                      onClick={addLineItem}
                      className="px-4 py-4 bg-gray-300 text-gray-700 rounded w-full flex items-center border border-dashed justify-center border-gray-500"
                    >
                      <span className="mr-1">
                        <Plus />
                      </span>
                      Add Product
                    </button>
                  </div>

                  <div className="border-t border-gray-300 pt-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 text-[17px] font-semibold">
                        Sub Total
                      </span>
                      <span className="text-gray-600 px-3 py-3 border border-gray-300 rounded-md w-27">
                        {subtotal.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 text-[17px] font-semibold">
                        Discount (%)
                      </span>
                      <input
                        type="text"
                        value={discountPercent}
                        onChange={(e) =>
                          setDiscountPercent(parseFloat(e.target.value) || 0)
                        }
                        className="px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-27"
                      />
                    </div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-gray-700 text-[17px] font-semibold">
                        Discount Amount
                      </span>
                      <span className="text-gray-600 px-3 py-3 border border-gray-300 rounded-md w-27">
                        {discountAmount.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-8">
                      <span className="text-lg font-bold text-[25px] text-gray-800">
                        Grand Total:
                      </span>
                      <span className="text-[20px] font-bold px-3 py-3 border border-gray-300 rounded-md text-blue-600">
                        #{grandTotal.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t items-center border-gray-300">
              <div className="flex justify-end mt-6 gap-4">
                <button
                  type="button"
                  className="px-5 py-2 border rounded-md border-gray-300 text-shadow-blue-600 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-semibold disabled:opacity-50"
                >
                  {submitting ? "Creating..." : "Create PO"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePO;