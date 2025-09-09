/*
 * UserList Component
 * Demonstrates: Array method mastery (map, filter, length)
 * JavaScript skills applied:
 * - Array.map() for rendering lists
 * - Array.filter() for data filtering
 * - Array.length for counts
 * - State management for interactive filtering
 */
import React, { useState, useEffect } from "react";

export default function UserList() {
  const [filterRole, setFilterRole] = useState("All");
  const users = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      role: "Developer",
    },
    { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Designer" },
    { id: 3, name: "Carol Davis", email: "carol@example.com", role: "Manager" },
    {
      id: 4,
      name: "David Wilson",
      email: "david@example.com",
      role: "Developer",
    },
  ];
  const filteredUsers =
    filterRole === "All"
      ? users
      : users.filter((user) => user.role === filterRole);

  const userItems = filteredUsers.map((user) => (
    <div
      key={user.id}
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "5px",
      }}
    >
      <h3>{user.name}</h3>
      <p>📧 {user.email}</p>
      <p>🎯 {user.role}</p>
    </div>
  ));

  return (
    <>
      <div>
        <label>Filter by Role: </label>
        <select
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Manager">Manager</option>
        </select>
        <p>
          Showing {filteredUsers.length} of {users.length}
        </p>
      </div>
      <p>Showing role: {filterRole}</p>
      <div>{userItems}</div>
    </>
  );
}

function TimerComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    //cleanup
    return () => clearInterval(interval);
  }, []);

  return <div>Count: {count}</div>;
}
