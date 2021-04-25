import React from "react";
import { BsFillPlusCircleFill, BsFillDashCircleFill } from "react-icons/bs";

export default function Buttons({ onHire, onFire }) {
  return (
    <div className="flex mx-auto mt-8 ">
      <button
        onClick={onFire}
        className="flex items-center py-2 pl-6 pr-2 transition-colors border-r border-gray-300 shadow-md rounded-l-xl bg-gray-50 hover:bg-gray-200"
      >
        <BsFillDashCircleFill className="mr-2 text-red-600" /> Fire
      </button>
      <button
        onClick={onHire}
        className="flex items-center py-2 pl-2 pr-6 transition-colors shadow-md rounded-r-xl bg-gray-50 hover:bg-gray-200"
      >
        <BsFillPlusCircleFill className="mr-2 text-green-600" /> Hire
      </button>
    </div>
  );
}
