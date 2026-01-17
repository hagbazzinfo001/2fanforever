'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroCarousel from '@/components/HeroCarousel';
import CountdownTimer from '@/components/CountdownTimer';
import FoodMenuModal from '@/components/FoodMenuModal';
import MapSection from '@/components/MapSection';
import SnapchatButton from '@/components/SnapchatButton';
import MusicToggle from '@/components/MusicToggle';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMenuClick = () => {
    setIsMenuOpen(true);
  };

  const handleMapClick = () => {
    scrollToSection('map-section');
  };

  const handleSnapchatClick = () => {
    scrollToSection('snapchat-section');
  };

  return (
    <>
      <Navbar
        onMenuClick={handleMenuClick}
        onMapClick={handleMapClick}
        onSnapchatClick={handleSnapchatClick}
      />

      <HeroCarousel />

      <CountdownTimer />
      <div id="snapchat-section">
        <SnapchatButton />
      </div>
      <div id="map-section">
        <MapSection />
      </div>

   

      <FoodMenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <MusicToggle />
    </>
  );
}
