import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "../common";
import ForumListCard from "./ForumListCard";

function ForumList() {
  return (
    <>
      {new Array(4).fill(1).map((d, i) => (
        <div className="mb-5" key={i}>
          <h2 className="font-bold text-2xl">Forum Category {i + 1}</h2>
          <div class="grid md:grid-cols-3 gap-4 ">
            {new Array(7).fill(1).map((d, index) => (
              <Link
                key={index}
                to={`/forum/forum-category-${i + 1}/forum-name-${index + 1}`}
              >
                <Suspense fallback={<>Loading</>}>
                  <ForumListCard />
                </Suspense>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default ForumList;
