import React from "react";
import LighBulb from "../../../../public/LightBulb1.png";
import Question_Mark from "../../../../public/question_mark.png";
const page = ({ params }: { params: { quizId: number } }) => {
  return (
    <div className="bg-slate-800 flex justify-center items-center">
      <div className="content">
        <img
          src={LighBulb.src}
          className=" m-auto h-16"
          alt="Question mark Image"
        />
        <p className="text-white text-3xl font-semibold text-center">
          Quiz Name will be there
        </p>
        <p className="text-white text-2xl font-extralight">
          Answer these simple questions correctly and earn coins
        </p>
        <p className="text-center text-2xl m-2 text-white">
          Difficulty Level :
          <span className="bg-white text-sky-500 px-2 rounded-lg">Easy</span>
        </p>
        <p>
          <img
            src={Question_Mark.src}
            alt="what image"
            className="h-10 m-auto"
          />
          <span>20 Questions</span>
        </p>
        <button className="Play">Play</button>
        <button className="playwithFriend">Play With Friends</button>
      </div>
    </div>
  );
};

export default page;
