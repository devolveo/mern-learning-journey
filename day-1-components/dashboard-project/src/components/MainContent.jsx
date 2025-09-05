import React from "react";
import GitHubStats from "./GitHubStats";
import SkillsProgress from "./SkillsProgress";
import ProjectsCard from "./ProjectsCard";
import ActivityTimeline from "./ActivityTimeLine";

function MainContent() {
  return (
    <main className="dashboard-main">
      <GitHubStats />
      <SkillsProgress />

      <ProjectsCard />
      <ActivityTimeline />
    </main>
  );
}

export default MainContent;
