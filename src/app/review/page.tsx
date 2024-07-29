"use client";
import React from "react";
import coinImage from "../../../public/coin.png";
const page = () => {
  const resultString = localStorage.getItem("result");
  const result = JSON.parse(resultString);
  console.log(result);

  return (
    <div className=" bg-gradient-to-tl from-lime-200 via-sky-500 to-violet-500 ">
      {/* Coin Ui Start */}
      <div className="quizNav flex justify-end items-end p-2 ">
        {/* <p className="text-white font-bold text-2xl">Quiz Name will be here</p> */}
        <p className="flex bg-white p-2 cursor-pointer rounded-lg gap-1">
          <img src={coinImage.src} className="w-5" alt="" />
          <span className="font-semibold">{6}</span>
        </p>
      </div>
      {/* Coin Ui  End*/}

      <div className="mainDiv flex justify-center items-center w-full h-full">
        <div className="question bg-white p-4 my-3 rounded-md">
          {/* Question Ui Start */}
          {result?.question.map((ele, ind) => {
            return (
              <div key={ind} className="my-3">
                <h3 className="font-bold text-2xl">
                  Q{ind + 1}. {ele.que.Question}
                </h3>
                <p className="border-2 hover:border-black m-2 p-2 cursor-pointer">
                  1.Option 1
                </p>
                <p className="border-2 hover:border-black m-2 p-2 cursor-pointer">
                  2.Answer 2
                </p>
                <p className="border-2 hover:border-black m-2 p-2 cursor-pointer">
                  3. Answer 3
                </p>
                <p className="border-2 hover:border-black m-2 p-2 cursor-pointer">
                  4.Answer 4
                </p>
                <div className="showAnswer flex justify-around">
                  <p>
                    <img src="" alt="" /> <span>Your Answer : {ele?.ans} </span>
                  </p>
                  <p>
                    <img src="" alt="" />{" "}
                    <span>Correct Answer : {ele?.que?.correct} </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
