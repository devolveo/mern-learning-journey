import React from "react";

function Sidebar({ isDarkMode }) {
  const profileData = {
    name: "Your Name", // Replace with your actual name
    role: "React Developer (Learning)",
    avatar: "https://via.placeholder.com/80x80/007acc/white?text=DEV",
    stats: [
      { label: "Days Learning", value: "1" },
      { label: "Components Built", value: "6" },
      { label: "Projects Completed", value: "1" },
      { label: "Skills Mastered", value: "3" },
    ],
  };
  return (
    <aside className="dashboard-sidebar">
      <div className="profile-section">
        <img
          src={profileData.avatar}
          alt="Profile"
          className="profile-avatar"
        />
        <h2 className="profile-name">{profileData.name}</h2>
        <p className="profile-role">{profileData.role}</p>
      </div>
      <div className="stat-section">
        <h3 style={{ color: "var(--text-primary)", marginBottom: "1rem" }}>
          Quick Stats
        </h3>
        {profileData.stats.map((stat, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "0.5rem",
              color: "var(--text-secondary)",
            }}
          >
            <span>{stat.label}</span>
            <strong style={{ color: "var(--accent)" }}>{stat.value}</strong>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
