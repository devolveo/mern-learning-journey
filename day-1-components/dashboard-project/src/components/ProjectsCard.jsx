import React, { useState } from "react";

function ProjectsCard() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "UserList Component",
      description: "Demonstrates array methods mastery with filtering",
      status: "completed",
      technologies: ["React", "JavaScript", "CSS"],
      completedDate: new Date().toLocaleDateString(),
    },
    {
      id: 2,
      name: "DataFetcher Component",
      description: "Async/await with comprehensive error handling",
      status: "completed",
      technologies: ["React", "JavaScript", "Error Handling"],
      completedDate: new Date().toLocaleDateString(),
    },
    {
      id: 3,
      name: "Developer Dashboard",
      description: "Portfolio-quality React dashboard application",
      status: "in-progress",
      technologies: ["React", "CSS", "Components"],
      completedDate: null,
    },
    {
      id: 4,
      name: "MERN Stack App",
      description: "Full-stack application with authentication",
      status: "planned",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      completedDate: null,
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "#4caf50";
      case "in-progress":
        return "#ff9800";
      case "planned":
        return "#9e9e9e";
      default:
        return "#9e9e9e";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return "✅";
      case "in-progress":
        return "🔄";
      case "planned":
        return "📋";
      default:
        return "❓";
    }
  };

  const completeProject = (projectId) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              status: "completed",
              completedDate: new Date().toLocaleDateString(),
            }
          : project
      )
    );
  };

  return (
    <div className="dashboard-card">
      <h3 className="card-title">💼 Recent Projects</h3>
      <div className="card-content">
        {projects.map((project) => (
          <div
            key={project.id}
            style={{
              marginBottom: "1.5rem",
              padding: "1rem",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              backgroundColor: "var(--bg-secondary)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "0.5rem",
              }}
            >
              <h4
                style={{
                  color: "var(--text-primary)",
                  margin: 0,
                  fontSize: "1rem",
                }}
              >
                {project.name}
              </h4>
              <span
                style={{
                  color: getStatusColor(project.status),
                  fontSize: "1.2rem",
                }}
              >
                {getStatusIcon(project.status)}
              </span>
            </div>

            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.9rem",
                marginBottom: "0.75rem",
              }}
            >
              {project.description}
            </p>

            <div style={{ marginBottom: "0.75rem" }}>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  style={{
                    display: "inline-block",
                    backgroundColor: "var(--accent)",
                    color: "white",
                    padding: "0.25rem 0.5rem",
                    borderRadius: "3px",
                    fontSize: "0.7rem",
                    marginRight: "0.5rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.8rem",
                }}
              >
                Status:{" "}
                <strong style={{ color: getStatusColor(project.status) }}>
                  {project.status.replace("-", " ")}
                </strong>
                {project.completedDate &&
                  ` • Completed: ${project.completedDate}`}
              </span>

              {project.status === "in-progress" && (
                <button
                  onClick={() => completeProject(project.id)}
                  style={{
                    padding: "0.25rem 0.75rem",
                    fontSize: "0.8rem",
                    backgroundColor: "#4caf50",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Mark Complete
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsCard;
