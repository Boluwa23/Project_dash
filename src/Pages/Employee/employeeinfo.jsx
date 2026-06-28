import React from 'react'
import { MoreVertical, Edit3 } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { User } from "lucide-react";
import { Contact } from "lucide-react";
import { KeyRound } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const StatusDropdown = ({ initialStatus }) => {
  const [status, setStatus] = useState(initialStatus || "Active");

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
  const location = useLocation();
  const navigate = useNavigate();
  const employee = location.state?.employee;

  // Guard: if someone lands here without an employee (e.g. refreshes the page)
  if (!employee) {
    return (
      <div className="p-10 text-center text-gray-500">
        No employee selected.
        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 underline ml-2"
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="w-full space-y-6">
      <h1 className="text-gray-400 text-[29px] align items-center flex">
        EMPLOYEE <ChevronRight className="mr-2 ml-3" />
        <p>ADD/ASSIGN EMPLOYEE</p> <ChevronRight className="mr-2 ml-3" />
        <p className="font-medium text-black"> PERSONAL INFO </p>
      </h1>

      <div className="flex items-center gap-6 ">
        <button className="py-2 border-b-2 border-blue-600 text-blue-600 font-medium">
          Personal
        </button>
        <button className="py-2 text-gray-500 hover:text-gray-700">
          Time Management
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
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
              <InfoRow
                label="Employee Full Name"
                value={`${employee.firstName} ${employee.lastName}`}
              />
              <InfoRow label="Employee ID" value={`#${employee.id}`} />
              <InfoRow label="Role" value={employee.role} />
              <InfoRow
                label="Status"
                value={<StatusDropdown initialStatus={employee.status} />}
              />
              <InfoRow label="City" value={employee.city || "N/A"} />
              <InfoRow label="State" value={employee.state || "N/A"} />
              <InfoRow label="Country" value={employee.country || "N/A"} />
              <InfoRow label="Access" value={employee.access || "N/A"} />
              <InfoRow label="Access Type" value={employee.accessType || "N/A"} />
            </div>
          </div>

          <div className="bg-white shadow rounded-xl p-4 ">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-semibold items-align flex">
                <User className="text-gray-600 mr-1" />
                Address Information
              </h2>
              <button className="flex border rounded-lg px-3 py-1 items-center gap-1 text-sm text-gray-600 hover:text-gray-900">
                <Edit3 size={16} /> Edit
              </button>
            </div>

            <p className="text-sm font-bold mt-3">Personal Employee Address</p>
            <p className="text-sm text-gray-600 mt-1">
              {employee.address || "No address on file."}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white shadow rounded-xl p-4 ">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-bold items-align flex">
                <Contact className="text-gray-600 mr-1" />
                Contact Information
              </h2>
              <button className="flex border rounded-lg px-3 py-1 items-center gap-1 text-sm text-gray-600 hover:text-gray-900">
                <Edit3 size={16} /> Edit
              </button>
            </div>

            <div className="text-sm space-y-3">
              <p className="font-bold">Personal Contact</p>
              <InfoRow label="Phone Number" value={employee.contact} />
              <InfoRow
                label="Email Address"
                value={
                  <a
                    className="text-blue-600 hover:underline"
                    href={`mailto:${employee.email}`}
                  >
                    {employee.email}
                  </a>
                }
              />

              <p className="font-bold pt-2">Emergency Contact</p>
              <InfoRow
                label="Emergency Contact"
                value={employee.emergencyContact || "N/A"}
              />
              <InfoRow
                label="Emergency Number"
                value={employee.emergencyNumber || "N/A"}
              />
            </div>
          </div>

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
              <InfoRow label="Username" value={employee.username || "N/A"} />
              <InfoRow label="Password" value="************" />
              <p className="font-bold pt-2">Shift Information</p>
              <InfoRow label="Last Logged In" value={employee.lastLogin} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default employeeinfo;

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between items-start">
      <span>{label}:</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}