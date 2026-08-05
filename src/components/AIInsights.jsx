function AIInsights({ insights }) {
  if (!insights) return null;

  const lines = insights
    .split("\n")
    .filter(line => line.trim() !== "");

  return (
    <div className="ai-card">
      <h2>🤖 AI Weather Insights</h2>

      {lines.map((line, index) => (
        <div key={index} className="insight-item">
          {line}
        </div>
      ))}
    </div>
  );
}

export default AIInsights;