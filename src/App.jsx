import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Layout from "./Components/Layout";
import Dashboard from "./Components/Dashboard";
import Inventory from "./Pages/Inventory";
import Login from "./Pages/Login";
import ProtectedRoute from "./Components/ProtectedRoute";

//import next pages
import Matchproducts from "./Pages/matchproducts";
import Matchsupplier from "./Pages/matchsupplier";
import Pdatabase from "./Pages/pdatabase";
import Sdatabase from "./Pages/sdatabase";
import Generatepdf from "./generatepdf";
import SalesGenerate from "./Pages/Sales/SalesGenerate";
import Employeeinfo from "./Pages/Employee/employeeinfo";
import ReturnsTable from "./Pages/Sales/returnsTable";
import WaitlistTable from "./Pages/Sales/waitlistTable";

//import child components
import Addemployee from "./Pages/Employee/addemployee";  //Employee main route
import Employeedatabase from "./Pages/Employee/employeedatabase";
import Employeemanagement from "./Pages/Employee/employeemanagement";
import Manageinventory from "./Pages/Inventory/manageinventory";
import Productdatabase from "./Pages/Inventory/productdatabase";
import Createpo from "./Pages/Procurement/createpo";
import Suppilerdatabase from "./Pages/Procurement/supplierdatabase";  //procument main route
import Suppilertransactions from "./Pages/Procurement/suppliertransactions";
import Createinvoice from "./Pages/Sales/createinvoice";  //sales main route
import Customerdatabase from "./Pages/Sales/customerdatabase";
import Customerwaitlist from "./Pages/Sales/customerwaitlist";
import Invoicemanagement from "./Pages/Sales/invoicemanagement";
import Customerreturns from "./Pages/Sales/customerreturns";


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      
      <Route path="/login" element={<Login />} />

      <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex-1 overflow-auto p-4 bg-gray-100">
          <Navbar />
          <div className="p-6">
            <Routes>
              {/* Main routes */}
              <Route path="/" element={<Dashboard />} />
              <Route
                path="/inventory"
                element={
                  <ProtectedRoute>
                    <Inventory />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/procurement/suppilerdatabase"
                element={<Suppilerdatabase />}
              />
              <Route path="/sales/createinvoice" element={<Createinvoice />} />
              <Route path="/employee/addemployee" element={<Addemployee />} />

              {/* next pages */}
              <Route path="/matchproducts" element={<Matchproducts />} />
              <Route path="/matchsupplier" element={<Matchsupplier />} />
              <Route path="/pdatabase" element={<Pdatabase />} />
              <Route path="/sdatabase" element={<Sdatabase />} />
              <Route path="/generatepdf" element={<Generatepdf />} />
              <Route path="/sales/SalesGenerate" element={<SalesGenerate />} />
              <Route path="/employeeinfo" element={<Employeeinfo />} />
              <Route path="/returnstable" element={<ReturnsTable />} />
              <Route path="/waitlisttable" element={<WaitlistTable />} />

              {/* inventory child routes */}
              <Route
                path="/inventory/productdatabase"
                element={<Productdatabase />}
              />
              <Route
                path="/inventory/manageinventory"
                element={<Manageinventory />}
              />

              {/* Procurement child routes */}
              <Route path="/procurement/createpo" element={<Createpo />} />
              <Route
                path="procurement/suppliertransactions"
                element={<Suppilertransactions />}
              />

              {/* Sales child routes */}
              <Route
                path="/sales/customerdatabase"
                element={<Customerdatabase />}
              />
              <Route
                path="/sales/customerwaitlist"
                element={<Customerwaitlist />}
              />
              <Route
                path="/sales/invoicemanagement"
                element={<Invoicemanagement />}
              />
              <Route
                path="/sales/customerreturns"
                element={<Customerreturns />}
              />

              {/* Employee child routes */}
              <Route
                path="/employee/employeedatabase"
                element={<Employeedatabase />}
              />
              <Route
                path="/employee/employeemanagement"
                element={<Employeemanagement />}
              />

              {/* Additional pages */}
              <Route path="/privacy" element={<div>Privacy Policy</div>} />
              <Route path="/terms" element={<div>Terms of Service</div>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
