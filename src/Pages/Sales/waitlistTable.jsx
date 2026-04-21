import React from 'react'
import { Download } from "lucide-react";

const waitlistTable = () => {
  const waitlistData = [
    {
      id: "01",
      date: "01/10/2025",
      family: "Books",
      category: "Mathematics",
      name: "Jide",
      employeeName: "Adeola Olotu",
      employeeId: "E123",
      dateClosed: "05/10/2025",
      status: "opened",
    },
    {
      id: "02",
      date: "01/10/2025",
      family: "Books",
      category: "Mathematics",
      name: "Jide",
      employeeName: "Adeola Olotu",
      employeeId: "E123",
      dateClosed: "05/10/2025",
      status: "opened",
    },
    {
      id: "03",
      date: "01/10/2025",
      family: "Books",
      category: "Mathematics",
      name: "Jide",
      employeeName: "Adeola Olotu",
      employeeId: "E123",
      dateClosed: "05/10/2025",
      status: "opened",
    },
    {
      id: "04",
      date: "01/10/2025",
      family: "Books",
      category: "Mathematics",
      name: "Jide",
      employeeName: "Adeola Olotu",
      employeeId: "E123",
      dateClosed: "05/10/2025",
      status: "opened",
    },
    {
      id: "05",
      date: "01/10/2025",
      family: "Books",
      category: "Mathematics",
      name: "Jide",
      employeeName: "Adeola Olotu",
      employeeId: "E123",
      dateClosed: "05/10/2025",
      status: "opened",
    },
    {
      id: "06",
      date: "01/10/2025",
      family: "Books",
      category: "Mathematics",
      name: "Jide",
      employeeName: "Adeola Olotu",
      employeeId: "E123",
      dateClosed: "05/10/2025",
      status: "opened",
    },
    {
      id: "07",
      date: "01/10/2025",
      family: "Books",
      category: "Mathematics",
      name: "Jide",
      employeeName: "Adeola Olotu",
      employeeId: "E123",
      dateClosed: "05/10/2025",
      status: "opened",
    },
    {
      id: "08",
      date: "01/10/2025",
      family: "Books",
      category: "Mathematics",
      name: "Jide",
      employeeName: "Adeola Olotu",
      employeeId: "E123",
      dateClosed: "05/10/2025",
      status: "opened",
    },
    {
      id: "09",
      date: "01/10/2025",
      family: "Books",
      category: "Mathematics",
      name: "Jide",
      employeeName: "Adeola Olotu",
      employeeId: "E123",
      dateClosed: "05/10/2025",
      status: "opened",
    },
    {
      id: "10",
      date: "01/10/2025",
      family: "Books",
      category: "Mathematics",
      name: "Jide",
      employeeName: "Adeola Olotu",
      employeeId: "E123",
      dateClosed: "05/10/2025",
      status: "opened",
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
      case "Opened":
        return "bg-green-100 text-green-700";
      case "Closed":
        return "bg-red-100 text-red-700";
        return "";
    };
  }


  return (
    <div>
      <h1 className="font-medium text-[27px]">
        CUSTOMER WAITLIST/ VIEW CUSTOMER WAITLIST
      </h1>
      <div className="w-full bg-white mt-8 rounded-lg p-5">
        <button className="bg-blue-600 text-white border border-blue-600 py-1 px-5 rounded-md font-medium text-[15px] cursor-pointer mb-4">
          <Download className="inline mr-1" />
          Export Waitlist CSV
        </button>

        <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
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
                  Product Family
                </th>
                <th className="px-2 py-4 text-xs font-medium text-white uppercase text-nowrap">
                  PRODUCT CATEGORY
                </th>
                <th className="px-2 py-4 text-xs font-medium text-white uppercase text-nowrap">
                  PRODUCT NAME
                </th>
                <th className="px-2 py-4 text-xs font-medium text-white uppercase text-nowrap">
                  EMPLOYEE NAME
                </th>
                <th className="px-2 py-4 text-xs font-medium text-white uppercase text-nowrap">
                  EMPLOYEE ID
                </th>
                <th className="px-2 py-4 text-xs font-medium text-white uppercase text-nowrap">
                  DATE CLOSED
                </th>
                <th className="px-2 py-4 text-xs font-medium text-white uppercase text-nowrap">
                  STATUS
                </th>
              </tr>
            </thead>
            <tbody>
              {waitlistData.map((item) => (
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">{item.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {item.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {item.family}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {" "}
                    {item.category}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {item.employeeName}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {item.employeeId}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {" "}
                    {item.dateClosed}
                  </td>
                  <td className="px-6 py-4">
                    <div
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                        item.status
                      )}`}
                    >
                      <select
                        value={item.status}
                        onChange={(e) =>
                          handleStatusChange(item.id, e.target.value)
                        }
                        className="bg-transparent outline-none cursor-pointer "
                      >
                        <option value="Opened">Opened</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </div>
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

export default waitlistTable