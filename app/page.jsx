import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HeroSplash from '@/components/HeroSplash';
import StatsCounter from '@/components/StatsCounter';
import ServicesTrack from '@/components/ServicesTrack';
import Projects from '@/components/Projects';
import Timeline from '@/components/Timeline';
import Process from '@/components/Process';
import Skills from '@/components/Skills';
import TerminalPanel from '@/components/TerminalPanel';
import ContributionGraph from '@/components/ContributionGraph';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="editorial-portfolio-root">
      {/* 3D Flight Hero Splash Loading Screen */}
      <HeroSplash />

      {/* Ambient background glows */}
      <div className="ambient-canvas-glow" aria-hidden="true" />

      {/* Floating Glass Pill Header */}
      <Header />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <StatsCounter />
        <ServicesTrack />
        <Projects />
        <Timeline />
        <Process />
        <Skills />
        <TerminalPanel />
        <ContributionGraph />
        <FAQ />
        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
