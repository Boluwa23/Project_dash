import React, { useState } from "react";
import { DataTable } from "./DataTable";
import { ExportButton } from "./ExportButton";
import { InfoCard } from "./InfoCard";

const InventorySearch = () => {
  const itemInfo = [
    { label: "Item Name", value: "New General Maths Jss1" },
    { label: "Item Number", value: "212" },
    { label: "Product Family", value: "Books" },
    { label: "Product Category", value: "Mathematics" },
    { label: "Item Life Cycle", value: "Active", isBadge: true },
    { label: "Supplier", value: "Learn Africa" },
    { label: "Min Order Quantity", value: "25" },
    { label: "Max Order Quantity", value: "100" },
    { label: "Reorder Point", value: "50" },
  ];

  const transactionColumns = [
    { key: "id", header: "ID" },
    { key: "transactionDate", header: "Transaction Date" },
    { key: "transactionNo", header: "Transaction No" },
    { key: "transactionType", header: "Transaction Type" },
    { key: "name", header: "Name" },
    { key: "qtyReceived", header: "Qty Received" },
    { key: "qtyIssued", header: "Qty Issued" },
    { key: "balance", header: "Balance" },
  ];

  const transactionData = [
    {
      id: "01",
      itemNumber: "212",
      transactionDate: "01/10/2025",
      transactionNo: "#34218",
      transactionType: "Goods Receipt",
      name: "Jide",
      qtyReceived: "100",
      qtyIssued: "0",
      balance: "100",
    },
    {
      id: "02",
      itemNumber: "212",
      transactionDate: "01/12/2025",
      transactionNo: "#INV-0019",
      transactionType: "Sales",
      name: "Felix",
      qtyReceived: "0",
      qtyIssued: "20",
      balance: "80",
    },
    {
      id: "03",
      itemNumber: "212",
      transactionDate: "10/12/2025",
      transactionNo: "#34218",
      transactionType: "Returns",
      name: "Akintunde",
      qtyReceived: "1",
      qtyIssued: "0",
      balance: "81",
    },
  ];

  const transactionTypeColumns = [
    { key: "id", header: "ID" },
    { key: "transactionDate", header: "Transaction Date" },
    { key: "itemName", header: "Item Name" },
    { key: "itemFamily", header: "Item Family" },
    { key: "itemCategory", header: "Item Category" },
    { key: "transactionType", header: "Transaction Type" },
    { key: "name", header: "Name" },
    { key: "qtyReceived", header: "Qty Received" },
    { key: "balance", header: "Balance" },
  ];

  const transactionTypeData = [
    {
      id: "01",
      transactionDate: "01/10/2025",
      itemName: "New General Maths Jss1",
      itemFamily: "Books",
      itemCategory: "Mathematics",
      transactionType: "Goods Receipt",
      name: "Jide",
      qtyReceived: "100",
      balance: "120",
    },
    {
      id: "02",
      transactionDate: "01/10/2025",
      itemName: "Intensive English JSS1",
      itemFamily: "Books",
      itemCategory: "Mathematics",
      transactionType: "Goods Receipt",
      name: "Jide",
      qtyReceived: "100",
      balance: "120",
    },
    {
      id: "03",
      transactionDate: "01/10/2025",
      itemName: "Essential Government SS3",
      itemFamily: "Books",
      itemCategory: "Mathematics",
      transactionType: "Goods Receipt",
      name: "Jide",
      qtyReceived: "100",
      balance: "121",
    },
  ];

  const dateColumns = [
    { key: "id", header: "ID" },
    { key: "transactionDate", header: "Transaction Date" },
    { key: "transactionNo", header: "Transaction No" },
    { key: "transactionType", header: "Transaction Type" },
    { key: "productFamily", header: "Product Family" },
    { key: "productCategory", header: "Product Category" },
    { key: "itemName", header: "Item Name" },
    { key: "name", header: "Name" },
    { key: "qtyReceived", header: "Qty Received" },
    { key: "qtyIssued", header: "Qty Issued" },
    { key: "balance", header: "Balance" },
  ];

  const handleExportCSV = () => {
    console.log("Exporting CSV...");
  };

  const dateData = Array.from({ length: 11 }, (_, i) => ({
    id: String(i + 1).padStart(2, "0"),
    transactionDate: "01/10/2025",
    transactionNo: "#34218",
    transactionType: "Goods Receipt",
    productFamily: "Books",
    productCategory: "Mathematics",
    itemName: "New General Maths JS",
    name: "Jide",
    qtyReceived: "100",
    qtyIssued: "0",
    balance: "100",
  }));

const [filters, setFilters] = useState({
  productNumber: "",
  transactionNumber: "",
  fromDate: "",
  toDate: "",
  transactionType: "",
});

const [results, setResults] = useState([]);
const [searched, setSearched] = useState(false);


const handleSearch = () => {
  const filteredData = transactionData.filter((item) => {
    if (filters.productNumber && item.itemNumber !== filters.productNumber)
      return false;

    if (
      filters.transactionNumber &&
      item.transactionNo !== filters.transactionNumber
    )
      return false;

    if (
      filters.transactionType &&
      item.transactionType !== filters.transactionType
    )
      return false;

    if (
      filters.fromDate &&
      new Date(item.transactionDate) < new Date(filters.fromDate)
    )
      return false;

    if (
      filters.toDate &&
      new Date(item.transactionDate) > new Date(filters.toDate)
    )
      return false;

    return true;
  });

  setResults(filteredData);
  setSearched(true);
};


  return (
    <>
      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Product Number"
            value={filters.productNumber}
            onChange={(e) =>
              setFilters({ ...filters, productNumber: e.target.value })
            }
            className="border rounded-lg px-3 py-2"
          />

          <input
            type="text"
            placeholder="Transaction Number"
            value={filters.transactionNumber}
            onChange={(e) =>
              setFilters({ ...filters, transactionNumber: e.target.value })
            }
            className="border rounded-lg px-3 py-2"
          />

          <input
            type="date"
            value={filters.fromDate}
            onChange={(e) =>
              setFilters({ ...filters, fromDate: e.target.value })
            }
            className="border rounded-lg px-3 py-2"
          />

          <input
            type="date"
            value={filters.toDate}
            onChange={(e) => setFilters({ ...filters, toDate: e.target.value })}
            className="border rounded-lg px-3 py-2"
          />

          <select
            value={filters.transactionType}
            onChange={(e) =>
              setFilters({ ...filters, transactionType: e.target.value })
            }
            className="border rounded-lg px-3 py-2"
          >
            <option value="">Select Transaction Type</option>
            <option value="Goods Receipt">Goods Receipt</option>
            <option value="Sales">Sales</option>
            <option value="Returns">Returns</option>
          </select>
        </div>

        <button
          onClick={handleSearch}
          className="mt-4 bg-primary text-[15px] font-bold text-white  bg-blue-500 px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600 transition-colors duration-300"
        >
          Search
        </button>
      </div>

      {searched && results.length > 0 && (
        <>
          {/* Show InfoCard only if productNumber is filled */}
          {filters.productNumber && <InfoCard fields={itemInfo} />}

          <div className="bg-white rounded-xl p-6 shadow-md mt-4">
            <DataTable
              title="TRANSACTION DETAILS"
              columns={transactionColumns}
              data={results}
            />
            <ExportButton label="Export CSV" />
          </div>
        </>
      )}
    </>
  );

};
export default InventorySearch;
