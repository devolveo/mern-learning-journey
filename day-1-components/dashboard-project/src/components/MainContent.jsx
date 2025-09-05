import React from "react";
import GitHubStats from "./GitHubStats";
import SkillsProgress from "./SkillsProgress";

function MainContent() {
  return (
    <main className="dashboard-main">
      <GitHubStats />

      <SkillsProgress />

      <div className="dashboard-card">
        <h3 className="card-title">💼 Projects Card</h3>
        <div className="card-content">
          <p>Projects component coming next...</p>
        </div>
      </div>

      <div className="dashboard-card">
        <h3 className="card-title">⚡ Activity Timeline</h3>
        <div className="card-content">
          <p>Activity timeline component coming next...</p>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
