import React from "react";
import { PageHeader } from "../../Components/PageHeader";
import InventorySearch from "../../Components/InventorySearch";

const manageInventory = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <PageHeader
        title="Manage Inventory"
        subtitle="Build your inventory view here"
      />

      <InventorySearch />
    </div>
  );
};

export default manageInventory;
