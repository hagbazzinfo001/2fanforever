// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { Music, Volume2, VolumeX } from 'lucide-react';

// export default function MusicToggle() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const audioRef = useRef<HTMLAudioElement>(null);

//   useEffect(() => {
//     const savedState = localStorage.getItem('weddingMusicPlaying') === 'true';
//     setIsPlaying(savedState);
//   }, []);

//   useEffect(() => {
//     const audio = audioRef.current;
//     if (!audio) return;

//     if (isPlaying) {
//       audio.play().catch(() => {
//         setIsPlaying(false);
//       });
//     } else {
//       audio.pause();
//     }

//     localStorage.setItem('weddingMusicPlaying', isPlaying.toString());
//   }, [isPlaying]);

//   const handleToggle = () => {
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <>
//       <audio
//         ref={audioRef}
//         loop
//         preload="none"
//         src="https://res.cloudinary.com/dr0qnjp1s/video/upload/v1768658142/Portable_-_Brotherhood_yxoe8v.mp3"
//       />

//       <motion.button
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 1 }}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={handleToggle}
//         className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 p-4 rounded-full shadow-lg transition-colors duration-300 ${
//           isPlaying
//             ? 'bg-emerald-600 hover:bg-emerald-700'
//             : 'bg-gray-800 hover:bg-gray-900'
//         } text-white`}
//         aria-label={isPlaying ? 'Pause music' : 'Play music'}
//       >
//         {isPlaying ? (
//           <Volume2 className="w-6 h-6" />
//         ) : (
//           <VolumeX className="w-6 h-6" />
//         )}
//       </motion.button>
//     </>
//   );
// }




'use client';

import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const STORAGE_KEY = 'music-enabled';

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Autoplay muted on load
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = true;
    audio.volume = 1;
    audio.setAttribute('playsinline', 'true');

    audio
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {});
  }, []);

  // Unlock sound on first user interaction (mobile + desktop)
  useEffect(() => {
    const unlockAudio = () => {
      const audio = audioRef.current;
      if (!audio) return;

      audio.muted = false;
      audio.play();
      setIsUnlocked(true);
      localStorage.setItem(STORAGE_KEY, 'true');

      window.removeEventListener('click', unlockAudio);
      window.removeEventListener('touchstart', unlockAudio);
      window.removeEventListener('scroll', unlockAudio);
    };

    const previouslyEnabled = localStorage.getItem(STORAGE_KEY) === 'true';
    if (previouslyEnabled) {
      unlockAudio();
      return;
    }

    window.addEventListener('click', unlockAudio, { once: true });
    window.addEventListener('touchstart', unlockAudio, { once: true });
    window.addEventListener('scroll', unlockAudio, { once: true });

    return () => {
      window.removeEventListener('click', unlockAudio);
      window.removeEventListener('touchstart', unlockAudio);
      window.removeEventListener('scroll', unlockAudio);
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        muted
        playsInline
        preload="auto"
        src="https://res.cloudinary.com/dr0qnjp1s/video/upload/v1768658142/Portable_-_Brotherhood_yxoe8v.mp3"
      />

      <button
        onClick={toggleMusic}
        aria-label="Toggle background music"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-black/80 p-4 text-white shadow-lg backdrop-blur"
      >
        {isPlaying ? <Volume2 size={22} /> : <VolumeX size={22} />}
      </button>
    </>
  );
}
