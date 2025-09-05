import React from "react";

function Sidebar() {
  const profileData = {
    name: "Luthfi",
    role: "React Developer (Learning)",
    avatar: "https://avatar.iran.liara.run/public/boy?username=Ash",
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
          alt="profile picture"
          className="profile-avatar"
        />
        <h2 className="profile-name">{profileData.name}</h2>
        <p className="profile-role">{profileData.role}</p>
      </div>
      <div className="stats-section">
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
            <span>{stat.label}: </span>
            <strong style={{ color: "var(--accent)" }}>{stat.value}</strong>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
