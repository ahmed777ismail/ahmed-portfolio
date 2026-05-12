'use client';

import { architectureCards } from '@/lib/data';
import SectionHeader from './SectionHeader';
import { motion, staggerContainer, fadeUp } from './MotionPrimitives';

export default function Architecture() {
  return (
    <section id="architecture" className="section-shell architecture-section">
      <SectionHeader
        eyebrow="DevOps / Architecture"
        title="Architecture mindset, visualized as backend flow."
        body="A system-oriented section built around APIs, queues, services, deployment loops, and design tradeoffs."
      />
      <div className="architecture-layout">
        <motion.div
          className="architecture-cards"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {architectureCards.map((card) => {
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
          aria-label="Backend architecture diagram"
        >
          <div className="diagram-node node-client">Client</div>
          <div className="diagram-node node-api">API Gateway</div>
          <div className="diagram-node node-auth">Auth Service</div>
          <div className="diagram-node node-booking">Booking Service</div>
          <div className="diagram-node node-wallet">Wallet Service</div>
          <div className="diagram-node node-queue">Queue</div>
          <div className="diagram-node node-db">PostgreSQL / Redis</div>
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
