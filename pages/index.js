import { useEffect, useState } from "react";
import { db } from "../firebase";
import { ref, onValue, set } from "firebase/database";

export default function Home() {
  // Spotlight creators
  const [creators, setCreators] = useState([]);
  const [creatorIndex, setCreatorIndex] = useState(0);

  // Now Playing
  const [nowPlaying, setNowPlaying] = useState({
    title: "Loading…",
    track: "Loading…",
    ticker: "Loading…",
  });

  // Player state
  const [playerState, setPlayerState] = useState({
    playing: false,
    currentTrackIndex: 0,
  });

  // Load Firebase data
  useEffect(() => {
    if (!db) return;

    // Spotlight creators
    const spotlightRef = ref(db, "pariahTV/spotlightCreators");
    onValue(spotlightRef, (snapshot) => {
      const data = snapshot.val() || {};
      const list = Object.values(data);
      setCreators(list);
      setCreatorIndex(0);
    });

    // Now Playing
    const nowRef = ref(db, "pariahTV/nowPlaying");
    onValue(nowRef, (snapshot) => {
      const data = snapshot.val() || {};
      setNowPlaying({
        title: data.title || "HYPE CITY — EP. 07",
        track: data.track || "BIG BANGER",
        ticker:
          data.ticker ||
          "BREAKING NEWS: PARIAHTV IS LIVE — NEW SHOWS DROPPING — STAY LOCKED IN —",
      });
    });

    // Player state
    const playerRef = ref(db, "pariahTV/playerState");
    onValue(playerRef, (snapshot) => {
      const data = snapshot.val() || {};
      setPlayerState({
        playing: !!data.playing,
        currentTrackIndex: data.currentTrackIndex || 0,
      });
    });
  }, []);

  // Rotate Spotlight creators
  useEffect(() => {
    if (!creators.length) return;
    const interval = setInterval(() => {
      setCreatorIndex((prev) => (prev + 1) % creators.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [creators]);

  const currentCreator = creators[creatorIndex] || {
    name: "Loading…",
    role: "Loading…",
    line: "Loading…",
    img: "/logos/pariah-tv-full.PNG",
    link: "#",
    featured: false,
  };

  // Player controls
  const togglePlay = () => {
    set(ref(db, "pariahTV/playerState"), {
      ...playerState,
      playing: !playerState.playing,
    });
  };

  const nextTrack = () => {
    set(ref(db, "pariahTV/playerState"), {
      ...playerState,
      currentTrackIndex: playerState.currentTrackIndex + 1,
    });
  };

  const prevTrack = () => {
    set(ref(db, "pariahTV/playerState"), {
      ...playerState,
      currentTrackIndex:
        playerState.currentTrackIndex > 0
          ? playerState.currentTrackIndex - 1
          : 0,
    });
  };

  // Floating hearts (only emoji allowed)
  useEffect(() => {
    const container = document.querySelector(".ptv-emoji-container");
    if (!container) return;

    const spawn = () => {
      const el = document.createElement("div");
      el.className = "ptv-emoji";
      el.innerText = "❤️";
      el.style.left = Math.random() * 80 + "%";
      el.style.animationDuration = 2 + Math.random() * 2 + "s";
      container.appendChild(el);
      setTimeout(() => el.remove(), 4000);
    };

    const interval = setInterval(spawn, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="ptv-main">

      {/* VIDEO PLAYER */}
      <section className="ptv-video ptv-glass fade-up">
        <div className="ptv-video-overlay-top">
          <img
            src="/logos/ptv-silhouette.PNG"
            className="ptv-corner-bug"
            alt="PTV Bug"
          />
          <div className="ptv-live-pill">LIVE</div>
        </div>

        <div className="ptv-video-overlay-bottom">
          <div className="ptv-show-strip">{nowPlaying.title}</div>
          <div className="ptv-now-playing">Now Playing: {nowPlaying.track}</div>
        </div>

        <div className="ptv-breaking-news">
          <span>{nowPlaying.ticker}</span>
        </div>
      </section>

      {/* CREATOR SPOTLIGHT */}
      <section className="ptv-creator-spotlight ptv-glass fade-up">
        <div
          className={
            "ptv-featured-badge" + (currentCreator.featured ? " active" : "")
          }
        >
          FEATURED
        </div>

        <img
          src={currentCreator.img}
          alt="Creator"
          className="ptv-creator-image"
        />

        <div className="ptv-creator-info">
          <h3 className="ptv-creator-name">{currentCreator.name}</h3>
          <p className="ptv-creator-role">{currentCreator.role}</p>
          <p className="ptv-creator-line">{currentCreator.line}</p>

          <a
            href={currentCreator.link}
            target="_blank"
            rel="noreferrer"
            className="ptv-creator-btn"
          >
            View Profile
          </a>
        </div>
      </section>

      {/* PLAYER CONTROLS */}
      <section className="ptv-player-controls ptv-glass fade-up">
        <div className="ptv-controls-row">
          <button className="ptv-btn" onClick={prevTrack}>
            <span className="ptv-btn-label">PREV</span>
          </button>

          <button
            className={
              "ptv-btn ptv-btn-play" +
              (playerState.playing ? " ptv-btn-active" : "")
            }
            onClick={togglePlay}
          >
            <span className="ptv-btn-label">
              {playerState.playing ? "PAUSE" : "PLAY"}
            </span>
          </button>

          <button className="ptv-btn" onClick={nextTrack}>
            <span className="ptv-btn-label">NEXT</span>
          </button>

          <div className="ptv-time-display">00:12 / 03:48</div>
        </div>

        <div className="ptv-progress-bar">
          <div className="ptv-progress-fill"></div>
        </div>

        <div className="ptv-volume-row">
          <span className="ptv-volume-label">VOL</span>
          <input type="range" min="0" max="100" className="ptv-volume-slider" />
        </div>
      </section>

      {/* RADIO */}
      <section className="ptv-radio ptv-glass fade-up">
        <h2>PARIAH RADIO</h2>
        <p>Now Playing: {nowPlaying.track}</p>

        <div className="ptv-waveform">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="bar"></div>
          ))}
        </div>
      </section>

      {/* CHAT */}
      <section className="ptv-chat ptv-glass fade-up">
        <div className="ptv-chat-message">
          <strong>User123:</strong> This is fire
        </div>
        <div className="ptv-chat-message">
          <strong>GamerGal:</strong> Loving this stream
        </div>
        <div className="ptv-chat-message">
          <strong>BeatsByJay:</strong> Big tune!
        </div>
        <div className="ptv-chat-message">
          <strong>SkaterDude:</strong> When’s the next show
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ptv-footer ptv-glass fade-up">
        <img
          src="/logos/pariah-tv-logo.PNG"
          alt="PariahTV Logo"
          className="ptv-footer-logo"
        />
        <div className="ptv-nav">
          <span>After Dark</span>
          <span>Live Sets</span>
          <span>Retro Wave</span>
          <span>Chill Zone</span>
        </div>
      </footer>

      {/* FLOATING HEARTS */}
      <div className="ptv-emoji-container"></div>
    </main>
  );
}
