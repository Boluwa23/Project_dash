import React from 'react'
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const addemployee = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    role: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    emergencyAddress: "",
    accessType: "",
  });
  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const token = localStorage.getItem("token");

    const res = await axios.post(
      "https://project-genesis-dashboard.onrender.com/api/auth/create-user", // 👈 your route
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    console.log(res.data);

    alert("User created successfully");

    navigate("/employee/employeemanagement");
  } catch (error) {
    console.error(error);

    alert(error.response?.data?.message || "Error creating user");
  }
};
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1 className="text-gray-400 text-[32px] align items-center flex">
        EMPLOYEE <ChevronRight className="mr-2 ml-3" />
        <p className="font-medium text-black">ADD/ASSIGN EMPLOYEE</p>
      </h1>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg p-10 w-full mt-4 shadow-sm">
        <div className="flex items-start mt-5 justify-between gap-30">
          <div className="W-1/2">
            {/* Employee First Name */}
            <div className="mb-5">
              <label className="text-black text-[20px] font-medium text-nowrap">
                Employee first Name <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="First Name"
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
              />
            </div>

            {/* Employee last name */}
            <div className="mb-5">
              <label className="text-black text-[20px] font-medium text-nowrap">
                Employee Last Name <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Last Name"
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
              />
            </div>

            {/* Username */}
            <div className="mb-5">
              <label className="text-black text-[20px] font-medium text-nowrap">
                Username <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                placeholder="username"
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="text-black text-[20px] font-medium text-nowrap">
                Employee Email <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="State"
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
              />
            </div>

            {/* Password */}
            <div className="mb-5">
              <label className="text-black text-[20px] font-medium text-nowrap">
                Password
              </label>
              <input
                type="text"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="choose a strong password"
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
              />
            </div>

            {/* Role */}
            <div className="mb-5">
              <label className="text-black text-[20px] font-medium text-nowrap">
                Role <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                placeholder="Role"
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
              />
            </div>
            {/* Employee Id
            <div className="mb-5">
              <label className="text-black text-[20px] font-medium text-nowrap">
                Employee Id
              </label>
              <input
                type="text"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleChange}
                required
                placeholder="Employee Id"
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
              />
            </div> */}
            {/* Employee Phone */}
            <div className="mb-5">
              <label className="text-black text-[20px] font-medium text-nowrap">
                Employee Phone
              </label>
              <input
                type="text"
                name="employeePhone"
                value={formData.employeePhone}
                onChange={handleChange}
                required
                placeholder="080********"
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
              />
            </div>
          </div>

          <div className="W-1/2">
            {/* Address */}
            <div className="mb-5">
              <label className="text-black text-[20px] font-medium text-nowrap">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                placeholder="Address"
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
              />
            </div>

            {/* City */}
            <div className="mb-5">
              <label className="text-black text-[20px] font-medium text-nowrap">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                placeholder="City"
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
              />
            </div>

            {/* State */}
            <div className="mb-5">
              <label className="text-black text-[20px] font-medium text-nowrap">
                State
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                placeholder="State"
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
              />
            </div>

            {/* Country */}
            <div className="mb-5">
              <label className="text-black text-[20px] font-medium text-nowrap">
                Country
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                placeholder="Country"
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
              />
            </div>

            {/* Emergency Address */}
            <div className="mb-5">
              <label className="text-black text-[20px] font-medium text-nowrap">
                Emergency Address
              </label>
              <input
                type="text"
                name="emergencyAddress"
                value={formData.emergencyAddress}
                onChange={handleChange}
                required
                placeholder="Address"
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
              />
            </div>

            {/* Emergency Contact Name */}
            <div className="mb-5">
              <label className="text-black text-[20px] font-medium text-nowrap">
                Emergency Contact Name
              </label>
              <input
                type="text"
                name="emergencyContactName"
                value={formData.emergencyContactName}
                onChange={handleChange}
                required
                placeholder=" Contact Full Name"
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
              />
            </div>
            {/* Emergency Contact Phone */}
            <div className="mb-5">
              <label className="text-black text-[20px] font-medium text-nowrap">
                Emergency Contact Phone
              </label>
              <input
                type="text"
                name="emergencyContactPhone"
                value={formData.emergencyContactPhone}
                onChange={handleChange}
                required
                placeholder="080********"
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
              />
            </div>

            {/* Access Type */}
            <div className="mb-5">
              <label className="text-black text-[20px] font-medium text-nowrap">
                Access Type
              </label>
              <select
                name="accessType"
                value={formData.accessType}
                onChange={handleChange}
                required
                placeholder="Select access type"
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
              >
                <option value="Level1">Level1</option>
                <option value="Level2">Level2</option>
                <option value="Level3">Level3</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-7">
          <button
            type='submit'
            className="bg-blue-600 text-white px-4 py-2 border border-blue-600 rounded-lg font-medium"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default addemployee