import React from "react";
import Logo from "../Logo";

export default function Navigation() {
  return (
    <header className="text-gray-600 ">
      <div className="container flex flex-col flex-wrap items-center max-w-screen-xl p-5 mx-auto md:flex-row">
        <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
          <Logo width={50} height={39} />
          <span className="ml-3 text-3xl text-blue-800 font-display">
            Inflatable Architects
          </span>
        </a>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
          <a className="mr-5 text-red-600 hover:text-red-900">About</a>
          <a className="mr-5 text-green-600 hover:text-green-900">Customize</a>
          <a className="mr-5 text-blue-600 hover:text-blue-900">Team</a>
          <a className="mr-5 text-yellow-600 hover:text-yellow-900">Signup</a>
        </nav>
        <a
          href="https://twitch.tv/trostcodes"
          className="inline-flex items-center px-3 py-1 mt-4 text-base bg-red-100 border-0 rounded focus:outline-none hover:bg-red-200 md:mt-0"
        >
          Follow
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
        </a>
      </div>
    </header>
  );
}
