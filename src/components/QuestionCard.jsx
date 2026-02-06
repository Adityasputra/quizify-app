import { useQuiz } from "../context/QuizContext";

export default function QuestionCard() {
  const { questions, current, setCurrent, answers, setAnswers } = useQuiz();
  const q = questions[current];

  if (!q) return <div>Loading...</div>;

  const options = [...q.incorrect_answers, q.correct_answer].sort();
  const handleAnswer = (opt) => {
    setAnswers([...answers, opt === q.correct_answer]);
    setCurrent(current + 1);
  };

  return (
    <div>
      <h3 dangerouslySetInnerHTML={{ __html: q.question }} />
      {options.map((opt) => (
        <button key={opt} onClick={() => handleAnswer(opt)}>
          {opt}
        </button>
      ))}
    </div>
  );
}
