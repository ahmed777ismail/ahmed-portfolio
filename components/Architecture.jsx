'use client';

import { engineeringPrinciples } from '@/lib/data';
import SectionHeader from './SectionHeader';
import { motion, staggerContainer, fadeUp } from './MotionPrimitives';

export default function Architecture() {
  return (
    <section className="section-shell architecture-section">
      <SectionHeader
        eyebrow="Engineering approach"
        title="Reliable backend work is a chain of deliberate decisions."
        body="The principles Ahmed applies across API design, data modeling, performance work, and production delivery."
      />
      <div className="architecture-layout">
        <motion.div
          className="architecture-cards"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {engineeringPrinciples.map((card) => {
            const Icon = card.icon;
            return (
              <motion.article className="architecture-card interactive-card" key={card.title} variants={fadeUp}>
                <Icon size={22} />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          className="system-diagram glass-panel"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          aria-label="Production booking flow diagram"
        >
          <div className="diagram-heading"><span>Production flow</span><strong>Booking request</strong></div>
          <div className="diagram-node node-client">Web / Mobile</div>
          <div className="diagram-node node-api">Versioned API</div>
          <div className="diagram-node node-auth">JWT + Policy</div>
          <div className="diagram-node node-booking">Booking Logic</div>
          <div className="diagram-node node-wallet">Payment / Wallet</div>
          <div className="diagram-node node-queue">Events / Notify</div>
          <div className="diagram-node node-db">MySQL + Redis</div>
          <span className="line line-a" />
          <span className="line line-b" />
          <span className="line line-c" />
          <span className="line line-d" />
          <span className="line line-e" />
        </motion.div>
      </div>
    </section>
  );
}
