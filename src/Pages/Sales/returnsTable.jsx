import React from 'react'
import { ChevronRight } from "lucide-react";

const returnsTable = () => {
  const returnsData = [
    {
      id: "01",
      dateSubmitted: "01/10/2025",
      returnNumber: "RTN-34574",
      customerName: "Jide",
      productFamily: "Books",
      productCategory: "Mathematics",
      employeeName: "Adeola Olotu",
      employeeId: "E123",
      reasonReturned: "Damaged",
      returnPdf: "View INV-24356.pdf",
    },
     {
      id: "02",
      dateSubmitted: "01/10/2025",
      returnNumber: "RTN-34574",
      customerName: "Jide",
      productFamily: "Books",
      productCategory: "Mathematics",
      employeeName: "Adeola Olotu",
      employeeId: "E123",
      reasonReturned: "Damaged",
      returnPdf: "View INV-24356.pdf",
    },
      {
      id: "03",
      dateSubmitted: "01/10/2025",
      returnNumber: "RTN-34574",
      customerName: "Jide",
      productFamily: "Books",
      productCategory: "Mathematics",
      employeeName: "Adeola Olotu",
      employeeId: "E123",
      reasonReturned: "Damaged",
      returnPdf: "View INV-24356.pdf",
    },
       {
      id: "04",
      dateSubmitted: "01/10/2025",
      returnNumber: "RTN-34574",
      customerName: "Jide",
      productFamily: "Books",
      productCategory: "Mathematics",
      employeeName: "Adeola Olotu",
      employeeId: "E123",
      reasonReturned: "Damaged",
      returnPdf: "View INV-24356.pdf",
    },
        {
      id: "05",
      dateSubmitted: "01/10/2025",
      returnNumber: "RTN-34574",
      customerName: "Jide",
      productFamily: "Books",
      productCategory: "Mathematics",
      employeeName: "Adeola Olotu",
      employeeId: "E123",
      reasonReturned: "Damaged",
      returnPdf: "View INV-24356.pdf",
    }
  ]
  return (
    <div>
      <h1 className="text-gray-400 text-[29px] align items-center flex">
        SALES <ChevronRight className="mr-2 ml-3" />
        <p className="font-medium text-black">VIEW RETURNS</p>
      </h1>
      <div className="w-full overflow-x-auto border border-gray-200 bg-white mt-8 rounded-lg p-5">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-700 ">
            <tr>
              <th className="px-2 py-4 text-xs font-medium text-white uppercase text-nowrap">
                ID
              </th>
              <th className="px-2 py-4 text-xs font-medium text-white uppercase text-nowrap">
                Date Submitted
              </th>
              <th className="px-2 py-4 text-xs font-medium text-white uppercase text-nowrap">
                Return Number
              </th>
              <th className="px-2 py-4 text-xs font-medium text-white uppercase text-nowrap">
                Customer Name
              </th>
              <th className="px-2 py-4 text-xs font-medium text-white uppercase text-nowrap">
                Product Family
              </th>
              <th className="px-2 py-4 text-xs font-medium text-white uppercase text-nowrap">
                Product Category
              </th>
              <th className="px-2 py-4 text-xs font-medium text-white uppercase text-nowrap">
                Employee Name
              </th>
              <th className="px-2 py-4 text-xs font-medium text-white uppercase text-nowrap">
                Employee ID
              </th>
              <th className="px-2 py-4 text-xs font-medium text-white uppercase text-nowrap">
                Reason For Returned
              </th>
              <th className="px-2 py-4 text-xs font-medium text-white uppercase text-nowrap">
                Return PDF
              </th>
            </tr>
          </thead>

          <tbody>
            {returnsData.map((returnItem) => (
              <tr key={returnItem.id}>
                <td className="px-2 py-4 text-sm text-gray-800">{returnItem.id}</td>
                <td className="px-2 py-4 text-sm text-gray-800">{returnItem.dateSubmitted}</td>
                <td className="px-2 py-4 text-sm text-gray-800">{returnItem.returnNumber}</td>
                <td className="px-2 py-4 text-sm text-gray-800">{returnItem.customerName}</td>
                <td className="px-2 py-4 text-sm text-gray-800">{returnItem.productFamily}</td>
                <td className="px-2 py-4 text-sm text-gray-800">{returnItem.productCategory}</td>
                <td className="px-2 py-4 text-sm text-gray-800">{returnItem.employeeName}</td>
                <td className="px-2 py-4 text-sm text-gray-800">{returnItem.employeeId}</td>
                <td className="px-2 py-4 text-sm text-blue-500">{returnItem.reasonReturned}</td>
                <td className="px-2 py-4 text-sm text-blue-500 cursor-pointer text-nowrap">{returnItem.returnPdf}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default returnsTable