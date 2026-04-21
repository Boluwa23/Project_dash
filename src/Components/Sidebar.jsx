import React, { useState } from "react";
import {
  LayoutDashboard,
  SquareMenu,
  PackageCheck,
  Package,
  FileSliders,
  TrendingUp,
  UserRoundCheck,
  UserRoundPlus,
  UsersRound,
  FileMinus,
  ChevronRight,
  House,
  ShoppingBag,
  AlertTriangle,
  NotebookText,
  ClipboardList,
  Users,
  ArrowLeftRight,
  User,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  // Check if a route or its children are active
  const isRouteActive = (route, children = []) => {
    if (location.pathname === route) return true;
    return children.some((child) => location.pathname === child.route);
  };

  // Check if a specific child route is active
  const isChildActive = (route) => {
    return location.pathname === route;
  };

  const general = [
    {
      icon: <LayoutDashboard className="h-5 w-5" />,
      label: "Dashboard",
      route: "/",
    },
    {
      icon: <House className="h-5 w-5" />,
      label: "Inventory",
      route: "/inventory",
      hasDropdown: true,
      dropdownKey: "inventory",
      children: [
        {
          icon: <ShoppingBag className="h-5 w-5" />,
          label: "Product Database",
          route: "/inventory/productdatabase",
        },
        {
          icon: <Package className="h-5 w-5" />,
          label: "Manage Inventory",
          route: "/inventory/manageinventory",
        },
      ],
    },
    {
      icon: <FileSliders className="h-5 w-5" />,
      label: "Procurement",
      route: "/procurement/suppilerdatabase", // Default to first child
      hasDropdown: true,
      dropdownKey: "procurement",
      children: [
        {
          icon: <Package className="h-5 w-5" />,
          label: "Suppiler Database",
          route: "/procurement/suppilerdatabase",
        },
        {
          icon: <FileMinus className="h-5 w-5" />,
          label: "Create PO",
          route: "/procurement/createpo",
        },
        {
          icon: <ArrowLeftRight className="h-5 w-5" />,
          label: "Supplier Transactions",
          route: "/procurement/suppliertransactions",
        },
      ],
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      label: "Sales",
      route: "/sales/createinvoice", // Default to first child
      hasDropdown: true,
      dropdownKey: "sales",
      children: [
        {
          icon: <FileSliders className="h-5 w-5" />,
          label: "Create Invoice",
          route: "/sales/createinvoice",
        },
        {
          icon: <FileSliders className="h-5 w-5" />,
          label: "Customer Returns",
          route: "/sales/customerreturns",
        },
        {
          icon: <NotebookText className="h-5 w-5" />,
          label: "Customer Waitlist",
          route: "/sales/customerwaitlist",
        },
        {
          icon: <User className="h-5 w-5" />,
          label: "Customer Database",
          route: "/sales/customerdatabase",
        },
        {
          icon: <SquareMenu className="h-5 w-5" />,
          label: "Invoice Management",
          route: "/sales/invoicemanagement",
        },
      ],
    },
    {
      icon: <Users className="h-5 w-5" />,
      label: "Employee",
      route: "/employee/addemployee", // Default to first child
      hasDropdown: true,
      dropdownKey: "employee",
      children: [
        {
          icon: <UserRoundPlus className="h-5 w-5" />,
          label: "Add/Assign Employee",
          route: "/employee/addemployee",
        },
        {
          icon: <User className="h-5 w-5" />,
          label: "Employee Database",
          route: "/employee/employeedatabase",
        },
        {
          icon: <UserRoundCheck className="h-5 w-5" />,
          label: "Employee Management",
          route: "/employee/employeemanagement",
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-300 min-h-screen w-72 text-gray-500 text-sm p-6 ">
      <img src="/ProGen Logo 1.png" alt="" className="w-45 h-12" />
      <div className="space-y-4 mt-4">
        <div>
          <h1 className="text-gray-400 text-xs">GENERAL</h1>
          {general.map((item) => (
            <div key={item.label}>
              {item.hasDropdown ? (
                // Dropdown item
                <div>
                  <Link to={item.route}>
                    <div
                      className={`flex items-center justify-between p-2 rounded cursor-pointer transition-colors ${
                        isRouteActive(item.route, item.children)
                          ? "bg-blue-300 text-blue-700"
                          : "hover:bg-blue-200 hover:text-blue-600"
                      }`}
                      onClick={() => toggleDropdown(item.dropdownKey)}
                    >
                      <div className="flex items-center gap-2">
                        <p>{item.icon}</p>
                        <p>{item.label}</p>
                      </div>
                      <ChevronRight
                        className={`h-4 w-4 transition-transform ${
                          openDropdown === item.dropdownKey ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                  </Link>

                  {/* Dropdown children */}
                  {openDropdown === item.dropdownKey && (
                    <div className="ml-6 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link to={child.route} key={child.route}>
                          <div
                            className={`flex items-center gap-2 p-2 rounded cursor-pointer transition-colors ${
                              isChildActive(child.route)
                                ? "bg-blue-200 text-blue-600 font-medium"
                                : "hover:bg-blue-100 hover:text-blue-500"
                            }`}
                          >
                            <p>{child.icon}</p>
                            <p>{child.label}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                // Regular item
                <Link to={item.route}>
                  <div
                    className={`flex items-center gap-2 p-2 rounded cursor-pointer transition-colors ${
                      isRouteActive(item.route)
                        ? "bg-blue-300 text-blue-700"
                        : "hover:bg-blue-200 hover:text-blue-600"
                    }`}
                  >
                    <p>{item.icon}</p>
                    <p>{item.label}</p>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full border border-gray-400 mt-4" />
      <div className="flex items-center gap-2 cursor-pointer mt-4">
        <Link
          to="/privacy"
          className="hover:bg-blue-300 p-2 rounded transition-colors"
          onClick={() => setOpenDropdown(null)}
        >
          Privacy
        </Link>
        <Link
          to="/terms"
          className="hover:bg-blue-300 p-2 rounded transition-colors"
          onClick={() => setOpenDropdown(null)}
        >
          Terms
        </Link>
      </div>
    </div>
  );
}





