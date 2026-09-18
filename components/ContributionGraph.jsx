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
      <div className="github-live-panel">
        <div className="github-live-heading">
          <span><i /> Live from GitHub</span>
          <a href={profile.github} target="_blank" rel="noreferrer">@ahmed777ismail <ArrowUpRight size={15} /></a>
        </div>
        <div className="github-live-grid">
          <div className="github-visual github-streak-visual">
            <p>Contribution streak</p>
            <img
              className="github-theme-image github-image-dark"
              src="https://streak-stats.demolab.com?user=ahmed777ismail&hide_border=true&background=00000000&stroke=2F80FF&ring=2F80FF&fire=2F80FF&currStreakNum=FFFFFF&sideNums=FFFFFF&currStreakLabel=2F80FF&sideLabels=FFFFFF&dates=FFFFFF"
              alt="Ahmed Ismail GitHub contribution streak"
              loading="lazy"
            />
            <img
              className="github-theme-image github-image-light"
              src="https://streak-stats.demolab.com?user=ahmed777ismail&hide_border=true&background=00000000&stroke=0057D9&ring=0057D9&fire=0057D9&currStreakNum=000000&sideNums=000000&currStreakLabel=0057D9&sideLabels=000000&dates=000000"
              alt="Ahmed Ismail GitHub contribution streak"
              loading="lazy"
            />
          </div>
          <div className="github-visual github-chart-visual">
            <p>Contribution activity</p>
            <img
              className="github-theme-image github-image-dark"
              src="https://ghchart.xqsit94.in/dark:2f80ff/ahmed777ismail"
              alt="Ahmed Ismail GitHub contribution chart"
              loading="lazy"
            />
            <img
              className="github-theme-image github-image-light"
              src="https://ghchart.xqsit94.in/light:0057d9/ahmed777ismail"
              alt="Ahmed Ismail GitHub contribution chart"
              loading="lazy"
            />
          </div>
        </div>
      </div>
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
