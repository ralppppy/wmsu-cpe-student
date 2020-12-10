import React from "react";
import Pagination from "./Pagination";
import { ThreadMessage } from "./";
import ThreadMessageEditor from "./ThreadMessageEditor";

function ForumSingleThread() {
  return (
    <>
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
      <div className="grid grid-cols-12 mt-4 relative bg-white p-4 rounded-md shadow-sm dark:bg-gray-card">
        <div className="col-span-3">
          <div className="flex justify-center p-3">
            <img
              class="inline-block h-24 w-24 rounded-full ring-2 ring-white"
              src="https://scontent.fceb1-1.fna.fbcdn.net/v/t1.0-9/116893716_3204324283015870_5983696327049027815_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGkR2afXv9hVLQO9qHDHEblld2WR0vxCx6V3ZZHS_ELHk30MP1YjTLn4NFdzGoEQZqu0OZrr2VkTI601kN6oWwk&_nc_ohc=RWw4GqvNl28AX8BxdnA&_nc_ht=scontent.fceb1-1.fna&oh=56bfd0b69e5b341fb4067fed44980c99&oe=5FE7DD48"
              alt=""
            />
          </div>
        </div>
        <div className="col-span-9 ">
          <ThreadMessageEditor />
        </div>
      </div>
    </>
  );
}

export default ForumSingleThread;
