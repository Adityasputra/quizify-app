import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useQuiz } from "../context/QuizContext";
import QuestionCard from "../components/QuestionCard";
import Timer from "../components/Timer";

export default function Quiz() {
  const { questions = [], current, answers = [] } = useQuiz();

  const navigate = useNavigate();

  useEffect(() => {
    if (questions.length > 0 && current >= questions.length) {
      navigate("/result");
    }
  }, [current, questions, navigate]);

  if (questions.length === 0) {
    return <h2>Loading soal...</h2>;
  }

  return (
    <div>
      <h2>Quizify</h2>

      {/* Info */}
      <p>
        Soal {current + 1} / {questions.length}
      </p>
      <p>Sudah dijawab: {answers.length}</p>

      {/* Timer */}
      <Timer />

      {/* Soal */}
      <QuestionCard />
    </div>
  );
}
