
import React from "react";
import { PageHeader } from "../../Components/PageHeader";
import InvoiceSearch from "../../Components/InvoiceSearch";

const invoicemanagement = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <PageHeader
        title="Invoice Management"
        subtitle="Search and manage invoices"
      />
      <InvoiceSearch />
    </div>
  );
};

export default invoicemanagement;



