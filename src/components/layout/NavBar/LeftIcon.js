import React from "react";

function LeftIcon() {
  return (
    <>
      <div>
        <img
          class="inline-block h-11 w-11 rounded-full ring-2 ring-white"
          src="http://wmsu-cpe.herokuapp.com/brand/brand@2x.png"
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
