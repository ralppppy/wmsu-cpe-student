import React from "react";

function ForumSingleFilter() {
  return (
    <div className="flex items-center bg-white rounded-md p-4 space-x-4  dark:bg-gray-card">
      <div className="bg-gray-100 hover:bg-gray-100 rounded-md p-2 cursor-pointer dark:bg-gray-darkhover dark:hover:bg-gray-darkhover dark:hover:text-gray-300">
        Latest Updates
      </div>
      <div className="hover:bg-gray-100 rounded-md p-2 cursor-pointer  dark:hover:text-gray-300 dark:hover:bg-gray-darkhover">
        Popular
      </div>
      <div className=" hover:bg-gray-100 rounded-md p-2 cursor-pointer  dark:hover:text-gray-300 dark:hover:bg-gray-darkhover">
        Newest
      </div>
      <div className=" hover:bg-gray-100 rounded-md p-2 cursor-pointer  dark:hover:text-gray-300 dark:hover:bg-gray-darkhover">
        Unanswered
      </div>
      <div className=" hover:bg-gray-100 rounded-md p-2 cursor-pointer  dark:hover:text-gray-300 dark:hover:bg-gray-darkhover">
        Unsolved
      </div>
      <div className=" hover:bg-gray-100 rounded-md p-2 cursor-pointer  dark:hover:text-gray-300 dark:hover:bg-gray-darkhover">
        Your question
      </div>
      <div className=" hover:bg-gray-100 rounded-md p-2 cursor-pointer  dark:hover:text-gray-300 dark:hover:bg-gray-darkhover">
        Your answer
      </div>
    </div>
  );
}

export default ForumSingleFilter;
