'use client';

import SectionHeader from './SectionHeader';
import { motion, staggerContainer, fadeUp } from './MotionPrimitives';
import { skillGroups } from '@/lib/data';

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeader
        eyebrow="Skills"
        title="A backend-heavy toolkit for production web systems."
        body="Categorized around the stack Ahmed uses to move from API design to deployment-ready applications."
        centered
      />
      <motion.div
        className="skills-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <motion.article className="skill-card interactive-card" key={group.title} variants={fadeUp}>
              <div className="card-icon">
                <Icon size={24} />
              </div>
              <h3>{group.title}</h3>
              <div className="skill-pills">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
