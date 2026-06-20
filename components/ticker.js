export default function Ticker({ ticker }) {
  return (
    <section className="ticker glass-panel">
      <div className="ticker-text">
        {ticker?.text || "Loading..."}
      </div>
    </section>
  );
}
