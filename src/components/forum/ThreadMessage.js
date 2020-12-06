import React from "react";

function ThreadMessage({ type }) {
  return (
    <>
      <div className="col-span-3 bg-white rounded-md shadow-sm dark:bg-gray-card">
        <div className="flex justify-center p-3">
          <img
            class="inline-block h-20 w-20 rounded-full ring-2 ring-white"
            src="https://scontent.fceb1-1.fna.fbcdn.net/v/t1.0-9/116893716_3204324283015870_5983696327049027815_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGkR2afXv9hVLQO9qHDHEblld2WR0vxCx6V3ZZHS_ELHk30MP1YjTLn4NFdzGoEQZqu0OZrr2VkTI601kN6oWwk&_nc_ohc=RWw4GqvNl28AX8BxdnA&_nc_ht=scontent.fceb1-1.fna&oh=56bfd0b69e5b341fb4067fed44980c99&oe=5FE7DD48"
            alt=""
          />
        </div>
        <div className="flex justify-center">
          <h2 className="font-semibold">Ralp Yosores</h2>
        </div>
        <div className="flex justify-center">
          <div
            className={`${
              type === "reply" ? "bg-tag-elite" : "bg-tag-newbie"
            } w-3/6 p-1 rounded-md text-center`}
          >
            <p
              className={`text-xs ${
                type === "reply" ? "text-tag-textelite" : "text-tag-textnewbie"
              }`}
            >
              {type === "reply" ? "Helper" : "Newbie"}
            </p>
          </div>
        </div>
        <div className="flex justify-center pb-3">
          <p className="text-xs">This is a short bio</p>
        </div>
      </div>
      <div
        className={`col-span-9 relative bg-white rounded-md shadow-sm p-3 border-l-8 ${
          type === "reply" ? "border-tag-elite" : "border-tag-newbie"
        }   dark:bg-gray-card`}
      >
        <div className="mb-4 text-xs text-gray-500 dark:text-gray-400 ">
          Sep 29, 2015
        </div>
        <p className="text-sm mb-4">
          {type === "reply" ? (
            <>
              This is a reply. Ut tempor ex amet mollit eiusmod non veniam ea
              eu. Cupidatat voluptate eiusmod sint occaecat fugiat qui eu id
              excepteur ullamco velit Lorem. Aute est pariatur irure incididunt
              eu quis eu enim
            </>
          ) : (
            <>
              Ut tempor ex amet mollit eiusmod non veniam ea eu. Cupidatat
              voluptate eiusmod sint occaecat fugiat qui eu id excepteur ullamco
              velit Lorem. Aute est pariatur irure incididunt eu quis eu enim
              aliqua dolor voluptate proident ad sit. Culpa do aliquip
              exercitation et laborum aliqua eiusmod ad anim veniam ad elit
              proident tempor. Commodo occaecat pariatur proident duis eu sit
              elit fugiat. Magna exercitation ullamco elit consequat sint
              aliquip dolor et irure nisi culpa id. Ullamco esse exercitation
              ipsum labore sint adipisicing nulla eiusmod in laborum. Duis
              pariatur esse adipisicing ipsum eu quis aliqua eiusmod dolor
              reprehenderit cillum dolore reprehenderit velit. Amet et ad amet
              ad. Esse consectetur tempor laboris do dolor eu sunt. Aliqua enim
              id aute magna sint. Dolore dolor incididunt dolor minim
              adipisicing commodo cillum dolore quis sunt aliquip esse. Amet
              consequat tempor dolor non minim in est laborum aliquip enim eu
              elit eiusmod.
            </>
          )}
        </p>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Last edited by [User Name] : Jan 8, 2016
        </div>

        <div className="absolute right-2 bottom-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 fill-current text-gray-500 cursor-pointer hover:text-gray-600"
            viewBox="0 0 512 512"
          >
            <path d="M376 120v257c0 16.871-5.602 32.457-15.04 45H512V120zm0 0M0 0h60v512H0zm0 0M301 332h-45v45c0 24.75 20.25 45 45 45s45-20.25 45-45-20.25-45-45-45zm0 0M301 30H90v15.715c59.984 70.094 59.984 170.476 0 240.57V302h211c16.871 0 32.457 5.602 45 15.04V75c0-24.75-20.25-45-45-45zm0 0"></path>
          </svg>
        </div>
      </div>
    </>
  );
}

export default ThreadMessage;
