import React from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

function Profile() {
  const audioList1 = [
    {
      name: "Before You Go",
      singer: "Lewis Capaldi",
      cover:
        "https://yt3.ggpht.com/ytc/AAUvwng9i-_mtPyX12pclYOOHahF4sUWHIqi58OrwpGh=s900-c-k-c0x00ffffff-no-rj",
      musicSrc:
        "https://res.cloudinary.com/drn5afxnm/video/upload/v1608036128/Lewis_Capaldi_-_Before_You_Go_Official_Video_uowoy2.mp3",
    },
    {
      name: "Say You Wont Let Go",
      singer: "James Arthur",
      cover:
        "https://pbs.twimg.com/profile_images/1169923533885124608/KTxNjxBx_400x400.jpg",
      musicSrc:
        "https://res.cloudinary.com/drn5afxnm/video/upload/v1608036430/James_Arthur_-_Say_You_Won_t_Let_Go_Lyrics_ivdnb1.mp3",
    },
  ];

  const options = {
    audioLists: audioList1,
  };

  return (
    <div className="rounded-md p-5 h-full w-2/3 mx-auto bg-white">
      <div class="p-4 rounded-md relative">
        <img
          src="https://hips.hearstapps.com/clv.h-cdn.co/assets/15/29/1600x1066/gallery-1437067578-154393612.jpg?resize=768:*"
          class="object-cover h-80 w-full rounded-lg"
        />

        <div className="absolute bottom-0 left-10">
          <img
            class="inline-block h-28 w-28 rounded-full ring-2 ring-white"
            src="https://scontent.fceb1-1.fna.fbcdn.net/v/t1.0-9/116893716_3204324283015870_5983696327049027815_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGkR2afXv9hVLQO9qHDHEblld2WR0vxCx6V3ZZHS_ELHk30MP1YjTLn4NFdzGoEQZqu0OZrr2VkTI601kN6oWwk&_nc_ohc=RWw4GqvNl28AX8BxdnA&_nc_ht=scontent.fceb1-1.fna&oh=56bfd0b69e5b341fb4067fed44980c99&oe=5FE7DD48"
            alt=""
          />
        </div>
      </div>
      <div>
        <div className="ml-4 mt-3 flex items-center space-x-3">
          <h1 className="text-lg font-bold">Ralp Yosores</h1>
          {/* <h1 className="text-xs text-gray-500">
            Bachelor of Science in Computer Engineering.
          </h1> */}
        </div>
        <div className="ml-4 mt-1 flex items-center space-x-3">
          <h1 className="text-sm">
            Et eu labore qui commodo officia laboris occaecat amet ad.
          </h1>
        </div>
      </div>
      <ReactJkMusicPlayer
        className="bg-red-500"
        defaultPosition={{ right: 20, bottom: 20 }}
        {...options}
      />
    </div>
  );
}

export default Profile;
