// Register.jsx
import React, { useState } from "react";

const Register = ({ users, setUsers, setShowLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    const newUser = { name, email, password };
    setUsers([...users, newUser]);
    alert("Registered Successfully");
    setShowLogin(true);
  };

  return (
    <div>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} /><br />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
      <button onClick={handleRegister}>Submit</button>
    </div>
  );
};

export default Register;