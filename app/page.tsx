"use client";

import { useEffect, useState } from "react";

import Hero from '@/components/sections/Hero';
import Mission from '@/components/sections/Mission';
import Gallery from '@/components/sections/Gallery';
import SuccessStories from '@/components/sections/SuccessStories';
import HowToHelp from '@/components/sections/HowToHelp';
import CtaBanner from '@/components/sections/CtaBanner';
import SplashScreen from '@/components/sections/SplashScreen'; // (Import your splash separately)

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5600); // adjust timing as per typing speed + pause

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="overflow-hidden">
      {showSplash ? (
        <SplashScreen />
      ) : (
        <>
          <Hero />
          <Mission />
          <Gallery />
          <SuccessStories />
          <HowToHelp />
          <CtaBanner />
        </>
      )}
    </main>
  );
}
