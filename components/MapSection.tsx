// 'use client';

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { MapPin, AlertCircle, Loader } from 'lucide-react';

// interface MapSectionProps {
//   onVisible?: () => void;
// }

// export default function MapSection({ onVisible }: MapSectionProps) {
//   const [userLocation, setUserLocation] = useState<{
//     lat: number;
//     lng: number;
//   } | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const venueLat = parseFloat(process.env.NEXT_PUBLIC_VENUE_LAT || '37.7749');
//   const venueLng = parseFloat(process.env.NEXT_PUBLIC_VENUE_LNG || '-122.4194');
//   const venueName = process.env.NEXT_PUBLIC_VENUE_NAME || 'Wedding Venue';
//   const venueAddress = process.env.NEXT_PUBLIC_VENUE_ADDRESS || '123 Wedding Lane';

//   useEffect(() => {
//     const getLocation = () => {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             setUserLocation({
//               lat: position.coords.latitude,
//               lng: position.coords.longitude,
//             });
//             setLoading(false);
//           },
//           () => {
//             setError('Unable to get your location. Please enable location services.');
//             setLoading(false);
//           }
//         );
//       } else {
//         setError('Geolocation is not supported by your browser.');
//         setLoading(false);
//       }
//     };

//     getLocation();
//   }, []);

//   const handleGetDirections = () => {
//     if (userLocation) {
//       const mapsUrl = `https://www.google.com/maps/dir/${userLocation.lat},${userLocation.lng}/${venueLat},${venueLng}`;
//       window.open(mapsUrl, '_blank');
//     }
//   };

//   const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0188407893686!2d${venueLng}!3d${venueLat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${venueLat}%2C${venueLng}!5e0!3m2!1sen!2sus!4v1234567890`;

//   return (
//     <section className="py-12 sm:py-20 px-4 bg-gradient-to-b from-emerald-50 to-white">
//       <div className="max-w-6xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-2xl sm:text-4xl font-serif text-center text-emerald-800 mb-4"
//         >
//           Directions
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto"
//         >
//           Join us at our beautiful venue. Click below to get real-time directions from your location.
//         </motion.p>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="lg:col-span-2 bg-white rounded-2xl overflow-hidden shadow-lg"
//           >
//             <div className="relative w-full h-96 sm:h-[500px] bg-emerald-100">
//               <iframe
//                 src={mapEmbedUrl}
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen={true}
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 className="absolute inset-0"
//               />
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="flex flex-col gap-6"
//           >
//             <div className="bg-white rounded-2xl p-6 shadow-lg">
//               <div className="flex items-start gap-4">
//                 <MapPin className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
//                 <div>
//                   <h3 className="font-serif text-lg text-emerald-800 mb-2">{venueName}</h3>
//                   <p className="text-sm text-gray-600">{venueAddress}</p>
//                 </div>
//               </div>
//             </div>

//             {loading && (
//               <div className="bg-white rounded-2xl p-6 shadow-lg flex items-center gap-3">
//                 <Loader className="w-5 h-5 text-emerald-600 animate-spin" />
//                 <p className="text-sm text-gray-600">Getting your location...</p>
//               </div>
//             )}

//             {error && (
//               <div className="bg-red-50 rounded-2xl p-6 shadow-lg border border-red-200">
//                 <div className="flex items-start gap-3">
//                   <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
//                   <p className="text-sm text-red-700">{error}</p>
//                 </div>
//               </div>
//             )}

//             {!loading && !error && userLocation && (
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={handleGetDirections}
//                 className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 w-full"
//               >
//                 Get Directions
//               </motion.button>
//             )}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, AlertCircle, Loader } from 'lucide-react';

export default function MapSection() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const venueName = 'Golden Event Center';
  const venueAddress =
    'Golden Event Center, Oke Eletu Ijede Road, Ijede, Lagos, Nigeria';

  const encodedAddress = encodeURIComponent(venueAddress);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      () => setLoading(false),
      () => {
        setError('Location access denied. You can still open directions.');
        setLoading(false);
      }
    );
  }, []);

  // const handleGetDirections = () => {
  //   const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
  //   window.open(directionsUrl, '_blank');
  // };
  const handleGetDirections = () => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  
    const mapsUrl = isMobile
      ? `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`
      : `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  
    window.open(mapsUrl, '_blank');
  };
  
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

  return (
    <section className="py-12 sm:py-20 px-4 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-4xl font-serif text-center text-emerald-800 mb-4"
        >
          Directions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto"
        >
          Join us at our beautiful venue. Tap below to open directions in Google Maps.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-white rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="relative w-full h-96 sm:h-[500px]">
              <iframe
                src={mapEmbedUrl}
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-emerald-600 mt-1" />
                <div>
                  <h3 className="font-serif text-lg text-emerald-800 mb-2">
                    {venueName}
                  </h3>
                  <p className="text-sm text-gray-600">{venueAddress}</p>
                </div>
              </div>
            </div>

            {loading && (
              <div className="bg-white rounded-2xl p-6 shadow-lg flex items-center gap-3">
                <Loader className="w-5 h-5 text-emerald-600 animate-spin" />
                <p className="text-sm text-gray-600">Checking location access…</p>
              </div>
            )}

            {error && (
              <div className="bg-red-50 rounded-2xl p-6 shadow-lg border border-red-200">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGetDirections}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 w-full"
            >
              Open Google Maps
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

