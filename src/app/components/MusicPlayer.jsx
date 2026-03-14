"use client";

import { useState, useRef, useEffect } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Mencoba autoplay saat halaman dimuat
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        // Autoplay biasanya diblokir oleh browser sebelum ada interaksi user
        console.log("Autoplay dicegah oleh browser, tunggu interaksi user.");
      });
    }
  }, []);

  // Memantau perubahan tab browser / pindah aplikasi
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!audioRef.current) return;
      
      if (document.hidden) {
        // Jika tab tidak aktif (hidden), selalu di-pause
        audioRef.current.pause();
      } else {
        // Jika tab aktif kembali dan statusnya memang 'sedang play', lanjutkan musiknya
        if (isPlaying) {
          audioRef.current.play().catch((e) => console.log(e));
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* 
        Ganti src="/music.mp3" dengan nama file musik yang Anda miliki di folder public.
        Misalnya jika Anda punya lagu "wedding.mp3" di folder public, ganti menjadi src="/wedding.mp3"
      */}
      <audio ref={audioRef} loop src="music/kasih-putih.mp3" />
      
      <button 
        className={`music-btn ${isPlaying ? "playing" : ""}`}
        onClick={togglePlay}
        aria-label="Toggle Music"
        title={isPlaying ? "Jeda Musik" : "Putar Musik"}
      >
        <div className="vinyl">
          <div className="vinyl-inner" />
        </div>
        <div className="music-icon">
          {isPlaying ? (
            <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12" style={{ marginLeft: "2px" }}>
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </div>
      </button>
    </>
  );
}
