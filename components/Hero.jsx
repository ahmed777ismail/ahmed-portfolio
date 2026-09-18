'use client';

import Image from 'next/image';
import { ArrowDownRight, ArrowUpRight, Download, Github, Linkedin, MapPin } from 'lucide-react';
import { profile, stats } from '@/lib/data';
import { withBasePath } from '@/lib/site';
import { motion, staggerContainer, fadeUp } from './MotionPrimitives';

export default function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <motion.div className="hero-copy" variants={staggerContainer} initial="hidden" animate="visible">
        <motion.div className="status-pill" variants={fadeUp}>
          <span />
          Mid-Level Backend Developer at RunSoft
        </motion.div>
        <motion.p className="hero-kicker" variants={fadeUp}>Ahmed Ismail / Software Engineer</motion.p>
        <motion.h1 variants={fadeUp}>I engineer the systems behind the product.</motion.h1>
        <motion.p className="hero-lede" variants={fadeUp}>
          Backend-focused software engineer with 3+ years of experience building production APIs, booking and payment
          workflows, authentication, real-time features, and maintainable Laravel systems.
        </motion.p>
        <motion.div className="hero-actions" variants={fadeUp}>
          <a className="button button-primary" href="#work">
            View production work <ArrowDownRight size={18} />
          </a>
          <a className="button button-secondary" href={withBasePath(profile.cv)} download>
            Download CV <Download size={18} />
          </a>
        </motion.div>
        <motion.div className="hero-socials" variants={fadeUp}>
          <span><MapPin size={16} /> {profile.location}</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} /></a>
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="portrait-frame">
          <Image
            src={withBasePath('/assets/portrait.png')}
            alt="Black-and-white portrait of Ahmed Ismail"
            width={900}
            height={1100}
            priority
            sizes="(max-width: 900px) 92vw, 42vw"
          />
          <div className="portrait-badge">
            <span>3+</span>
            years shipping production software
          </div>
        </div>
        <div className="portrait-caption" aria-hidden="true">
          <span>PHP / Laravel</span>
          <span>APIs / Data / Delivery</span>
        </div>
      </motion.div>

      <motion.div className="stats-grid hero-stats" variants={staggerContainer} initial="hidden" animate="visible">
        {stats.map((stat) => (
          <motion.div className="stat-card" key={stat.label} variants={fadeUp}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
