"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import QuizImage from "../../../public/Quiz_image.png";
import { ArrayofQuizes } from "../../Constants/Constant";
import Link from "next/link";
import Image from "next/image";

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
    <div className="mainquiz w-full bg-slate-900 h-screen">
      <div className="heading flex justify-around m-auto w-11/12 p-2 bg-white border-red-500 border-solid rounded-sm">
        <p className="text-center text-2xl hidden md:block">All Quizes</p>
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
            {/* <img className="w-full" src={QuizImage.src} alt="Quiz thumbnail" /> */}
            <Image
              src={QuizImage.src}
              alt="Quiz Thumbnail"
              height={300}
              width={300}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{e.quizName}</div>
              <p className="text-gray-700 text-base">{e.quizDesc}</p>
            </div>
            <div className="flex justify-center items-center">
              <Link href={`/rules/${e.quizId}`}>
                <button className="bg-slate-600 px-4 py-2 rounded-md text-white">
                  Start Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
