import React, { useState } from "react";

function SkillsProgress() {
  const [skills, setSkills] = useState([
    { name: "JavaScript", progress: 100, category: "Language" },
    { name: "React", progress: 25, category: "Framework" },
    { name: "HTML/CSS", progress: 95, category: "Markup" },
    { name: "Git/GitHub", progress: 80, category: "Tools" },
    { name: "Node.js", progress: 15, category: "Backend" },
    { name: "MongoDB", progress: 5, category: "Database" },
  ]);

  const updateSkillProgress = (skillName, increment = 5) => {
    setSkills((prevSkills) =>
      prevSkills.map((skill) =>
        skill.name === skillName
          ? { ...skill, progress: Math.min(100, skill.progress + increment) }
          : skill
      )
    );
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return "#4caf50"; // Green
    if (progress >= 60) return "#ff9800"; // Orange
    if (progress >= 40) return "#2196f3"; // Blue
    return "#f44336"; // Red
  };

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="dashboard-card">
      <h3 className="card-title">🚀 Skills Progress</h3>
      <div className="card-content">
        {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
          <div key={category} style={{ marginBottom: "1.5rem" }}>
            <h4
              style={{
                color: "var(--text-primary)",
                fontSize: "0.9rem",
                marginBottom: "0.5rem",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              {category}
            </h4>

            {categorySkills.map((skill) => (
              <div key={skill.name} style={{ marginBottom: "1rem" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.25rem",
                  }}
                >
                  <span style={{ fontSize: "0.9rem" }}>{skill.name}</span>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--accent)",
                      fontWeight: "bold",
                    }}
                  >
                    {skill.progress}%
                  </span>
                </div>

                <div
                  style={{
                    width: "100%",
                    height: "8px",
                    backgroundColor: "var(--border)",
                    borderRadius: "4px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${skill.progress}%`,
                      height: "100%",
                      backgroundColor: getProgressColor(skill.progress),
                      transition: "width 0.3s ease-in-out",
                    }}
                  />
                </div>

                <button
                  onClick={() => updateSkillProgress(skill.name)}
                  style={{
                    marginTop: "0.25rem",
                    padding: "0.25rem 0.5rem",
                    fontSize: "0.7rem",
                    backgroundColor: "var(--accent)",
                    color: "white",
                    border: "none",
                    borderRadius: "3px",
                    cursor: "pointer",
                  }}
                >
                  +5% Progress
                </button>
              </div>
            ))}
          </div>
        ))}

        <div
          style={{
            marginTop: "1rem",
            padding: "1rem",
            backgroundColor: "var(--bg-secondary)",
            borderRadius: "4px",
            textAlign: "center",
          }}
        >
          <p style={{ margin: 0, fontSize: "0.9rem" }}>
            📈 Average Progress:{" "}
            {Math.round(
              skills.reduce((sum, skill) => sum + skill.progress, 0) /
                skills.length
            )}
            %
          </p>
        </div>
      </div>
    </div>
  );
}

export default SkillsProgress;
