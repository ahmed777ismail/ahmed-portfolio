'use client';

import { motion } from 'framer-motion';

const particles = Array.from({ length: 26 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 53) % 100}%`,
  delay: (index % 8) * 0.35,
  duration: 8 + (index % 5)
}));

export default function Background() {
  return (
    <div className="background-shell" aria-hidden="true">
      <div className="grid-overlay" />
      <div className="noise-overlay" />
      <div className="glow glow-one" />
      <div className="glow glow-two" />
      <div className="glow glow-three" />
      <div className="particle-field">
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            style={{ left: particle.left, top: particle.top }}
            animate={{ y: [-10, 18, -10], opacity: [0.15, 0.6, 0.15] }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>
    </div>
  );
}
