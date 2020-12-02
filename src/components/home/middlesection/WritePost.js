import React from "react";

function WritePost() {
  return (
    <div className="bg-white rounded-lg h-auto p-3 shadow-sm mb-5 dark:bg-gray-card">
      <div className="flex items-center">
        <div>
          <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src="https://scontent.fceb1-1.fna.fbcdn.net/v/t1.0-9/116893716_3204324283015870_5983696327049027815_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGkR2afXv9hVLQO9qHDHEblld2WR0vxCx6V3ZZHS_ELHk30MP1YjTLn4NFdzGoEQZqu0OZrr2VkTI601kN6oWwk&_nc_ohc=RWw4GqvNl28AX8BxdnA&_nc_ht=scontent.fceb1-1.fna&oh=56bfd0b69e5b341fb4067fed44980c99&oe=5FE7DD48"
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
  );
}

export default WritePost;
