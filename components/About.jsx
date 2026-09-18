import { ArrowUpRight } from 'lucide-react';
import { capabilities, profile } from '@/lib/data';
import SectionHeader from './SectionHeader';
import { Reveal } from './MotionPrimitives';

export default function About() {
  return (
    <section id="profile" className="section-shell profile-section">
      <SectionHeader
        eyebrow="Engineering profile"
        title="I work where product complexity meets production reality."
        body="My strongest professional expertise is PHP and Laravel. I translate business requirements into maintainable backend systems, then stay close to delivery, debugging, and performance."
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
