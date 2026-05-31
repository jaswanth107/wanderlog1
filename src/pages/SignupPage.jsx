import { useState } from "react";

function SignupPage() {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("pistol");
  const [message, setMessage] = useState("");

  const handleSignup = async e => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://reqres.in/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      setMessage("Registration Successful");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div>
      <h1>Signup</h1>

      <form onSubmit={handleSignup}>
        <input
          type="email"
          value={email}
          onChange={e =>
            setEmail(e.target.value)
          }
        />

        <br />
        <br />

        <input
          type="password"
          value={password}
          onChange={e =>
            setPassword(e.target.value)
          }
        />

        <br />
        <br />

        <button type="submit">
          Register
        </button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default SignupPage;