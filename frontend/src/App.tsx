import { useState } from "react";

function App() {
  const [story, setStory] = useState("");

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "42px" }}>
        StoryToCode
      </h1>

      <p>
        Convert user stories into production-ready code.
      </p>

      <textarea
        rows={10}
        placeholder="Enter your user story..."
        value={story}
        onChange={(e) => setStory(e.target.value)}
        style={{
          marginTop: "20px",
          padding: "20px",
          borderRadius: "10px",
          width: "100%",
          maxWidth: "800px",
          background: "#1e293b",
          color: "white",
          border: "1px solid #334155",
          fontSize: "16px",
        }}
      />

      <br />
      <br />

      <button
        style={{
          padding: "12px 24px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
          background: "#3b82f6",
          color: "white",
          fontSize: "16px",
        }}
      >
        Generate
      </button>
    </div>
  );
}

export default App;