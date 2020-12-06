import { ForumSingleFilter, Pagination, ForumThread } from "./";

function ForumSingle() {
  return (
    <div className="col-span-9   mr-5 rounded-md p-5  h-full mb-5">
      <h2 className="font-bold text-2xl ">Forum Title</h2>
      <div className="flex justify-end mb-3">
        <Pagination />
      </div>

      <ForumSingleFilter />

      <ForumThread />
    </div>
  );
}

export default ForumSingle;
