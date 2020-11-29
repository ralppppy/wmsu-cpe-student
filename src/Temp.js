import "./App.css";
import Post from "./components/home/middlesection/Post";
import WritePost from "./components/home/middlesection/WritePost";
import NavBar from "./components/layout/NavBar/NavBar";

function Temp() {
  document.querySelector("#root").classList.add("dark:bg-black");
  return (
    <div className={`dark:bg-black`}>
      <NavBar />

      <div className="grid grid-cols-12  mt-3 ml-3 gap-1">
        <div className="col-span-3 p-4">
          <div className="h-full fixed">
            <div class="flex items-center mt-4">
              <div>
                <img
                  class="inline-block h-11 w-11 rounded-full ring-2 ring-white"
                  src="https://scontent.fceb1-1.fna.fbcdn.net/v/t1.0-9/116893716_3204324283015870_5983696327049027815_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGkR2afXv9hVLQO9qHDHEblld2WR0vxCx6V3ZZHS_ELHk30MP1YjTLn4NFdzGoEQZqu0OZrr2VkTI601kN6oWwk&_nc_ohc=RWw4GqvNl28AX8BxdnA&_nc_ht=scontent.fceb1-1.fna&oh=56bfd0b69e5b341fb4067fed44980c99&oe=5FE7DD48"
                  alt=""
                />
              </div>
              <div>
                <h4 className="font-bold ml-3 text-center dark:text-gray-300">
                  Ralp Yosores
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-6">
          <WritePost />

          {new Array(2).fill(1).map((d, index) => (
            <Post key={index} />
          ))}
        </div>
        <div className=" col-span-3"></div>
      </div>
    </div>
  );
}

export default Temp;
