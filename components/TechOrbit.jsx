'use client';

import { useState, useEffect } from 'react';
import { techOrbit } from '@/lib/data';
import { useLanguage } from './LanguageContext';
import { withBasePath } from '@/lib/site';
import { useSplashStore } from '@/lib/splashStore';

function TechIcon({ name }) {
  switch (name) {
    case 'Next.js':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 text-black">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.3 14.7l-4.7-6.2v6.2H9.2V7.3h1.4l4.7 6.2V7.3h1.4v9.4h-1.4z" />
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
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M11.5 8.5H5.5V10.5H7.5V17.5H9.5V10.5H11.5V8.5Z" fill="white" />
          <path d="M18.5 11.2C18.5 9.7 17.2 8.5 15.2 8.5C13.2 8.5 12 9.7 12 11.2C12 14.2 16.5 13 16.5 15C16.5 15.6 15.9 16 15.1 16C13.9 16 13.1 15.3 12.8 14.5L11 15.5C11.5 16.9 13.1 17.8 15.1 17.8C17.3 17.8 18.7 16.6 18.7 15C18.7 12.1 14.2 13.2 14.2 11.3C14.2 10.8 14.7 10.3 15.3 10.3C16.3 10.3 17 10.8 17.3 11.5L18.5 11.2Z" fill="white" />
        </svg>
      );
    case 'Docker':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0">
          <path d="M13.8 9.5h2v2h-2v-2zm-2.8 0h2v2H11v-2zm-2.7 0h2v2h-2v-2zm-2.8 0h2v2h-2v-2zm8.3-2.8h2v2h-2v-2zm-2.8 0h2v2H11v-2zm-2.7 0h2v2h-2v-2zm5.5-2.7h2v2h-2V4zm-2.8 0h2v2H11V4zM22.5 11.2c-.4-.3-1.6-.4-2.5.2-.2-.8-.7-1.4-1.4-1.8l-.5-.3-.3.5c-.3.8-.4 1.7-.2 2.6-.7.4-1.6.5-2.7.5H2.4c-.2.9 0 2.4.6 3.7.8 1.8 2.3 3.6 4.3 4.6 3.1 1.5 7.4 1.4 10.4-.6 2.3-1.6 3.8-3.9 4.3-6.6.6-.2 1.4-.7 1.8-1.5l.2-.5-.5-.4z" fill="#2496ED" />
        </svg>
      );
    case 'CI/CD':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0 text-[#2088FF]">
          <circle cx="6" cy="6" r="3" stroke="currentColor" strokeWidth="2" />
          <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="2" />
          <circle cx="18" cy="6" r="3" stroke="currentColor" strokeWidth="2" />
          <path d="M6 9v6c0 1.7 1.3 3 3 3h6M18 9v6" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case 'Laravel':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0">
          <path d="M8.5 2.5l7 4v3l-7-4v-3zm0 5.5l7 4v3l-7-4v-3zm7.5 4.5l5 2.8v3l-5-2.8v-3zm-14-1.5l5 2.8v3l-5-2.8v-3zm6.5 4.2l7 4v3l-7-4v-3zm7.5 4.3l5 2.8v3l-5-2.8v-3z" fill="#FF2D20" />
        </svg>
      );
    case 'PHP':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0">
          <ellipse cx="12" cy="12" rx="10" ry="6" fill="#777BB4" />
          <path d="M7 14h1.5l.5-1.5h1c1 0 1.5-.5 1.5-1.5s-.5-1.5-1.5-1.5H6.5L5 14h2zm1.5-3.5h1c.3 0 .5.2.5.5s-.2.5-.5.5h-1l.3-1zm4.5 3.5h1.5l1.5-4.5H14l-.5 1.5h-.5l.5-1.5H12l-1.5 4.5h1.5l.5-1.5h.5l-.5 1.5zm5.5 0h1.5l.5-1.5h1c1 0 1.5-.5 1.5-1.5s-.5-1.5-1.5-1.5h-3L17 14h1.5zm1.5-3.5h1c.3 0 .5.2.5.5s-.2.5-.5.5h-1l.3-1z" fill="white" />
        </svg>
      );
    case 'MySQL':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0">
          <path d="M12 3c-4.97 0-9 1.79-9 4s4.03 4 9 4 9-1.79 9-4-4.03-4-9-4zm0 6c-3.87 0-7-1.34-7-3s3.13-3 7-3 7 1.34 7 3-3.13 3-7 3z" fill="#00758F" />
          <path d="M3 8v4c0 2.21 4.03 4 9 4s9-1.79 9-4V8c0 1.86-3.44 3-7 3s-7-1.14-7-3z" fill="#F29111" />
          <path d="M3 13v4c0 2.21 4.03 4 9 4s9-1.79 9-4v-4c0 1.86-3.44 3-7 3s-7-1.14-7-3z" fill="#00758F" />
        </svg>
      );
    case 'Redis':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0">
          <path d="M2 7l10-4 10 4-10 4L2 7zm0 5l10 4 10-4v2l-10 4-10-4v-2zm0 5l10 4 10-4v2l-10 4-10-4v-2z" fill="#DC382D" />
        </svg>
      );
    case 'Linux':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
          <path d="M12 2C9.5 2 8 3.5 8 6v4c-1.5.5-3 2-3 4 0 2.5 1.5 4 3 4.5V20c0 1 1 2 2 2h4c1 0 2-1 2-2v-1.5c1.5-.5 3-2 3-4.5 0-2-1.5-3.5-3-4V6c0-2.5-1.5-4-4-4z" fill="#FCC624" />
          <circle cx="10" cy="6" r="1" fill="#181717" />
          <circle cx="14" cy="6" r="1" fill="#181717" />
          <ellipse cx="12" cy="8" rx="1.5" ry="1" fill="#E95420" />
        </svg>
      );
    default:
      return null;
  }
}

export default function TechOrbit() {
  const { t, isRtl } = useLanguage();
  const splashPhase = useSplashStore((s) => s.phase);
  const isLandedOrDone = splashPhase === 'landed' || splashPhase === 'done';

  const [scale, setScale] = useState(1);
  const [step, setStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const tools = techOrbit;
  const total = tools.length;
  const activeIndex = ((-step % total) + total) % total;
  const activeTech = tools[activeIndex] ?? tools[0];
  const orbitRotation = (360 / total) * step;

  // Responsive scale math from ahmedessama.me
  useEffect(() => {
    const handleResize = () => {
      const s = Math.min(
        1,
        Math.max(
          0.48,
          Math.round((Math.min(560, Math.max(260, window.innerWidth - 32)) / 560) * 100) / 100
        )
      );
      setScale((prev) => (prev === s ? prev : s));
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Continuous auto-orbit rotation every 2.8s when not hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setStep((prev) => prev + 1);
    }, 2800);
    return () => clearInterval(interval);
  }, [isHovered]);

  const selectTech = (index) => {
    let diff = activeIndex - index;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    setStep((prev) => prev + diff);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full max-w-[560px] flex items-center justify-center select-none mx-auto"
      style={{
        height: `${560 * scale}px`,
        marginBottom: `${Math.max(16, 64 * scale)}px`,
      }}
    >
      <div
        style={{
          width: '560px',
          height: '560px',
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
        }}
        className="relative flex items-center justify-center shrink-0"
      >
        {/* Dynamic Background Glow with Color matching active technology */}
        <div
          style={{
            background: `radial-gradient(circle, ${activeTech.color}24 0%, transparent 70%)`,
            opacity: 0.92,
            transform: 'scale(1)',
          }}
          className="absolute w-[520px] h-[520px] rounded-full pointer-events-none transition-all duration-700 ease-out z-0"
        />

        {/* Concentric SVG Circular Orbit Tracks */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
          viewBox="0 0 560 560"
          fill="none"
        >
          <circle cx="280" cy="280" r="225" stroke="rgba(0,0,0,0.08)" strokeWidth="1.5" strokeDasharray="4 6" />
          <circle cx="280" cy="280" r="168.75" stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
          <circle cx="280" cy="280" r="265.5" stroke="rgba(0,0,0,0.025)" strokeWidth="1" strokeDasharray="2 10" />
        </svg>

        {/* Horizontal Docked Capsule on the Right */}
        <div
          style={{ left: 'calc(50% - 15px)', width: '270px', height: '70px' }}
          className="absolute top-1/2 -translate-y-1/2 rounded-full border border-black/[0.06] bg-transparent backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.03)] pointer-events-none z-[5] flex items-center justify-end pr-2 transition-all duration-500"
        >
          {/* Laser beam */}
          <div
            style={{
              background: `linear-gradient(90deg, transparent 0%, ${activeTech.color}40 60%, ${activeTech.color} 100%)`,
              opacity: 0.75,
            }}
            className="absolute inset-x-8 h-[2px] top-1/2 -translate-y-1/2 transition-opacity duration-500"
          />
          {/* Rotating dashed ring */}
          <div
            style={{
              borderColor: activeTech.color,
              boxShadow: `0 0 22px ${activeTech.color}40, inset 0 0 14px ${activeTech.color}25`,
              backgroundColor: `${activeTech.color}0a`,
            }}
            className="w-[54px] h-[54px] rounded-full border-2 border-dashed transition-all duration-500 flex items-center justify-center opacity-100 animate-[spin_12s_linear_infinite]"
          />
        </div>

        {/* Central Hero Avatar Target (Receives 3D Flight from HeroSplash) */}
        <div
          id="hero-avatar-target"
          style={{
            opacity: isLandedOrDone ? 1 : 0,
            transition: 'opacity 300ms ease',
          }}
          className="relative z-[15] w-[390px] h-[390px] rounded-full flex items-center justify-center pointer-events-none"
        >
          {/* Glowing Border Ring */}
          <div
            style={{
              borderColor: `${activeTech.color}55`,
              boxShadow: `0 0 0 1.5px ${activeTech.color}22, 0 0 30px ${activeTech.color}40`,
            }}
            className="absolute inset-0 rounded-full border pointer-events-none transition-all duration-500 z-20"
          />

          {/* Cleanly Clipped Cutout Portrait */}
          <div className="w-full h-full rounded-full overflow-hidden relative flex items-end justify-center z-10">
            <img
              src={withBasePath('/assets/portrait.png')}
              alt="Ahmed Ismail"
              width={390}
              height={390}
              onError={(e) => {
                if (e.currentTarget.src !== withBasePath('/avatar.webp')) {
                  e.currentTarget.src = withBasePath('/avatar.webp');
                }
              }}
              className="h-[110%] w-auto object-contain object-bottom transition-transform duration-500 select-none pointer-events-none"
              style={{
                filter: 'drop-shadow(-8px 16px 18px rgba(15, 23, 42, 0.28))',
              }}
            />
          </div>
        </div>

        {/* Orbit Ring with Satellites */}
        <div
          style={{
            transform: `rotate(${orbitRotation}deg) scale(1)`,
            transition: 'transform 0.78s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
          className="absolute inset-0 z-[20] flex items-center justify-center pointer-events-none"
        >
          {tools.map((tech, idx) => {
            const angle = (360 * idx) / total;
            const isActive = activeIndex === idx;

            return (
              <div
                key={tech.name}
                style={{
                  transform: `rotate(${angle}deg) translateX(225px)`,
                }}
                className="absolute flex items-center justify-center"
              >
                {/* Counter-rotation to keep icons perfectly upright */}
                <div
                  style={{
                    transform: `rotate(-${orbitRotation + angle}deg)`,
                    transition: 'transform 0.78s cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                  className="flex items-center justify-center pointer-events-auto"
                >
                  <button
                    type="button"
                    onClick={() => selectTech(idx)}
                    onMouseEnter={() => selectTech(idx)}
                    title={`${tech.name} — ${t(tech.desc)}`}
                    style={{
                      boxShadow: isActive
                        ? `0 0 22px ${tech.color}50, 0 4px 16px rgba(0,0,0,0.08)`
                        : '0 4px 14px rgba(0,0,0,0.05)',
                      borderColor: isActive ? tech.color : 'rgba(0,0,0,0.08)',
                    }}
                    className={`w-[52px] h-[52px] rounded-full bg-white border flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-125 ${
                      isActive ? 'scale-125 ring-2 ring-offset-2 ring-black/5' : 'scale-100 opacity-95'
                    }`}
                  >
                    <TechIcon name={tech.name} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Readout Tooltip Pill below Avatar */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 z-[25] pointer-events-auto">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.06)] whitespace-nowrap">
            <span
              style={{
                backgroundColor: activeTech.color,
                boxShadow: `0 0 10px ${activeTech.color}`,
              }}
              className="w-2 h-2 rounded-full shrink-0 animate-pulse"
            />
            <span className="text-[13px] font-semibold text-[#262626]">
              {activeTech.name}
            </span>
            <span className="text-black/20 text-[12px]">•</span>
            <span className="text-[12px] text-[#737373] font-medium hidden sm:inline">
              {t(activeTech.desc)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
