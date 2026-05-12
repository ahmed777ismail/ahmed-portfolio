'use client';

import { Terminal } from 'lucide-react';
import { motion } from './MotionPrimitives';

export default function TerminalPanel() {
  return (
    <section className="section-shell terminal-section">
      <motion.div
        className="terminal-card"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
      >
        <div className="terminal-bar">
          <div className="terminal-dots">
            <span />
            <span />
            <span />
          </div>
          <div className="terminal-title">
            <Terminal size={17} />
            ahmed@backend-lab
          </div>
        </div>
        <pre>
          <code>{`> Currently learning DevOps & Distributed Systems

$ docker compose up api gateway queue
$ ./gradlew test && php artisan test
$ design --focus "resilience, observability, clean contracts"

status: building reliable systems with calm engineering discipline`}</code>
        </pre>
      </motion.div>
    </section>
  );
}
