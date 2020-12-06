import React from "react";
import LeftIcon from "./LeftIcon";
import MiddleMenu from "./MiddleMenu";
import RightSearch from "./RightSearch";

function NavBar() {
  return (
    <div className="grid grid-cols-3 flex items-center z-50 h-16 w-100 shadow-md bg-white dark:bg-gray-card dark:text-gray-100 sticky top-0 ">
      <div className="flex items-center ml-3">
        <LeftIcon />
      </div>
      <div className="flex items-center justify-center">
        <MiddleMenu />
      </div>

      <div className="flex items-center  h-full relative mr-3">
        <RightSearch />
      </div>
    </div>
  );
}

export default NavBar;
