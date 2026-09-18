'use client';

import { Check } from 'lucide-react';
import { experience } from '@/lib/data';
import SectionHeader from './SectionHeader';
import { motion, staggerContainer, fadeUp } from './MotionPrimitives';

export default function Timeline() {
  return (
    <section id="experience" className="section-shell experience-section">
      <SectionHeader
        eyebrow="Experience"
        title="Production experience, measured in ownership."
        body="Two backend roles across agency delivery and a live product environment, with increasing responsibility for architecture, performance, and team execution."
      />
      <motion.div
        className="experience-list"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {experience.map((item, index) => (
          <motion.article className="experience-item" key={item.company} variants={fadeUp}>
            <div className="experience-meta">
              <span>0{index + 1}</span>
              <time>{item.period}</time>
              <small>{item.location}</small>
            </div>
            <div className="experience-copy">
              <p className="company">{item.company}</p>
              <h3>{item.role}</h3>
              <p>{item.summary}</p>
              <ul>
                {item.achievements.map((achievement) => (
                  <li key={achievement}><Check size={16} /> {achievement}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
