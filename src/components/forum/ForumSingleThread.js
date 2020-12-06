import React from "react";
import Pagination from "./Pagination";
import { ThreadMessage } from "./";

function ForumSingleThread() {
  return (
    <div>
      <div className="bg-white rounded-md p-3 shadow-sm mb-3 dark:bg-gray-card">
        <h2 className="font-bold text-2xl">This is the thread title</h2>
        <p className=" text-xs dark:text-gray-400">
          Created {Math.floor(Math.random() * 12) + 1} hrs ago | Author Ralp
          Yosores | Views {Math.floor(Math.random() * 4000) + 1} | Stars{" "}
          {Math.floor(Math.random() * 500) + 1}
        </p>{" "}
      </div>

      <Pagination />
      <div className="grid grid-cols-12  mt-3  text-gray-700  dark:text-gray-300">
        <ThreadMessage />
      </div>
      {new Array(8).fill(1).map((d, index) => (
        <div
          key={index}
          className="grid grid-cols-12  mt-3  text-gray-700  dark:text-gray-300"
        >
          <ThreadMessage type="reply" />
        </div>
      ))}
    </div>
  );
}

export default ForumSingleThread;
