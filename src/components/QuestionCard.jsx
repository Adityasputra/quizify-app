import { useQuiz } from "../context/QuizContext";

export default function QuestionCard() {
  const { questions, current, setCurrent, answers, setAnswers } = useQuiz();
  const q = questions[current];

  if (!q) return <div className="text-gray-400">Loading...</div>;

  const options = [...q.incorrect_answers, q.correct_answer].sort();
  const handleAnswer = (opt) => {
    setAnswers([...answers, opt === q.correct_answer]);
    setCurrent(current + 1);
  };

  return (
    <div className="bg-white/5 rounded-xl p-6 border border-gray-700 w-full min-h-[280px] flex flex-col">
      <h3
        className="text-xl font-medium mb-6 text-left break-words flex-grow"
        dangerouslySetInnerHTML={{ __html: q.question }}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mt-auto">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => handleAnswer(opt)}
            className="w-full text-left px-4 py-3 rounded-lg bg-white/5 border border-gray-700 hover:border-indigo-500 hover:bg-indigo-500/10 transition-all cursor-pointer break-words"
            dangerouslySetInnerHTML={{ __html: opt }}
          />
        ))}
      </div>
    </div>
  );
}
