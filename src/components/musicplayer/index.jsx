import { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import music from "../../assets/BgMusic.mp3";

export const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.2;
    audio.loop = true;

    let clickHandler = null;

    audio.play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {
        clickHandler = () => {
          audio.play().then(() => setIsPlaying(true)).catch(() => {});
          document.body.removeEventListener("click", clickHandler);
        };
        document.body.addEventListener("click", clickHandler);
      });

    return () => {
      if (clickHandler) document.body.removeEventListener("click", clickHandler);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  };

  return (
    <div className="play-container" onClick={togglePlay} style={{ cursor: "pointer",maxWidth: "2.5%"}}>
      <audio ref={audioRef} autoPlay>
        <source src={music} type="audio/mpeg" />
      </audio>

      {isPlaying ? <Pause color="white" /> : <Play color="white" />}
    </div>
  );
};
