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
          <code>{`> Current engineering focus

$ stack --add spring-boot asp.net-core kubernetes
$ study --focus "microservices, distributed systems"
$ improve --always "performance, architecture, delivery"

status: expanding the toolkit without losing backend depth`}</code>
        </pre>
      </motion.div>
    </section>
  );
}
