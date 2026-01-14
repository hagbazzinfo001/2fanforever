'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed, Map, Camera } from 'lucide-react';
import Image from 'next/image';
interface NavbarProps {
  onMenuClick: () => void;
  onSnapchatClick: () => void;
  onMapClick: () => void;
}

export default function Navbar({ onMenuClick, onSnapchatClick, onMapClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-gradient-to-b from-black/50 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={`text-xl sm:text-2xl font-serif ${
              scrolled ? 'text-emerald-800' : 'text-white'
            }`}
          >
            H & Z
          </motion.div>

          <div className="flex items-center gap-3 sm:gap-6">
            <NavButton
              icon={<UtensilsCrossed className="w-10 h-10" />}
                          label="Menu"
              onClick={onMenuClick}
              scrolled={scrolled}
              delay={0.4}
            />
            <NavButton
              icon={ 
              <Image
                src="/Google.png"
                alt="Directions"
                width={40}
                height={40}
              />
          }
              label="Directions"
              onClick={onMapClick}
              scrolled={scrolled}
              delay={0.5}
            />
            <NavButton
              icon={    <Image
                src="/snapchatq.png"
                alt="snatpchat"
                width={40}
                height={40}
              />
          }
              label="Filter"
              onClick={onSnapchatClick}
              scrolled={scrolled}
              delay={0.6}
            />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  scrolled: boolean;
  delay: number;
}

function NavButton({ icon, label, onClick, scrolled, delay }: NavButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`flex flex-col sm:flex-row items-center gap-1 sm:gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
        scrolled
          ? 'text-emerald-700 hover:bg-emerald-50'
          : 'text-white hover:bg-white/20'
      }`}
    >
      <span>{icon}</span>
      <span className="text-xs sm:text-sm font-medium hidden sm:inline">{label}</span>
    </motion.button>
  );
}
