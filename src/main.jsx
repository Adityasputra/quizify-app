import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import router from "./routes.jsx";
import { QuizProvider } from "./context/QuizContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QuizProvider>
      <RouterProvider router={router} />
    </QuizProvider>
  </StrictMode>,
);
