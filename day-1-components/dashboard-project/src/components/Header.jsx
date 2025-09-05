import React from "react";

export default function Header({ isDarkMode, toggleTheme }) {
  return (
    <header className="dashboard-header">
      <div className="header-brand">👨‍💻 DevDashboard</div>

      <nav className="header-nav">
        <a href="#overview" className="nav-link">
          Overview
        </a>
        <a href="#projects" className="nav-link">
          Projects
        </a>
        <a href="#skills" className="nav-link">
          Skills
        </a>
        <a href="#activity" className="nav-link">
          Activity
        </a>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {isDarkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </nav>
    </header>
  );
}
