import React from "react";

const ForumSingle = React.lazy(() => import("./ForumSingle"));
const ForumSingleFilter = React.lazy(() => import("./ForumSingleFilter"));
const ForumList = React.lazy(() => import("./ForumList"));
const Pagination = React.lazy(() => import("./Pagination"));
const ForumThread = React.lazy(() => import("./ForumThread"));
const ForumSingleThread = React.lazy(() => import("./ForumSingleThread"));
const ThreadMessage = React.lazy(() => import("./ThreadMessage"));

export {
  ForumList,
  ForumSingle,
  ForumSingleFilter,
  Pagination,
  ForumThread,
  ForumSingleThread,
  ThreadMessage,
};
