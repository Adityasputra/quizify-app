import { useState } from "react";
import { useNavigate } from "react-router";
import Pattern from "/Pattern.svg";

export default function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username) return;
    localStorage.setItem("user", username);
    navigate("/quiz");
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
        <h1 className="text-4xl font-bold mb-4">
          Login to{" "}
          <span className="font-extrabold bg-gradient-to-r from-indigo-500 to-pink-600 bg-clip-text text-transparent">
            Quizify
          </span>
        </h1>

        <p className="text-lg text-gray-400 mb-8">
          Enter your username to start the quiz
        </p>

        <div className="space-y-4">
          <input
            type="text"
            value={username}
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-indigo-500 focus:outline-none text-white placeholder-gray-500 transition-colors"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all cursor-pointer"
          >
            Start Quiz
          </button>
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-6 text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-2 mx-auto"
        >
          <span>Back to Home</span>
        </button>
      </div>
    </div>
  );
}
