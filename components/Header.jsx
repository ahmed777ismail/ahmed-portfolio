'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Download, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navItems, profile } from '@/lib/data';
import { withBasePath } from '@/lib/site';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      className="site-header"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <a className="brand" href="#home" aria-label="Ahmed Ismail home">
        <span>A/I</span>
        <small>Software Engineer</small>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-tools">
        <ThemeToggle />
        <a className="header-cta" href={profile.github} target="_blank" rel="noreferrer" aria-label="Ahmed Ismail on GitHub">
          GitHub
          <ArrowUpRight size={16} />
        </a>
        <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <motion.nav
          className="mobile-nav"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={withBasePath(profile.cv)} onClick={() => setOpen(false)}>
            <Download size={17} /> Download CV
          </a>
        </motion.nav>
      ) : null}
    </motion.header>
  );
}
