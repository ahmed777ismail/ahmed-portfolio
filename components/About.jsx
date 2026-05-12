import { CheckCircle2 } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { Reveal } from './MotionPrimitives';

const highlights = [
  'Laravel and Spring Boot backend development',
  'MySQL, PostgreSQL, SQL Server, and Redis data workflows',
  'React, Next.js, and TailwindCSS frontend integration',
  'Docker, GitHub Actions, CI/CD, Git, and Linux fundamentals'
];

export default function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeader
        eyebrow="About Ahmed"
        title="Backend depth with full-stack delivery discipline."
        body="Backend-focused full-stack engineer with experience designing APIs, authentication systems, scalable architectures, and modern web applications."
      />
      <div className="about-grid">
        <Reveal className="glass-panel about-main">
          <p>
            I care about the parts of software that users rarely see but always feel: fast APIs, clean boundaries,
            reliable data flows, secure authentication, and code that remains understandable after the first release.
          </p>
          <p>
            My current growth is centered on Spring Boot, microservices, DevOps, CI/CD, system design, and scalable
            backend architecture.
          </p>
        </Reveal>
        <Reveal className="about-list">
          {highlights.map((item) => (
            <div className="highlight-row" key={item}>
              <CheckCircle2 size={19} />
              <span>{item}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
