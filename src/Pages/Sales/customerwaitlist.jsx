import React from 'react'
import { useNavigate } from "react-router-dom";

const customerwaitlist = () => {

    //route to next page
      const navigate = useNavigate();
    const handleNext = () => {
      navigate("/waitlistTable"); // this goes to your new page
    };

  return (
    <div>
      <h1 className="font-medium text-[27px]">CUSTOMER WAITLIST </h1>
      <div className="w-full bg-white mt-8 rounded-lg p-5">
        <form className="flex items-start justify-between gap-90 pt-5">
          <div className="w-2/3">
            {/* Customer phone */}
            <div className="mb-5">
              <label className="text-black text-[20px] font-medium mb-1">
                Customer Phone <span>*</span>
              </label>
              <input
                type="text"
                required
                placeholder="1234567890"
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
              />
            </div>

            {/* Customer email */}
            <div className="mb-5">
              <label className="text-black text-[20px] font-medium mb-1">
                Customer Email(Optional)
              </label>
              <input
                type="text"
                required
                placeholder="example@gmail.com"
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
              />
            </div>
            {/* Invoice Number */}
            <div className="mb-5">
              <label className="text-black text-[20px] font-medium mb-1">
                Invoice Number
              </label>
              <input
                type="text"
                required
                placeholder="INV-34574"
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
              />
            </div>
          </div>

          <div className="w-2/3">
            {/* Customer Name */}
            <div className="mb-5">
              <label className="text-black text-[20px] font-medium mb-1">
                Customer Name <span>*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Name"
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
              />
            </div>

            {/* Customer Address */}
            <div className="mb-5">
              <label className="text-black text-[20px] font-medium mb-1">
                Customer Address(Optional)
              </label>
              <input
                type="text"
                required
                placeholder="Address"
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
              />
            </div>
            {/*Sales Person */}
            <div className="mb-5">
              <label className="text-black text-[20px] font-medium mb-1">
                Sales Person
              </label>
              <input
                type="text"
                required
                placeholder="Employee  name"
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:border-gray-300 focus:outline-none "
              />
            </div>
          </div>
        </form>

        <div className="flex justify-end mt-8  gap-7 ">
          <button
            onClick={handleNext}
            type="submit"
            className="bg-blue-600 text-white border border-blue-600 py-2 px-4 rounded-lg font-medium cursor-pointer text-[17px] "
          >
            Add to waitlist
          </button>
          <button
            onClick={handleNext}
            type="submit"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg border border-blue-100 cursor-pointer font-medium"
          >
            {" "}
            View Waitlist Table
          </button>
        </div>
      </div>
    </div>
  );
}

export default customerwaitlist