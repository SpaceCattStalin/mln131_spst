import { HeroSection } from '@/components/hero-section';
import { ContentSection } from '@/components/content-section';
import { FamilyConceptSection } from '@/components/family-concept-section';
import { Minigame } from '@/components/minigame';
import { GameCard } from '@/components/game-card';
import { VideoSection } from '@/components/video-section';
import { Footer } from '@/components/footer';
import MemoryGame from '@/components/memory/memory-game';
import { Header } from '@/components/app-header';

export default function Home() {
  return (
    <main className="bg-background">
      <span className="relative">
        <Header />
      </span>
      <HeroSection />
      <ContentSection />
      <FamilyConceptSection />
      <Minigame />
      {/* <GameCard /> */}
      <MemoryGame />
      <VideoSection />
      <Footer />
    </main>
  );
}
