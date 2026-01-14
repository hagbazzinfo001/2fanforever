'use client';

import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

interface SnapchatButtonProps {
  onClick?: () => void;
}

export default function SnapchatButton({ onClick }: SnapchatButtonProps) {
  // const handleClick = () => {
  //   const lensUrl = process.env.NEXT_PUBLIC_SNAPCHAT_LENS_URL || '';

  //   if (lensUrl) {
  //     const snapchatDeepLink = `snapchat://lens?url=${encodeURIComponent(lensUrl)}`;

  //     const link = document.createElement('a');
  //     link.href = snapchatDeepLink;

  //     link.onerror = () => {
  //       window.location.href = lensUrl;
  //     };

  //     link.click();

  //     setTimeout(() => {
  //       window.location.href = lensUrl;
  //     }, 500);
  //   }

  //   onClick?.();
  // };


  const handleClick = () => {
    const lensUrl =
      'https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=305de796e4b542faa7b6a0a10d35b19f&metadata=01';
  
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  
    if (isMobile) {
      // Try to open Snapchat app
      window.location.href = `snapchat://add?link=${encodeURIComponent(lensUrl)}`;
  
      // Fallback to browser if Snapchat app is not installed
      setTimeout(() => {
        window.location.href = lensUrl;
      }, 800);
    } else {
      // Desktop users
      window.open(lensUrl, '_blank');
    }
  
    onClick?.();
  };
  
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-12 sm:py-20 px-4 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-gradient-to-r from-emerald-50 to-emerald-100/50 rounded-2xl p-8 sm:p-12 text-center border border-emerald-200"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
            className="mb-6 flex justify-center"
          >
            <div className="bg-white rounded-full p-4 shadow-lg">
              <Camera className="w-8 h-8 text-emerald-600" />
            </div>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl font-serif text-emerald-800 mb-3">
            Try Our Wedding Filter
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Capture special moments with our exclusive Snapchat lens designed for the big day!
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
          >
            <Camera className="w-5 h-5" />
            Open Snapchat Lens
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
