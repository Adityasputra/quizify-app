import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useQuiz } from "../context/QuizContext";
import QuestionCard from "../components/QuestionCard";
import Timer from "../components/Timer";
import Pattern from "/Pattern.svg";

export default function Quiz() {
  const { questions = [], current, answers = [] } = useQuiz();

  const navigate = useNavigate();

  useEffect(() => {
    if (questions.length > 0 && current >= questions.length) {
      navigate("/result");
    }
  }, [current, questions, navigate]);

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-400">Loading questions...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <img
        src={Pattern}
        alt=""
        className="rotate-180 opacity-20 absolute top-0 left-0 w-full pointer-events-none select-none"
      />

      <img
        src={Pattern}
        alt=""
        className="absolute opacity-20 bottom-0 left-0 w-full pointer-events-none select-none"
      />

      <div className="text-center max-w-2xl w-full min-w-0 relative z-10">
        <h1 className="text-3xl font-bold mb-6">
          <span className="font-extrabold bg-gradient-to-r from-indigo-500 to-pink-600 bg-clip-text text-transparent">
            Quizify
          </span>
        </h1>

        <div className="flex items-center justify-between mb-8 bg-white/5 rounded-lg p-4 border border-gray-700">
          <div className="text-left">
            <p className="text-gray-400 text-sm">Question</p>
            <p className="text-xl font-semibold">
              {current + 1} / {questions.length}
            </p>
          </div>
          <Timer />
          <div className="text-right">
            <p className="text-gray-400 text-sm">Answered</p>
            <p className="text-xl font-semibold">{answers.length}</p>
          </div>
        </div>

        <QuestionCard />
      </div>
    </div>
  );
}
