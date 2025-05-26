import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App14() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const res = await axios(url);
    setUsers(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>App14</h1>
      <h2>useEffect hook to fetch API</h2>
      <p>
        <input
          type="text"
          placeholder="Enter to search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </p>
      <ol>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            <strong>ID:</strong> {user.id} <br />
            <strong>Name:</strong> {user.name} <br />
            <strong>Email:</strong> {user.email} <br />
            <strong>Phone:</strong> {user.phone}
          </li>
        ))}
      </ol>
    </div>
  );
}