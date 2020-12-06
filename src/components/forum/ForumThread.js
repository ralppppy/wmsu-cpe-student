import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "../common";

function ForumThread() {
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
    <ul>
      {users.length > 0 ? (
        <>
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
                  <Link
                    to={`/forum/forum-category-${index + 1}/forum-name-${
                      index + 1
                    }/thread-name`}
                    className="hover:underline"
                  >
                    <p className="font-bold  text-md mr-4  ">
                      (Title) {d.location.timezone.description}
                    </p>
                  </Link>
                  <p className=" text-sm mr-4 mb-2 ml-3">
                    This is a text from the thread This is a text from the
                    thread This is a text from the thread This is a text from
                    the thread This is a text from the thread This is a text
                    from the thread This is a text from the thread This is a
                    text from the thread This is a text from the thread
                  </p>

                  <p className=" text-xs dark:text-gray-400 ml-3">
                    Created {Math.floor(Math.random() * 12) + 1} hrs ago |
                    Author {d.name.first} {d.name.last} | Views{" "}
                    {Math.floor(Math.random() * 4000) + 1} | Stars{" "}
                    {Math.floor(Math.random() * 500) + 1}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </>
      ) : (
        <div className="flex items-center mt-4">
          <Spinner />
        </div>
      )}
    </ul>
  );
}

export default ForumThread;
