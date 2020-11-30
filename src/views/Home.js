import React, { useEffect, useState } from "react";
import Post from "../components/home/middlesection/Post";
import WritePost from "../components/home/middlesection/WritePost";
import RightSection from "../components/home/rightsection/RightSection";

function Home() {
  return (
    <>
      <div className="col-span-6 mt-3">
        <WritePost />

        {new Array(25).fill(1).map((d, index) => (
          <Post key={index} />
        ))}
      </div>

      <div className="col-span-3 ml-3  ">
        <RightSection />
      </div>
    </>
  );
}

export default Home;
