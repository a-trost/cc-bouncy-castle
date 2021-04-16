import React from "react";
import Logo from "../Logo";

export default function Navigation() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Logo width={50} height={39} />
          <span className="ml-3 text-3xl text-blue-800 font-display">
            Inflatable Architects
          </span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-red-900 text-red-600">About</a>
          <a className="mr-5 hover:text-green-900 text-green-600">Customize</a>
          <a className="mr-5 hover:text-blue-900 text-blue-600">Team</a>
          <a className="mr-5 hover:text-yellow-900 text-yellow-600">Signup</a>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  );
}
