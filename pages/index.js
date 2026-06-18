import { useEffect, useState } from "react";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";

export default function Viewer() {
  const [spotlight, setSpotlight] = useState(null);
  const [player, setPlayer] = useState(null);
  const [ticker, setTicker] = useState(null);

  useEffect(() => {
    onValue(ref(db, "spotlight"), snap => setSpotlight(snap.val()));
    onValue(ref(db, "player"), snap => setPlayer(snap.val()));
    onValue(ref(db, "ticker"), snap => setTicker(snap.val()));
  }, []);

  return (
    <main className="ptv-viewer">
      <h1>PariahTV Viewer</h1>

      {/* Spotlight */}
      {!spotlight ? (
        <p>Loading spotlight…</p>
      ) : (
        <div className="spotlight">
          <h2>{spotlight.title}</h2>
          <p>{spotlight.artist}</p>
          <p>{spotlight.status}</p>
        </div>
      )}

      {/* Player */}
      {!player ? (
        <p>Loading player…</p>
      ) : (
        <div className="player">
          <p>Now Playing: {player.nowPlaying}</p>
          <p>Duration: {player.duration}</p>
        </div>
      )}

      {/* Ticker */}
      {!ticker ? (
        <p>Loading ticker…</p>
      ) : (
        <div className="ticker">{ticker.text}</div>
      )}

      {/* Floating Emoji Container */}
      <div className="ptv-emoji-container"></div>

      {/* Emoji Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            const container = document.querySelector('.ptv-emoji-container');
            const emojis = ['🔥','😤','👊🏽','❤️','💯','🎤'];

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
        }}
      />
    </main>
  );
}
