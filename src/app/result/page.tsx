"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ParsedData } from "@/types/types";
import Confettie from "react-confetti";
import Image from "next/image";
import questionImage from "../../..//public/question_mark.png";
import CorrectImage from "../../../public/Correct2.png";
import InCorrectImage from "../../../public/Incorrect.png";
import TimerImage from "../../../public/Timer.png";
import coinImage from "../../../public/coin.png";

const Page = () => {
  // React confettie logic
  const [onConfettie, setOnConfettie] = useState(true);
  const [innerWidth, setInnerWidth] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);
  const detectSize = () => {
    setInnerHeight(window.innerHeight);
    setInnerWidth(window.innerWidth);
  };
  useEffect(() => {
    setInnerHeight(window.innerHeight);
    setInnerWidth(window.innerWidth);
  }, []);
  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  });
  useEffect(() => {
    setTimeout(() => {
      setOnConfettie(false);
    }, 5000);
  }, []);
  const [parSedData, setparSedData] = useState<ParsedData | null>(null);

  useEffect(() => {
    const Rawdata = localStorage.getItem("result");
    if (Rawdata) {
      setparSedData(JSON.parse(Rawdata));
    }
  }, []);
  if (!parSedData) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="min-h-screen bg-[#8e8cec] flex items-center justify-center gap-5 flex-col">
      {onConfettie && (
        <Confettie width={innerWidth - 20} height={innerHeight} />
      )}
      <div className="resultDiv">
        <div className="mx-auto px-4 sm:px-6 lg:py-24 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Your Result
          </h2>
          <div className="flex justify-around items-center flex-wrap gap-3 mt-4">
            <div className="transform w-52  rounded-xl bg-white shadow-xl transition duration-300 hover:rotate-180  overflow-hidden  sm:rounded-lg dark:bg-gray-900">
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">
                    Total Questions
                  </dt>
                  <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400 flex gap-3">
                    <Image
                      src={questionImage.src}
                      alt="Question Image"
                      className="w-10"
                      height={100}
                      width={100}
                    />
                    <p>{parSedData?.question?.length}</p>
                  </dd>
                </dl>
              </div>
            </div>
            <div className="transform w-52  rounded-xl bg-white shadow-xl transition duration-300 hover:rotate-180  overflow-hidden  sm:rounded-lg dark:bg-gray-900">
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">
                    Correct
                  </dt>
                  <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400 flex gap-3">
                    <Image
                      src={CorrectImage.src}
                      alt="Question Image"
                      className="w-10"
                      height={100}
                      width={100}
                    />
                    <p>{parSedData?.correct}</p>
                  </dd>
                </dl>
              </div>
            </div>
            <div className="transform w-52  rounded-xl bg-white shadow-xl transition duration-300 hover:rotate-180  overflow-hidden  sm:rounded-lg dark:bg-gray-900">
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">
                    Incorrect
                  </dt>
                  <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400 flex gap-3">
                    <Image
                      src={InCorrectImage.src}
                      alt="Question Image"
                      className="w-10"
                      height={100}
                      width={100}
                    />
                    <p>{parSedData?.incorrect}</p>
                  </dd>
                </dl>
              </div>
            </div>
            <div className="transform w-52  rounded-xl bg-white shadow-xl transition duration-300 hover:rotate-180  overflow-hidden  sm:rounded-lg dark:bg-gray-900">
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">
                    Time Taken
                  </dt>
                  <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400 flex gap-3">
                    <Image
                      src={TimerImage.src}
                      alt="Question Image"
                      className="w-10"
                      height={100}
                      width={100}
                    />
                    <p>{parSedData?.Time} s</p>
                  </dd>
                </dl>
              </div>
            </div>
            <div className="transform w-52  rounded-xl bg-white shadow-xl transition duration-300 hover:rotate-180  overflow-hidden  sm:rounded-lg dark:bg-gray-900">
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">
                    Total Coin Earns
                  </dt>
                  <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400 flex gap-3">
                    <Image
                      src={coinImage.src}
                      alt="Question Image"
                      className="w-10"
                      height={100}
                      width={100}
                    />
                    <p>{parSedData?.coin}</p>
                  </dd>
                </dl>
              </div>
            </div>
            <div className="transform w-52  rounded-xl bg-white shadow-xl transition duration-300 hover:rotate-180  overflow-hidden  sm:rounded-lg dark:bg-gray-900">
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">
                    Average Time Taken
                  </dt>
                  <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400 flex gap-3">
                    <Image
                      src={TimerImage.src}
                      alt="Question Image"
                      className="w-10"
                      height={100}
                      width={100}
                    />
                    <p>{parSedData?.Time / parSedData.question.length} s</p>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="button flex my-4 md:my-0 flex-col items-center gap-3">
        <Link href={"/review"}>
          <button className="bg-white px-4 py-2 rounded-md ">
            Review Questions
          </button>
        </Link>
        <Link href={"/leaderboard"}>
          <button className="bg-white px-4 py-2 rounded-md ">
            Leaderboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
