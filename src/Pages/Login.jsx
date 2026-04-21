import { useNavigate } from "react-router-dom";

function Login() {
     const navigate = useNavigate();

     const handleLogin = () => {
       localStorage.setItem("auth", "true");
       navigate("/");
     };
  return (
    <div>
      <h2>Login Page</h2>
      <input placeholder="Email" />
      <input placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
