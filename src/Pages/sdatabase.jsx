import React, { useState, useEffect } from 'react';
import { Plus } from "lucide-react";
import axios from 'axios';

const Sdatabase = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "https://project-genesis-dashboard.onrender.com/api/suppliers/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setSuppliers(res.data.suppliers); // ✅ matches your response shape
      } catch (err) {
        console.log(err);
        setError("Failed to load suppliers");
      } finally {
        setLoading(false);
      }
    };

    fetchSuppliers();
  }, []);

  if (loading) return <p className="p-6 text-gray-500">Loading suppliers...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <div>
      <div className="p-6">
        <div className="flex justify-between">
          <h1 className="text-[30px] font-medium mb-4">SUPPLIER DATABASE</h1>
          <button className="border flex bg-blue-700 rounded-lg text-white items-center px-4 py-2 mb-4">
            <Plus />
            Export Product CSV
          </button>
        </div>

        <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-700">
              <tr>
                {[
                  "Supplier ID", "Supplier Name", "Email Address",
                  "Phone Number", "Contact Person", "Contact Email",
                  "Address", "City", "State", "Country",
                  "Bank Name", "Account Number", "Bank Code",
                  "Sort Code", "Bank Address", "Bank City",
                  "Bank State", "Bank Country",
                ].map((header) => (
                  <th
                    key={header}
                    className="px-3 py-3 text-left text-xs font-medium text-white uppercase text-nowrap"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {suppliers.map((supplier) => (
                <tr key={supplier._id} className="hover:bg-gray-50">
                  <td className="px-3 py-4 text-sm text-gray-900 text-nowrap">{supplier.supplierId || "—"}</td>
                  <td className="px-3 py-4 text-sm text-gray-900 text-nowrap">{supplier.name}</td>
                  <td className="px-3 py-4 text-sm text-gray-500 text-nowrap">{supplier.email}</td>
                  <td className="px-3 py-4 text-sm text-gray-900 text-nowrap">{supplier.phone}</td>
                  <td className="px-3 py-4 text-sm text-gray-500 text-nowrap">{supplier.contactPerson || "—"}</td>
                  <td className="px-3 py-4 text-sm text-gray-500 text-nowrap">{supplier.contactEmail || "—"}</td>
                  <td className="px-3 py-4 text-sm text-gray-500 text-nowrap">{supplier.address || "—"}</td>
                  <td className="px-3 py-4 text-sm text-gray-500 text-nowrap">{supplier.city || "—"}</td>
                  <td className="px-3 py-4 text-sm text-gray-500 text-nowrap">{supplier.state || "—"}</td>
                  <td className="px-3 py-4 text-sm text-gray-500 text-nowrap">{supplier.country || "—"}</td>
                  <td className="px-3 py-4 text-sm text-gray-500 text-nowrap">{supplier.bankName || "—"}</td>
                  <td className="px-3 py-4 text-sm text-gray-500 text-nowrap">{supplier.accountNumber || "—"}</td>
                  <td className="px-3 py-4 text-sm text-gray-500 text-nowrap">{supplier.bankCode || "—"}</td>
                  <td className="px-3 py-4 text-sm text-gray-500 text-nowrap">{supplier.sortCode || "—"}</td>
                  <td className="px-3 py-4 text-sm text-gray-500 text-nowrap">{supplier.bankAddress || "—"}</td>
                  <td className="px-3 py-4 text-sm text-gray-500 text-nowrap">{supplier.bankCity || "—"}</td>
                  <td className="px-3 py-4 text-sm text-gray-500 text-nowrap">{supplier.bankState || "—"}</td>
                  <td className="px-3 py-4 text-sm text-gray-500 text-nowrap">{supplier.bankCountry || "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {suppliers.length === 0 && (
            <p className="text-center py-10 text-gray-400">No suppliers found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sdatabase;