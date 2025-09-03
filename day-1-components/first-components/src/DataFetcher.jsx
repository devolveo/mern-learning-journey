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

export default function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const [maxRetries] = useState(3);

  async function fetchData() {
    setLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(() => resolve(), 1000));

      const errorTypes = ["network", "timeout", "server", "success"];
      const randomResult =
        errorTypes[Math.floor(Math.random() * errorTypes.length)];
      let mockData = {};

      switch (randomResult) {
        case "network":
          throw new Error("Network connection failed");
        case "timeout":
          throw new Error("Request Timeout");
        case "server":
          throw new Error("Server error (500)");
        case "success":
          mockData = {
            users: Math.floor(Math.random() * 1000) + 100,
            posts: Math.floor(Math.random() * 5000) + 500,
            comments: Math.floor(Math.random() * 10000) + 1000,
            lastUpdate: new Date().toLocaleString(),
          };
          setData(mockData);
          setRetryCount(0);
          break;
      }
    } catch (error) {
      setError(error.message);

      //auto retry
      if (retryCount < maxRetries) {
        setTimeout(() => {
          setRetryCount((prev) => prev + 1);
          fetchData(true);
        }, 2000);
      }
    } finally {
      setLoading(false);
    }
  }
  return (
    <div
      style={{ border: "2px solid #007acc", padding: "20px", margin: "20px 0" }}
    >
      <h2>Data Fetcher (Error Handling Demo)</h2>
      <button onClick={fetchData} disabled={loading}>
        {loading ? "Loading..." : "Fetch data"}
      </button>

      {loading && <p>🔄 Loading data...</p>}

      {error && (
        <div
          style={{
            color: "red",
            backgroundColor: "#ffe6e6",
            padding: "10px",
            margin: "10px 0",
          }}
        >
          <h4>❌ Error occurred:</h4>
          <p>{error}</p>
          {retryCount < maxRetries ? (
            <p>
              🔄 Auto-retrying... Attempt {retryCount + 1}/{maxRetries}
            </p>
          ) : (
            <button onClick={() => fetchData()}>Try Again</button>
          )}
        </div>
      )}

      {data && !loading && !error && (
        <div
          style={{
            color: "green",
            backgroundColor: "#e6ffe6",
            padding: "10px",
            margin: "10px 0",
          }}
        >
          <h4>✅ Data loaded successfully</h4>
          <p>👥 Users: {data.users}</p>
          <p>📝 Posts: {data.posts}</p>
          <p>💬 Comments: {data.comments}</p>
          <p>🕐 Last Update: {data.lastUpdate}</p>
        </div>
      )}
    </div>
  );
}
