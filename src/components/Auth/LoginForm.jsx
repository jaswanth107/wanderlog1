import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../api/authApi";
import { useAuth } from "../../context/AuthContext";

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setIsLoading(true);

    try {
      const data = await loginUser(email);

      login(data.token);
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-card">
      <h1>WanderLog</h1>
      <h2>Welcome Back</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Signing In..." : "Sign In"}
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>

      <p>
        Don't have an account? <Link to="/signup">Create Account</Link>
      </p>
    </div>
  );
};

export default LoginForm;