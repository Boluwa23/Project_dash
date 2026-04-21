import React from 'react'
import { MoreVertical, Edit3 } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { User } from "lucide-react";
import { Contact } from "lucide-react";
import { KeyRound } from "lucide-react";
import { useState } from "react";


const StatusDropdown = () => {
  const [status, setStatus] = useState("Active");

  return (
    <select
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      className={`
        px-2 py-1 text-xs rounded  
        ${
          status === "Active"
            ? "bg-green-200 text-green-700 text-[14px] font-semibold "
            : "bg-red-100 text-red-600 text-[14px] font-semibold"
        }
      `}
    >
      <option value="Active">Active</option>
      <option value="Inactive">Inactive</option>
    </select>
  );
};

const employeeinfo = () => {
  return (
    <div className="w-full  space-y-6">
      <h1 className="text-gray-400 text-[29px] align items-center flex">
        EMPLOYEE <ChevronRight className="mr-2 ml-3" />
        <p>ADD/ASSIGN EMPLOYEE</p> <ChevronRight className="mr-2 ml-3" />
        <p className="font-medium text-black"> PERSONAL INFO </p>
      </h1>

      {/* Tabs */}
      <div className="flex items-center gap-6 ">
        <button className="py-2 border-b-2 border-blue-600 text-blue-600 font-medium">
          Personal
        </button>
        <button className="py-2 text-gray-500 hover:text-gray-700">
          Time Management
        </button>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LEFT SECTION */}
        <div className="space-y-6">
          {/* Personal Information */}
          <div className="bg-white shadow rounded-xl p-4 ">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-semibold items-align flex ">
                <User className="text-gray-600 mr-1" />
                Personal Information
              </h2>
              <button className="flex border rounded-lg px-3 py-1 items-center gap-1 text-sm text-gray-600 hover:text-gray-900">
                <Edit3 size={16} /> Edit
              </button>
            </div>

            <div className="space-y-2 text-sm mt-5">
              <InfoRow label="Employee Full Name" value="Ajayi Fisayo" />
              <InfoRow label="Employee ID" value="EMP0001" />
              <InfoRow label="Role" value="Owner" />
              <InfoRow label="Status" value={<StatusDropdown />} />
              <InfoRow label="City" value="Akure" />
              <InfoRow label="State" value="Ondo" />
              <InfoRow label="Country" value="Nigeria" />
              <InfoRow label="Access" value="Super User" />
              <InfoRow label="Access Type" value="All" />
            </div>
          </div>

          {/* Address Section */}
          <div className="bg-white shadow rounded-xl p-4 ">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-semibold items-align flex">
                {" "}
                <User className="text-gray-600 mr-1" />
                Address Information
              </h2>
              <button className="flex border rounded-lg px-3 py-1 items-center gap-1 text-sm text-gray-600 hover:text-gray-900">
                <Edit3 size={16} /> Edit
              </button>
            </div>

            <p className="text-sm font-bold mt-3">Personal Employee Address</p>
            <p className="text-sm text-gray-600 mt-1">
              No 5, Ayetoro street, Olugbeji, Akure, Ondo state.
            </p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-6">
          {/* Contact Information */}
          <div className="bg-white shadow rounded-xl p-4 ">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-bold items-align flex">
                {" "}
                <Contact className="text-gray-600 mr-1" />
                Contact Information
              </h2>
              <button className="flex border rounded-lg px-3 py-1 items-center gap-1 text-sm text-gray-600 hover:text-gray-900">
                <Edit3 size={16} /> Edit
              </button>
            </div>

            <div className="text-sm space-y-3">
              <p className="font-bold">Personal Contact</p>
              <InfoRow label="Phone Number" value="+2348143782190" />
              <InfoRow
                label="Email Address"
                value={
                  <a
                    className="text-blue-600 hover:underline"
                    href="mailto:ajayi@example.com"
                  >
                    ajayifisayo@gmail.com
                  </a>
                }
              />

              <p className="font-bold pt-2">Emergency Contact</p>
              <InfoRow label="Emergency Contact" value="Ajayi Daudu" />
              <InfoRow label="Emergency Number" value="+2348143782190" />
            </div>
          </div>

          {/* Login Information */}
          <div className="bg-white shadow rounded-xl p-4 ">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-bold items-align flex">
                <KeyRound className="text-gray-600 mr-1" />
                Login Information
              </h2>
              <button className="flex border rounded-lg px-3 py-1 items-center gap-1 text-sm text-gray-600 hover:text-gray-900">
                <Edit3 size={16} /> Edit
              </button>
            </div>

            <div className="text-sm space-y-2">
              <InfoRow label="Username" value="ajayi" />
              <InfoRow label="Password" value="************" />
              <p className="font-bold pt-2">Shift Information</p>
              <InfoRow label="Last Logged In" value="09:21AM 10 Oct, 2025" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default employeeinfo

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between items-start">
      <span>{label}:</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}