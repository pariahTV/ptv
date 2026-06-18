// components/Player.js
export default function Player({ player }) {
  return (
    <section className="player">
      <h2 className="player-title">Now Playing</h2>

      <p>{player?.nowPlaying || "Loading..."}</p>

      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>

      <p style={{ marginTop: "10px", opacity: 0.7 }}>
        {player?.duration || ""}
      </p>
    </section>
  );
}
