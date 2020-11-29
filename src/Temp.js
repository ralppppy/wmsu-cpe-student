import "./App.css";
import Post from "./components/home/middlesection/Post";
import WritePost from "./components/home/middlesection/WritePost";
import NavBar from "./components/layout/NavBar/NavBar";

import gant from "./assets/images/gantt.png";
import todo from "./assets/images/todo.png";
import flowChart from "./assets/images/flow-chart.png";
import coding from "./assets/images/coding.png";
import account from "./assets/images/account.png";
import notebook from "./assets/images/notebook.png";
import exam from "./assets/images/exam.png";
import performance from "./assets/images/performance.png";

function Temp() {
  document.querySelector("#root").classList.add("dark:bg-black");

  const STUDENT_TOOLS = [
    {
      title: "TODO List Manager",
      icon: (
        <>
          <img className="h-9 w-9 " src={todo} />
        </>
      ),
    },
    {
      title: "Gant Chart",
      icon: (
        <>
          <img className="h-9 w-9 " src={gant} />
        </>
      ),
    },
    {
      title: "Flow Chart Creator",
      icon: (
        <>
          <img className="h-9 w-9 " src={flowChart} />
        </>
      ),
    },
    {
      title: "Programming HUB",
      icon: (
        <>
          <img className="h-9 w-9 " src={coding} />
        </>
      ),
    },
    { title: "Comming soon...", icon: "" },
  ];

  const USER = [
    {
      title: "Ralp Yosores",
      icon: (
        <>
          <img
            className="inline-block h-11 w-11 rounded-full ring-2 ring-white"
            src="https://scontent.fceb1-1.fna.fbcdn.net/v/t1.0-9/116893716_3204324283015870_5983696327049027815_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGkR2afXv9hVLQO9qHDHEblld2WR0vxCx6V3ZZHS_ELHk30MP1YjTLn4NFdzGoEQZqu0OZrr2VkTI601kN6oWwk&_nc_ohc=RWw4GqvNl28AX8BxdnA&_nc_ht=scontent.fceb1-1.fna&oh=56bfd0b69e5b341fb4067fed44980c99&oe=5FE7DD48"
            alt=""
          />
        </>
      ),
    },
    {
      title: "Account Settings",
      icon: (
        <>
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src={account}
            alt=""
          />
        </>
      ),
    },
    {
      title: "School Subjects",
      icon: (
        <>
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src={notebook}
            alt=""
          />
        </>
      ),
    },
    {
      title: "School Performance",
      icon: (
        <>
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src={performance}
            alt=""
          />
        </>
      ),
    },
    {
      title: "Grades?",
      icon: (
        <>
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src={exam}
            alt=""
          />
        </>
      ),
    },
  ];

  return (
    <div className={`dark:bg-black`}>
      <NavBar />

      <div className="grid grid-cols-12  mt-3 ml-2 gap-1 ">
        <div className="col-span-3">
          <div className="h-full w-2/12	 fixed ">
            <div className="mb-5">
              {USER.map((menu, index) => (
                <div
                  key={index}
                  class="flex items-center mt-4 hover:bg-gray-200 pl-5 pr-5 cursor-pointer"
                >
                  <div>{menu.icon}</div>
                  <div>
                    <h4 className="font-bold ml-3 text-center dark:text-gray-300">
                      {menu.title}
                    </h4>
                  </div>
                </div>
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
                  class="flex items-center mt-4 hover:bg-gray-200 pl-5 pr-5 cursor-pointer"
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
        </div>
        <div className="col-span-6 mt-3">
          <WritePost />

          {new Array(25).fill(1).map((d, index) => (
            <Post key={index} />
          ))}
        </div>
        <div className=" col-span-3"></div>
      </div>
    </div>
  );
}

export default Temp;
