/*
 * UserList Component
 * Demonstrates: Array method mastery (map, filter, length)
 * JavaScript skills applied:
 * - Array.map() for rendering lists
 * - Array.filter() for data filtering
 * - Array.length for counts
 * - State management for interactive filtering
 */
import React, { useState } from "react";
// Child component that receives complex props
const UserCard = ({ user, onUpdate, onDelete, settings }) => {
  const { theme, showEmail, compactMode } = settings;

  const cardStyle = {
    border: `2px solid ${theme === "dark" ? "#555" : "#ddd"}`,
    backgroundColor: theme === "dark" ? "#333" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",
    padding: compactMode ? "10px" : "20px",
    margin: "10px",
    borderRadius: "8px",
  };

  return (
    <div style={cardStyle}>
      <h3>{user.name}</h3>
      {showEmail && <p>📧 {user.email}</p>}
      <p>
        🎯 {user.role} | 🎂 {user.age} years
      </p>
      <p>📍 {user.location}</p>

      <div>
        <button
          onClick={() =>
            onUpdate(
              user.id,
              "role",
              user.role === "Developer" ? "Senior Developer" : "Developer"
            )
          }
        >
          Toggle Seniority
        </button>
        <button
          onClick={() => onDelete(user.id)}
          style={{ marginLeft: "10px", color: "red" }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default function ComplexProps() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Alice",
      email: "alice@example.com",
      role: "Developer",
      age: 28,
      location: "New York",
    },
    {
      id: 2,
      name: "Bob",
      email: "bob@example.com",
      role: "Designer",
      age: 32,
      location: "San Francisco",
    },
    {
      id: 3,
      name: "Carol",
      email: "carol@example.com",
      role: "Manager",
      age: 35,
      location: "Chicago",
    },
  ]);

  const [settings, setSettings] = useState({
    theme: "light",
    showEmail: true,
    compactMode: false,
  });

  function updateUser(userId, field, newValue) {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, [field]: newValue } : user
      )
    );
  }

  function deleteUser(userId) {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  }

  function updateSettings(key, value) {
    setSettings((prevSettings) => ({ ...prevSettings, [key]: value }));
  }

  function addUser() {
    console.log("masuk add user ======");
    const newUser = {
      id: Math.max(...users.map((u) => u.id)) + 1,
      name: `User ${users.length + 1}`,
      email: `User${users.length + 1}@example.com`,
      role: "Developer",
      age: Math.floor(Math.random() * 20) + 25,
      location: ["New York", "San Francisco", "Chicago", "Seattle"][
        Math.floor(Math.random() * 4)
      ],
    };

    setUsers((prev) => [...prev, newUser]);
    console.log("newUser: ", newUser);
  }

  function bulkUpdateRoles(oldRole, newRole) {
    setUsers((prev) =>
      prev.map((user) =>
        user.role === oldRole ? { ...user, role: newRole } : user
      )
    );
  }

  function resetUsers() {
    setUsers([
      {
        id: 1,
        name: "Alice",
        email: "alice@example.com",
        role: "Developer",
        age: 28,
        location: "New York",
      },
      {
        id: 2,
        name: "Bob",
        email: "bob@example.com",
        role: "Designer",
        age: 32,
        location: "San Francisco",
      },
      {
        id: 3,
        name: "Carol",
        email: "carol@example.com",
        role: "Manager",
        age: 35,
        location: "Chicago",
      },
    ]);
  }

  return (
    <div>
      <h2>Complex Props (Object Manipulation Demo)</h2>
      {/* Settings panel */}
      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "15px",
          marginBottom: "20px",
        }}
      >
        <h3>Settings</h3>
        <label>
          <input
            type="checkbox"
            checked={settings.theme === "dark"}
            onChange={(e) =>
              updateSettings("theme", e.target.checked ? "dark" : "light")
            }
          />{" "}
          Dark Theme
        </label>
        <label style={{ marginLeft: "20px" }}>
          <input
            type="checkbox"
            checked={settings.showEmail}
            onChange={(e) => updateSettings("showEmail", e.target.checked)}
          />{" "}
          Show Email
        </label>
        <label style={{ marginLeft: "20px" }}>
          <input
            type="checkbox"
            checked={settings.compactMode}
            onChange={(e) => updateSettings("compactMode", e.target.checked)}
          />{" "}
          Compact Mode
        </label>
      </div>
      <div>
        <div style={{ marginBottom: "20px" }}>
          <button onClick={addUser}>Add User</button>
          <button
            onClick={() => bulkUpdateRoles("Developer", "Senior Developer")}
            style={{ marginLeft: "10px" }}
          >
            Promote All Developers
          </button>
          <button
            onClick={() => bulkUpdateRoles("Senior Developer", "Developer")}
            style={{ marginLeft: "10px" }}
          >
            Demote All Developers
          </button>
          <button onClick={resetUsers} style={{ marginLeft: "10px" }}>
            Reset Users
          </button>
        </div>
        {/* UserCard */}
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onUpdate={updateUser}
            onDelete={deleteUser}
            settings={settings}
          />
        ))}
      </div>
      <p>Total users: {users.length}</p>
    </div>
  );
}
