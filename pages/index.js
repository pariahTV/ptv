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
    nowPlaying: "Loading…",
    duration: "Loading…",
  });

  // Load Firebase data
  useEffect(() => {
    if (!db) return;

    // Spotlight data
    const spotlightRef = ref(db, "spotlight");
    onValue(spotlightRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setNowPlaying({
          title: data.title,
          track: data.artist,
          ticker: data.status,
        });
      }
    });

    // Player data
    const playerRef = ref(db, "player");
    onValue(playerRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setPlayerState({
          playing: true,
          currentTrackIndex: 0,
          nowPlaying: data.nowPlaying,
          duration: data.duration,
        });
      }
    });

    // Optional: Spotlight creators
    const creatorsRef = ref(db, "pariahTV/spotlightCreators");
    onValue(creatorsRef, (snapshot) => {
      const data = snapshot.val() || {};
      const list = Object.values(data);
      setCreators(list);
      setCreatorIndex(0);
    });
  }, []);

  // Example Control Room edit function
  const updateSpotlight = (newTitle, newArtist, newStatus) => {
    set(ref(db, "spotlight"), {
      title: newTitle,
      artist: newArtist,
      status: newStatus,
    });
  };

  return (
    <div style={{ color: "white", backgroundColor: "black", padding: "20px" }}>
      <h1>Pariah TV Viewer</h1>

      <section>
        <h2>{nowPlaying.title}</h2>
        <p>{nowPlaying.track}</p>
        <p>{nowPlaying.ticker}</p>
      </section>

      <section>
        <h3>Now Playing: {playerState.nowPlaying}</h3>
        <p>Duration: {playerState.duration}</p>
      </section>

      <section>
        <h4>Spotlight Creators</h4>
        <ul>
          {creators.map((creator, i) => (
            <li key={i}>{creator}</li>
          ))}
        </ul>
      </section>

      <button
        onClick={() =>
          updateSpotlight("Pariah TV Live", "Cee Fiitz", "LIVE")
        }
      >
        Update Spotlight
      </button>
    </div>
  );
}
