import React from 'react'
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { MoreVertical } from "lucide-react";
import { UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Download } from "lucide-react";


const employeemanagement = () => {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/employeeinfo"); // this goes to your new page
  };

  const roleColors = {
    Owner: "text-green-600",
    Manager: "text-blue-600",
    Analyst: "text-red-400",
    Associate: "text-yellow-600",
  };

  const employees = [
    {
      id: "EMP001",
      name: "Ajayi Fisayo",
      role: "Owner",
      email: "Ajayi@gmail.com",
      contact: "08189625641",
      lastLogin: "10 Oct, 2025",
    },
    {
      id: "EMP002",
      name: "Bolu August",
      role: "Manager",
      email: "Ajayi@gmail.com",
      contact: "08189625641",
      lastLogin: "10 Oct, 2025",
    },
    {
      id: "EMP003",
      name: "Akin Black",
      role: "Associate",
      email: "Ajayi@gmail.com",
      contact: "08189625641",
      lastLogin: "10 Oct, 2025",
    },
    {
      id: "EMP004",
      name: "Tamilore Olotu",
      role: "Analyst",
      email: "Ajayi@gmail.com",
      contact: "08189625641",
      lastLogin: "10 Oct, 2025",
    },
    {
      id: "EMP005",
      name: "Tamilore Olotu",
      role: "Analyst",
      email: "Ajayi@gmail.com",
      contact: "08189625641",
      lastLogin: "10 Oct, 2025",
    },
    {
      id: "EMP006",
      name: "Tamilore Olotu",
      role: "Analyst",
      email: "Ajayi@gmail.com",
      contact: "08189625641",
      lastLogin: "10 Oct, 2025",
    },
    {
      id: "EMP007",
      name: "Tamilore Olotu",
      role: "Analyst",
      email: "Ajayi@gmail.com",
      contact: "08189625641",
      lastLogin: "10 Oct, 2025",
    },
    {
      id: "EMP008",
      name: "Tamilore Olotu",
      role: "Analyst",
      email: "Ajayi@gmail.com",
      contact: "08189625641",
      lastLogin: "10 Oct, 2025",
    },
    {
      id: "EMP009",
      name: "Tamilore Olotu",
      role: "Analyst",
      email: "Ajayi@gmail.com",
      contact: "08189625641",
      lastLogin: "10 Oct, 2025",
    },
  ];

  const filtered = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-gray-400 text-[32px] align items-center flex">
          EMPLOYEE <ChevronRight className="mr-2 ml-3" />
          <p className="font-medium text-black">EMPLOYEE MANAGEMENT</p>
        </h1>
        <button className="bg-blue-600 px-4 py-2 rounded-lg text-white">
          Export Employee CSV
        </button>
      </div>

      <div className="flex gap-5  items-center mt-7">
        <input
          type="text"
          placeholder="Search by name & ID"
          className="border border-gray-400 shadow-md bg-white px-6 py-1 "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex items-center gap-2">
          <p className="font-bold">Filters</p>
          <select className=" px-1 py-1 text-sm h-7 text-blue-700 bg-blue-200">
            <option className="">Select Role</option>
            <option>ID</option>
            <option>Name</option>
            <option>Analyst</option>
            <option>Associate</option>
          </select>

          <button className="bg-blue-600 text-white px-4 py-1 text-sm">
            SEARCH
          </button>
        </div>
      </div>

      {/* Employee Grid */}
      <div className="grid mt-6 grid-cols-3 gap-5">
        {filtered.map((employee) => (
          <div
            key={employee.id}
            className="bg-white shadow rounded-xl border border-white p-5 relative"
          >
            {/* Status */}
            <div className="flex justify-between">
              <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-xs">
                Active
              </span>
              <MoreVertical
                size={18}
                onClick={handleNext}
                className="text-gray-500 cursor-pointer"
              />
            </div>
            <div className="flex justify-center my-3">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center">
                <UserRound className="w-8 h-8 text-blue-500" />
              </div>
            </div>

            {/* Name */}
            <h2 className="text-center font-bold text-2xl">{employee.name}</h2>
            <p
              className={`text-center text-sm font-semibold text-blue-600 mb-3 ${
                roleColors[employee.role]
              }`}
            >
              {employee.role}
            </p>

            <div className="mt-4 space-y-1 text-sm">
              {/* ROW 1 */}
              <div className="flex justify-between">
                <span className="font-semibold">Employee ID:</span>
                <span>#{employee.id}</span>
              </div>

              {/* ROW 2 */}
              <div className="flex justify-between">
                <span className="font-semibold">Role:</span>
                <span>{employee.role}</span>
              </div>

              {/* ROW 3 (Contact) */}
              <div className="flex justify-between">
                <span className="font-semibold">Contact Info:</span>

                <div className="text-right text-blue-600 ">
                  <p>{employee.email}</p>
                  <p>{employee.contact}</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center mt-4 text-sm gap-5">
              <span className="text-gray-600 text-nowrap ">
                Last Login at <strong>{employee.lastLogin}</strong>
              </span>

              <button
                onClick={handleNext}
                className="text-blue-600 text-nowrap hover:underline"
              >
                View Employee
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default employeemanagement
  