export default function Player({ player }) {
  return (
    <section className="video-wrapper glass-panel">
      <div className="video-chrome">
        <video
          src={player?.videoUrl}
          controls
          className="video-player"
        />
      </div>
    </section>
  );
}
