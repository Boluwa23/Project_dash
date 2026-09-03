import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SalesGenerate = () => {
  const navigate = useNavigate();
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [email, setEmail] = useState("");
  const [invoiceData, setInvoiceData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("invoiceData");
    if (stored) {
      try {
        setInvoiceData(JSON.parse(stored));
      } catch {
        setInvoiceData(null);
      }
    }
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  if (!invoiceData) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-500 mb-4">No invoice data found.</p>
        <button
          onClick={() => navigate("/sales/createinvoice")}
          className="px-4 py-2 bg-blue-600 text-white rounded-md font-semibold"
        >
          Back to Create Invoice
        </button>
      </div>
    );
  }

  const {
    invoiceNumber,
    transactionDate,
    customerName,
    customerPhone,
    customerEmail,
    customerAddress,
    employeeName,
    employeeId,
    items,
    subtotal,
    discountPercent,
    discountAmount,
    grandTotal,
  } = invoiceData;

  const handlePrintPDF = () => {
    window.print();
  };

  const handleSendInvoice = () => {
    if (!email) return;
    const subject = encodeURIComponent(`Invoice ${invoiceNumber}`);
    const body = encodeURIComponent(
      `Hi ${customerName},\n\nHere's your invoice ${invoiceNumber}:\n\n` +
        items
          .map(
            (it, i) =>
              `${i + 1}. ${it.itemName} — Qty: ${it.qty} — Rate: ₦${it.rate} — Total: ₦${it.total}`,
          )
          .join("\n") +
        `\n\nTotal Amount: ₦${grandTotal.toLocaleString()}\n\nThanks for shopping with us!`,
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setShowEmailModal(false);
  };

  return (
    <div>
      <h1 className="text-gray-400 text-[30px] align pb-5 items-center flex">
        SALES <ChevronRight className="mr-2 ml-3 text-gray-700" />
        CREATE INVOICE <ChevronRight className="mr-2 ml-3 text-gray-700" />
        <p className="font-medium text-black">SAVE/PRINT PDF</p>
      </h1>

      <div
        className="border w-full bg-white border-white p-6 rounded-lg shadow-md"
        id="invoice-printable"
      >
        <div className="flex justify-between items-center border-b pb-6 border-gray-300">
          <p className="font-medium text-[25px]">SUNSHINE BOOKSTORE</p>
          <p className="font-medium text-[18px]">
            TRANSACTION DATE <br />
            <span className="px-7 text-blue-700 font-semibold">
              {new Date(transactionDate).toLocaleDateString("en-GB")}
            </span>
          </p>
        </div>
        <div className="flex justify-between w-full py-6">
          <div className="flex flex-col">
            <span className="font-medium text-[18px] pb-2">Customer Name:</span>
            <span className="font-medium text-[18px] pb-2">
              Customer Phone Number:
            </span>
            <span className="font-medium text-[18px] pb-2">
              Customer Email:
            </span>
            <span className="font-medium text-[18px] pb-2">
              Invoice Number:
            </span>
            <span className="font-medium text-[18px] pb-2">
              Customer Address:
            </span>
            <span className="font-medium text-[18px] pb-2">Employee Name:</span>
            <span className="font-medium text-[18px] pb-2">Employee ID:</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="font-semibold text-[18px] pb-2">
              {customerName}
            </span>
            <span className="font-semibold text-[18px] pb-2">
              {customerPhone}
            </span>
            <span className="font-semibold text-[18px] pb-2">
              {customerEmail || "—"}
            </span>
            <span className="font-semibold text-[18px] pb-2">
              {invoiceNumber}
            </span>
            <span className="font-semibold text-[18px] pb-2">
              {customerAddress || "—"}
            </span>
            <span className="font-semibold text-[18px] pb-2">
              {employeeName || "—"}
            </span>
            <span className="font-semibold text-[18px] pb-2">
              {employeeId || "—"}
            </span>
          </div>
        </div>

        <div>
          <table className="min-w-full divide-gray-200">
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
            <tbody className="bg-white divide-y divide-gray-300">
              {items.map((item, index) => (
                <tr key={index}>
                  <th className="px-6 py-4 text-sm font-medium text-gray-700">
                    {String(index + 1).padStart(2, "0")}
                  </th>
                  <th className="px-6 py-4 text-sm font-medium text-gray-700">
                    {item.productFamily}
                  </th>
                  <th className="px-6 py-4 text-sm font-medium text-gray-700">
                    {item.productCategory}
                  </th>
                  <th className="px-6 py-4 text-sm font-medium text-gray-700">
                    {item.itemName}
                  </th>
                  <th className="px-6 py-4 text-sm font-medium text-gray-700">
                    {item.qty}
                  </th>
                  <th className="px-6 py-4 text-sm font-medium text-gray-700">
                    {item.rate.toLocaleString()}
                  </th>
                  <th className="px-6 py-4 text-sm font-medium text-gray-700">
                    {item.total.toLocaleString()}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="w-full border-b border-t border-gray-300 flex justify-end">
          <div className="flex flex-col text-right space-y-2 p-4">
            <div className="flex justify-between w-90">
              <span>Sub total</span>
              <span className="font-semibold">
                #{subtotal.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between w-90">
              <span>Discount(%)</span>
              <span className="font-semibold">{discountPercent}%</span>
            </div>
            <div className="flex justify-between w-90">
              <span className="text-nowrap">Discount Amount</span>
              <span className="font-semibold">
                #{discountAmount.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between w-90">
              <span className="font-semibold text-[25px] text-blue-500">
                Total Amount
              </span>
              <span className="font-semibold text-[25px] text-blue-500">
                #{grandTotal.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-6 print:hidden">
          <button
            onClick={handlePrintPDF}
            className="border font-semibold px-4 py-2 text-blue-600 bg-white rounded-lg border-gray-300"
          >
            Save to device
          </button>
          <button
            type="button"
            onClick={() => setShowEmailModal(true)}
            className="py-2 px-4 bg-blue-600 font-semibold rounded-lg border-blue-600 text-white"
          >
            Print PDF
          </button>
        </div>
      </div>

      {showEmailModal && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setShowEmailModal(false)}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-white w-full max-w-md rounded-lg shadow-lg relative max-h-[90vh] overflow-hidden">
              <div className="flex items-center justify-between border-b px-6 py-4">
                <h2 className="text-sm font-semibold text-blue-600">
                  Send Invoice
                </h2>
                <button
                  type="button"
                  onClick={() => setShowEmailModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              <div className="px-6 py-5 space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">{invoiceNumber}</p>
                  <p className="text-sm font-semibold text-gray-900">
                    ₦{grandTotal.toLocaleString()}
                  </p>
                </div>
                <input
                  type="email"
                  placeholder="customer@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end py-4 px-4">
                <button
                  onClick={handleSendInvoice}
                  className="py-1 px-3 bg-blue-500 rounded-lg border-blue-600 text-white"
                >
                  Send Invoice
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SalesGenerate;
