import React, { useEffect, useState } from "react";

function GitHubStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // simulate github api call
  const fetchGitHubStats = async () => {
    setLoading(true);
    setError(null);

    try {
      //simulate API delay
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 1000)
      );

      const mockStats = {
        publicRepos: Math.floor(Math.random() * 50) + 10,
        totalCommits: Math.floor(Math.random() * 500) + 100,
        followers: Math.floor(Math.random() * 100) + 20,
        following: Math.floor(Math.random() * 150) + 30,
        totalStars: Math.floor(Math.random() * 200) + 50,
        lastUpdate: new Date().toLocaleDateString(),
      };

      setStats(mockStats);
    } catch (err) {
      setError("Failed to fetch GitHub stats " + err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubStats();
  }, []);

  if (loading) {
    return (
      <div className="dashboard-card">
        <h3 className="card-title">📊 GitHub Stats</h3>
        <div className="card-content">
          <p>🔄 Loading GitHub statistics...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-card">
        <h3 className="card-title">📊 GitHub Stats</h3>
        <div className="card-content" style={{ color: "red" }}>
          <p>❌ {error}</p>
          <button
            onClick={fetchGitHubStats}
            style={{
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              backgroundColor: "var(--accent)",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="dashboard-card">
      <h3 className="card-title">📊 GitHub Stats</h3>
      <div className="card-content">
        {stats && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            <div>
              <div style={{ marginBottom: "0.5rem" }}>
                <strong>📁 Public Repos:</strong> {stats.publicRepos}
              </div>
              <div style={{ marginBottom: "0.5rem" }}>
                <strong>💾 Total Commits:</strong> {stats.totalCommits}
              </div>
              <div style={{ marginBottom: "0.5rem" }}>
                <strong>👥 Followers:</strong> {stats.followers}
              </div>
            </div>
            <div>
              <div style={{ marginBottom: "0.5rem" }}>
                <strong>👤 Following:</strong> {stats.following}
              </div>
              <div style={{ marginBottom: "0.5rem" }}>
                <strong>⭐ Total Stars:</strong> {stats.totalStars}
              </div>
              <div style={{ marginBottom: "0.5rem" }}>
                <strong>🕒 Updated:</strong> {stats.lastUpdate}
              </div>
            </div>
          </div>
        )}

        <button
          onClick={fetchGitHubStats}
          style={{
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            backgroundColor: "var(--accent)",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          🔄 Refresh Stats
        </button>
      </div>
    </div>
  );
}

export default GitHubStats;
