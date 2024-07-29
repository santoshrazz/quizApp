"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import QuizImage from "../../../public/Quiz_image.png";
import { ArrayofQuizes } from "../../Constants/Constant";

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState("Select");
  const [QuizArray, setQuizArray] = useState(ArrayofQuizes);

  const handleOnchange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  useEffect(() => {
    if (selectedCategory === "Select") {
      setQuizArray(ArrayofQuizes);
    } else {
      const TempQuizArray = ArrayofQuizes.filter((singleQuiz) => {
        return singleQuiz.category === selectedCategory;
      });
      setQuizArray(TempQuizArray);
    }
  }, [selectedCategory]);

  return (
    <div className="mainquiz w-full bg-slate-900">
      <div className="heading flex justify-around m-auto w-11/12 p-2 bg-white border-red-500 border-solid rounded-sm">
        <p className="text-center text-2xl">All Quizes</p>
        <select
          className="border-4 px-3 py-1 border-slate-400 rounded-md"
          onChange={handleOnchange}
          value={selectedCategory}
        >
          <option value="Select">Select Category</option>
          <option value="computer">Computer</option>
          <option value="Science">Science</option>
          <option value="Tech">Tech</option>
          <option value="Personality Development">
            Personality Development
          </option>
        </select>
      </div>
      <div className="singleQuestion flex justify-center items-center flex-wrap gap-4">
        {QuizArray.map((e, ind) => (
          <div
            className="my-2 py-2 max-w-sm rounded bg-white overflow-hidden shadow-lg"
            key={ind}
          >
            <img className="w-full" src={QuizImage.src} alt="Quiz thumbnail" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-slate-600 px-4 py-2 rounded-md text-white">
                Start Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
