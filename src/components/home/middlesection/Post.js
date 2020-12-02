import React from "react";

function Post() {
  return (
    <div className="bg-white rounded-lg h-auto pt-3 pb-3 shadow-sm mb-5 dark:bg-gray-card">
      <div class="flex items-start mr-3 ml-3">
        <div>
          <img
            class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src="https://scontent.fceb1-1.fna.fbcdn.net/v/t1.0-9/116893716_3204324283015870_5983696327049027815_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGkR2afXv9hVLQO9qHDHEblld2WR0vxCx6V3ZZHS_ELHk30MP1YjTLn4NFdzGoEQZqu0OZrr2VkTI601kN6oWwk&_nc_ohc=RWw4GqvNl28AX8BxdnA&_nc_ht=scontent.fceb1-1.fna&oh=56bfd0b69e5b341fb4067fed44980c99&oe=5FE7DD48"
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
  );
}

export default Post;
