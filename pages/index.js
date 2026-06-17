export default function Home() {
  return (
    <main className="ptv-main">

      {/* VIDEO PLAYER */}
      <section className="ptv-video">
        <div className="ptv-video-overlay-top">
          <img src="/logos/ptv-silhouette.png" className="ptv-corner-bug" alt="PTV Bug" />
          <div className="ptv-live-pill">LIVE</div>
        </div>

        <div className="ptv-video-overlay-bottom">
          <div className="ptv-show-strip">HYPE CITY — EP. 07</div>
          <div className="ptv-now-playing">Now Playing: BIG BANGER</div>
        </div>

        <div className="ptv-breaking-news">
          <span>BREAKING NEWS: PARIAHTV IS LIVE — NEW SHOWS DROPPING — STAY LOCKED IN —</span>
        </div>
      </section>

      {/* GENESIS-PRO PLAYER CONTROLS */}
      <section className="ptv-player-controls">
        <div className="ptv-controls-row">
          <button className="ptv-btn">⏮</button>
          <button className="ptv-btn">▶️</button>
          <button className="ptv-btn">⏭</button>
          <div className="ptv-time-display">00:12 / 03:48</div>
        </div>

        <div className="ptv-progress-bar">
          <div className="ptv-progress-fill"></div>
        </div>

        <div className="ptv-volume-row">
          <span className="ptv-volume-icon">🔊</span>
          <input type="range" min="0" max="100" className="ptv-volume-slider" />
        </div>
      </section>

      {/* RADIO SECTION */}
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

      {/* CHAT SECTION */}
      <section className="ptv-chat">
        <div className="ptv-chat-message slide-in">
          <strong>User123:</strong> This is fire 🔥
        </div>
        <div className="ptv-chat-message slide-in">
          <strong>GamerGal:</strong> Loving this stream
        </div>
        <div className="ptv-chat-message slide-in">
          <strong>BeatsByJay:</strong> Big tune!
        </div>
        <div className="ptv-chat-message slide-in">
          <strong>SkaterDude:</strong> When’s the next show
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ptv-footer">
        <img src="/logos/pariah-tv-logo.png" alt="PariahTV Logo" className="ptv-footer-logo" />
        <div className="ptv-nav">
          <span>After Dark</span>
          <span>Live Sets</span>
          <span>Retro Wave</span>
          <span>Chill Zone</span>
        </div>
      </footer>

      {/* FLOATING EMOJI REACTIONS */}
      <div className="ptv-emoji-container"></div>

      <script dangerouslySetInnerHTML={{
        __html: `
          const container = document.querySelector('.ptv-emoji-container');
          const emojis = ['❤️','🔥','😂','💯','👏','😮'];

          function spawnEmoji() {
            const emoji = document.createElement('div');
            emoji.className = 'ptv-emoji';
            emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = Math.random() * 80 + '%';
            emoji.style.animationDuration = (2 + Math.random() * 2) + 's';
            container.appendChild(emoji);
            setTimeout(() => emoji.remove(), 4000);
          }

          setInterval(spawnEmoji, 800);
        `
      }} />

      {/* AD BREAK OVERLAY */}
      <div className="ptv-ad-break">
        <div className="ptv-ad-dim"></div>

        <div className="ptv-ad-content">
          <img src="/logos/ptv-silhouette.png" className="ptv-ad-bug" alt="PTV Bug" />
          <div className="ptv-ad-banner">AD BREAK</div>
          <div className="ptv-ad-timer">Returning in 00:15</div>

          <div className="ptv-ad-sponsor slide-up">
            <p>Sponsored by</p>
            <strong>GENESIS‑PRO</strong>
          </div>
        </div>
      </div>

    </main>
  );
}
