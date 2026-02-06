import { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username) return;
    localStorage.setItem("user", username);
    navigate("/quiz");
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        placeholder="Input your username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
