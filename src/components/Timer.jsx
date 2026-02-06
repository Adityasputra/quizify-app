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

  return <div>Time Left: {timeLeft}s</div>;
}
