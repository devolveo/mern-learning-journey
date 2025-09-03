import React, { useState } from "react";

export default function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    setLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (Math.random() > 0.3) {
        const mockData = {
          users: Math.floor(Math.random() * 100),
          posts: Math.floor(Math.random() * 1000),
          comments: Math.floor(Math.random() * 1000),
          lastUpdate: new Date().toLocaleString(),
        };
        setData(mockData);
      } else {
        throw new Error("Network request failed");
      }
    } catch (error) {
      setError(error.message);
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
          <button onClick={fetchData}>Try again</button>
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
