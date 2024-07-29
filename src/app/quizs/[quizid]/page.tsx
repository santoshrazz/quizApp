"use client";
// @ts-nocheck
import React, { useState, useEffect, useRef, MouseEvent } from "react";
import coin from "../../../../public/coin.png";
import { ArrayofQuizes } from "@/Constants/Constant";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";
const Page = ({ params }: { params: { quizid: number } }) => {
  const question = ArrayofQuizes.filter(
    (singleQue) => singleQue.quizId === Number(params.quizid)
  );
  const [seconds, setSeconds] = useState(60);
  const [index, setIndex] = useState(0);
  const [skipQuestion, setskipQuestion] = useState(false);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [lock, setLock] = useState(false);
  const [showResultButton, setShowResultButton] = useState(false);
  const [result, setResult] = useState({
    coin: 0,
    correct: 0,
    incorrect: 0,
    UnAttempted: 0,
    Time: 0,
    question: [] as Array<{ que: any; ans: number }>,
  });
  const [currentQuestion, setCurrentQuestion] = useState(
    question[0].question[index]
  );

  const router = useRouter();
  // UseEffect for CountDown Timer
  let timer: any;
  useEffect(() => {
    if (seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(timer); // Cleanup interval on component unmount
    } else {
      setskipQuestion(!skipQuestion);
    }
  }, [seconds]);

  // UseEffect to skip the question
  useEffect(() => {
    setIsInitialRender(false);
  }, []);
  useEffect(() => {
    if (!isInitialRender) {
      if (seconds >= 0) {
        toast.error("Time out , Moving to the next question");
        handleNextQue();
        setResult((prevResult) => ({
          ...prevResult,
          UnAttempted: prevResult.UnAttempted + 1,
        }));
      }
    }
  }, [skipQuestion]);

  // HighLight Correct Answer
  const option1 = useRef<HTMLParagraphElement>(null);
  const option2 = useRef<HTMLParagraphElement>(null);
  const option3 = useRef<HTMLParagraphElement>(null);
  const option4 = useRef<HTMLParagraphElement>(null);
  const optionsArray = [option1, option2, option3, option4];

  const checkAnswer = (e: MouseEvent<HTMLParagraphElement>, ans: number) => {
    if (!lock) {
      if (currentQuestion.correct === ans) {
        // @ts-ignore
        e.target.classList.add("bg-green-500/80");
        // @ts-ignore
        e.target.classList.add("text-white");
        setLock(true);
        clearInterval(timer);
        setResult((prevResult) => ({
          ...prevResult,
          correct: prevResult.correct + 1,
          Time: prevResult.Time + (60 - seconds),
          coin: prevResult.coin + 10,
          question: [
            ...prevResult.question,
            // @ts-ignore
            { que: currentQuestion, ans: e.target.innerText.slice(0, 1) },
          ],
        }));
      } else {
        // @ts-ignore
        e.target.classList.add("bg-red-500/80");
        // @ts-ignore
        e.target.classList.add("text-white");
        setLock(true);
        clearInterval(timer);
        setResult((prevResult) => ({
          ...prevResult,
          incorrect: prevResult.incorrect + 1,
          Time: prevResult.Time + (60 - seconds),
          question: [
            ...prevResult.question,
            // @ts-ignore
            { que: currentQuestion, ans: e.target.innerText.slice(0, 1) },
          ],
        }));
        optionsArray[currentQuestion.correct - 1].current?.classList.add(
          "bg-green-500/80"
        );
      }
    }
  };
  const NavigateToResultPage = () => {
    localStorage.setItem("result", JSON.stringify(result));
    router.push("/result");
  };
  // Handle Next Question
  const handleNextQue = () => {
    if (index >= question[0].question.length - 1) {
      console.log(result);
      setShowResultButton(true);
      return;
    }
    setIndex((preInd) => preInd + 1);
    setSeconds(60);
    setCurrentQuestion(question[0].question[index + 1]);
    setLock(false);
    optionsArray.forEach((option) => {
      option.current?.classList.remove("bg-green-500/80");
      option.current?.classList.remove("text-white");
      option.current?.classList.remove("bg-red-500/80");
    });
  };

  return (
    <div className="h-screen bg-gradient-to-tl from-lime-200 via-sky-500 to-violet-500 ">
      {/* Coin Ui Start */}
      <div className="quizNav flex justify-end items-end p-2 ">
        {/* <p className="text-white font-bold text-2xl">Quiz Name will be here</p> */}
        <p className="flex bg-white p-2 cursor-pointer rounded-lg gap-1">
          <Image src={coin.src} height={20} width={20} alt="Coin Image"></Image>
          <span className="font-semibold">{result.coin}</span>
        </p>
      </div>
      {/* Coin Ui  End*/}

      <div className="mainDiv flex justify-center items-center w-full h-full">
        <div className="question bg-white p-4 rounded-md">
          {/* Counter Start */}
          <div className="text-center flex justify-between border-b-2 border-black">
            <p className="font-extrabold text-2xl">Quiz.</p>
            <div className="text-3xl mb-2 font-bold text-white bg-gray-800 w-20 ml-auto rounded-md">
              {seconds}s
            </div>
          </div>
          {/* Counter End */}

          {/* Question Ui Start */}
          <h3 className="font-bold text-2xl">
            Q{index + 1}. {currentQuestion.Question}
          </h3>
          <p
            className="border-2 hover:border-black m-2 p-2 cursor-pointer"
            onClick={(e) => checkAnswer(e, 1)}
            ref={option1}
          >
            1.
            {currentQuestion.A}
          </p>
          <p
            className="border-2 hover:border-black m-2 p-2 cursor-pointer"
            onClick={(e) => checkAnswer(e, 2)}
            ref={option2}
          >
            2.
            {currentQuestion.B}
          </p>
          <p
            className="border-2 hover:border-black m-2 p-2 cursor-pointer"
            onClick={(e) => checkAnswer(e, 3)}
            ref={option3}
          >
            3.
            {currentQuestion.C}
          </p>
          <p
            className="border-2 hover:border-black m-2 p-2 cursor-pointer"
            onClick={(e) => checkAnswer(e, 4)}
            ref={option4}
          >
            4.
            {currentQuestion.D}
          </p>
          {lock && (
            <div className="button w-full flex justify-center items-center m-auto">
              <button
                onClick={handleNextQue}
                className="next bg-teal-500 text-white px-4 py-2 rounded-md"
              >
                Next
              </button>
            </div>
          )}
          {showResultButton && (
            <div className="button w-full my-4 flex justify-center items-center m-auto">
              <button
                onClick={NavigateToResultPage}
                className="next bg-teal-500 text-white px-4 py-2 rounded-md"
              >
                Show Result
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
