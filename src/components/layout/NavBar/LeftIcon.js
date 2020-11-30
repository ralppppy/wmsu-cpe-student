import React from "react";
import cpeLogo from "../../../assets/images/cpelogo.png";

function LeftIcon() {
  return (
    <>
      <div>
        <img
          className="inline-block h-11 w-11 rounded-full ring-2 ring-white"
          src={cpeLogo}
          alt=""
        />
      </div>
      <div>
        <h1 className="font-bold ml-3 text-center">
          WMSU Computer Engineering
        </h1>
      </div>
    </>
  );
}

export default LeftIcon;
