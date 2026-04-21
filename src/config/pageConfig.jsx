import React from 'react';

// --- internal: Info Grid Component (Used for Supplier/Item Details) ---
const InfoGrid = ({ data }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-4 gap-x-6">
    {data.map((item, idx) => (
      <div key={idx} className="flex flex-col">
         <span className="text-gray-500 text-xs font-bold uppercase mb-1">{item.label}</span>
         {item.isBadge ? (
           <span className="self-start px-3 py-1 bg-green-100 text-green-700 rounded text-xs font-bold uppercase">{item.value}</span>
         ) : (
           <span className="text-gray-900 font-semibold text-sm">{item.value}</span>
         )}
         {/* Little divider line */}
         <div className="h-px bg-gray-100 mt-2 w-full"></div>
      </div>
    ))}
  </div>
);

// --- 1. SUPPLIER TRANSACTIONS CONFIG ---
export const supplierTransactionsConfig = {
  title: "SUPPLIER TRANSACTIONS",
  subtitle: "Search by Supplier ID to view transaction details",
  sections: [
    {
      title: "SEARCH BY SUPPLIER ID",
      resultsDataKey: "supplierTransactions",
      initialResultsData: "supplierTransactions", // Remove this line if you want it empty on load
      exportButtonText: "Export Supplier ID CSV",
      resultsTitle: () => "", // No title inside the card
      tableHeaders: ["ID", "TRANSACTION DATE", "TRANSACTION NO", "TRANSACTION TYPE", "NAME", "QTY RECEIVED", "PRODUCT FAMILY", "PRODUCT CAT", "PRODUCT NAME", "PRODUCT NUMBER", "UNIT COST", "TOTAL"],
      inputs: [
        { key: 'supplierName', type: 'text', placeholder: 'Input supplier name', defaultValue: 'Learn Africa' },
        { key: 'dateFrom', type: 'date', label: 'FROM', defaultValue: '2025-01-01' },
        { key: 'dateTo', type: 'date', label: 'TO', defaultValue: '2025-08-11' },
      ],
      customInfoRenderer: (mockData) => {
        const info = mockData.mockSupplierInfo;
        const gridData = [
          { label: "Supplier Name", value: info.name },
          { label: "Supplier ID", value: info.id },
          { label: "Contact Name", value: info.contactName },
          { label: "Contact Email", value: info.contactEmail },
          { label: "Contact Phone", value: info.contactPhone },
        ];
        return <InfoGrid data={gridData} />;
      }
    },
  ],
};

// --- 2. MANAGE INVENTORY CONFIG ---
export const manageInventoryConfig = {
    title: "MANAGE INVENTORY",
    subtitle: "Build your inventory view here",
    sections: [
        {
            title: "SEARCH BY PRODUCT NUMBER",
            resultsDataKey: "productNumberTransactions",
            initialResultsData: "productNumberTransactions",
            exportButtonText: "Export Product Number CSV",
            resultsTitle: () => "TRANSACTION DETAILS",
            tableHeaders: ["ID", "TRANSACTION DATE", "TRANSACTION NO", "TRANSACTION TYPE", "NAME", "QTY RECEIVED", "QTY ISSUED", "BALANCE"],
            inputs: [
                { key: 'itemNumber', type: 'text', placeholder: 'Input item number', defaultValue: '212' },
                { key: 'dateFrom', type: 'date', label: 'FROM', defaultValue: '2025-01-01' },
                { key: 'dateTo', type: 'date', label: 'TO', defaultValue: '2025-08-11' },
            ],
            customInfoRenderer: (mockData) => {
                const item = mockData.mockItemData;
                const gridData = [
                   { label: "Item Name", value: item.itemName },
                   { label: "Item Number", value: item.itemNumber },
                   { label: "Product Family", value: item.productFamily },
                   { label: "Product Category", value: item.productCategory },
                   { label: "Item Life Cycle", value: "Active", isBadge: true },
                   { label: "Supplier", value: "Learn Africa" },
                   { label: "Min Order Qty", value: "25" },
                   { label: "Max Order Qty", value: "100" },
                   { label: "Reorder Point", value: "50" },
                ];
                return <InfoGrid data={gridData} />;
            }
        },
        {
            title: "SEARCH BY TRANSACTION TYPE",
            resultsDataKey: "transactionTypeResults",
            exportButtonText: "Export Transaction Type CSV",
            resultsTitle: (inputs) => `TRANSACTION DETAILS FOR ${inputs.transactionType}`,
            tableHeaders: ["ID", "TRANSACTION DATE", "ITEM NAME", "ITEM FAMILY", "ITEM CATEGORY", "TRANSACTION TYPE", "NAME", "QTY RECEIVED"],
            inputs: [
                { key: 'transactionType', type: 'select', defaultValue: 'Goods Receipt', options: [{label: 'Goods Receipt', value: 'GOODS RECEIPT'}, {label: 'Sales', value: 'SALES'}] },
                { key: 'dateFrom', type: 'date', label: 'FROM', defaultValue: '2025-01-01' },
                { key: 'dateTo', type: 'date', label: 'TO', defaultValue: '2025-08-11' },
            ],
        },
        {
            title: "SEARCH BY DATE",
            resultsDataKey: "dateRangeResults",
            exportButtonText: "Export Products CSV",
            resultsTitle: (inputs) => `ALL PRODUCTS FROM ${inputs.dateFrom} TO ${inputs.dateTo}`,
            tableHeaders: ["ID", "TRANSACTION DATE", "TRANSACTION NO", "TRANSACTION TYPE", "PRODUCT FAMILY", "PRODUCT CATEGORY", "ITEM NAME"],
            inputs: [
                { key: 'productFilter', type: 'select', defaultValue: 'All Products', options: [{label: 'All Products', value: 'All Products'}] },
                { key: 'dateFrom', type: 'date', label: 'FROM', defaultValue: '2025-01-01' },
                { key: 'dateTo', type: 'date', label: 'TO', defaultValue: '2025-08-11' },
            ],
        },
    ],
};

// --- 3. INVOICE MANAGEMENT CONFIG ---
export const invoiceManagementConfig = {
    title: "INVOICE MANAGEMENT",
    subtitle: "Build your invoice view here",
    sections: [
        {
            title: "SEARCH BY DATE",
            resultsDataKey: "dateRangeSales",
            initialResultsData: "dateRangeSales",
            exportButtonText: "Export Transaction Details by Date CSV",
            resultsTitle: (inputs) => `TRANSACTION DETAILS FROM ${inputs.dateFrom} TO ${inputs.dateTo}`,
            tableHeaders: ["ID", "TRANSACTION DATE", "TRANSACTION NO", "TRANSACTION TYPE", "SALES PERSON", "SALES PERSON ID", "CUSTOMER NAME"],
            inputs: [
                { key: 'dateFrom', type: 'date', label: 'FROM', defaultValue: '2025-01-01' },
                { key: 'dateTo', type: 'date', label: 'TO', defaultValue: '2025-08-11' },
            ],
        },
        {
            title: "SEARCH BY EMPLOYEE NAME & ID",
            resultsDataKey: "employeeSalesReceipts",
            exportButtonText: "Export Transaction Details by Sales Person CSV",
            resultsTitle: () => `SALES PERSON ID DETAILS FOR RECEIPT`,
            tableHeaders: ["ID", "TRANSACTION DATE", "TRANSACTION NO", "TRANSACTION TYPE", "NAME", "QTY RECEIVED", "PRODUCT FAMILY", "PRODUCT CATEGORY"],
            inputs: [
                { key: 'employeeId', type: 'text', placeholder: 'Search by name & id', defaultValue: '' },
                { key: 'dateFrom', type: 'date', label: 'FROM', defaultValue: '2025-01-01' },
                { key: 'dateTo', type: 'date', label: 'TO', defaultValue: '2025-08-11' },
            ],
        },
        {
            title: "SEARCH BY PAYMENT MODE",
            resultsDataKey: "paymentModeResults",
            exportButtonText: "Export Payment CSV",
            resultsTitle: () => `PAYMENT MODE DETAILS`,
            tableHeaders: ["ID", "TRANSACTION DATE", "TRANSACTION NO", "TRANSACTION TYPE", "NAME", "QTY RECEIVED", "PRODUCT FAMILY", "PRODUCT CATEGORY"],
            inputs: [
                { key: 'paymentMode', type: 'select', defaultValue: 'Cash', options: [{label: 'Cash', value: 'Cash'}, {label: 'Transfer', value: 'Transfer'}] },
                { key: 'dateFrom', type: 'date', label: 'FROM', defaultValue: '2025-01-01' },
                { key: 'dateTo', type: 'date', label: 'TO', defaultValue: '2025-08-11' },
            ],
        },
    ],
};
