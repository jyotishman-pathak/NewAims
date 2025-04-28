import Hero from '@/components/sections/Hero';
import Mission from '@/components/sections/Mission';
import Gallery from '@/components/sections/Gallery';
import SuccessStories from '@/components/sections/SuccessStories';
import HowToHelp from '@/components/sections/HowToHelp';
import CtaBanner from '@/components/sections/CtaBanner';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Mission />
      <Gallery />
      <SuccessStories />
      <HowToHelp />
      <CtaBanner />
    </main>
  );
}