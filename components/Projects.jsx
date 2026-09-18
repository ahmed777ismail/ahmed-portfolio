'use client';

import { ArrowRight, ArrowUpRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { motion, staggerContainer, fadeUp } from './MotionPrimitives';
import { caseStudies } from '@/lib/data';

export default function Projects() {
  return (
    <section id="work" className="section-shell work-section">
      <SectionHeader
        eyebrow="Selected work"
        title="Real systems, real constraints, real outcomes."
        body="Professional work from Ahmed's CV, presented as compact case studies rather than speculative portfolio projects."
      />
      <motion.div
        className="projects-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {caseStudies.map((project) => (
            <motion.article className="case-study interactive-card" key={project.index} variants={fadeUp}>
              <div className="case-index">{project.index}</div>
              <div className="case-copy">
                <span className="case-label">{project.label}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.metric ? (
                  <div className="performance-meter" aria-label="API response improved from 4 seconds to 0.5 seconds">
                    <span>{project.metric.before}</span><i /><ArrowRight size={18} /><i className="after" /><strong>{project.metric.after}</strong>
                  </div>
                ) : null}
              </div>
              <div className="case-details">
                <strong>{project.outcome}</strong>
              <div className="feature-list">
                {project.details.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>
                {project.links ? <div className="case-links">{project.links.map((link) => (
                  <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>{link.label} <ArrowUpRight size={15} /></a>
                ))}</div> : null}
              </div>
            </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
