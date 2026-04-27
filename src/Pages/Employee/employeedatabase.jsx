import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

const employeedatabase = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "https://project-genesis-dashboard.onrender.com/api/auth/users",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setEmployees(res.data);
      } catch (error) {
        console.error(error);
        alert("Failed to fetch employees");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);
  
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-[27px] font-medium">EMPLOYEE DATABASE</h1>
        <button className="bg-blue-600 px-4 py-2 rounded-lg text-white">
          Export Employee CSV
        </button>
      </div>

      <div className="overflow-x-auto mt-8 border border-gray-200 rounded-lg shadow-sm">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-700 ">
            <tr>
              <th className=" text-xs text-white border p-2 border-gray-300  font-normal text-nowrap">
                ID
              </th>
              <th className="text-xs text-white border p-2 border-gray-300  font-normal text-nowrapp">
                FULL NAME
              </th>
              <th className=" text-xs text-white border p-2 border-gray-300  font-normal text-nowrap">
                USERNAME
              </th>
              <th className=" text-xs text-white border p-2 border-gray-300  font-normal text-nowrap">
                ROLE
              </th>
              <th className=" text-xs text-white border p-2 border-gray-300  font-normal text-nowrap">
                EMAIL ADDRESS
              </th>
              <th className=" text-xs text-white border p-2 border-gray-300  font-normal text-nowrap">
                PHONE NUMBER
              </th>
              <th className="text-xs text-white border p-2 border-gray-300  font-normal text-nowrap">
                CONTACT ADDRESS
              </th>
              <th className="text-xs text-white border p-2 border-gray-300  font-normal text-nowrap">
                CITY
              </th>
              <th className=" text-xs text-white border p-2 border-gray-300  font-normal text-nowrap">
                STATE
              </th>
              <th className=" text-xs text-white border p-2 border-gray-300  font-normal text-nowrap">
                COUNTRY
              </th>
              <th className="text-xs text-white border p-2 border-gray-300  font-normal text-nowrap">
                EMERGENCY CONTACT
              </th>
              <th className=" text-xs text-white border p-2 border-gray-300  font-normal text-nowrap">
                EMERGENCY ADDRESS
              </th>
              <th className=" text-xs text-white border p-2 border-gray-300  font-normal text-nowrap">
                ACCESS TYPE
              </th>
            </tr>
          </thead>

          <tbody className="bg-white   divide-gray-200">
            {employees.map((emp) => (
              <tr>
                <td className="px-6 py-4 border border-gray-200 text-sm text-gray-900 text-center">
                  {emp.employeeId}
                </td>
                <td className="px-6 py-4 border border-gray-200 text-sm text-gray-900 text-center text-nowrap">
                  {emp.firstName} {emp.lastName}
                </td>
                <td className="px-6 py-4 border border-gray-200 text-sm text-gray-900 text-center text-nowrap">
                  {emp.username}
                </td>
                <td className="px-6 py-4 border border-gray-200 text-sm text-gray-900 text-center text-nowrap">
                  {emp.role}
                </td>
                <td className="px-6 py-4 border border-gray-200 text-sm text-gray-900 text-center text-nowrap">
                  {emp.email}
                </td>
                <td className="px-6 py-4 border border-gray-200 text-sm text-gray-900 text-center text-nowrap">
                  {emp.phone}
                </td>
                <td className="px-6 py-4 border border-gray-200 text-sm text-gray-900 text-center text-nowrap">
                  {emp.address}
                </td>
                <td className="px-6 py-4 border border-gray-200 text-sm text-gray-900 text-center text-nowrap">
                  {emp.city}
                </td>
                <td className="px-6 py-4 border border-gray-200 text-sm text-gray-900 text-center text-nowrap">
                  {emp.state}
                </td>
                <td className="px-6 py-4 border border-gray-200 text-sm text-gray-900 text-center text-nowrap">
                  {emp.country}
                </td>
                <td className="px-6 py-4 border border-gray-200 text-sm text-gray-900 text-center text-nowrap">
                  {emp.emergencyContactPhone}
                </td>
                <td className="px-6 py-4 border border-gray-200 text-sm text-gray-900 text-center text-nowrap">
                  {emp.emergencyAddress}
                </td>

                <td className="px-6 py-4 border border-gray-200 text-sm text-gray-900 text-center text-nowrap">
                  {emp.accessType}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default employeedatabase