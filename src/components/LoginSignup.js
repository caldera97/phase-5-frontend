import { useState } from "react";
function LoginSignup({ setLoggedInUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.errors);
    }
    return response;
  }

  function handleSignup(e) {
    e.preventDefault();
    newPassword === passwordConfirm
      ? fetch("http://localhost:3000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: newUsername,
            password: newPassword,
          }),
        })
          .then(handleErrors)
          .then((r) => r.json())
          .then((r) => alert("you may now log in!"))
          .catch((error) => alert(error))
      : alert("passwords must match!");
  }

  function handleLogin(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        "password-confirmation": password,
      }),
    })
      .then(handleErrors)
      .then((r) => r.json())
      .then((user) => setLoggedInUser(user))
      .catch((error) => alert(error));
  }

  return (
    <div className="login-page">
      <div className="form">
        <form className="register-form" onSubmit={handleSignup}>
          <p className="message">Sign Up</p>
          <input
            type="text"
            required
            placeholder="username"
            onChange={(e) => setNewUsername(e.target.value)}
          />
          <input
            type="password"
            required
            placeholder="password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="text"
            required
            placeholder="confirm password"
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <button>sign up</button>
        </form>
        <form className="login-form" onSubmit={handleLogin}>
          <p className="message">Login</p>
          <input
            type="text"
            required
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            required
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginSignup;
