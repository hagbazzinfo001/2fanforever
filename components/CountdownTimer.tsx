// 'use client';

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// interface TimeLeft {
//   days: number;
//   hours: number;
//   minutes: number;
//   seconds: number;
// }

// export default function CountdownTimer() {
//   const [timeLeft, setTimeLeft] = useState<TimeLeft>({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   useEffect(() => {
//     const calculateTimeLeft = () => {
//       const targetDate = new Date('2026-02-14').getTime();
//       const now = new Date().getTime();
//       const difference = targetDate - now;

//       if (difference > 0) {
//         setTimeLeft({
//           days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//           minutes: Math.floor((difference / 1000 / 60) % 60),
//           seconds: Math.floor((difference / 1000) % 60),
//         });
//       }
//     };

//     calculateTimeLeft();
//     const timer = setInterval(calculateTimeLeft, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const TimeUnit = ({ value, label }: { value: number; label: string }) => (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.8 }}
//       animate={{ opacity: 1, scale: 1 }}
//       className="flex flex-col items-center"
//     >
//       <motion.div
//         key={value}
//         initial={{ rotateX: 90, opacity: 0 }}
//         animate={{ rotateX: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="bg-emerald-50 border border-emerald-200 rounded-lg px-4 sm:px-6 py-3 sm:py-4 min-w-16 sm:min-w-20"
//       >
//         <div className="text-2xl sm:text-4xl font-serif font-bold text-emerald-800">
//           {String(value).padStart(2, '0')}
//         </div>
//       </motion.div>
//       <p className="text-xs sm:text-sm text-emerald-700 mt-2 font-light tracking-wide">
//         {label}
//       </p>
//     </motion.div>
//   );

//   return (
//     <section className="py-12 sm:py-16 px-4 bg-white">
//       <div className="max-w-6xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-2xl sm:text-4xl font-serif text-center text-emerald-800 mb-8 sm:mb-12"
//         >
//           Until the Big Day
//         </motion.h2>

//         <div className="flex justify-center items-center gap-3 sm:gap-6">
//           <TimeUnit value={timeLeft.days} label="Days" />
//           <div className="text-2xl sm:text-3xl text-emerald-300 font-light">:</div>
//           <TimeUnit value={timeLeft.hours} label="Hours" />
//           <div className="text-2xl sm:text-3xl text-emerald-300 font-light">:</div>
//           <TimeUnit value={timeLeft.minutes} label="Minutes" />
//           <div className="text-2xl sm:text-3xl text-emerald-300 font-light">:</div>
//           <TimeUnit value={timeLeft.seconds} label="Seconds" />
//         </div>
//       </div>
//     </section>
//   );
// }



'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // ✅ Explicit local-time target (Feb 14, 2026 — midnight local time)
    const targetDate = new Date(2026, 1, 14, 0, 0, 0).getTime();

    const calculateTimeLeft = () => {
      const now = Date.now();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center"
    >
      <motion.div
        key={value}
        initial={{ rotateX: 90, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-emerald-50 border border-emerald-200 rounded-lg px-4 sm:px-6 py-3 sm:py-4 min-w-16 sm:min-w-20"
      >
        <div className="text-2xl sm:text-4xl font-serif font-bold text-emerald-800">
          {String(value).padStart(2, '0')}
        </div>
      </motion.div>
      <p className="text-xs sm:text-sm text-emerald-700 mt-2 font-light tracking-wide">
        {label}
      </p>
    </motion.div>
  );

  return (
    <section className="py-12 sm:py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-4xl font-serif text-center text-emerald-800 mb-8 sm:mb-12"
        >
          Until the Big Day
        </motion.h2>

        <div className="flex justify-center items-center gap-3 sm:gap-6">
          <TimeUnit value={timeLeft.days} label="Days" />
          <div className="text-2xl sm:text-3xl text-emerald-300 font-light">:</div>
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <div className="text-2xl sm:text-3xl text-emerald-300 font-light">:</div>
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <div className="text-2xl sm:text-3xl text-emerald-300 font-light">:</div>
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </section>
  );
}
