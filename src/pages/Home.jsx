import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello, World!</h1>
      <button onClick={() => navigate("/login")}>Go to Login</button>
    </>
  );
}
