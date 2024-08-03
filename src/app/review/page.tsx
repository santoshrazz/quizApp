"use client";
import React, { useEffect, useState } from "react";
import coinImage from "../../../public/coin.png";
import CorrectImage from "../../../public/Correct2.png";
import IncorrectImage from "../../../public/Incorrect.png";
import ClockImage from "../../../public/Timer.png";
import { ParsedData } from "@/types/types";
import Image from "next/image";
const Page = () => {
  const [result, setResult] = useState<ParsedData | null>(null);
  // @ts-ignore
  // const result: any = JSON.parse(resultString);
  console.log(result);
  useEffect(() => {
    const resultString = localStorage.getItem("result");
    if (resultString) {
      setResult(JSON.parse(resultString));
    }
  }, []);

  return (
    <div className=" bg-gradient-to-tl from-lime-200 via-sky-500 to-violet-500 ">
      {/* Coin Ui Start */}
      <div className="quizNav flex justify-end items-end p-2 ">
        <p className="flex bg-white p-2 cursor-pointer rounded-lg gap-1">
          <img src={coinImage.src} className="w-5" alt="" />
          <span className="font-semibold">{result?.coin}</span>
        </p>
      </div>
      {/* Coin Ui  End*/}

      <div className="mainDiv flex justify-center items-center w-full h-full">
        <div className="question  p-4 my-3 rounded-md">
          {/* Question Ui Start */}
          {result?.question.map((ele: any, ind: number) => {
            return (
              <div key={ind} className="my-3 bg-white p-4 rounded-md">
                <div className="flex justify-between items-center w-full">
                  <div className="flex">
                    <p className="text-[17px] md:text-xl font-[Montserrat] font-semibold">
                      Ques {ind + 1}:
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      aria-label="time spent"
                      className="flex gap-1 border-2 font-[Montserrat] bg-grey800 border-white p-[7px] rounded-lg"
                    >
                      {ele.ans === ele.que.correct ? (
                        <Image
                          src={CorrectImage.src}
                          height={100}
                          width={100}
                          alt=""
                          className="h-5 w-5"
                        />
                      ) : (
                        <Image
                          src={IncorrectImage.src}
                          height={100}
                          width={100}
                          alt=""
                          className="h-5 w-5"
                        />
                      )}
                    </button>
                    <button
                      aria-label="score"
                      type="button"
                      className="text-xl text-yellow400 font-[Montserrat] bg-grey800 border-2 border-white h-[43px] p-2 rounded-lg flex items-center gap-1"
                    >
                      <img
                        alt=""
                        loading="lazy"
                        width="20"
                        height="20"
                        decoding="async"
                        data-nimg="1"
                        className="w-[20px] font-[Montserrat]"
                        src={ClockImage.src}
                        style={{ color: "transparent" }}
                      />
                      <p className="font-[Montserrat] text-[16px]">
                        {ele.timePerQue}
                      </p>
                    </button>
                    <button
                      aria-label="score"
                      type="button"
                      className="text-xl text-yellow400 font-[Montserrat] bg-grey800 border-2 border-white h-[43px] p-2 rounded-lg flex items-center gap-1"
                    >
                      <img
                        alt=""
                        loading="lazy"
                        width="20"
                        height="20"
                        decoding="async"
                        data-nimg="1"
                        className="w-[20px] font-[Montserrat]"
                        src={coinImage.src}
                        style={{ color: "transparent" }}
                      />
                      <p className="font-[Montserrat] text-[16px]">
                        {ele.ans === ele.que.correct ? "10" : "0"}
                      </p>
                    </button>
                  </div>
                </div>
                <div className="pt-4">
                  <div>
                    <p className=" font-semibold">{ele.que.Question}</p>
                  </div>
                </div>
                <div className=" flex items-center gap-1 relative">
                  <p>Options :</p>
                </div>
                <p
                  className={`border-2 ${
                    ele.que.correct === 1 ? "bg-green-500/80 text-white" : ""
                  } hover:border-black m-2 p-2 cursor-pointer ${
                    ele.ans === 1 && ele.ans != ele.que.correct
                      ? "bg-red-500"
                      : ""
                  }`}
                >
                  1.{ele.que.A}
                </p>

                <p
                  className={`border-2 ${
                    ele.que.correct === 2 ? "bg-green-500/80 text-white" : ""
                  } hover:border-black m-2 p-2 cursor-pointer ${
                    ele.ans === 2 && ele.ans != ele.que.correct
                      ? "bg-red-500"
                      : ""
                  }`}
                >
                  2. {ele.que.B}
                </p>
                <p
                  className={`border-2 ${
                    ele.que.correct === 3 ? "bg-green-500/80 text-white" : ""
                  } hover:border-black m-2 p-2 cursor-pointer ${
                    ele.ans === 3 && ele.ans != ele.que.correct
                      ? "bg-red-500"
                      : ""
                  }`}
                >
                  3. {ele.que.C}
                </p>
                <p
                  className={`border-2 ${
                    ele.que.correct === 4 ? "bg-green-500/80 text-white" : ""
                  } hover:border-black m-2 p-2 cursor-pointer ${
                    ele.ans === 4 && ele.ans != ele.que.correct
                      ? "bg-red-500"
                      : ""
                  }`}
                >
                  4.{ele.que.D}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
