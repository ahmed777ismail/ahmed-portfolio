'use client';

import { timeline } from '@/lib/data';
import SectionHeader from './SectionHeader';
import { motion, staggerContainer, fadeUp } from './MotionPrimitives';

export default function Timeline() {
  return (
    <section className="section-shell">
      <SectionHeader
        eyebrow="Experience Timeline"
        title="A practical path toward senior backend engineering."
        body="The portfolio emphasizes collaboration, backend implementation, and Ahmed's current push into systems thinking."
      />
      <motion.div
        className="timeline"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {timeline.map((item) => (
          <motion.article className="timeline-item" key={item.title} variants={fadeUp}>
            <span className="timeline-dot" />
            <div>
              <small>{item.date}</small>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
