import React, { useState } from "react";

const Login = ({ users }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    const foundUser = users.find(
      user => user.email === email && user.password === password
    );

   if (foundUser) {
  setMessage('Welcome, ${foundUser.name}!');
} else {
  setMessage("Not valid, please try again.");
}
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      /><br />
      <button onClick={handleLogin}>Submit</button>
      <p>{message}</p>
    </div>
  );
};

export default Login;