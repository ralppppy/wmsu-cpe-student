import { useState, useEffect, Suspense } from "react";
import { withRouter } from "react-router-dom";
import { Spinner } from "../components/common";
import { ForumList, ForumSingle, ForumSingleThread } from "../components/forum";

function Forum({ match }) {
  const urlParams = match.params;
  const basePath = "/forum";

  const FORUM_LINKS = {
    forum: basePath,
    forumSingle: `${basePath}/${urlParams.forumCategory}/${urlParams.forumName}`,
    forumSingleThread: `${basePath}/${urlParams.forumCategory}/${urlParams.forumName}/${urlParams.threadName}`,
  };

  const renderPage = (match, FORUM_LINKS) => {
    switch (match.url) {
      case FORUM_LINKS.forum:
        return <ForumList />;
      case FORUM_LINKS.forumSingle:
        return <ForumSingle />;
      case FORUM_LINKS.forumSingleThread:
        return <ForumSingleThread />;
      default:
        return <ForumList />;
    }
  };

  return (
    <div className="col-span-9  mr-5 rounded-md p-5  h-full">
      <Suspense
        fallback={
          <div className="flex items-center justify-center">
            <Spinner />
          </div>
        }
      >
        <div className="text-gray-700 dark:text-gray-300">
          {renderPage(match, FORUM_LINKS)}
        </div>
      </Suspense>
    </div>
  );
}

export default withRouter(Forum);
