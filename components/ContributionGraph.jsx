'use client';

import SectionHeader from './SectionHeader';
import { motion } from './MotionPrimitives';

const cells = Array.from({ length: 112 }, (_, index) => {
  const level = (index * 7 + Math.floor(index / 9)) % 5;
  return { id: index, level };
});

export default function ContributionGraph() {
  return (
    <section className="section-shell contribution-section">
      <SectionHeader
        eyebrow="Consistency"
        title="A contribution-style snapshot of steady engineering practice."
        body="A subtle visual nod to daily implementation, learning, reviews, and backend problem solving."
        centered
      />
      <motion.div
        className="contribution-card glass-panel"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
      >
        <div className="contribution-header">
          <span>Backend practice heatmap</span>
          <small>APIs · Tests · Docker · System Design</small>
        </div>
        <div className="contribution-grid" aria-label="GitHub contribution style visual">
          {cells.map((cell) => (
            <span key={cell.id} data-level={cell.level} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
