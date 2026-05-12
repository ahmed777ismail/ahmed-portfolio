'use client';

import Image from 'next/image';
import { ArrowDownRight, Download, Mail, ServerCog } from 'lucide-react';
import { focusItems, stats } from '@/lib/data';
import { withBasePath } from '@/lib/site';
import { motion, staggerContainer, fadeUp } from './MotionPrimitives';

export default function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <motion.div className="hero-copy" variants={staggerContainer} initial="hidden" animate="visible">
        <motion.div className="status-pill" variants={fadeUp}>
          <span />
          Backend-focused full-stack developer from Egypt
        </motion.div>
        <motion.h1 variants={fadeUp}>Building scalable backend systems with Laravel & Spring Boot.</motion.h1>
        <motion.p className="hero-lede" variants={fadeUp}>
          Ahmed Ismail designs APIs, authentication systems, scalable architectures, and modern web applications with
          a clean architecture mindset and a strong eye for backend performance.
        </motion.p>
        <motion.div className="hero-actions" variants={fadeUp}>
          <a className="button button-primary" href="#projects">
            View Projects <ArrowDownRight size={18} />
          </a>
          <a className="button button-secondary" href="#contact">
            Contact Me <Mail size={18} />
          </a>
          <a className="button button-ghost" href={withBasePath('/Ahmed-Ismail-CV.pdf')}>
            Download CV <Download size={18} />
          </a>
        </motion.div>
        <motion.div className="focus-strip" variants={fadeUp}>
          {focusItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
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
            <ServerCog size={19} />
            API-first engineering
          </div>
        </div>
        <div className="floating-code" aria-hidden="true">
          <span>POST /api/v1/bookings</span>
          <span>queue:payments.reconcile</span>
          <span>service.auth.verify()</span>
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
