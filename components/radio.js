export default function Radio({ player }) {
  return (
    <section className="radio-bar glass-panel">
      <div className="radio-header">
        <span className="radio-live-dot" />
        <span className="radio-label">LIVE RADIO</span>
      </div>
      <p className="radio-title">Now Playing</p>
      <p className="radio-track">{player?.nowPlaying || "Loading..."}</p>
      <div className="radio-frequency-bar">
        <div className="radio-frequency-fill" />
      </div>
    </section>
  );
}
