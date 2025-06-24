function CostDashboard({ voices }) {
  return (
    <div className="cost-comparison">
      <h3>Voice Generation Cost Analysis</h3>
      <table>
        <thead>
          <tr>
            <th>Emotion</th>
            <th>Duration</th>
            <th>Quality</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {voices.map((voice, index) => (
            <tr key={index}>
              <td>{voice.emotion}</td>
              <td>{voice.duration}s</td>
              <td>{voice.quality}/10</td>
              <td>${voice.cost.toFixed(4)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
