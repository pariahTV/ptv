import { useState } from "react";
import { db } from "../firebase";
import { ref, set } from "firebase/database";

export default function ControlRoom() {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [status, setStatus] = useState("");

  const [nowPlaying, setNowPlaying] = useState("");
  const [duration, setDuration] = useState("");

  const [ticker, setTicker] = useState("");

  const updateSpotlight = () => {
    set(ref(db, "spotlight"), { title, artist, status });
  };

  const updatePlayer = () => {
    set(ref(db, "player"), { nowPlaying, duration });
  };

  const updateTicker = () => {
    set(ref(db, "ticker"), { text: ticker });
  };

  return (
    <main className="ptv-control">
      <h1>PariahTV Control Room</h1>

      <section>
        <h2>Spotlight</h2>
        <input placeholder="Title" onChange={e => setTitle(e.target.value)} />
        <input placeholder="Artist" onChange={e => setArtist(e.target.value)} />
        <input placeholder="Status" onChange={e => setStatus(e.target.value)} />
        <button onClick={updateSpotlight}>Update Spotlight</button>
      </section>

      <section>
        <h2>Player</h2>
        <input placeholder="Now Playing" onChange={e => setNowPlaying(e.target.value)} />
        <input placeholder="Duration" onChange={e => setDuration(e.target.value)} />
        <button onClick={updatePlayer}>Update Player</button>
      </section>

      <section>
        <h2>Ticker</h2>
        <input placeholder="Ticker Text" onChange={e => setTicker(e.target.value)} />
        <button onClick={updateTicker}>Update Ticker</button>
      </section>
    </main>
  );
}
