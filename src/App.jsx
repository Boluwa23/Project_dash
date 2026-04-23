import { useState } from "react";
import { Navigate } from "react-router-dom";
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
import Addemployee from "./Pages/Employee/addemployee"; //Employee main route
import Employeedatabase from "./Pages/Employee/employeedatabase";
import Employeemanagement from "./Pages/Employee/employeemanagement";
import Manageinventory from "./Pages/Inventory/manageinventory";
import Productdatabase from "./Pages/Inventory/productdatabase";
import Createpo from "./Pages/Procurement/createpo";
import Suppilerdatabase from "./Pages/Procurement/supplierdatabase"; //procument main route
import Suppilertransactions from "./Pages/Procurement/suppliertransactions";
import Createinvoice from "./Pages/Sales/createinvoice"; //sales main route
import Customerdatabase from "./Pages/Sales/customerdatabase";
import Customerwaitlist from "./Pages/Sales/customerwaitlist";
import Invoicemanagement from "./Pages/Sales/invoicemanagement";
import Customerreturns from "./Pages/Sales/customerreturns";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Main routes */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/inventory"
          element={
            <ProtectedRoute>
              <Layout>
                <Inventory />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/procurement/suppilerdatabase"
          element={
            <ProtectedRoute>
              <Layout>
                <Suppilerdatabase />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/sales/createinvoice"
          element={
            <ProtectedRoute>
              <Layout>
                <Createinvoice />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/employee/addemployee"
          element={
            <ProtectedRoute>
              <Layout>
                <Addemployee />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* next pages */}
        <Route
          path="/matchproducts"
          element={
            <ProtectedRoute>
              <Layout>
                <Matchproducts />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/matchsupplier"
          element={
            <ProtectedRoute>
              <Layout>
                <Matchsupplier />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/pdatabase"
          element={
            <ProtectedRoute>
              <Layout>
                <Pdatabase />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/sdatabase"
          element={
            <ProtectedRoute>
              <Layout>
                <Sdatabase />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/generatepdf"
          element={
            <ProtectedRoute>
              <Layout>
                <Generatepdf />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/sales/SalesGenerate"
          element={
            <ProtectedRoute>
              <Layout>
                <SalesGenerate />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/employeeinfo"
          element={
            <ProtectedRoute>
              <Layout>
                <Employeeinfo />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/returnstable"
          element={
            <ProtectedRoute>
              <Layout>
                <ReturnsTable />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/waitlisttable"
          element={
            <ProtectedRoute>
              <Layout>
                <WaitlistTable />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* inventory child routes */}
        <Route
          path="/inventory/productdatabase"
          element={
            <ProtectedRoute>
              <Layout>
                <Productdatabase />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/inventory/manageinventory"
          element={
            <ProtectedRoute>
              <Layout>
                <Manageinventory />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Procurement child routes */}
        <Route
          path="/procurement/createpo"
          element={
            <ProtectedRoute>
              <Layout>
                <Createpo />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/procurement/suppliertransactions"
          element={
            <ProtectedRoute>
              <Layout>
                <Suppilertransactions />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Sales child routes */}
        <Route
          path="/sales/customerdatabase"
          element={
            <ProtectedRoute>
              <Layout>
                <Customerdatabase />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/sales/customerwaitlist"
          element={
            <ProtectedRoute>
              <Layout>
                <Customerwaitlist />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/sales/invoicemanagement"
          element={
            <ProtectedRoute>
              <Layout>
                <Invoicemanagement />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/sales/customerreturns"
          element={
            <ProtectedRoute>
              <Layout>
                <Customerreturns />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Employee child routes */}
        <Route
          path="/employee/employeedatabase"
          element={
            <ProtectedRoute>
              <Layout>
                <Employeedatabase />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/employee/employeemanagement"
          element={
            <ProtectedRoute>
              <Layout>
                <Employeemanagement />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Additional pages */}
        <Route path="/privacy" element={<div>Privacy Policy</div>} />
        <Route path="/terms" element={<div>Terms of Service</div>} />
      </Routes>
    </Router>
  );
}

export default App;
