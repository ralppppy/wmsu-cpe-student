import React from "react";
import NavBar from "../NavBar/NavBar";
import LeftMenu from "./LeftMenu";

function StudentLayout({ children }) {
  return (
    <div className={`dark:bg-gray-background h-full`}>
      <NavBar />
      <div className="grid grid-cols-12  mt-3 ml-2 gap-1 ">
        <div className="col-span-3">
          <LeftMenu />
        </div>
        {children}
      </div>
    </div>
  );
}

export default StudentLayout;
