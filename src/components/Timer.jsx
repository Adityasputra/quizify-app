import { useNavigate } from "react-router";
import { useQuiz } from "../context/QuizContext";
import { useEffect } from "react";

export default function Timer() {
  const { timeLeft, setTimeLeft } = useQuiz();
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft === 0) {
      navigate("/result");
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const isLow = timeLeft <= 10;

  return (
    <div className="text-center">
      <p className="text-gray-400 text-sm">Time</p>
      <p className={`text-xl font-semibold ${isLow ? "text-red-500" : ""}`}>
        {timeLeft}s
      </p>
    </div>
  );
}
