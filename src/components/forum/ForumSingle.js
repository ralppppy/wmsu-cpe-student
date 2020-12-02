import { useState, useEffect } from "react";
import Pagination from "./Pagination";

function ForumSingle() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((resJson) => {
        setUsers(resJson.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="col-span-9   mr-5 rounded-md p-5  h-full">
      <h2 className="font-bold text-2xl text-gray-700 mb-5 dark:text-gray-300">
        Forum Title
      </h2>
      <div className="flex justify-end mb-3">
        <Pagination />
      </div>

      <div className="flex items-center bg-white rounded-md p-4 space-x-4 dark:text-gray-300 dark:bg-gray-card">
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

      <ul>
        {users.map((d, index) => (
          <li
            className="mb-3 mt-3 bg-white p-5 dark:bg-gray-card rounded-md"
            key={index}
          >
            <div className="flex items-start mr-3 mb-3">
              <div>
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src={d.picture.medium}
                  alt=""
                />
              </div>
              <div className=" w-full ml-4">
                <p className="font-bold text-gray-700 text-md mr-4  dark:text-gray-300">
                  (Title) {d.location.timezone.description}
                </p>
                <p className="text-gray-700 text-sm mr-4 mb-2 ml-3 dark:text-gray-300">
                  This is a text from the thread This is a text from the thread
                  This is a text from the thread This is a text from the thread
                  This is a text from the thread This is a text from the thread
                  This is a text from the thread This is a text from the thread
                  This is a text from the thread
                </p>

                <p className="text-gray-700 text-xs dark:text-gray-400 ml-3">
                  Created {Math.floor(Math.random() * 12) + 1} hrs ago | Author{" "}
                  {d.name.first} {d.name.last} | Views{" "}
                  {Math.floor(Math.random() * 4000) + 1} | Stars{" "}
                  {Math.floor(Math.random() * 500) + 1}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ForumSingle;
