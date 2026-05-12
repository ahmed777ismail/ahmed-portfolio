import About from '@/components/About';
import Architecture from '@/components/Architecture';
import Background from '@/components/Background';
import Contact from '@/components/Contact';
import ContributionGraph from '@/components/ContributionGraph';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PointerGlow from '@/components/PointerGlow';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import TerminalPanel from '@/components/TerminalPanel';
import Timeline from '@/components/Timeline';

export default function Home() {
  return (
    <>
      <Background />
      <PointerGlow />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Architecture />
        <TerminalPanel />
        <ContributionGraph />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
