import { ArrowUpRight } from 'lucide-react';
import { capabilities, profile } from '@/lib/data';
import SectionHeader from './SectionHeader';
import { Reveal } from './MotionPrimitives';

export default function About() {
  return (
    <section id="profile" className="section-shell profile-section">
      <SectionHeader
        eyebrow="Engineering profile"
        title="Good backend work should feel boring — in the best way."
        body="Clear contracts, predictable behavior, and fewer surprises in production. PHP and Laravel are my strongest tools, but the real craft is understanding the problem and staying with it through delivery."
      />
      <Reveal className="capability-grid">
        {capabilities.map((item) => (
          <article className="capability-card" key={item.number}>
            <span>{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </Reveal>
      <Reveal className="profile-note">
        <p>Currently expanding into Java/Spring Boot, C#/.NET, microservices, distributed systems, and cloud-native delivery.</p>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">Full profile on LinkedIn <ArrowUpRight size={17} /></a>
      </Reveal>
    </section>
  );
}
