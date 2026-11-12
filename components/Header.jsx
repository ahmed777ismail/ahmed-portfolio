'use client';

import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navItems } from '@/lib/data';
import { useLanguage } from './LanguageContext';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t, isRtl } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 pt-3 sm:pt-6 pointer-events-none transition-all duration-300">
      <div
        className={`w-full max-w-[1080px] pointer-events-auto flex items-center justify-between px-4 sm:px-8 py-2.5 sm:py-3.5 rounded-full transition-all duration-300 bg-white/80 backdrop-blur-md border border-black/[0.06] ${
          scrolled ? 'shadow-[0_8px_28px_rgba(0,0,0,0.08)] bg-white/95' : 'shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
        }`}
      >
        {/* Brand */}
        <a
          href="#home"
          className="flex items-center gap-2 text-[#262626] font-serif text-[18px] sm:text-[22px] tracking-tight hover:opacity-80 transition-opacity font-normal shrink-0"
        >
          <span>Portfolio</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-9">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14.5px] text-[#525252] hover:text-[#262626] font-normal transition-colors"
            >
              {t(item.label)}
            </a>
          ))}
        </nav>

        {/* Right Tools (Language Switcher + CTA) */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          {/* Tactile Sliding Language Selector matching ahmedessama.me */}
          <div dir="ltr" className="inline-flex select-none items-center" aria-label="Language selector">
            <div className="relative inline-flex h-[34px] sm:h-[40px] items-center rounded-full border border-black/[0.08] bg-[#F1F5F9]/80 p-[2.5px] sm:p-[3px] shadow-sm">
              <div
                className="absolute z-0 h-[28px] sm:h-[32px] w-[42px] sm:w-[50px] rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{
                  transform: lang === 'en' ? 'translateX(0px)' : 'translateX(43px)'
                }}
              />
              <button
                type="button"
                onClick={() => setLang('en')}
                title="English"
                className="relative z-10 flex h-[28px] sm:h-[32px] w-[42px] sm:w-[50px] cursor-pointer items-center justify-center rounded-full transition-colors focus:outline-none"
              >
                <span
                  className={`relative z-10 font-sans text-[12px] sm:text-[13px] tracking-tight transition-all duration-200 ${
                    lang === 'en' ? 'font-semibold text-[#0F172A]' : 'font-normal text-[#64748B] hover:text-[#0F172A]'
                  }`}
                >
                  EN
                </span>
              </button>
              <button
                type="button"
                onClick={() => setLang('ar')}
                title="اللغة العربية"
                className="relative z-10 flex h-[28px] sm:h-[32px] w-[42px] sm:w-[50px] cursor-pointer items-center justify-center rounded-full transition-colors focus:outline-none"
              >
                <span
                  className={`relative z-10 text-[12.5px] sm:text-[13.5px] tracking-tight transition-all duration-200 ${
                    lang === 'ar' ? 'font-semibold text-[#0F172A]' : 'font-normal text-[#64748B] hover:text-[#0F172A]'
                  }`}
                >
                  عربي
                </span>
              </button>
            </div>
          </div>

          {/* Primary Action Button */}
          <a
            href="#contact"
            className="hidden md:inline-flex h-[38px] sm:h-[42px] items-center justify-center gap-1.5 px-4 sm:px-6 rounded-full bg-[#262626] text-white text-[13.5px] sm:text-[14.5px] font-medium hover:bg-black transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>{isRtl ? 'لنعمل معاً' : "Let's Build Together"}</span>
            <ArrowUpRight size={15} className="rtl:-scale-x-100" />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-full text-[#525252] hover:text-[#262626] hover:bg-black/5 transition-colors cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open ? (
        <div className="md:hidden pointer-events-auto absolute top-full left-3 right-3 mt-2 bg-white border border-black/[0.08] rounded-2xl p-5 shadow-[0_16px_36px_rgba(0,0,0,0.12)] flex flex-col gap-3">
          <nav className="flex flex-col gap-2.5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[16px] font-medium text-[#262626] p-2.5 rounded-lg hover:bg-black/5 transition-colors"
                onClick={() => setOpen(false)}
              >
                {t(item.label)}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-black/[0.06]">
            <a
              href="#contact"
              className="flex h-[44px] items-center justify-center gap-2 rounded-full bg-[#262626] text-white text-[15px] font-medium"
              onClick={() => setOpen(false)}
            >
              <span>{isRtl ? 'لنعمل معاً' : "Let's Build Together"}</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
