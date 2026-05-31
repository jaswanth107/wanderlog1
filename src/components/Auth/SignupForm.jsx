import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../api/authApi";

const SignupForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    setError("");
    setIsLoading(true);

    try {
      await registerUser(email, password);

      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-card">
      <h1>WanderLog</h1>
      <h2>Create Account</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            placeholder="Enter Email"
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            placeholder="Enter Password"
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>

        {error && (
          <p
            style={{
              color: "red",
              marginTop: "10px",
            }}
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Creating..." : "Create Account"}
        </button>
      </form>

      <p>
        Already have an account?{" "}
        <Link to="/login">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignupForm;