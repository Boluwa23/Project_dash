import React from 'react'
import { ChevronRight } from "lucide-react";
import { useState } from "react";

const SalesGenerate = () => {
  const [showReturnModal, setShowReturnModal] = useState(false);
   const [email, setEmail] = useState("");

  const products = [
    {
      id: "01",
      family: "Books",
      category: "Mathematics",
      item: "Birkenstock slippers",
      qty: 2,
      rate: 3000,
      unit: 800000,
    },
    {
      id: "02",
      family: "Books",
      category: "Mathematics",
      item: "Birkenstock slippers",
      qty: 2,
      rate: 3000,
      unit: 800000,
    },
    {
      id: "03",
      family: "Books",
      category: "Mathematics",
      item: "Birkenstock slippers",
      qty: 2,
      rate: 3000,
      unit: 800000,
    },
    {
      id: "04",
      family: "Books",
      category: "Mathematics",
      item: "Birkenstock slippers",
      qty: 2,
      rate: 3000,
      unit: 800000,
    },
    {
      id: "05",
      family: "Books",
      category: "Mathematics",
      item: "Birkenstock slippers",
      qty: 2,
      rate: 3000,
      unit: 800000,
    },
  ];

  return (
    <div>
      <h1 className="text-gray-400 text-[30px] align pb-5 items-center flex">
        SALES <ChevronRight className="mr-2 ml-3 text-gray-700" />
        CREATE INVOICE <ChevronRight className="mr-2 ml-3 text-gray-700" />
        <p className="font-medium text-black">SAVE/PRINT PDF</p>
      </h1>

      <div className='"border w-full  bg-white border-white p-6 rounded-lg shadow-md '>
        <div className="flex justify-between items-center border-b pb-6 border-gray-300">
          <p className="font-medium text-[25px]">SUNSHINE BOOKSTORE</p>
          <p className=" font-medium text-[18px]">
            TRANSACTION DATE <br />
            <span className="px-7 text-blue-700 font-semibold">
              23-09-2025{" "}
            </span>
          </p>
        </div>
        <div className="flex justify-between w-full py-6">
          <div className="flex flex-col ">
            <span className="font-medium text-[18px] pb-2">Customer Name:</span>
            <span className="font-medium text-[18px] pb-2">
              Customer Phone Number:
            </span>
            <span className="font-medium text-[18px] pb-2">
              Customer Email:
            </span>
            <span className="font-medium text-[18px] pb-2">
              Invoice Number:
            </span>
            <span className="font-medium text-[18px] pb-2">
              Customer Address:
            </span>
            <span className="font-medium text-[18px] pb-2">Employee Name:</span>
            <span className="font-medium text-[18px] pb-2">Employee ID:</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="font-semibold text-[18px] pb-2">
              Thomas Chisty
            </span>
            <span className="font-semibold text-[18px] pb-2">+123456788</span>
            <span className="font-semibold text-[18px] pb-2">
              thomaschristy@gmail.com
            </span>
            <span className="font-semibold text-[18px] pb-2">INV-0003</span>
            <span className="font-semibold text-[18px] pb-2">
              Oba Adesida Road
            </span>
            <span className="font-semibold text-[18px] pb-2">John Hero</span>
            <span className="font-semibold text-[18px] pb-2">4586</span>
          </div>
        </div>

        <div>
          <table className="min-w-full  divide-gray-200">
            <thead className="bg-gray-200 rounded-2xl border border-gray-200 shadow-sm">
              <tr>
                <th className="px-2 py-4 text-md font-medium text-nowrap">
                  S/N
                </th>
                <th className="px-2 py-4 text-md font-medium text-nowrap">
                  Product Family
                </th>
                <th className="px-2 py-4 text-md font-medium text-nowrap">
                  Product Category
                </th>
                <th className="px-2 py-4 text-md font-medium text-nowrap">
                  Product Name
                </th>
                <th className="px-2 py-4 text-md font-medium text-nowrap">
                  QTY
                </th>
                <th className="px-2 py-4 text-md font-medium text-nowrap">
                  Rate
                </th>
                <th className="px-2 py-4 text-md font-medium text-nowrap">
                  Unit Total
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y  divide-gray-300">
              {products.map((product) => (
                <tr key={product.id}>
                  <th className="px-6 py-4 text-sm font-medium text-gray-700">
                    {product.id}
                  </th>
                  <th className="px-6 py-4 text-sm font-medium text-gray-700">
                    {product.family}
                  </th>
                  <th className="px-6 py-4 text-sm font-medium text-gray-700">
                    {product.category}
                  </th>
                  <th className="px-6 py-4 text-sm font-medium text-gray-700">
                    {product.item}
                  </th>
                  <th className="px-6 py-4 text-sm font-medium text-gray-700">
                    {product.qty}
                  </th>
                  <th className="px-6 py-4 text-sm font-medium text-gray-700">
                    {product.rate}
                  </th>
                  <th className="px-6 py-4 text-sm font-medium text-gray-700">
                    {product.unit}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="w-full border-b border-t border-gray-300 flex justify-end">
          <div className="flex flex-col text-right space-y-2 p-4 ">
            <div className="flex justify-between w-90">
              <span>Sub total</span>
              <span className="font-semibold">#30000.00</span>
            </div>{" "}
            <data value=""></data>
            <div className="flex justify-between w-90">
              <span>Discount(%)</span>
              <span className="font-semibold">20%</span>
            </div>
            <div className="flex justify-between  w-90">
              <span className="text-nowrap">Discount Amount</span>
              <span className="font-semibold">#2500.00</span>
            </div>
            <div className="flex justify-between w-90">
              <span className="font-semibold text-[25px] text-blue-500">
                Total Amount
              </span>
              <span className="font-semibold text-[25px] text-blue-500">
                #32,500.00
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-6">
          <button className="border font-semibold px-4 py-2 text-blue-600 bg-white rounded-lg border-gray-300">
            {" "}
            Save to device
          </button>
          <button
            type="button"
            onClick={() => setShowReturnModal(true)}
            className="py-2 px-4 bg-blue-600 font-semibold rounded-lg border-blue-600 text-white"
          >
            Print PDF
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
            <div className="bg-white w-full max-w-md rounded-lg shadow-lg relative max-h-[90vh] overflow-hidden">
              <div className="flex items-center justify-between border-b px-6 py-4">
                <h2 className="text-sm font-semibold text-blue-600">
                  Send PDF
                </h2>
                <button
                  type="button"
                  onClick={() => setShowReturnModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <div className="px-6 py-5 space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">PO-032292</p>
                  <p className="text-sm font-semibold text-gray-900">
                    ₦32,500.00
                  </p>
                </div>
                <input
                  type="email"
                  placeholder="learnafrica@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className='flex justify-end py-4 px-4'>
                <button className="py-1 px-3 bg-blue-500 rounded-lg border-blue-600 text-white">
                  Send Invoice
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {/* ================= END MODAL ================= */}
    </div>
  );
};

export default SalesGenerate;