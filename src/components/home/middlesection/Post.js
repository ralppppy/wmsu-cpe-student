import React from "react"

function Post() {
  return (
    <div className="bg-white rounded-lg h-auto pt-3 pb-3 shadow-sm mb-5 dark:bg-gray-card">
      <div class="flex items-start mr-3 ml-3">
        <div>
          <img
            class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src="https://randomuser.me/api/portraits/med/men/78.jpg"
            alt=""
          />
        </div>
        <div className=" w-full ml-2">
          <div className="flex items-center">
            <p className="font-bold text-gray-600 text-sm mr-4  dark:text-gray-300">
              Ralp Yosores
            </p>
            <p className="text-gray-600 text-xs dark:text-gray-300">
              Bachelor of Science in Computer Engineering
            </p>
          </div>

          <p className="text-gray-600 text-xs dark:text-gray-300">4hr .</p>
        </div>
      </div>

      <div className="mt-1 ">
        <p className="text-gray-600 text-sm mb-3 ml-3 mr-3 dark:text-gray-300">
          Do voluptate consectetur aliquip in sint ex occaecat Lorem cupidatat.
          Ea elit ad laboris irure aute velit commodo aliqua ullamco. Magna quis
          nisi irure ex occaecat culpa esse laborum commodo. Ad reprehenderit
          irure elit culpa elit dolor
        </p>
        <div class="bg-indigo-300">
          <img
            src="https://www.seriouseats.com/2019/10/20191023-chicken-adobo-vicky-wasik-19.jpg"
            class="object-cover h-80 w-full "
          />
        </div>
      </div>
      <div className="grid grid-cols-3   mt-1 ml-3 mr-3">
        <div className="m-1 flex items-center justify-center">
          <p className="text-gray-600 font-medium text-sm dark:text-gray-400">
            React
          </p>
        </div>
        <div className="m-1 flex items-center justify-center">
          <p className="text-gray-600 font-medium text-sm dark:text-gray-400">
            Comment
          </p>
        </div>
        <div className="m-1 flex items-center justify-center">
          {" "}
          <p className="text-gray-600 font-medium text-sm dark:text-gray-400">
            Save
          </p>
        </div>
      </div>
    </div>
  )
}

export default Post
