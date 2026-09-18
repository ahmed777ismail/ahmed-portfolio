'use client';

import { ArrowUpRight, Github } from 'lucide-react';
import { profile, repositories } from '@/lib/data';
import SectionHeader from './SectionHeader';
import { motion, staggerContainer, fadeUp } from './MotionPrimitives';

export default function ContributionGraph() {
  return (
    <section id="github" className="section-shell github-section">
      <SectionHeader
        eyebrow="Open source profile"
        title="Selected public work on GitHub."
        body="A snapshot of Ahmed's pinned repositories. Explore the full profile for the broader archive of backend experiments, learning projects, and application work."
      />
      <motion.div
        className="repo-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {repositories.map((repo) => (
          <motion.a
            className="repo-card interactive-card"
            href={repo.href}
            target="_blank"
            rel="noreferrer"
            key={repo.name}
            variants={fadeUp}
          >
            <div><Github size={20} /><ArrowUpRight size={17} /></div>
            <h3>{repo.name}</h3>
            <span><i /> {repo.language}</span>
          </motion.a>
        ))}
      </motion.div>
      <a className="github-profile-link" href={profile.github} target="_blank" rel="noreferrer">
        View all repositories on GitHub <ArrowUpRight size={17} />
      </a>
    </section>
  );
}
