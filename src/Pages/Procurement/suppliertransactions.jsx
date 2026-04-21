import React from "react";
import { PageHeader } from "../../Components/PageHeader";
import SupplierSearch from "../../Components/SupplierSearch";



const suppliertransactions = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <PageHeader
        title="Supplier Transactions"
        subtitle="Build your inventory view here"
      />

      <SupplierSearch />
    </div>
  );
};

export default suppliertransactions;
