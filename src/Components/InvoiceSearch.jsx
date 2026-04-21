import React, { useState } from "react";
import { DataTable } from "./DataTable";
import { ExportButton } from "./ExportButton";
import { InfoCard } from "./InfoCard";

const InvoiceSearch = () => {
  const [filters, setFilters] = useState({
    receiptNumber: "",
    date: "",
    employeeName: "",
    employeeId: "",
    productNumber: "",
    productFamily: "",
    productCategory: "",
    paymentMode: "",
  });

  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  // Sample invoice data
  const invoiceData = [
    {
      id: "01",
      receiptNumber: "INV-212",
      date: "2025-10-01",
      employeeName: "Oluwatamilore Olotu",
      employeeId: "#231",
      productNumber: "212",
      productFamily: "Books",
      productCategory: "Mathematics",
      paymentMode: "POS",
      amount: 5000,
      status: "Pending",
    },
    {
      id: "02",
      receiptNumber: "INV-213",
      date: "2025-10-02",
      employeeName: "Jide",
      employeeId: "#232",
      productNumber: "213",
      productFamily: "Books",
      productCategory: "Mathematics",
      paymentMode: "Cash",
      amount: 3000,
      status: "Paid",
    },
    {
      id: "03",
      receiptNumber: "INV-214",
      date: "2025-10-03",
      employeeName: "Funke",
      employeeId: "#233",
      productNumber: "214",
      productFamily: "Stationery",
      productCategory: "Pens",
      paymentMode: "Card",
      amount: 2500,
      status: "Pending",
    },
  ];

  const handleSearch = () => {
    const filtered = invoiceData.filter((item) => {
      if (
        filters.receiptNumber &&
        !item.receiptNumber.includes(filters.receiptNumber)
      )
        return false;
      if (filters.date && item.date !== filters.date) return false;
      if (
        filters.employeeName &&
        !item.employeeName
          .toLowerCase()
          .includes(filters.employeeName.toLowerCase())
      )
        return false;
      if (filters.employeeId && !item.employeeId.includes(filters.employeeId))
        return false;
      if (
        filters.productNumber &&
        !item.productNumber.includes(filters.productNumber)
      )
        return false;
      if (
        filters.productFamily &&
        !item.productFamily
          .toLowerCase()
          .includes(filters.productFamily.toLowerCase())
      )
        return false;
      if (
        filters.productCategory &&
        !item.productCategory
          .toLowerCase()
          .includes(filters.productCategory.toLowerCase())
      )
        return false;
      if (filters.paymentMode && item.paymentMode !== filters.paymentMode)
        return false;
      return true;
    });

    setResults(filtered);
    setSearched(true);
  };

  // InfoCard shows for product number searches
  const showInfoCard = searched && filters.productNumber && results.length > 0;

  return (
    <div>
      {/* Search Inputs */}
      <div className="grid grid-cols-3 gap-4 p-4 rounded-xl shadow-md mb-8 bg-white">
        <input
          placeholder="Receipt Number"
          value={filters.receiptNumber}
          onChange={(e) =>
            setFilters({ ...filters, receiptNumber: e.target.value })
          }
          className="input border rounded-lg px-2 py-2"
        />
        <input
          type="date"
          value={filters.date}
          onChange={(e) => setFilters({ ...filters, date: e.target.value })}
          className="input border rounded-lg px-2 py-2"
        />
        <input
          placeholder="Employee Name"
          value={filters.employeeName}
          onChange={(e) =>
            setFilters({ ...filters, employeeName: e.target.value })
          }
          className="input border rounded-lg px-2 py-2"
        />
        <input
          placeholder="Employee ID"
          value={filters.employeeId}
          onChange={(e) =>
            setFilters({ ...filters, employeeId: e.target.value })
          }
          className="input border rounded-lg px-2 py-2"
        />
        <input
          placeholder="Product Number"
          value={filters.productNumber}
          onChange={(e) =>
            setFilters({ ...filters, productNumber: e.target.value })
          }
          className="input border rounded-lg px-2 py-2"
        />
        <input
          placeholder="Product Family"
          value={filters.productFamily}
          onChange={(e) =>
            setFilters({ ...filters, productFamily: e.target.value })
          }
          className="input border rounded-lg px-2 py-2"
        />
        <input
          placeholder="Product Category"
          value={filters.productCategory}
          onChange={(e) =>
            setFilters({ ...filters, productCategory: e.target.value })
          }
          className="input border rounded-lg px-2 py-2"
        />
        <select
          value={filters.paymentMode}
          onChange={(e) =>
            setFilters({ ...filters, paymentMode: e.target.value })
          }
          className="input border rounded-lg px-2 py-2"
        >
          <option value="">Payment Mode</option>
          <option value="POS">POS</option>
          <option value="Cash">Cash</option>
          <option value="Card">Card</option>
        </select>
        <button
          onClick={handleSearch}
          className="rounded-lg bg-blue-600 px-6 py-2 text-white font-semibold  cursor-pointer"
        >
          Search
        </button>
      </div>

      {/* InfoCard for product number */}
      {showInfoCard && (
        <InfoCard
          fields={[
            { label: "Product Number", value: results[0].productNumber },
            { label: "Product Family", value: results[0].productFamily },
            { label: "Product Category", value: results[0].productCategory },
            { label: "Receipt Number", value: results[0].receiptNumber },
            { label: "Employee Name", value: results[0].employeeName },
            { label: "Employee ID", value: results[0].employeeId },
            { label: "Payment Mode", value: results[0].paymentMode },
            { label: "Amount", value: `₦${results[0].amount}` },
            { label: "Status", value: results[0].status, isBadge: true },
          ]}
        />
      )}

      {/* Results Table */}
      {searched && results.length > 0 && (
        <div className="bg-white rounded-xl p-6 shadow-md mb-8">
          <DataTable
            title="Invoice Search Results"
            titleHighlight={`Showing ${results.length} result${results.length > 1 ? "s" : ""}`}
            columns={[
              { key: "receiptNumber", header: "Receipt Number" },
              { key: "date", header: "Date" },
              { key: "employeeName", header: "Employee Name" },
              { key: "employeeId", header: "Employee ID" },
              { key: "productNumber", header: "Product Number" },
              { key: "productFamily", header: "Product Family" },
              { key: "productCategory", header: "Product Category" },
              { key: "paymentMode", header: "Payment Mode" },
              { key: "amount", header: "Amount" },
              { key: "status", header: "Status" },
            ]}
            data={results}
          />
          <ExportButton label="Export Invoice CSV" />
        </div>
      )}

      {searched && results.length === 0 && (
        <div className="text-center text-gray-500 mt-4">No results found</div>
      )}
    </div>
  );
};

export default InvoiceSearch;
