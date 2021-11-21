import React from "react";
import Link from "next/link";
export default function PatientHistory({ firstName, lastName, uid }) {
  firstName = firstName || "Piyaphat";
  lastName = lastName || "Somchaiiodjvifjvoiiojio";
  uid = uid || "123456789";
  return (
    <div className="flex flex-row py-2 items-center hover:bg-gray-200 p-4 rounded-sm transform duration-50 ease-linear hover:rounded-3xl hover:text-gray-700">
      <img
        src="https://i.pinimg.com/736x/0d/f5/8d/0df58d6e21f7236ffc4cabbde43ec03b.jpg"
        className="bg-cover rounded-full w-24 h-24"
      />
      <div className="flex w-full overflow-hidden">
        <div className="font-bold ml-3 ">{firstName}</div>
        <div className="font-bold ml-3">
          {lastName}
        </div>
      </div>
      <div>
        <div className="icon w-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
