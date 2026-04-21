import React, { useState } from "react";
import { DataTable } from "./DataTable";
import { ExportButton } from "./ExportButton";
import { InfoCard } from "./InfoCard";
import SuppilerSearch from "./SupplierSearch";

const SupplierSearch = () => {
  const [filters, setFilters] = useState({
    supplierNumber: "",
    date: "",
    productFamily: "",
    transactionType: "",
    productNumber: "",
    supplierInvoiceNumber: "",
  });
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const supplierInfo = [
    { label: "Supplier Name", value: "Learn Africa" },
    { label: "Supplier ID", value: "12" },
    { label: "Contact Name", value: "John Morerin" },
    { label: "Contact Email", value: "info@learnafrica.com" },
    { label: "Contact Phone", value: "2349019832765" },
  ];

  const transactionColumns = [
    { key: "id", header: "ID" },
    { key: "transactionDate", header: "Transaction Date" },
    { key: "transactionNo", header: "Transaction No" },
    { key: "transactionType", header: "Transaction Type" },
    { key: "name", header: "Name" },
    { key: "qtyReceived", header: "Qty Received" },
    { key: "productFamily", header: "Product Family" },
    { key: "productCategory", header: "Product Category" },
    { key: "supplierNo", header: "Supplier No" },
    { key: "supplierInvoiceNo", header: "Supplier Invoice" },
  ];

  // Dummy transaction data with supplier fields added
  const transactionData = [
    {
      id: "01",
      productNumber: "212",
      transactionDate: "01/10/2025",
      transactionNo: "#34218",
      transactionType: "Goods Receipt",
      name: "Jide",
      qtyReceived: "100",
      productFamily: "Books",
      productCategory: "Mathematics",
      supplierNo: "12",
      supplierInvoiceNo: "INV-001",
    },
    {
      id: "02",
      productNumber: "213",
      transactionDate: "01/10/2025",
      transactionNo: "#34219",
      transactionType: "Goods Return",
      name: "Jide",
      qtyReceived: "50",
      productFamily: "Books",
      productCategory: "Science",
      supplierNo: "12",
      supplierInvoiceNo: "INV-002",
    },
    {
      id: "03",
      productNumber: "214",
      transactionDate: "02/10/2025",
      transactionNo: "#34220",
      transactionType: "Goods Receipt",
      name: "Jide",
      qtyReceived: "100",
      productFamily: "Books",
      productCategory: "Mathematics",
      supplierNo: "12",
      supplierInvoiceNo: "INV-003",
    },
  ];

  // Filter function
  const handleSearch = () => {
    const filtered = transactionData.filter((item) => {
      if (
        filters.transactionType &&
        item.transactionType !== filters.transactionType
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
       filters.productNumber &&
       !item.productNumber.includes(filters.productNumber)
     )
       return false;


      if (
        filters.supplierNumber &&
        !item.supplierNo?.includes(filters.supplierNumber)
      )
        return false;

      if (filters.date && item.transactionDate !== filters.date) return false;

      if (
        filters.supplierInvoiceNumber &&
        !item.supplierInvoiceNo?.includes(filters.supplierInvoiceNumber)
      )
        return false;

      return true;
    });

    setResults(filtered);
    setSearched(true);
  };

  return (
    <div className="p-4">
      {/* 1️⃣ Search Inputs */}
      <div className="grid grid-cols-3 gap-4 rounded-xl shadow-md mb-8 bg-white p-4">
        <input
          placeholder="Supplier Number"
          className="input border rounded-lg px-2 py-2"
          value={filters.supplierNumber}
          onChange={(e) =>
            setFilters({ ...filters, supplierNumber: e.target.value })
          }
        />

        <input
          type="date"
          className="input border rounded-lg px-2 py-2"
          value={filters.date}
          onChange={(e) => setFilters({ ...filters, date: e.target.value })}
        />

        <input
          placeholder="Product Family"
          className="input border rounded-lg px-2 py-2"
          value={filters.productFamily}
          onChange={(e) =>
            setFilters({ ...filters, productFamily: e.target.value })
          }
        />

        <select
          className="input border rounded-lg px-2 py-2"
          value={filters.transactionType}
          onChange={(e) =>
            setFilters({ ...filters, transactionType: e.target.value })
          }
        >
          <option value="">Transaction Type</option>
          <option value="Goods Receipt">Goods Receipt</option>
          <option value="Goods Return">Goods Return</option>
        </select>

        <input
          placeholder="Product Number"
          className="input border rounded-lg px-2 py-2"
          value={filters.productNumber}
          onChange={(e) =>
            setFilters({ ...filters, productNumber: e.target.value })
          }
        />

        <input
          placeholder="Supplier Invoice Number"
          className="input border rounded-lg px-2 py-2"
          value={filters.supplierInvoiceNumber}
          onChange={(e) =>
            setFilters({ ...filters, supplierInvoiceNumber: e.target.value })
          }
        />

        <button
          onClick={handleSearch}
          className="rounded-lg bg-blue-600 px-6 py-2 text-white cursor-pointer font-semibold col-span-3"
        >
          Search
        </button>
      </div>

      {/* 2️⃣ InfoCard: only show if product number search returns results */}
      {searched && filters.productNumber && results.length > 0 && (
        <InfoCard fields={supplierInfo} />
      )}

      {/* 3️⃣ Data Table */}
      {searched && results.length > 0 ? (
        <div className="mt-6">
          <DataTable columns={transactionColumns} data={results} />
          <ExportButton data={results} />
        </div>
      ) : searched ? (
        <p className="mt-6 text-gray-500">No results found.</p>
      ) : null}
    </div>
  );
};

export default SupplierSearch;
