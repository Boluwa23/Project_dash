import React from 'react'
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Trash2 } from "lucide-react";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const createinvoice = () => {

    //route to next page
    const navigate = useNavigate();
  
      const handleNext = () => {
        navigate("/sales/salesGenerate"); // this goes to your new page
  };
  
  const [customerName, setCustomerName] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
    const [customerAddress, setAddressPhone] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [products, setProducts] = useState([
    { id: 1, productName: "", qty: 0, rate: 0, total: 0 },
  ]);

  // Calculate totals
  const subtotal = products.reduce((sum, product) => sum + product.total, 0);
  const discountAmount = (subtotal * discountPercent/100);
  const grandTotal = subtotal - discountAmount;

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
      customerName,
      customerEmail,
      invoiceNumber,
      customerPhone,
      customerAddress,
      products,
      subtotal,
      discountPercent,
      discountAmount,
      grandTotal,
    });
    alert("Purchase Order Created Successfully!");
  };

  return (
    <div className=" ">
      {/* header */}
      <div>
        <h1 className="text-gray-400 text-[32px] align items-center flex">
          SALES <ChevronRight className="mr-2 ml-3" />
          <p className="font-medium text-black">CREATE INVOICE</p>
        </h1>
      </div>
      {/* form */}
      <div className="bg-white rounded-lg p-6  w-full mt-6 shadow-sm">
        <form className="">
          <div className="flex items-start justify-between gap-40">
            <div className="w-1/2">
              {/* customer Name */}
              <div>
                <label className="text-black text-[20px] font-medium mb-1">
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
              <div className="mt-8">
                <label className="text-black text-[20px] font-medium mb-1">
                  Customer Email(Optional)
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
                />
              </div>

              {/* Invoice Number */}
              <div className="mt-8">
                <label className="text-black text-[20px] font-medium mb-1 ">
                  Invoice Number
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
                />
              </div>

              {/* Payment Mode */}
              <div className="mt-8">
                <label className="text-black text-[20px] font-medium mb-1">
                  Payment Mode
                </label>
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <select className="w-full p-3 bg-white focus:outline-none">
                    <option value=""> Select Mode</option>
                    <option value="bank">Bank Transfer</option>
                    <option value="cash">Physical Cash</option>
                    <option value="card">Debit/Credit Card</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="w-1/2">
              {/* customer Phone */}
              <div>
                <label className="text-black text-[20px] font-medium ">
                  Customer Phone*
                </label>
                <input
                  type="text"
                  placeholder="1234567890"
                  className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
                />
              </div>

              {/*  Customer Address */}
              <div className="mt-8">
                <label className="text-black text-[20px] font-medium ">
                  Customer Address(Optional)
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
                />
              </div>

              {/*  Employee Name & ID*/}
              <div className="mt-8">
                <label className="text-black text-[20px] font-medium ">
                  Employee Name & ID(Auto Generated)
                </label>
                <input
                  type="text"
                  placeholder="User's Name"
                  className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
                />
              </div>
            </div>
          </div>
        </form>

        <div>
          <h1 className="mt-8 font-medium text-[30px]">Add Product</h1>

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
            <div className="flex justify-between items-center pb-8 border-b border-gray-300">
              <span className="text-lg font-bold text-[25px] text-gray-800">
                Grand Total:
              </span>
              <span className="text-[20px] font-bold px-3 py-3 border border-gray-300 rounded-md text-blue-600">
                #{grandTotal.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-10 gap-2">
          <button className="text-blue-500 border px-4 py-2 font-medium border-gray-300 rounded-md text-lg">
            cancel
          </button>
          <button
            type="submit"
            onClick={handleNext}
            className="border px-4 py-2 border-blue-500 bg-blue-500 text-white font-medium rounded-md text-lg cursor-pointer"
          >
            Create Invoice
          </button>
        </div>
      </div>
    </div>
  );
}

export default createinvoice