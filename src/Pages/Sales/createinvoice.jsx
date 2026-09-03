import React, { useState, useEffect } from "react";
import { ChevronRight, Trash2, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CreateInvoice = () => {
  const navigate = useNavigate();

  const PRODUCTS_URL =
    "https://project-genesis-dashboard.onrender.com/api/products/";
  const INVOICE_URL =
    "https://project-genesis-dashboard.onrender.com/api/invoice/";

  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState(`INV-${Date.now()}`);
  const [paymentType, setPaymentType] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);

  const [lineItems, setLineItems] = useState([
    { id: 1, productId: "", qty: 0, rate: 0, total: 0 },
  ]);

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // Logged-in employee — adjust the localStorage key ("user") to match what your login flow actually saves
  const loggedInUser = JSON.parse(localStorage.getItem("user") || "null");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(PRODUCTS_URL);
        const data = await res.json();
        setProducts(data.products || []);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoadingProducts(false);
      }
    };
    fetchProducts();
  }, []);

  const subtotal = lineItems.reduce((sum, item) => sum + item.total, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const grandTotal = subtotal - discountAmount;

  const addLineItem = () => {
    if (lineItems.length < 5) {
      setLineItems([
        ...lineItems,
        { id: Date.now(), productId: "", qty: 0, rate: 0, total: 0 },
      ]);
    }
  };

  const removeLineItem = (id) => {
    if (lineItems.length <= 1) return;
    setLineItems(lineItems.filter((item) => item.id !== id));
  };

  const updateLineItem = (id, field, value) => {
    setLineItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        const updated = { ...item, [field]: value };

        if (field === "productId") {
          const product = products.find((p) => p._id === value);
          if (product) updated.rate = product.sellingPrices?.best || 0;
        }

        if (field === "qty" || field === "rate" || field === "productId") {
          updated.total = (updated.qty || 0) * (updated.rate || 0);
        }

        return updated;
      }),
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!customerName || !customerPhone) {
      setError("Customer name and phone are required");
      return;
    }
    if (!loggedInUser?.id) {
      setError(
        "Could not identify the logged-in employee. Please log in again.",
      );
      return;
    }
    const invalidItem = lineItems.find(
      (item) => !item.productId || item.qty <= 0,
    );
    if (invalidItem) {
      setError(
        "Every product line needs a product selected and a quantity greater than 0",
      );
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(INVOICE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName,
          customerPhone,
          customerEmail,
          customerAddress,
          receiptNumber: invoiceNumber,
          paymentType: paymentType || "Cash",
          discountPercent,
          seller: loggedInUser.id,
          items: lineItems.map((item) => ({
            product: item.productId,
            quantity: item.qty,
            unitPrice: item.rate,
          })),
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to create invoice");

      const invoiceData = {
        invoiceNumber,
        transactionDate: new Date().toISOString(),
        customerName,
        customerPhone,
        customerEmail,
        customerAddress,
        employeeName: loggedInUser.name || "",
        employeeId: loggedInUser.id || "",
        items: lineItems.map((item) => {
          const product = products.find((p) => p._id === item.productId);
          return {
            productFamily: product?.productFamily || "",
            productCategory: product?.productCategory || "",
            itemName: product?.itemName || "",
            qty: item.qty,
            rate: item.rate,
            total: item.total,
          };
        }),
        subtotal,
        discountPercent,
        discountAmount,
        grandTotal,
      };

      sessionStorage.setItem("invoiceData", JSON.stringify(invoiceData));
      navigate("/sales/salesGenerate");
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (loadingProducts) {
    return <div className="p-6 text-gray-500">Loading products...</div>;
  }

  return (
    <div>
      <div>
        <h1 className="text-gray-400 text-[32px] align items-center flex">
          SALES <ChevronRight className="mr-2 ml-3" />
          <p className="font-medium text-black">CREATE INVOICE</p>
        </h1>
      </div>

      <div className="bg-white rounded-lg p-6 w-full mt-6 shadow-sm">
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="flex items-start justify-between gap-40">
            <div className="w-1/2">
              <div>
                <label className="text-black text-[20px] font-medium mb-1">
                  Customer Name <span>*</span>
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  required
                  placeholder="Name"
                  className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none"
                />
              </div>
              <div className="mt-8">
                <label className="text-black text-[20px] font-medium mb-1">
                  Customer Email(Optional)
                </label>
                <input
                  type="email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  placeholder="example@gmail.com"
                  className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none"
                />
              </div>
              <div className="mt-8">
                <label className="text-black text-[20px] font-medium mb-1">
                  Invoice Number
                </label>
                <input
                  type="text"
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none"
                />
              </div>
              <div className="mt-8">
                <label className="text-black text-[20px] font-medium mb-1">
                  Payment Mode
                </label>
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <select
                    value={paymentType}
                    onChange={(e) => setPaymentType(e.target.value)}
                    className="w-full p-3 bg-white focus:outline-none"
                  >
                    <option value="">Select Mode</option>
                    <option value="Transfer">Bank Transfer</option>
                    <option value="Cash">Physical Cash</option>
                    <option value="Card">Debit/Credit Card</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="w-1/2">
              <div>
                <label className="text-black text-[20px] font-medium">
                  Customer Phone*
                </label>
                <input
                  type="text"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  required
                  placeholder="1234567890"
                  className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none"
                />
              </div>
              <div className="mt-8">
                <label className="text-black text-[20px] font-medium">
                  Customer Address(Optional)
                </label>
                <input
                  type="text"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  placeholder="Address"
                  className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none"
                />
              </div>
              <div className="mt-8">
                <label className="text-black text-[20px] font-medium">
                  Employee Name & ID(Auto Generated)
                </label>
                <input
                  type="text"
                  readOnly
                  value={
                    loggedInUser
                      ? `${loggedInUser.name} (${loggedInUser.role})`
                      : "Not logged in"
                  }
                  className="w-full border border-gray-300 rounded-lg p-3 mt-2 bg-gray-50 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div>
            <h1 className="mt-8 font-medium text-[30px]">Add Product</h1>

            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left font-semibold text-gray-700 text-nowrap">
                      Product
                    </th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">
                      QTY
                    </th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">
                      Rate
                    </th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">
                      Total
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {lineItems.map((item) => (
                    <tr key={item.id}>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <select
                          value={item.productId}
                          onChange={(e) =>
                            updateLineItem(item.id, "productId", e.target.value)
                          }
                          className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                          required
                        >
                          <option value="">Select product</option>
                          {products.map((p) => (
                            <option key={p._id} value={p._id}>
                              {p.articleNumber} — {p.itemName}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <input
                          type="number"
                          value={item.qty}
                          onChange={(e) =>
                            updateLineItem(
                              item.id,
                              "qty",
                              parseInt(e.target.value) || 0,
                            )
                          }
                          className="w-20 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                          min="0"
                        />
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <input
                          type="number"
                          value={item.rate}
                          onChange={(e) =>
                            updateLineItem(
                              item.id,
                              "rate",
                              parseFloat(e.target.value) || 0,
                            )
                          }
                          className="w-24 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                          min="0"
                          step="0.01"
                        />
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap font-medium">
                        {item.total.toLocaleString()}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {lineItems.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeLineItem(item.id)}
                            className="text-black border border-gray-300 font-medium py-1 px-1 rounded-md"
                          >
                            <Trash2 size={18} />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex mb-4 items-center space-x-2">
              <button
                type="button"
                onClick={addLineItem}
                className="px-4 py-4 bg-gray-300 text-gray-700 rounded w-full flex items-center border border-dashed justify-center border-gray-500"
              >
                <span className="mr-1">
                  <Plus />
                </span>
                Add Product
              </button>
            </div>

            <div className="border-t border-gray-300 pt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 text-[17px] font-semibold">
                  Sub Total
                </span>
                <span className="text-gray-600 px-3 py-3 border border-gray-300 rounded-md w-27">
                  {subtotal.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 text-[17px] font-semibold">
                  Discount (%)
                </span>
                <input
                  type="text"
                  value={discountPercent}
                  onChange={(e) =>
                    setDiscountPercent(parseFloat(e.target.value) || 0)
                  }
                  className="px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-27"
                />
              </div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-700 text-[17px] font-semibold">
                  Discount Amount
                </span>
                <span className="text-gray-600 px-3 py-3 border border-gray-300 rounded-md w-27">
                  {discountAmount.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center pb-8 border-b border-gray-300">
                <span className="text-lg font-bold text-[25px] text-gray-800">
                  Grand Total:
                </span>
                <span className="text-[20px] font-bold px-3 py-3 border border-gray-300 rounded-md text-blue-600">
                  #{grandTotal.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-10 gap-2">
            <button
              type="button"
              className="text-blue-500 border px-4 py-2 font-medium border-gray-300 rounded-md text-lg"
            >
              cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="border px-4 py-2 border-blue-500 bg-blue-500 text-white font-medium rounded-md text-lg cursor-pointer disabled:opacity-50"
            >
              {submitting ? "Creating..." : "Create Invoice"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateInvoice;
