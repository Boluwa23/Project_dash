import React from 'react'
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const addemployee = () => {

  const navigate = useNavigate();

  const handleNext = () => {
    navigate("//employee/employeemanagement"); // this goes to your new page
  };

  return (
    <div>
      <h1 className="text-gray-400 text-[32px] align items-center flex">
        EMPLOYEE <ChevronRight className="mr-2 ml-3" />
        <p className="font-medium text-black">ADD/ASSIGN EMPLOYEE</p>
      </h1>

      <form className="bg-white rounded-lg p-10 w-full mt-4 shadow-sm">
        <div className="flex items-start mt-5 justify-between gap-30">
          <div className="W-1/2">
            {/* Employee Full Name */}
            <div className="mb-5">
              <label className="text-black text-[20px] font-medium text-nowrap">
                Employee Full Name <span>*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Name"
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
              />
            </div>

            {/* Employee Email */}
            <div className="mb-5">
              <label className="text-black text-[20px] font-medium text-nowrap">
                Employee Email
              </label>
              <input
                type="text"
                required
                placeholder="example@gmail.com"
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
              />
            </div>

            {/* Contact Address */}
            <div className="mb-5">
              <label className="text-black text-[20px] font-medium text-nowrap">
                Contact Address(Optional)
              </label>
              <input
                type="text"
                required
                placeholder="Address"
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
                required
                placeholder="State"
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
              />
            </div>

            {/* Emergency Contact */}
            <div className="mb-5">
              <label className="text-black text-[20px] font-medium text-nowrap">
                Emergency Contact
              </label>
              <input
                type="text"
                required
                placeholder="081345677"
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
              />
            </div>

            {/* Access */}
            <div className="mb-5">
              <label className="text-black text-[20px] font-medium text-nowrap">
                Emergency Contact
              </label>
              <input
                type="text"
                required
                placeholder="Select"
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
              />
            </div>
          </div>

          <div className="W-1/2">
            {/* Role */}
            <div className="mb-5">
              <label className="text-black text-[20px] font-medium text-nowrap">
                Role<span>*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Role"
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
              />
            </div>

            {/* Employee Phone */}
            <div className="mb-5">
              <label className="text-black text-[20px] font-medium text-nowrap">
                Employee Phone
              </label>
              <input
                type="text"
                required
                placeholder="0810756399"
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
                required
                placeholder="INV-324567"
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
                required
                placeholder="Address"
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
              />
            </div>

            {/* Access Type */}
            <div className="mb-5">
              <label className="text-black text-[20px] font-medium text-nowrap">
                Access Type
              </label>
              <input
                type="text"
                required
                placeholder="Select access type"
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-7">
          <button
            onClick={handleNext}
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