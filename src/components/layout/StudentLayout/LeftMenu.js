import React from "react"
import gant from "../../../assets/images/gantt.png"
import todo from "../../../assets/images/todo.png"
import flowChart from "../../../assets/images/flow-chart.png"
import coding from "../../../assets/images/coding.png"
import account from "../../../assets/images/account.png"
import notebook from "../../../assets/images/notebook.png"
import exam from "../../../assets/images/exam.png"
import performance from "../../../assets/images/performance.png"
import { Link } from "react-router-dom"

function LeftMenu() {
  const STUDENT_TOOLS = [
    {
      title: "TODO List Manager",
      icon: (
        <>
          <img alt="icon" className="h-9 w-9 " src={todo} />
        </>
      ),
    },
    {
      title: "Gant Chart",
      icon: (
        <>
          <img alt="icon" className="h-9 w-9 " src={gant} />
        </>
      ),
    },
    {
      title: "Flow Chart Creator",
      icon: (
        <>
          <img alt="icon" className="h-9 w-9 " src={flowChart} />
        </>
      ),
    },
    {
      title: "Programming HUB",
      icon: (
        <>
          <img alt="icon" className="h-9 w-9 " src={coding} />
        </>
      ),
    },
    { title: "Comming soon...", icon: "" },
  ]

  const USER = [
    {
      title: "Ralp Yosores",
      icon: (
        <>
          <img
            alt="icon"
            className="inline-block h-11 w-11 rounded-full ring-2 ring-white"
            src="https://randomuser.me/api/portraits/med/men/78.jpg"
          />
        </>
      ),
      link: "/profile/ralppppy",
    },

    {
      title: "School Subjects",
      icon: (
        <>
          <img
            alt="icon"
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src={notebook}
          />
        </>
      ),
    },
    {
      title: "School Performance",
      icon: (
        <>
          <img
            alt="icon"
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src={performance}
          />
        </>
      ),
    },
    {
      title: "Grades?",
      icon: (
        <>
          <img
            alt="icon"
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src={exam}
          />
        </>
      ),
    },
    {
      title: "Account Settings",
      icon: (
        <>
          <img
            alt="icon"
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src={account}
          />
        </>
      ),
    },
  ]
  return (
    <div className="h-full w-2/1 fixed dark:bg-gray-background">
      <div className="mb-5">
        {USER.map((menu, index) => (
          <Link
            to={menu.link}
            key={index}
            className="flex items-center pb-2 pt-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 pl-5 pr-5 cursor-pointer"
          >
            <div>{menu.icon}</div>
            <div>
              <h4 className="font-bold ml-3 text-center dark:text-gray-300">
                {menu.title}
              </h4>
            </div>
          </Link>
        ))}
      </div>
      <div className="h-px bg-black w-full bg-gray-200"></div>
      <div className="mt-5 ml-5 mb-5 text-gray-500 font-bold">
        Student Tools
      </div>
      <div className="mb-5">
        {STUDENT_TOOLS.map((tool, index) => (
          <div
            key={index}
            className="flex items-center rounded-md pb-2 pt-2 hover:bg-gray-200 dark:hover:bg-gray-700 pl-5 pr-5 cursor-pointer"
          >
            <div>{tool.icon}</div>
            <div>
              <h4 className="font-bold ml-3 text-center dark:text-gray-300">
                {tool.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LeftMenu
