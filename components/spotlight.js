export default function Spotlight({ spotlight }) {
  return (
    <section className="spotlight-card glass-panel">
      <h2 className="spotlight-title">Spotlight</h2>
      <p className="spotlight-main">{spotlight?.title || "Loading..."}</p>
      <p className="spotlight-sub">{spotlight?.artist || ""}</p>
      <p className="spotlight-status">{spotlight?.status || ""}</p>
    </section>
  );
}
