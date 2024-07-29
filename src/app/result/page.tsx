"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ParsedData } from "@/types/types";

const Page = () => {
  const [parSedData, setparSedData] = useState<ParsedData | null>(null);
  console.log(parSedData);

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
    <div className="min-h-screen bg-[#8e8cec] flex items-center justify-center flex-col">
      <div className="resultDiv">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:py-24 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Your Result
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-4 mt-4">
            <div className="transform  rounded-xl bg-white shadow-xl transition duration-300 hover:rotate-180  overflow-hidden  sm:rounded-lg dark:bg-gray-900">
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">
                    Total Questions
                  </dt>
                  <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">
                    {parSedData?.question?.length}
                  </dd>
                </dl>
              </div>
            </div>
            <div className="transform  rounded-xl bg-white shadow-xl transition duration-300 hover:rotate-180  overflow-hidden  sm:rounded-lg dark:bg-gray-900">
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">
                    Correct
                  </dt>
                  <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">
                    {parSedData?.correct}
                  </dd>
                </dl>
              </div>
            </div>
            <div className="transform  rounded-xl bg-white shadow-xl transition duration-300 hover:rotate-180  overflow-hidden  sm:rounded-lg dark:bg-gray-900">
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">
                    Incorrect
                  </dt>
                  <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">
                    {parSedData?.incorrect}
                  </dd>
                </dl>
              </div>
            </div>
            <div className="transform  rounded-xl bg-white shadow-xl transition duration-300 hover:rotate-180  overflow-hidden  sm:rounded-lg dark:bg-gray-900">
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">
                    Time Taken
                  </dt>
                  <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">
                    {parSedData?.Time} s
                  </dd>
                </dl>
              </div>
            </div>
            <div className="transform  rounded-xl bg-white shadow-xl transition duration-300 hover:rotate-180  overflow-hidden  sm:rounded-lg dark:bg-gray-900">
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">
                    Total Coin Earns
                  </dt>
                  <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">
                    {parSedData?.coin}
                  </dd>
                </dl>
              </div>
            </div>
            <div className="transform  rounded-xl bg-white shadow-xl transition duration-300 hover:rotate-180  overflow-hidden  sm:rounded-lg dark:bg-gray-900">
              <div className="px-4 py-5 sm:p-6">
                <dl>
                  <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">
                    Average Time Taken
                  </dt>
                  <dd className="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">
                    {parSedData?.Time / parSedData.question.length} s
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="button">
        <Link href={"/review"}>
          <button className="bg-white px-4 py-2 rounded-md ">
            Review Questions
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
