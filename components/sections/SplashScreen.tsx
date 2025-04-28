"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SplashScreen = () => {
  const fullTextArray = [
    "NEWAIMS - NORTH EAST",
    "Overall Welfare Action",
    "Implementation Society"
  ];

  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    if (currentLineIndex < fullTextArray.length) {
      const line = fullTextArray[currentLineIndex];
      const interval = setInterval(() => {
        if (currentCharIndex < line.length) {
          setDisplayedLines((prevLines) => {
            const newLines = [...prevLines];
            newLines[currentLineIndex] = (newLines[currentLineIndex] || "") + line[currentCharIndex];
            return newLines;
          });
          setCurrentCharIndex((prev) => prev + 1);
        } else {
          clearInterval(interval);
          setCurrentLineIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
        }
      }, 80);

      return () => clearInterval(interval);
    } else {
      // All lines typed
      setTimeout(() => setShowTagline(true), 500);
    }
  }, [currentLineIndex, currentCharIndex]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-primary-100 to-primary-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center space-y-4"
      >
        <div className="text-3xl md:text-4xl font-semibold text-primary-800 tracking-tight leading-relaxed">
          {displayedLines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        {showTagline && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-lg text-primary-600 mt-6 font-light italic"
          >
            Empowering communities through sustainable action
          </motion.p>
        )}

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 4, ease: "linear" }}
          className="h-1 bg-primary-300 mt-8 mx-auto w-64"
        />
      </motion.div>

      {/* Subtle loading spinner */}
      <motion.div 
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="w-8 h-8 border-4 border-primary-300 border-t-transparent rounded-full animate-spin" />
      </motion.div>
    </div>
  );
};

export default SplashScreen;
