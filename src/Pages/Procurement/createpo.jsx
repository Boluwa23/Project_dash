import React from 'react'
import {useState} from "react"
import { ChevronRight } from "lucide-react";
import { Trash2 } from "lucide-react";
import { Plus } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const createpo = () => {
  //route to next page
  const navigate = useNavigate();

    const handleNext = () => {
      navigate("/generatepdf"); // this goes to your new page
    };

  // State for form fields
  const [supplierName, setSupplierName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
    const [products, setProducts] = useState([
      { id: 1, productNumber: "", qty: 0, rate: 0, total: 0 },
    ]);

   

  // Calculate totals
  const subtotal = products.reduce((sum, product) => sum + product.total, 0);
  const discountAmount = (subtotal * discountPercent/100) ;
  const grandTotal = subtotal - discountAmount;

  // Add a new product
  const addProduct = () => {
     if (products.length < 5) {
       const newProduct = {
         id: Date.now(), // Use timestamp for unique ID
         productNumber: "",
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
      supplierName,
      contactPerson,
      contactEmail,
      contactPhone,
      products,
      subtotal,
      discountPercent,
      discountAmount,
      grandTotal,
    });
    alert("Purchase Order Created Successfully!");
  };

  return (
    <div>
      {/* Header */}
      <div className="">
        <h1 className="text-gray-400 text-[30px] align pb-5 items-center flex">
          SUPPLIERS <ChevronRight className="mr-2 text-gray-700 ml-3" />
          <p className="font-medium text-black">CREATE NEW PO </p>
        </h1>

        <div className="border w-full  bg-white border-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="flex items-start justify-between gap-10">
              {/* Supplier Info */}
              <div className="w-1/2">
                <div>
                  <label className="text-black text-[19px] font-medium mb-1">
                    Supplier Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    value={supplierName}
                    onChange={(e) => setSupplierName(e.target.value)}
                    placeholder="Supplier Name"
                    className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none mb-5"
                    required
                  />
                </div>
                <div>
                  <label className="text-black text-[19px] font-medium mb-1">
                    Contact Person <span>*</span>
                  </label>
                  <input
                    type="text"
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    placeholder="Name"
                    className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none mb-5"
                    required
                  />
                </div>
                <div>
                  <label className="text-black text-[19px] font-medium mb-1">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="Mail"
                    className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none mb-5"
                  />
                </div>
                <div>
                  <label className="text-black text-[19px] font-medium mb-1">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="Phone"
                    className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none mb-5"
                  />
                </div>
                <div>
                  <label className="text-black text-[19px] font-medium mb-1">
                    Suppiler ID
                  </label>
                  <input
                    type="tel"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="Suppiler ID"
                    className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none mb-5"
                  />
                </div>
              </div>

              <div className="w-2/3">
                {/* Product Section */}
                <div>
                  <h2 className="text-black text-[20px] font-semibold mb-4">
                    Supplied Products
                  </h2>
                  {/* Product Table */}
                  <div className="overflow-x-auto mb-6">
                    <table className="min-w-full  border-gray-300">
                      <thead>
                        <tr className="bg-gray-100 ">
                          <th className="  px-4 py-2 text-left font-semibold text-gray-700 text-nowrap">
                            Product Number
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
                    {/* Sub Total */}
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 text-[17px] font-semibold">
                        Sub Total
                      </span>
                      <span className="text-gray-600 px-3 py-3 border border-gray-300 rounded-md w-27">
                        {subtotal.toLocaleString()}
                      </span>
                    </div>

                    {/* Discount Section */}
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 text-[17px] font-semibold">
                        {" "}
                        Discount (%)
                      </span>
                      <input
                        type="text"
                        value={discountPercent}
                        onChange={(e) =>
                          setDiscountPercent(parseFloat(e.target.value) || 0)
                        }
                        className=" px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-27"
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

                    {/* Grand Total */}
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

            <div className="border-t items-center border-gray-300 ">
              {/* Buttons */}
              <div className="flex justify-end mt-6 gap-4">
                <button
                  type="button"
                  className="px-5 py-2 border  rounded-md border-gray-300 text-shadow-blue-600 font-semibold "
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={handleNext}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-semibold"
                >
                  Create PO
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

  export default createpo;