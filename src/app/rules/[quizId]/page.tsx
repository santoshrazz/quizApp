import React from "react";
import LighBulb from "../../../../public/LightBulb1.png";
import Question_Mark from "../../../../public/question_mark.png";
import Link from "next/link";
import { ArrayofQuizes } from "@/Constants/Constant";
import Image from "next/image";
const page = ({ params }: { params: { quizId: number } }) => {
  const array = ArrayofQuizes.filter(
    (ele) => ele.quizId === Number(params.quizId)
  );
  return (
    <div className="bg-slate-800 min-h-screen flex justify-center items-center">
      <div className="content">
        <Image
          src={LighBulb.src}
          className="m-auto h-16"
          height={100}
          width={100}
          alt="Question mark image"
        />
        <p className="text-white text-3xl font-semibold text-center">
          {array[0].quizName}
        </p>
        <p className="text-white text-2xl font-extralight">
          Answer these simple questions correctly and earn coins
        </p>
        <p className="text-center text-2xl m-2 text-white">
          Difficulty Level :
          <span className="bg-white text-sky-500 px-2 mx-4 rounded-lg">
            Easy
          </span>
        </p>
        <p className="flex justify-center items-center">
          <img src={Question_Mark.src} alt="what image" className="h-10 mx-4" />
          <span className="text-white text-2xl">
            {array[0].question.length} Questions
          </span>
        </p>
        <div className="buttons flex flex-col">
          <Link
            href={`/counter/${params.quizId}`}
            className="bg-white px-7 text-3xl hover:bg-emerald-500 hover:text-white rounded-md my-2 m-auto ease-in duration-100 "
          >
            <button className="Play ">Play</button>
          </Link>
          <button className="playwithFriend bg-white px-5 text-2xl rounded-md my-2 m-auto">
            Play With Friends
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
