import React from "react"

function WritePost() {
  return (
    <div className="bg-white rounded-lg h-auto p-3 shadow-sm mb-5 dark:bg-gray-card">
      <div className="flex items-center">
        <div>
          <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src="https://randomuser.me/api/portraits/med/men/78.jpg"
            alt=""
          />
        </div>
        <div className="w-full ml-2">
          <input
            className="bg-gray-100 w-full rounded-full p-3 h-3/5 focus:outline-none dark:bg-gray-darkhover "
            placeholder="Say something"
          />
        </div>
      </div>
    </div>
  )
}

export default WritePost
