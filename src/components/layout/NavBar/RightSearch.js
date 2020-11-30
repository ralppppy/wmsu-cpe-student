import React, { useContext } from "react";

import { AppContext } from "../../../context/AppContext";

function RightSearch() {
  const { setDark, dark } = useContext(AppContext);

  return (
    <>
      {dark ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 mr-3 cursor-pointer text-black dark:text-gray-200"
            onClick={() => {
              setDark(false);
              document.querySelector("html").classList.remove("dark");
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </>
      ) : (
        <>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 mr-3 cursor-pointer text-black dark:text-gray-200"
            onClick={() => {
              setDark(true);
              document.querySelector("html").classList.add("dark");
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </>
      )}

      <input
        className="bg-gray-100 w-full h-10 rounded-full pl-3 pr-3 focus:outline-none dark:bg-gray-700"
        placeholder="Search for something cool"
      />
      <span className="flex items-center hover:text-indigo-600 text-black dark:text-gray-200">
        <button
          type="submit"
          className="p-1 focus:outline-none focus:shadow-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </span>
    </>
  );
}

export default RightSearch;
