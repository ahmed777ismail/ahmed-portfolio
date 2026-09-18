'use client';

import Image from 'next/image';
import { Activity, Braces, ServerCog, Terminal } from 'lucide-react';
import { withBasePath } from '@/lib/site';
import { motion } from './MotionPrimitives';

export default function TerminalPanel() {
  return (
    <section id="command-center" className="command-center" aria-labelledby="command-center-title">
      <Image
        className="command-center-image"
        src={withBasePath('/assets/backend-command-center.png')}
        alt="Backend engineering workstation displaying system architecture and deployment telemetry"
        fill
        sizes="100vw"
        loading="lazy"
      />
      <div className="command-center-shade" />
      <motion.div
        className="command-center-content section-shell"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
      >
        <div className="command-center-heading">
          <p><span /> Engineering command center</p>
          <h2 id="command-center-title">Code is only the beginning.</h2>
          <span>Architecture, delivery, and observability shape systems that hold up in production.</span>
        </div>

        <div className="terminal-card">
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
            <code>{`> current_focus

$ design --for "scale, clarity, failure"
$ ship --with "tests, docker, ci-cd"
$ observe --signals "logs, metrics, traces"

status: building reliable systems`}</code>
          </pre>
          <div className="command-center-signals" aria-label="Engineering focus areas">
            <span><ServerCog size={15} /> Systems</span>
            <span><Braces size={15} /> APIs</span>
            <span><Activity size={15} /> Observability</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
