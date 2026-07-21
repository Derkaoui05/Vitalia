"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  // Counter logic (0 to 100)
  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => {
        // Increment progress organically
        const diff = Math.floor(Math.random() * 12) + 4;
        setProgress(Math.min(progress + diff, 100));
      }, Math.random() * 60 + 30);
      return () => clearTimeout(timer);
    } else {
      // Small pause at 100% for smooth transition
      const endTimer = setTimeout(() => {
        setIsDone(true);
        // Call onComplete after exit animation starts
        const completeTimer = setTimeout(() => {
          onComplete();
        }, 1000); // sync with curtain exit duration
        return () => clearTimeout(completeTimer);
      }, 600);
      return () => clearTimeout(endTimer);
    }
  }, [progress, onComplete]);

  const brandLetters = ["V", "I", "T", "A", "L", "I", "A"];

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 1.0, ease: [0.85, 0, 0.15, 1] } 
          }}
          className="fixed inset-0 z-100 bg-primary flex flex-col justify-between p-8 sm:p-12 md:p-16 text-cream select-none overflow-hidden"
        >
          {/* Top row */}
          <div className="flex justify-between items-center w-full z-10">
            <div className="flex flex-col">
              <span className="text-[10px] tracking-[0.25em] text-cream/40 uppercase font-semibold">
                Cabinet Dentaire Premium
              </span>
              <span className="text-[11px] tracking-[0.15em] text-accent uppercase font-medium mt-0.5">
                Tanger, Maroc
              </span>
            </div>
            <span className="text-[10px] tracking-[0.2em] text-cream/30 uppercase font-semibold">
              Est. 2026
            </span>
          </div>

          {/* Center Brand Name with elegant mask */}
          <div className="flex justify-center items-center py-20 z-10">
            <div className="flex">
              {brandLetters.map((letter, index) => (
                <div key={index} className="overflow-hidden inline-block">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    exit={{ 
                      y: "-110%",
                      transition: { duration: 0.8, ease: [0.85, 0, 0.15, 1], delay: index * 0.03 } 
                    }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
                    className="inline-block font-serif text-[clamp(2.5rem,9vw,7rem)] text-cream tracking-[0.15em] font-light leading-none"
                  >
                    {letter}
                  </motion.span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom row */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-end w-full z-10">
            {/* Status indicators */}
            <div className="sm:col-span-8 flex flex-col gap-1">
              <div className="overflow-hidden h-4">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  key={progress < 100 ? "loading" : "ready"}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-[9px] tracking-[0.25em] font-bold text-accent uppercase"
                >
                  {progress < 100 ? "Chargement des modules" : "Initialisation complétée"}
                </motion.span>
              </div>
              <div className="overflow-hidden h-5">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  key={progress < 100 ? "status" : "welcome"}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-xs sm:text-sm tracking-widest font-light text-cream/70 uppercase"
                >
                  {progress < 100 ? "Veuillez patienter..." : "Bienvenue chez Vitalia"}
                </motion.span>
              </div>
            </div>

            {/* Premium counter */}
            <div className="sm:col-span-4 text-right flex justify-start sm:justify-end items-baseline gap-1">
              <span className="font-serif text-[clamp(3.5rem,10vw,7rem)] text-cream font-light leading-none tabular-nums select-all">
                {progress}
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-accent uppercase select-none">
                %
              </span>
            </div>
          </div>

          {/* Dynamic fine loading line */}
          <div 
            className="absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-300 ease-out" 
            style={{ width: `${progress}%` }} 
          />
          
          {/* Subtle grid lines matching aesthetic */}
          <div className="absolute inset-x-0 top-1/4 h-px bg-cream/3 opacity-30 pointer-events-none" />
          <div className="absolute inset-x-0 top-2/4 h-px bg-cream/3 opacity-30 pointer-events-none" />
          <div className="absolute inset-x-0 top-3/4 h-px bg-cream/3 opacity-30 pointer-events-none" />
          <div className="absolute left-1/4 inset-y-0 w-px bg-cream/3 opacity-30 pointer-events-none" />
          <div className="absolute left-2/4 inset-y-0 w-px bg-cream/3 opacity-30 pointer-events-none" />
          <div className="absolute left-3/4 inset-y-0 w-px bg-cream/3 opacity-30 pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
