import React from "react";
import { Parallax } from "react-scroll-parallax";

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
      {/* <div className="bg-white p-5">
        Excepteur incididunt consequat sint mollit Lorem exercitation qui qui
        voluptate voluptate. Lorem ea tempor irure eiusmod. Incididunt culpa
        reprehenderit nostrud proident elit do dolore irure eu. Minim id minim
        dolore aute cillum commodo. Eiusmod irure id id sit officia ipsum est
        ipsum cupidatat proident ut. Ut veniam elit officia Lorem minim
        consectetur elit nostrud ea sunt nisi. In aliqua non nisi eu voluptate
        non aute ipsum duis nisi exercitation culpa. Aliquip dolore voluptate
        esse nisi tempor quis deserunt sunt sint. Enim laboris Lorem aliqua
        proident velit mollit ex eiusmod id ipsum veniam esse consequat do.
        Tempor incididunt et occaecat enim nisi. Non excepteur amet sunt elit
        aliqua esse ea cupidatat. Velit incididunt tempor incididunt fugiat
        incididunt velit deserunt aute. Dolore minim veniam ut velit culpa
        excepteur tempor nulla non exercitation eiusmod voluptate in.
        Reprehenderit eu deserunt exercitation consequat eu laborum cupidatat
        incididunt sit cupidatat et cillum deserunt cupidatat. Veniam veniam
        aliqua sint labore cillum incididunt officia amet mollit nulla ea. Sit
        ipsum fugiat exercitation ut ad irure et consectetur ex labore anim et
        aliqua qui. Mollit minim adipisicing veniam non voluptate et adipisicing
        labore laborum excepteur. Eiusmod qui Lorem laboris qui minim dolor
        cillum magna officia occaecat laborum. Magna laboris laborum mollit
        enim. Pariatur exercitation in ipsum labore proident. Occaecat do ipsum
        irure cillum do aliquip ad quis quis mollit anim. Ipsum quis eiusmod ut
        esse sunt eiusmod. Nostrud ut eu commodo sit fugiat fugiat occaecat eu
        ipsum pariatur. Magna et cupidatat anim anim qui est exercitation. Dolor
        labore velit commodo ea aliqua deserunt ullamco proident anim. Sit
        commodo enim consectetur aliqua. Do laborum adipisicing eiusmod velit
        sunt nulla elit labore magna ex sit veniam aute. Culpa incididunt in
        reprehenderit qui.
      </div> */}
      <ReactJkMusicPlayer
        className="bg-red-500"
        defaultPosition={{ right: 20, bottom: 20 }}
        {...options}
      />
    </div>
  );
}

export default Profile;
