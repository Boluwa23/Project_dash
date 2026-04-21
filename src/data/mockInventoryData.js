export const mockItemData = {
  itemName: "New General Maths Jss1",
  itemNumber: "212",
  productFamily: "Books",
  productCategory: "Mathematics",
  itemLifeCycle: "Active",
  supplier: "Learn Africa",
  minOrderQuantity: 25,
  maxOrderQuantity: 100,
  reorderPoint: 50,
};

// Transactions for 'Search by Product Number' (Screenshot 1)
export const mockProductNumberTransactions = [
  {
    id: "01",
    transactionDate: "01/10/2025",
    transactionNo: "#34218",
    transactionType: "Goods Receipt",
    name: "Jide",
    qtyReceived: 100,
    qtyIssued: 0,
    balance: 100,
  },
  {
    id: "02",
    transactionDate: "01/12/2025",
    transactionNo: "#INV-0019",
    transactionType: "Sales",
    name: "Felix",
    qtyReceived: 0,
    qtyIssued: 20,
    balance: 80,
  },
  {
    id: "03",
    transactionDate: "10/12/2025",
    transactionNo: "#34218",
    transactionType: "Returns",
    name: "Akintunde",
    qtyReceived: 1,
    qtyIssued: 0,
    balance: 81,
  },
];

// Transactions for 'Search by Transaction Type' (Screenshot 3) - Goods Receipt
export const mockTransactionTypeResults = [
  {
    id: "01",
    transactionDate: "01/10/2025",
    transactionNo: "#34218",
    transactionType: "Goods Receipt",
    itemName: "New General Maths Jss1",
    itemFamily: "Books",
    itemCategory: "Mathematics",
    name: "Jide",
    qtyReceived: 100,
  },
  {
    id: "02",
    transactionDate: "01/10/2025",
    transactionNo: "#34218",
    transactionType: "Goods Receipt",
    itemName: "Intensive English JSS1",
    itemFamily: "Books",
    itemCategory: "Mathematics",
    name: "Jide",
    qtyReceived: 100,
  },
  {
    id: "03",
    transactionDate: "01/10/2025",
    transactionNo: "#34218",
    transactionType: "Goods Receipt",
    itemName: "Essential Government SS3",
    itemFamily: "Books",
    itemCategory: "Mathematics",
    name: "Jide",
    qtyReceived: 100,
  },
];

// Transactions for 'Search by Date' (Screenshot 2 & 3)
export const mockDateRangeResults = [
  {
    id: "01",
    transactionDate: "01/10/2025",
    transactionNo: "#34218",
    transactionType: "Goods Receipt",
    productFamily: "Books",
    productCategory: "Mathematics",
    itemName: "New General Maths Jss1",
  },
  {
    id: "02",
    transactionDate: "01/10/2025",
    transactionNo: "#34218",
    transactionType: "Goods Receipt",
    productFamily: "Books",
    productCategory: "Mathematics",
    itemName: "New General Maths Jss1",
  },
  {
    id: "03",
    transactionDate: "01/10/2025",
    transactionNo: "#34218",
    transactionType: "Goods Receipt",
    productFamily: "Books",
    productCategory: "Mathematics",
    itemName: "New General Maths Jss1",
  },
];
