'use client';

import { motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navItems } from '@/lib/data';
import { withBasePath } from '@/lib/site';

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
        <span>AI</span>
        <small>Backend Engineer</small>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href={withBasePath('/Ahmed-Ismail-CV.pdf')} aria-label="Download Ahmed Ismail CV">
        <Download size={17} />
        CV
      </a>

      <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

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
          <a href={withBasePath('/Ahmed-Ismail-CV.pdf')} onClick={() => setOpen(false)}>
            Download CV
          </a>
        </motion.nav>
      ) : null}
    </motion.header>
  );
}
