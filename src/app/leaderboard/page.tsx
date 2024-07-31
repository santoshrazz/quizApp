"use client";
import React, { useState } from "react";
import UserImage from "../../../public/User.png";
import Second from "../../../public/Two.png";
import Three from "../../../public/Three.png";
import One from "../../../public/one.png";
import Crown from "../../../public/Crown2.png";
import coin from "../../../public/coin.png";
import { leaderBoardData } from "@/Constants/Constant";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Page = () => {
  // Pagination Logic
  const [index, setIndex] = useState(5);
  const initArray = new Array(leaderBoardData.length);
  for (let i = 0; i < index; i++) {
    initArray.push(leaderBoardData[i]);
  }
  const handleOnclick = () => {
    const target = index + 5;
    if (target >= leaderBoardData.length) {
      return;
    } else {
      setIndex(index + 5);
    }
  };

  // GSAP Animation
  useGSAP(() => {
    const timeline = gsap.timeline();
    timeline.from(".firstDiv", {
      x: -500,
      duration: 1,
      opacity: 0,
      display: "none",
    });
    timeline.from(".secondDiv", {
      y: -800,
      duration: 1,
      display: "none",
    });
    timeline.from(".thirdDiv", {
      x: 700,
      duration: 1,
      opacity: 0,
      display: "none",
    });
  }, []);
  return (
    <div className="min-h-screen bg-[#1c373f] flex justify-center items-center flex-col">
      <div className=" w-full md:w-[57%] ">
        <div className="w-full flex gap-3 rounded-md ">
          <div className="z-[100] flex items-center justify-start  pl-[18px] lg:pl-0 md:text-4xl cursor-pointer text-yellow400 "></div>
          <h1 className="text-lg text-white text-center flex w-full items-center justify-center  md:text-4xl cursor-pointer font-[Montserrat] text-yellow400">
            Leaderboard
          </h1>
        </div>
        <div className="flex flex-col justify-center  items-center mt-[6rem] sm:mt-[6rem] mb-[1rem]">
          <div className="w-full py-[5px]">
            <div className="flex w-full justify-center items-end text-white">
              <div className="firstDiv bg-[#2E4950] w-[28%] h-fit py-[.7rem] sm:py-[.5rem] rounded-tl-xl rounded-bl-xl">
                <div className="relative  flex justify-center items-center flex-col animate__animated animate__backInLeft animate__delay-1s">
                  <img
                    src={Second.src}
                    alt="second"
                    className=" w-16 md:w-28 z-50 absolute top-[3px] sm:top-[6px] xl:top-[15px] xxl:top-[0px] left-[51%] transform -translate-x-1/2"
                  />
                  <img
                    src={UserImage.src}
                    alt="second"
                    className="h-[69px] w-[69px] sm:w-[100px] sm:h-[100px] rounded-[50%] absolute top-[-40px] sm:top-[-56px] border-[3px] border-blue400 "
                  />
                  <div className="mt-[3rem] sm:mt-[5rem] flex flex-col items-center gap-2">
                    <h1 className="text-xl font-[Montserrat] sm:text-2xl text-center  font-black">
                      Rajat Singh
                    </h1>
                    <h1 className=" font-black text-2xl text-blue400 ">40</h1>
                  </div>
                </div>
              </div>
              <div className="secondDiv bg-[#2E4950]  w-[28%] h-fit py-[3rem] pt-[2rem] rounded-t-xl">
                <div className="relative flex justify-end items-center flex-col animate__animated animate__backInDown animate__delay-2s">
                  <img
                    src={One.src}
                    alt="first"
                    className=" w-8 md:w-14 z-50 absolute top-[-5px] xxxl:top-[-9px] xxl:top-[-29px] left-[51%] transform -translate-x-1/2"
                  />
                  <img
                    src={Crown.src}
                    alt="crown"
                    className="w-28 sm:w-[35%] z-50 absolute top-[-121px] md:top-[-109px] lg:top-[-122px] xxxl:top-[-125px] xxl:top-[-132px] left-[50%] transform -translate-x-1/2"
                  />
                  <img
                    src={UserImage.src}
                    alt="first"
                    className="h-[69px] w-[69px]  sm:w-[100px] sm:h-[100px] absolute rounded-[50%] top-[-84px] sm:top-[-77px] border-[3px] border-yellow300"
                  />
                  <div className="mt-[1rem] sm:mt-[4rem] flex flex-col items-center gap-2">
                    <h1 className=" text-sm font-[Montserrat] sm:text-2xl  text-center  font-black">
                      Nikhil Paswan
                    </h1>
                    <h1 className=" font-black text-2xl text-blue400 ">40</h1>
                  </div>
                </div>
              </div>
              <div className="thirdDiv bg-[#2E4950] w-[28%] h-fit rounded-tr-xl rounded-br-xl">
                <div className="relative  flex justify-center items-center flex-col animate__animated animate__backInRight ">
                  <img
                    src={Three.src}
                    alt="three"
                    className="w-14  md:w-20 z-10 absolute top-[3px] sm:top-[-5%] left-[51%] xl:top-[9px] xxl:top-[9px] transform -translate-x-1/2"
                  />
                  <img
                    src={UserImage.src}
                    alt="third"
                    className="h-[69px] w-[69px] sm:w-[100px] sm:h-[100px] absolute top-[-40px] sm:top-[-44px] border-2 border-green400 rounded-[50%] "
                  />
                  <div className="mt-[3rem] sm:mt-[5rem] flex flex-col items-center gap-2">
                    <h1 className=" text-sm font-[Montserrat] text-center sm:text-2xl font-black">
                      Neeraj Chopra
                    </h1>
                    <h1 className=" font-black text-2xl text-blue400 ">40</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lists min-h-screen  bg-[#2E4950] md:w-8/12 w-[90%] p-4 rounded-md">
        {initArray.map((e: any, ind: number) => {
          return (
            <div
              key={ind}
              className="bg-gray-800 my-4 h-14 hover:scale-105 ease-in duration-100 rounded-md cursor-pointer flex items-center justify-around"
            >
              <div className="rank">
                <p className="text-white text-2xl">{e.rank}</p>
              </div>
              <div className="nameAndAvatar flex gap-2 items-center">
                <img src={UserImage.src} alt="User Image" className="w-10" />
                <p className="text-white font-semibold text-sm md:text-2xl">
                  {e.name}
                </p>
              </div>
              <div className="coin flex items-center gap-2">
                <img src={coin.src} alt="Coin" className="w-8" />
                <p className="text-white font-semibold text-2xl">{e.coin}</p>
              </div>
            </div>
          );
        })}
        <div className="button w-1/4 m-auto flex justify-center items-center">
          <button
            type="button"
            onClick={handleOnclick}
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Load More...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
