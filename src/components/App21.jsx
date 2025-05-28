// App21.jsx
import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";

const App21 = () => {
  const [users, setUsers] = useState([]);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <h1>{showLogin ? "Login" : "Register"}</h1>
      {!showLogin ? (
        <Register setUsers={setUsers} users={users} setShowLogin={setShowLogin} />
      ) : (
        <Login users={users} />
      )}
    </div>
  );
};

export default App21;