import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import "./MusicPlayer.css";

export default function MusicPlayer() {
  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.35);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch (error) {
        console.error("Impossible de lancer la musique :", error);
      }
    }
  };

  const changeVolume = (e) => {
    const value = Number(e.target.value);
    setVolume(value);

    if (audioRef.current) {
      audioRef.current.volume = value;
    }
  };

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        src="/crystaleyeofficial-happy-birthday-background-music-357619.mp3"
        loop
        onEnded={() => setPlaying(false)}
      />

      <button
        className="music-button"
        onClick={toggleMusic}
        aria-label={playing ? "Mettre en pause" : "Lancer la musique"}
      >
        {playing ? <Pause size={20} /> : <Play size={20} />}
      </button>

      <div className="music-controls">
        <Volume2 size={17} />

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={changeVolume}
          aria-label="Volume"
        />
      </div>
    </div>
  );
}