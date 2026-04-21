import React from "react";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";

const Layout = () => {
  return (
    <div className="border-none shadow-2xl m-4 min-h-screen p-3 w-full rounded-2xl ">
      <div>
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
};

export default Layout;
