import { createContext, useContext, useEffect, useState } from "react";
import { fetchTriviaQuestions } from "../api/triviaApi";

const QuizContext = createContext(undefined);

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    const saved = localStorage.getItem("quizState");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.questions && parsed.questions.length > 0) {
        setQuestions(parsed.questions);
        setCurrent(parsed.current ?? 0);
        setAnswers(parsed.answers ?? []);
        setTimeLeft(parsed.timeLeft ?? 60);
        return;
      }
    }
    fetchTriviaQuestions().then(setQuestions);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "quizState",
      JSON.stringify({ questions, current, answers, timeLeft }),
    );
  }, [questions, current, answers, timeLeft]);

  const resetQuiz = async () => {
    localStorage.removeItem("quizState");
    setCurrent(0);
    setAnswers([]);
    setTimeLeft(60);
    const newQuestions = await fetchTriviaQuestions();
    setQuestions(newQuestions);
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        current,
        setCurrent,
        answers,
        setAnswers,
        timeLeft,
        setTimeLeft,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};
