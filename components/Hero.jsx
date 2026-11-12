'use client';

import { useState, useEffect } from 'react';
import { ArrowUpRight, Download, Github, Linkedin, MessageCircle } from 'lucide-react';
import { profile, rotatingRoles } from '@/lib/data';
import { useLanguage } from './LanguageContext';
import { withBasePath } from '@/lib/site';
import TechOrbit from './TechOrbit';

export default function Hero() {
  const { t, isRtl } = useLanguage();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % rotatingRoles.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const currentRole = rotatingRoles[roleIndex];

  return (
    <section id="home" className="relative w-full min-h-[660px] lg:min-h-[800px] flex items-center justify-center overflow-hidden bg-[#F7F7F7] pt-32 sm:pt-36 lg:pt-32 pb-16 sm:pb-24">
      {/* Ambient soft radial glow matching ahmedessama.me */}
      <div
        className="absolute top-1/4 right-10 w-[580px] h-[580px] rounded-full pointer-events-none transition-all duration-700"
        style={{
          background: 'radial-gradient(circle, rgba(2, 132, 199, 0.08) 0%, transparent 70%)'
        }}
      />

      <div className="relative z-10 w-full max-w-[1140px] mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-8">
        {/* Left Column: Editorial Content */}
        <div className="lg:col-span-6 flex flex-col items-start w-full">
          {/* 3D Perspective Floating Badges (Gimbal Effect from ahmedessama.me) */}
          <div className="relative h-[48px] w-[90px] sm:h-[52px] sm:w-[98px] mb-6 ms-1 select-none" style={{ perspective: '760px' }}>
            <div
              aria-hidden="true"
              className="absolute inset-x-1 -bottom-1.5 h-5 rounded-full pointer-events-none"
              style={{ backgroundColor: '#0284C7', opacity: 0.16, filter: 'blur(10px)' }}
            />
            {/* Card 1: Docker */}
            <div className="absolute start-0 top-0 z-10 w-[46px] h-[46px] sm:w-[50px] sm:h-[50px]">
              <div
                className="w-full h-full rounded-[16px] bg-white border border-black/[0.06] shadow-[0_10px_24px_-4px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.04)] flex items-center justify-center transition-transform hover:scale-110"
                style={{ transform: 'rotateZ(-8deg)' }}
                title="Docker — Containerization & DevOps"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M13.8 9.5h2v2h-2v-2zm-2.8 0h2v2H11v-2zm-2.7 0h2v2h-2v-2zm-2.8 0h2v2h-2v-2zm8.3-2.8h2v2h-2v-2zm-2.8 0h2v2H11v-2zm-2.7 0h2v2h-2v-2zm5.5-2.7h2v2h-2V4zm-2.8 0h2v2H11V4zM22.5 11.2c-.4-.3-1.6-.4-2.5.2-.2-.8-.7-1.4-1.4-1.8l-.5-.3-.3.5c-.3.8-.4 1.7-.2 2.6-.7.4-1.6.5-2.7.5H2.4c-.2.9 0 2.4.6 3.7.8 1.8 2.3 3.6 4.3 4.6 3.1 1.5 7.4 1.4 10.4-.6 2.3-1.6 3.8-3.9 4.3-6.6.6-.2 1.4-.7 1.8-1.5l.2-.5-.5-.4z" fill="#2496ED" />
                </svg>
              </div>
            </div>

            {/* Card 2: Next.js */}
            <div className="absolute start-[38px] sm:start-[42px] top-0 z-20 w-[46px] h-[46px] sm:w-[50px] sm:h-[50px]">
              <div
                className="w-full h-full rounded-[16px] bg-white border border-black/[0.06] shadow-[0_10px_24px_-4px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.04)] flex items-center justify-center transition-transform hover:scale-110"
                style={{ transform: 'rotateZ(7deg)' }}
                title="Next.js — Modern Web Platforms"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-[#171717]">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.3 14.7l-4.7-6.2v6.2H9.2V7.3h1.4l4.7 6.2V7.3h1.4v9.4h-1.4z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Large Editorial Headline */}
          <h1
            className="tracking-[-0.035em] font-serif text-[#262626] font-normal mb-5 will-change-transform"
            style={{
              fontSize: 'clamp(38px, 5.2vw, 68px)',
              lineHeight: 1.12
            }}
          >
            <span>{t(currentRole.part1)}</span>
            <span className="font-serif italic text-emerald-700">
              {t(currentRole.accent)}
            </span>
          </h1>

          {/* Subtitle / Value Proposition in larger readable font */}
          <p className="text-[17.5px] sm:text-[19px] lg:text-[20px] leading-[1.65] font-normal mb-8 max-w-[530px] text-[#525252]">
            {isRtl
              ? 'أنا أحمد إسماعيل — مهندس برمجيات متخصص في بناء وتطوير منصات الويب الحديثة (Next.js & React & Laravel)، وأتمتة خطوط النشر السحابي (Docker & CI/CD)، وهندسة قواعد البيانات عالية الكفاءة.'
              : 'I’m Ahmed Ismail — a Software Engineer specializing in modern full-stack web platforms (Next.js, React, Laravel), automated DevOps delivery pipelines (Docker, CI/CD), and high-throughput backend data systems.'}
          </p>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center gap-3.5 mb-7">
            {/* Obsidian Button */}
            <a
              href={withBasePath(profile.cv)}
              download
              className="inline-flex h-[48px] sm:h-[50px] items-center justify-center gap-2 px-6 sm:px-7 rounded-full bg-[#262626] text-white text-[15px] sm:text-[16px] font-medium hover:bg-black transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{isRtl ? 'تحميل السيرة الذاتية (PDF)' : 'Download CV · PDF'}</span>
              <Download size={16} />
            </a>

            {/* Outline Glass Button */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-[48px] sm:h-[50px] items-center justify-center gap-2 px-5 sm:px-6 rounded-full bg-white/90 backdrop-blur-sm border border-black/[0.08] text-[#262626] text-[15px] sm:text-[16px] font-medium hover:bg-white hover:border-black/20 transition-all shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
            >
              <Linkedin size={16} />
              <span>{isRtl ? 'الملف المهني LinkedIn' : 'LinkedIn Profile'}</span>
              <ArrowUpRight size={14} className="rtl:-scale-x-100" />
            </a>

            {/* WhatsApp Quick Icon */}
            <a
              href={profile.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              title="WhatsApp Direct"
              className="inline-flex w-[48px] h-[48px] items-center justify-center rounded-full bg-white/90 border border-black/[0.08] text-emerald-600 hover:scale-105 transition-all shadow-sm"
            >
              <MessageCircle size={18} />
            </a>

            {/* GitHub Quick Icon */}
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              title="GitHub Profile"
              className="inline-flex w-[48px] h-[48px] items-center justify-center rounded-full bg-white/90 border border-black/[0.08] text-[#262626] hover:scale-105 transition-all shadow-sm"
            >
              <Github size={18} />
            </a>
          </div>

          {/* Meta Information Chips */}
          <div className="flex flex-wrap items-center gap-2 text-[13.5px] text-[#525252] font-mono">
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-black/[0.06] shadow-2xs">
              📍 {t(profile.location)}
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-black/[0.06] shadow-2xs font-semibold text-emerald-700">
              ⚡ 87.5% API Speedup
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white border border-black/[0.06] shadow-2xs">
              🐳 Docker & CI/CD
            </span>
          </div>
        </div>

        {/* Right Column: 360-Degree Continuous Tech Orbit with BIG Cutout Picture */}
        <div className="lg:col-span-6 flex justify-center items-center">
          <TechOrbit />
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute left-0 right-0 -bottom-1 h-28 bg-gradient-to-t from-[#F7F7F7] via-[#F7F7F7]/80 to-transparent pointer-events-none z-10" />
    </section>
  );
}
