import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState(""); // email or username
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!identifier || !password) {
      alert("Enter username/email and password");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "https://project-genesis-dashboard.onrender.com/api/auth/login", // 👈 replace this
        {
          identifier,
          password,
        },
      );

      // ✅ Save token + auth
      localStorage.setItem("auth", "true");
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // ✅ Go to dashboard
      navigate("/dashboard");
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center mt-60 border rounded-lg p-10 w-125 h-85 mx-auto bg-gray-100">
      <h2 className="mb-8">Login</h2>

      <input
        type="text"
        placeholder="Username or Email"
        className="border px-2 py-2 rounded-sm bg-white"
        onChange={(e) => setIdentifier(e.target.value)}
      />
      <br />
      <br />

      <input
        type="password"
        placeholder="Password"
        className="border px-2 py-2 rounded-sm "
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />

      <button className="rounded-lg px-30 py-2 text-white bg-blue-500 " onClick={handleLogin} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
    </div>
  );
}

export default Login;
