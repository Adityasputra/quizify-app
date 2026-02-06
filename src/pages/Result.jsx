import { useNavigate } from "react-router";
import { useQuiz } from "../context/QuizContext";
import Pattern from "/Pattern.svg";

export default function Result() {
  const { answers, questions, resetQuiz } = useQuiz();
  const navigate = useNavigate();

  const correct = answers.filter(Boolean).length;
  const wrong = answers.length - correct;
  const score = Math.round((correct / questions.length) * 100);

  const handleReset = async () => {
    await resetQuiz();
    navigate("/quiz");
  };

  const goBack = async () => {
    await resetQuiz();
    navigate("/");
  };

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

      <div className="text-center max-w-md w-full relative z-10">
        <div className="flex items-center justify-center gap-2 mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 text-indigo-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-2.927 0"
            />
          </svg>
          <span className="text-sm font-medium text-indigo-400 uppercase tracking-wide">
            Quiz Completed
          </span>
        </div>

        <h1 className="text-4xl font-bold mb-2">
          Quiz{" "}
          <span className="font-extrabold bg-gradient-to-r from-indigo-500 to-pink-600 bg-clip-text text-transparent">
            Results
          </span>
        </h1>

        <div className="my-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-indigo-600 to-pink-600 flex items-center justify-center">
            <div className="w-28 h-28 rounded-full bg-[#1e1e1e] flex items-center justify-center">
              <span className="text-3xl font-bold">{score}%</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white/5 rounded-lg p-4 border border-gray-700">
            <p className="text-gray-400 text-sm">Total Questions</p>
            <p className="text-2xl font-semibold">{questions.length}</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4 border border-gray-700">
            <p className="text-gray-400 text-sm">Answered</p>
            <p className="text-2xl font-semibold">{answers.length}</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4 border border-green-700">
            <p className="text-green-400 text-sm">Correct</p>
            <p className="text-2xl font-semibold text-green-400">{correct}</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4 border border-red-700">
            <p className="text-red-400 text-sm">Wrong</p>
            <p className="text-2xl font-semibold text-red-400">{wrong}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleReset}
            className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all cursor-pointer"
          >
            Try Again
          </button>
          <button
            onClick={goBack}
            className="w-full sm:w-auto border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all cursor-pointer"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
