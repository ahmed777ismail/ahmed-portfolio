'use client';

import { useState } from 'react';
import Image from 'next/image';
import { techOrbit } from '@/lib/data';
import { useLanguage } from './LanguageContext';
import { withBasePath } from '@/lib/site';

// Clean SVG Tech Logos matching ahmedessama.me
function TechIcon({ name }) {
  switch (name) {
    case 'Next.js':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0 text-black">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.3 14.7l-4.7-6.2v6.2H9.2V7.3h1.4l4.7 6.2V7.3h1.4v9.4h-1.4z" fill="currentColor"/>
        </svg>
      );
    case 'React':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
          <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(150 12 12)" />
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        </svg>
      );
    case 'TypeScript':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M11.5 8.5H5.5V10.5H7.5V17.5H9.5V10.5H11.5V8.5Z" fill="white" />
          <path d="M18.5 11.2C18.5 9.7 17.2 8.5 15.2 8.5C13.2 8.5 12 9.7 12 11.2C12 14.2 16.5 13 16.5 15C16.5 15.6 15.9 16 15.1 16C13.9 16 13.1 15.3 12.8 14.5L11 15.5C11.5 16.9 13.1 17.8 15.1 17.8C17.3 17.8 18.7 16.6 18.7 15C18.7 12.1 14.2 13.2 14.2 11.3C14.2 10.8 14.7 10.3 15.3 10.3C16.3 10.3 17 10.8 17.3 11.5L18.5 11.2Z" fill="white" />
        </svg>
      );
    case 'Docker':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
          <path d="M13.8 9.5h2v2h-2v-2zm-2.8 0h2v2H11v-2zm-2.7 0h2v2h-2v-2zm-2.8 0h2v2h-2v-2zm8.3-2.8h2v2h-2v-2zm-2.8 0h2v2H11v-2zm-2.7 0h2v2h-2v-2zm5.5-2.7h2v2h-2V4zm-2.8 0h2v2H11V4zM22.5 11.2c-.4-.3-1.6-.4-2.5.2-.2-.8-.7-1.4-1.4-1.8l-.5-.3-.3.5c-.3.8-.4 1.7-.2 2.6-.7.4-1.6.5-2.7.5H2.4c-.2.9 0 2.4.6 3.7.8 1.8 2.3 3.6 4.3 4.6 3.1 1.5 7.4 1.4 10.4-.6 2.3-1.6 3.8-3.9 4.3-6.6.6-.2 1.4-.7 1.8-1.5l.2-.5-.5-.4z" fill="#2496ED" />
        </svg>
      );
    case 'CI/CD':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0 text-[#2088FF]">
          <circle cx="6" cy="6" r="3" stroke="currentColor" strokeWidth="2"/>
          <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="2"/>
          <circle cx="18" cy="6" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M6 9v6c0 1.7 1.3 3 3 3h6M18 9v6" stroke="currentColor" strokeWidth="2"/>
        </svg>
      );
    case 'Laravel':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
          <path d="M8.5 2.5l7 4v3l-7-4v-3zm0 5.5l7 4v3l-7-4v-3zm7.5 4.5l5 2.8v3l-5-2.8v-3zm-14-1.5l5 2.8v3l-5-2.8v-3zm6.5 4.2l7 4v3l-7-4v-3zm7.5 4.3l5 2.8v3l-5-2.8v-3z" fill="#FF2D20" />
        </svg>
      );
    case 'PHP':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
          <ellipse cx="12" cy="12" rx="10" ry="6" fill="#777BB4" />
          <path d="M7 14h1.5l.5-1.5h1c1 0 1.5-.5 1.5-1.5s-.5-1.5-1.5-1.5H6.5L5 14h2zm1.5-3.5h1c.3 0 .5.2.5.5s-.2.5-.5.5h-1l.3-1zm4.5 3.5h1.5l1.5-4.5H14l-.5 1.5h-.5l.5-1.5H12l-1.5 4.5h1.5l.5-1.5h.5l-.5 1.5zm5.5 0h1.5l.5-1.5h1c1 0 1.5-.5 1.5-1.5s-.5-1.5-1.5-1.5h-3L17 14h1.5zm1.5-3.5h1c.3 0 .5.2.5.5s-.2.5-.5.5h-1l.3-1z" fill="white" />
        </svg>
      );
    case 'MySQL':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
          <path d="M12 3c-4.97 0-9 1.79-9 4s4.03 4 9 4 9-1.79 9-4-4.03-4-9-4zm0 6c-3.87 0-7-1.34-7-3s3.13-3 7-3 7 1.34 7 3-3.13 3-7 3z" fill="#00758F"/>
          <path d="M3 8v4c0 2.21 4.03 4 9 4s9-1.79 9-4V8c0 1.86-3.44 3-7 3s-7-1.14-7-3z" fill="#F29111"/>
          <path d="M3 13v4c0 2.21 4.03 4 9 4s9-1.79 9-4v-4c0 1.86-3.44 3-7 3s-7-1.14-7-3z" fill="#00758F"/>
        </svg>
      );
    case 'Redis':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
          <path d="M2 7l10-4 10 4-10 4L2 7zm0 5l10 4 10-4v2l-10 4-10-4v-2zm0 5l10 4 10-4v2l-10 4-10-4v-2z" fill="#DC382D" />
        </svg>
      );
    case 'Linux':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0">
          <path d="M12 2C9.5 2 8 3.5 8 6v4c-1.5.5-3 2-3 4 0 2.5 1.5 4 3 4.5V20c0 1 1 2 2 2h4c1 0 2-1 2-2v-1.5c1.5-.5 3-2 3-4.5 0-2-1.5-3.5-3-4V6c0-2.5-1.5-4-4-4z" fill="#FCC624"/>
          <circle cx="10" cy="6" r="1" fill="#181717"/>
          <circle cx="14" cy="6" r="1" fill="#181717"/>
          <ellipse cx="12" cy="8" rx="1.5" ry="1" fill="#E95420"/>
        </svg>
      );
    default:
      return null;
  }
}

export default function TechOrbit() {
  const { t } = useLanguage();
  const [activeTech, setActiveTech] = useState(techOrbit[0]);

  return (
    <div className="relative w-full max-w-[560px] h-[520px] sm:h-[580px] lg:h-[620px] flex items-center justify-center pause-orbit select-none">
      {/* Outer Dashed Orbit Track */}
      <div className="absolute w-[470px] sm:w-[540px] h-[470px] sm:h-[540px] rounded-full border border-dashed border-black/[0.1] pointer-events-none" />

      {/* Middle Concentric Ring */}
      <div className="absolute w-[360px] sm:w-[420px] h-[360px] sm:h-[420px] rounded-full border border-black/[0.05] pointer-events-none" />

      {/* Ambient Radial Aura */}
      <div
        className="absolute w-[400px] sm:w-[460px] h-[400px] sm:h-[460px] rounded-full pointer-events-none blur-3xl opacity-50 transition-all duration-700"
        style={{
          background: `radial-gradient(circle, ${activeTech.color}33 0%, transparent 70%)`
        }}
      />

      {/* Continuous 360-Degree Orbit Ring with Satellites */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-orbit-spin">
        {techOrbit.map((tech, idx) => {
          const total = techOrbit.length;
          const angle = Math.round((idx / total) * 360);
          const isActive = activeTech.name === tech.name;

          return (
            <div
              key={tech.name}
              className="absolute flex items-center justify-center"
              style={{
                transform: `rotate(${angle}deg) translateX(235px)`
              }}
            >
              {/* Counter-rotation to keep icons perfectly upright */}
              <div
                className="flex items-center justify-center pointer-events-auto animate-counter-spin"
                style={{
                  transform: `rotate(-${angle}deg)`
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveTech(tech)}
                  onMouseEnter={() => setActiveTech(tech)}
                  title={`${tech.name} — ${tech.category}`}
                  className={`w-[52px] h-[52px] rounded-full bg-white border flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-125 ${
                    isActive
                      ? 'scale-125 ring-2 ring-offset-2 ring-sky-500/40 border-sky-600 shadow-[0_0_24px_rgba(2,132,199,0.45),0_4px_16px_rgba(0,0,0,0.1)]'
                      : 'border-black/[0.08] shadow-[0_4px_14px_rgba(0,0,0,0.06)]'
                  }`}
                >
                  <TechIcon name={tech.name} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Large Center Portrait Frame (Matching ahmedessama.me width="390" height="390") */}
      <div className="relative z-10 w-[300px] sm:w-[370px] lg:w-[400px] h-[300px] sm:h-[370px] lg:h-[400px] rounded-full flex items-center justify-center pointer-events-none">
        {/* Glow ring around avatar target */}
        <div
          className="absolute inset-0 rounded-full border pointer-events-none transition-all duration-500 z-20"
          style={{
            borderColor: 'rgba(2, 86, 155, 0.35)',
            boxShadow: '0 0 0 1.5px rgba(2, 86, 155, 0.15), 0 0 32px rgba(2, 132, 199, 0.45)'
          }}
        />

        {/* Big High-Res Cutout Portrait */}
        <Image
          src={withBasePath('/assets/portrait.png')}
          alt="Ahmed Ismail Portrait"
          width={400}
          height={400}
          priority
          className="h-[108%] w-auto object-contain object-bottom select-none pointer-events-none"
          style={{
            filter: 'drop-shadow(-8px 16px 20px rgba(15, 23, 42, 0.28))',
            transition: 'filter 680ms ease'
          }}
        />

        {/* Active online pulse badge */}
        <div className="absolute bottom-4 right-4 z-30 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-black/[0.08] shadow-md pointer-events-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[12px] font-semibold text-[#262626]">Active</span>
        </div>
      </div>

      {/* Tactile Tooltip Readout Card at the Bottom */}
      <div className="absolute -bottom-8 sm:-bottom-10 left-1/2 -translate-x-1/2 z-20 pointer-events-auto">
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/95 backdrop-blur-md border border-black/[0.08] shadow-[0_6px_24px_rgba(0,0,0,0.08)] whitespace-nowrap transition-all duration-300">
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0 animate-pulse"
            style={{
              backgroundColor: activeTech.color,
              boxShadow: `0 0 10px ${activeTech.color}`
            }}
          />
          <span className="text-[14px] font-semibold text-[#262626]">
            {activeTech.name}
          </span>
          <span className="text-black/20 text-[12px]">•</span>
          <span className="text-[13px] text-[#525252] font-normal">
            {t(activeTech.desc)}
          </span>
        </div>
      </div>
    </div>
  );
}
