import { useEffect, useState } from "react";

function RightSection() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);

        setUsers(resJson.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div id="right-menu" className="h-5/6 w-2/1 fixed">
      <div className="mt-3 mb-3 mr-3">
        <h3 className="font-bold text-lg text-gray-600 dark:text-gray-300">
          Do you want to be a tutor?
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 ">
          Ullamco magna in ipsum velit consequat in aute anim et. Non nostrud
          adipisicing magna sunt duis excepteur culpa non sit ipsum cupidatat
          excepteur.
        </p>
        <button className=" focus:outline-none bg-blue-800 self-center rounded-md shadow-md pt-1 pb-1 pl-2 pr-2 mt-2 text-white hover:bg-blue-900">
          Apply Now!
        </button>
      </div>
      <div className="h-px bg-black w-2/1 bg-gray-300 mr-3 "></div>
      <div className="mt-3 mb-3 mr-3">
        <h3 className="font-bold text-md text-gray-600 dark:text-gray-300">
          Your Contacts
        </h3>

        {users.map((d, index) => (
          <div
            key={index}
            class="flex w-full items-center pb-2 pt-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-darkhover pl-5 pr-5 cursor-pointer"
          >
            <div>
              <img
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                src={d.picture.medium}
                alt=""
              />
            </div>
            <div className="ml-4">
              <h4 className="font-normal text-sm text-center dark:text-gray-300">
                {d.name.first} {d.name.last}
              </h4>
            </div>
            <div className="flex items-center">
              <span className="rounded-full h-3 w-3 bg-green-500 absolute right-10 "></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightSection;
