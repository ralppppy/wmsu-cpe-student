import React from "react";

function Pagination() {
  return (
    <nav
      className="inline-flex shadow-sm -space-x-px dark:text-gray-300"
      aria-label="Pagination"
    >
      <a
        href="#"
        className=" dark:border-gray-500 dark:text-gray-300 dark:bg-gray-card inline-flex items-center  px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
      >
        <span className="sr-only">Previous</span>
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      <a
        href="#"
        className=" dark:border-gray-500  dark:text-gray-300 dark:bg-gray-card inline-flex bg-blue-100 items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        1
      </a>
      <a
        href="#"
        className=" dark:border-gray-500 dark:text-gray-300 dark:bg-gray-card  inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        2
      </a>
      <a
        href="#"
        className=" dark:border-gray-500 dark:text-gray-300 dark:bg-gray-card hidden md:inline-flex  items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        3
      </a>
      <span className=" dark:border-gray-500 dark:text-gray-300 dark:bg-gray-card  inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
        ...
      </span>
      <a
        href="#"
        className=" dark:border-gray-500 dark:text-gray-300 dark:bg-gray-card hidden md:inline-flex  items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        8
      </a>
      <a
        href="#"
        className=" dark:border-gray-500 dark:text-gray-300 dark:bg-gray-card  inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        9
      </a>
      <a
        href="#"
        className=" dark:border-gray-500 dark:text-gray-300 dark:bg-gray-card  inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        10
      </a>
      <a
        href="#"
        className=" dark:border-gray-500  dark:text-gray-300 dark:bg-gray-card inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
      >
        <span className="sr-only">Next</span>
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </nav>
  );
}

export default Pagination;
