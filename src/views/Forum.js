import { useState, useEffect } from "react";
import Pagination from "../components/forum/Pagination";

function Forum() {
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
    <div className="col-span-9 mt-3  mr-5 rounded-md p-5  dark:bg-gray-900">
      <h2 className="font-bold text-4xl text-gray-600 mb-5 dark:text-gray-300">
        Forum Title
      </h2>
      <div className="flex justify-end">
        <Pagination />
      </div>

      <ul>
        {users.map((d, index) => (
          <li className="mb-3 mt-3" key={index}>
            <div className="flex items-start mr-3 mb-3">
              <div>
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src={d.picture.medium}
                  alt=""
                />
              </div>
              <div className=" w-full ml-2">
                <p className="font-bold text-gray-500 text-lg mr-4  dark:text-gray-300">
                  (Title) {d.location.timezone.description}
                </p>
                <p className="text-gray-600 text-sm mr-4 mb-2 dark:text-gray-300">
                  This is a text from the thread This is a text from the thread
                  This is a text from the thread
                </p>

                <p className="text-gray-500 text-xs dark:text-gray-300">
                  Created {Math.floor(Math.random() * 12) + 1} hrs ago | Author{" "}
                  {d.name.first} {d.name.last} | Views{" "}
                  {Math.floor(Math.random() * 4000) + 1} | Stars{" "}
                  {Math.floor(Math.random() * 500) + 1}
                </p>
              </div>
            </div>
            <hr className="color-black" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Forum;
