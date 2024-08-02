import React from "react";
import { quizCategoryArray } from "../Constants/Constant";
import Link from "next/link";
const About = () => {
  return (
    <div className="bg-slate-900">
      <div className="heading flex justify-center items-center bg-slate-900 flex-col">
        <p className="text-white md:text-5xl text-2xl">Start Quizes</p>{" "}
        <p className="text-white">
          Start playing quizes in different categories
        </p>
      </div>
      <div className="cards flex justify-center items-center flex-wrap w-full">
        {quizCategoryArray.map((ele, ind) => {
          return (
            <div className="some m-4" key={ind}>
              <div className="group  relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                <div className="relative z-10 mx-auto max-w-md">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-10 w-10 text-white transition-all"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                  </span>
                  <span>
                    <p className="text-center font-extrabold text-3xl text-sky-500 hover:text-black">
                      {ele.title}
                    </p>
                  </span>
                  <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                    <p>
                      Perfect for learning how the framework works, prototyping
                      a new idea, or creating a demo to share online.
                    </p>
                  </div>
                  <div className="pt-5 text-base font-semibold leading-7">
                    <p>
                      <Link
                        href="/quizs"
                        className="text-sky-500 transition-all duration-300 group-hover:text-white"
                      >
                        <button>Start Now</button> &rarr;
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center">
        <Link href={"/quizs"}>
          <button className="bg-white px-6 py-4 rounded-md m-4">
            View All Quiz
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
