import React from 'react'
import { ChevronRight } from "lucide-react";

const generatepdf = () => {
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
        SUPPLIERS <ChevronRight className="mr-2 ml-3 text-gray-700" />
        CREATE NEW PO <ChevronRight className="mr-2 ml-3 text-gray-700" />
        <p className="font-medium text-black">GENERATE/SEND PDF</p>
      </h1>

      <div className='"border w-full  bg-white border-white p-6 rounded-lg shadow-md '>
        <div className="flex justify-between items-center border-b pb-6 border-gray-300">
          <p className="font-medium text-[25px]">LEARN AFRICA</p>
          <p className=" font-medium text-[18px]">
            TRANSACTION DATE <br />
            <span className="px-7 text-blue-700 font-semibold">
              23-09-2025{" "}
            </span>
          </p>
        </div>
        <div className="flex justify-between w-full py-6">
          <div className="flex flex-col ">
            <span className="font-medium text-[18px] pb-2">Suppiler ID:</span>
            <span className="font-medium text-[18px] pb-2">
              Contact Person:
            </span>
            <span className="font-medium text-[18px] pb-2">
              Contact Phone Number:
            </span>
            <span className="font-medium text-[18px] pb-2">Contact Email:</span>
            <span className="font-medium text-[18px] pb-2">
              Suppiler Email:
            </span>
            <span className="font-medium text-[18px] pb-2">
              Transaction Number:
            </span>
          </div>
          <div className="flex flex-col text-right">
            <span className="font-semibold text-blue-500 text-[18px] pb-2">
              SUP-32456
            </span>
            <span className="font-semibold text-[18px] pb-2">
              Thomas Chisty
            </span>
            <span className="font-semibold text-[18px] pb-2">+123456788</span>
            <span className="font-semibold text-[18px] pb-2">
              thomaschristy@gmail.com
            </span>
            <span className="font-semibold text-[18px] pb-2">
              hello@learnafrica.com
            </span>
            <span className="font-semibold text-[18px] pb-2">PO-03292</span>
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
                <tr>
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
          <button className="py-2 px-4 bg-blue-600 font-semibold rounded-lg border-blue-600 text-white">
            send to suppiler
          </button>
        </div>
      </div>
    </div>
  );
}

export default generatepdf