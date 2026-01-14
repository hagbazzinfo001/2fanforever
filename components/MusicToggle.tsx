'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Music, Volume2, VolumeX } from 'lucide-react';

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const savedState = localStorage.getItem('weddingMusicPlaying') === 'true';
    setIsPlaying(savedState);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(() => {
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }

    localStorage.setItem('weddingMusicPlaying', isPlaying.toString());
  }, [isPlaying]);

  const handleToggle = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="none"
        src="https://assets.mixkit.co/active_storage/musics/535-7d26ee90-b113-46d8-ba10-5276cf197375.mp3"
      />

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleToggle}
        className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 p-4 rounded-full shadow-lg transition-colors duration-300 ${
          isPlaying
            ? 'bg-emerald-600 hover:bg-emerald-700'
            : 'bg-gray-800 hover:bg-gray-900'
        } text-white`}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6" />
        ) : (
          <VolumeX className="w-6 h-6" />
        )}
      </motion.button>
    </>
  );
}
