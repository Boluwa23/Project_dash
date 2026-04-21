import React from "react";
import { CircleQuestionMark } from "lucide-react";
import { Bell } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full  shadow-md p-4 rounded-lg mb-6 flex items-center justify-between">
      <div className="flex gap-1 items-center p-1 border border-gray-500 rounded-lg shadow-2xl w-96">
        <Search className="w-4 h-4" />
        <input
          type="search"
          placeholder="Search"
          className="text-base outline-0 border-0"
        />
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-4">
          <CircleQuestionMark className="rounded-md border p-1 border-black " />
          <Bell className="rounded-md border border-black p-1 " />
        </div>
        <div />
        <p className="className font-semibold border border-black px-1 text-sm rounded-md block">
          TO
        </p>
        <div className="flex item-start">
          <div className=" mr-1">
            <p className="text-[12px] text-black">Tamilore Olotu</p>
            <p className="text-[10px] text-gray-400">Admin</p>
          </div>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
