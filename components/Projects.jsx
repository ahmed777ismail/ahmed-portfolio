'use client';

import { ExternalLink, Github } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { motion, staggerContainer, fadeUp } from './MotionPrimitives';
import { projects } from '@/lib/data';

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeader
        eyebrow="Featured Projects"
        title="Backend-focused projects with realistic product pressure."
        body="Each project is framed around data integrity, API contracts, role boundaries, and deployable engineering."
      />
      <motion.div
        className="projects-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <motion.article className="project-card interactive-card" key={project.name} variants={fadeUp}>
              <div className="project-topline">
                <div className="card-icon">
                  <Icon size={23} />
                </div>
                <span>{project.tag}</span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="feature-list">
                {project.features.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>
              <div className="stack-row">
                {project.stack.map((tech) => (
                  <small key={tech}>{tech}</small>
                ))}
              </div>
              <div className="project-actions">
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  <Github size={17} /> GitHub
                </a>
                <a href="#" aria-label={`${project.name} live demo placeholder`}>
                  <ExternalLink size={17} /> Live Demo
                </a>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
