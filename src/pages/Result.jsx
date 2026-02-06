import { useNavigate } from "react-router";
import { useQuiz } from "../context/QuizContext";

export default function Result() {
  const { answers, questions, resetQuiz } = useQuiz();
  const navigate = useNavigate();

  const correct = answers.filter(Boolean).length;
  const wrong = answers.length - correct;

  const handleReset = async () => {
    await resetQuiz();
    navigate("/quiz");
  };

  const goBack = async () => {
    await resetQuiz();
    navigate("/");
  };

  return (
    <div>
      <h2>Hasil Kuis</h2>
      <p>Total Soal: {questions.length}</p>
      <p>Dijawab: {answers.length}</p>
      <p>Benar: {correct}</p>
      <p>Salah: {wrong}</p>
      <button onClick={handleReset}>Kuis Lagi</button>
      <button onClick={goBack}>Kembali ke Beranda</button>
    </div>
  );
}
