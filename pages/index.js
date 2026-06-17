import Header from "../components/Header";

export default function Home() {
  return (
    <main className="ptv-main">
      <Header />

      <section className="ptv-video">
        <img src="/logos/ptv-silhouette.png" alt="PTV Silhouette" className="ptv-video-overlay" />
        <div className="ptv-breaking-news">
  <span>BREAKING NEWS: PARIAHTV IS LIVE — NEW SHOWS DROPPING — STAY LOCKED IN —</span>
</div>

      </section>

      <section className="ptv-radio">
  <h2>PARIAH RADIO</h2>
  <p>Now Playing: HYPE CITY — BIG BANGER</p>

  <div className="ptv-waveform">
    <div className="bar"></div>
    <div className="bar"></div>
    <div className="bar"></div>
    <div className="bar"></div>
    <div className="bar"></div>
    <div className="bar"></div>
    <div className="bar"></div>
    <div className="bar"></div>
    <div className="bar"></div>
    <div className="bar"></div>
  </div>
</section>


      <section className="ptv-chat">
        <p><strong>User123:</strong> This is fire! 🔥</p>
        <p><strong>GamerGal:</strong> Awesome stream!</p>
        <p><strong>BeatsByJay:</strong> Loving this track!</p>
        <p><strong>SkaterDude:</strong> When’s the next show?</p>
      </section>

      <footer className="ptv-footer">
        <img src="/logos/pariah-tv-logo.png" alt="PariahTV Logo" className="ptv-footer-logo" />
        <div className="ptv-nav">
          <span>After Dark</span>
          <span>Live Sets</span>
          <span>Retro Wave</span>
          <span>Chill Zone</span>
        </div>
      </footer>
    </main>
  );
}
