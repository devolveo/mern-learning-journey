import React, { useState, useEffect } from "react";

function ActivityTimeline() {
  const [activities, setActivities] = useState([]);

  const generateActivities = () => {
    const activities = [
      {
        id: 1,
        type: "component",
        title: "Built ComplexProps Component",
        description:
          "Implemented object manipulation and prop passing patterns",
        timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 mins ago
        details:
          "Object destructuring, spread syntax, parent-child communication",
        icon: "🧩",
        color: "#2196f3",
      },
      {
        id: 2,
        type: "commit",
        title: "Committed DataFetcher Component",
        description:
          "Added comprehensive error handling with try-catch-finally",
        timestamp: new Date(Date.now() - 60 * 60 * 1000), // 1 hour ago
        details: "Async/await patterns, loading states, retry logic",
        icon: "💾",
        color: "#4caf50",
      },
      {
        id: 3,
        type: "learning",
        title: "Mastered React Component Architecture",
        description: "Completed theory session on component thinking and JSX",
        timestamp: new Date(Date.now() - 120 * 60 * 1000), // 2 hours ago
        details: "Props flow, component hierarchy, JSX syntax rules",
        icon: "📚",
        color: "#ff9800",
      },
      {
        id: 4,
        type: "deployment",
        title: "Set up Development Environment",
        description: "Configured React development workflow with Vite",
        timestamp: new Date(Date.now() - 180 * 60 * 1000), // 3 hours ago
        details: "VS Code extensions, React DevTools, Git repository",
        icon: "🚀",
        color: "#9c27b0",
      },
      {
        id: 5,
        type: "learning",
        title: "Started MERN Stack Journey",
        description:
          "Began transformation from JavaScript expert to full-stack developer",
        timestamp: new Date(Date.now() - 240 * 60 * 1000), // 4 hours ago
        details: "Week 1 planning, Trello setup, learning objectives defined",
        icon: "📚",
        color: "#ff9800",
      },
    ];
    return activities;
  };

  useEffect(() => {
    setActivities(generateActivities());
  }, []);

  const addActivity = (type, title, description) => {
    const activityTypes = {
      commit: { icon: "💾", color: "#4caf50" },
      component: { icon: "🧩", color: "#2196f3" },
      learning: { icon: "📚", color: "#ff9800" },
      deployment: { icon: "🚀", color: "#9c27b0" },
      debug: { icon: "🐛", color: "#f44336" },
    };

    const newActivity = {
      id: Date.now(),
      type,
      title,
      description,
      timestamp: new Date(),
      details: "Just completed this activity!",
      ...activityTypes[type],
    };

    setActivities((prev) => [newActivity, ...prev.slice(0, 7)]);
  };

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now - timestamp) / (1000 * 60));
    if (diffInMinutes < 1) return "Just now";
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h ago`;

    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  };

  return (
    <div className="dashboard-card">
      <h3 className="card-title">⚡ Activity Timeline</h3>
      <div className="card-content">
        <div style={{ marginBottom: "1rem" }}>
          <button
            onClick={() =>
              addActivity(
                "component",
                "Dashboard Component Complete",
                "Built impressive portfolio dashboard"
              )
            }
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "var(--accent)",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "0.8rem",
            }}
          >
            ➕ Log Dashboard Completion
          </button>
        </div>

        <div
          style={{
            maxHeight: "400px",
            overflowY: "auto",
            paddingRight: "0.5rem",
          }}
        >
          {activities.map((activity) => (
            <div
              key={activity.id}
              style={{
                display: "flex",
                marginBottom: "1rem",
                paddingBottom: "1rem",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: activity.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  flexShrink: 0,
                  marginRight: "1rem",
                }}
              >
                {activity.icon}
              </div>

              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "0.25rem",
                  }}
                >
                  <h4
                    style={{
                      color: "var(--text-primary)",
                      fontSize: "0.9rem",
                      margin: 0,
                      fontWeight: "bold",
                    }}
                  >
                    {activity.title}
                  </h4>
                  <span
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.7rem",
                      whiteSpace: "nowrap",
                      marginLeft: "1rem",
                    }}
                  >
                    {formatTimeAgo(activity.timestamp)}
                  </span>
                </div>

                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.8rem",
                    margin: "0 0 0.5rem 0",
                    lineHeight: 1.4,
                  }}
                >
                  {activity.description}
                </p>

                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.7rem",
                    margin: 0,
                    fontStyle: "italic",
                    opacity: 0.8,
                  }}
                >
                  {activity.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "1rem",
            padding: "1rem",
            backgroundColor: "var(--bg-secondary)",
            borderRadius: "4px",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "var(--text-secondary)",
              fontSize: "0.8rem",
            }}
          >
            🎯 Total Activities Today: {activities.length} | Keep up the
            momentum!
          </p>
        </div>
      </div>
    </div>
  );
}

export default ActivityTimeline;
