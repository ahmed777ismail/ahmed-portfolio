'use client';

import { useEffect, useRef, useCallback } from 'react';
import { useSplashStore } from '@/lib/splashStore';
import { useLanguage } from './LanguageContext';
import { withBasePath } from '@/lib/site';

export default function HeroSplash() {
  const phase = useSplashStore((s) => s.phase);
  const setPhase = useSplashStore.setPhase;
  const { isRtl } = useLanguage();

  const containerRef = useRef(null);
  const flightRef = useRef(null);
  const perspectiveRef = useRef(null);
  const gimbalRef = useRef(null);
  const timersRef = useRef([]);
  const hasTriggeredRef = useRef(false);
  const isSiteReadyRef = useRef(false);

  const startFlight = useCallback(() => {
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;

    const container = containerRef.current;
    const flight = flightRef.current;
    const perspective = perspectiveRef.current;
    const gimbal = gimbalRef.current;
    const target = document.getElementById('hero-avatar-target');

    if (!container || !flight || !gimbal || !target) {
      setPhase('landed');
      const t = window.setTimeout(() => setPhase('done'), 180);
      timersRef.current.push(t);
      return;
    }

    const flightRect = flight.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    if (targetRect.width <= 0 || flightRect.width <= 0) {
      setPhase('landed');
      const t = window.setTimeout(() => setPhase('done'), 180);
      timersRef.current.push(t);
      return;
    }

    const flightCenterX = flightRect.left + flightRect.width / 2;
    const flightCenterY = flightRect.top + flightRect.height / 2;
    const targetCenterX = targetRect.left + targetRect.width / 2;
    const targetCenterY = targetRect.top + targetRect.height / 2;
    const scaleFactor = targetRect.width / flightRect.width;

    const currentGimbalTransform = window.getComputedStyle(gimbal).transform;
    gimbal.style.animation = 'none';
    gimbal.style.transform =
      currentGimbalTransform && currentGimbalTransform !== 'none'
        ? currentGimbalTransform
        : 'translateZ(0px)';
    // Force reflow
    void gimbal.offsetWidth;

    const ease = 'cubic-bezier(0.16, 1, 0.3, 1)';
    flight.style.transition = `transform 820ms ${ease}`;
    flight.style.transform = `translate3d(${(targetCenterX - flightCenterX).toFixed(2)}px, ${(targetCenterY - flightCenterY).toFixed(2)}px, 0px) scale(${scaleFactor.toFixed(4)})`;

    if (perspective) {
      perspective.style.transition = `transform 820ms ${ease}`;
      perspective.style.transform = 'perspective(1100px) rotateX(0deg) rotateY(0deg)';
    }

    gimbal.style.transition = `transform 820ms ${ease}`;
    gimbal.style.transform = 'translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)';

    setPhase('docking');

    const tLanded = window.setTimeout(() => {
      setPhase('landed');
    }, 790);

    const tDone = window.setTimeout(() => {
      setPhase('done');
    }, 900);

    timersRef.current.push(tLanded, tDone);
  }, [setPhase]);

  useEffect(() => {
    if (useSplashStore.getState().phase === 'done') return;

    const clearAllTimers = () => {
      timersRef.current.forEach((t) => window.clearTimeout(t));
      timersRef.current = [];
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const t1 = window.setTimeout(() => setPhase('landed'), 80);
      const t2 = window.setTimeout(() => setPhase('done'), 180);
      timersRef.current.push(t1, t2);
      return clearAllTimers;
    }

    if (!window.location.hash && window.scrollY > 0) {
      window.scrollTo(0, 0);
    }

    // Interactive pointer parallax
    let rafId = 0;
    const handlePointerMove = (e) => {
      if (hasTriggeredRef.current || rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        if (hasTriggeredRef.current || !perspectiveRef.current) return;
        const normX = (e.clientX / Math.max(1, window.innerWidth) - 0.5) * 2;
        const normY = (e.clientY / Math.max(1, window.innerHeight) - 0.5) * 2;
        perspectiveRef.current.style.transform = `perspective(1100px) rotateX(${(-7 * normY).toFixed(2)}deg) rotateY(${(9 * normX).toFixed(2)}deg)`;
      });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    // Autoplay launch timer
    const tReady = window.setTimeout(() => {
      isSiteReadyRef.current = true;
      startFlight();
    }, 1100);

    const tFallback = window.setTimeout(() => {
      startFlight();
    }, 1600);

    timersRef.current.push(tReady, tFallback);

    const unsubscribe = useSplashStore.subscribe(() => {
      if (useSplashStore.getState().siteReady && isSiteReadyRef.current && !hasTriggeredRef.current) {
        startFlight();
      }
    });

    return () => {
      unsubscribe();
      clearAllTimers();
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, [setPhase, startFlight]);

  if (phase === 'done') return null;

  const isDockingOrLanded = phase === 'docking' || phase === 'landed';

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      onClick={() => {
        if (!hasTriggeredRef.current) startFlight();
      }}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden select-none cursor-pointer ${
        isDockingOrLanded ? 'pointer-events-none' : 'pointer-events-auto'
      }`}
    >
      {/* Background radial atmosphere */}
      <div
        className="absolute inset-0 transition-opacity ease-out pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 48%, rgba(2, 132, 199, 0.08) 0%, rgba(242, 78, 30, 0.04) 42%, transparent 72%), radial-gradient(circle at 50% 46%, #FFFFFF 0%, #F8FAFC 54%, #EBEFF5 100%)',
          opacity: isDockingOrLanded ? 0 : 1,
          transitionDuration: '620ms',
          transitionDelay: isDockingOrLanded ? '100ms' : '0ms',
        }}
      />

      {/* Ambient soft glow sphere */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 overflow-hidden"
        style={{ opacity: isDockingOrLanded ? 0 : 1 }}
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] rounded-full bg-gradient-to-tr from-[#0284C7]/10 via-[#F24E1E]/5 to-transparent blur-3xl pointer-events-none" />
      </div>

      {/* 3D Flight Avatar Object */}
      <div
        ref={flightRef}
        className="hero-splash-flight relative w-[240px] h-[240px] xs:w-[260px] xs:h-[260px] sm:w-[310px] sm:h-[310px] md:w-[350px] md:h-[350px] lg:w-[390px] lg:h-[390px] flex items-center justify-center"
      >
        <div
          ref={perspectiveRef}
          className="relative w-full h-full flex items-center justify-center transition-transform duration-150 ease-out"
          style={{
            transform: 'perspective(1100px) rotateX(0deg) rotateY(0deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          <div
            ref={gimbalRef}
            className="hero-splash-gimbal-intro relative w-full h-full flex items-center justify-center"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Shadow Base Layer */}
            <div
              className="absolute w-[95%] h-[95%] rounded-full pointer-events-none transition-opacity duration-500"
              style={{
                transform: 'translate3d(0px, 22px, -70px)',
                background:
                  'radial-gradient(circle, rgba(15, 23, 42, 0.22) 0%, rgba(2, 132, 199, 0.12) 42%, rgba(242, 78, 30, 0.06) 60%, transparent 74%)',
                opacity: isDockingOrLanded ? 0 : 1,
              }}
            />

            {/* Orbit Ring A (Blue) */}
            <div
              className="hero-splash-ring-a absolute -inset-5 xs:-inset-6 sm:-inset-8 lg:-inset-11 rounded-full pointer-events-none transition-opacity duration-500"
              style={{
                border: '1.5px solid rgba(2, 132, 199, 0.28)',
                boxShadow: '0 0 24px rgba(2, 132, 199, 0.15)',
                opacity: isDockingOrLanded ? 0 : 1,
              }}
            >
              <span
                className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#0284C7]"
                style={{
                  boxShadow: '0 0 14px rgba(2, 132, 199, 0.9), 0 0 4px #FFFFFF',
                }}
              />
            </div>

            {/* Orbit Ring B (Orange Dashed) */}
            <div
              className="hero-splash-ring-b absolute -inset-2.5 xs:-inset-3.5 sm:-inset-5 lg:-inset-7 rounded-full pointer-events-none transition-opacity duration-500"
              style={{
                border: '1.5px dashed rgba(242, 78, 30, 0.32)',
                opacity: isDockingOrLanded ? 0 : 1,
              }}
            >
              <span
                className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#F24E1E]"
                style={{
                  boxShadow: '0 0 12px rgba(242, 78, 30, 0.85), 0 0 3px #FFFFFF',
                }}
              />
            </div>

            {/* Layered Coin Base Disk */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none transition-opacity duration-500"
              style={{
                transform: 'translateZ(-12px)',
                background: 'linear-gradient(145deg, #FFFFFF 0%, #CBD5E1 48%, #94A3B8 100%)',
                boxShadow: '0 24px 54px -10px rgba(15, 23, 42, 0.24)',
                opacity: isDockingOrLanded ? 0 : 1,
              }}
            />

            {/* Inner Ring Disk */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none transition-opacity duration-500"
              style={{
                transform: 'translateZ(0px)',
                background:
                  'radial-gradient(circle at 32% 24%, #FFFFFF 0%, #F8FAFC 52%, #E2E8F0 100%)',
                boxShadow:
                  'inset 0 3px 8px rgba(255, 255, 255, 0.98), inset 0 -16px 28px rgba(15, 23, 42, 0.1), 0 0 0 1.5px rgba(255, 255, 255, 0.92)',
                opacity: isDockingOrLanded ? 0 : 1,
              }}
            >
              <div className="absolute inset-3.5 sm:inset-5 rounded-full border border-black/[0.05]" />
            </div>

            {/* Cutout Portrait Layer with Circular Clipping Mask */}
            <div
              className="w-full h-full rounded-full overflow-hidden relative flex items-end justify-center pointer-events-none"
              style={{
                transform: isDockingOrLanded ? 'translateZ(0px)' : 'translateZ(44px)',
                transition: 'transform 780ms cubic-bezier(0.16, 1, 0.3, 1), opacity 120ms ease',
                opacity: phase === 'landed' ? 0 : 1,
              }}
            >
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 50% 28%, rgba(255,255,255,0.4) 0%, transparent 60%)',
                }}
              />
              <img
                src={withBasePath('/assets/portrait.png')}
                alt="Ahmed Portrait"
                width={390}
                height={390}
                onError={(e) => {
                  if (e.currentTarget.src !== withBasePath('/avatar.webp')) {
                    e.currentTarget.src = withBasePath('/avatar.webp');
                  }
                }}
                className="h-[108%] w-auto object-contain object-bottom select-none pointer-events-none"
                style={{
                  filter: isDockingOrLanded
                    ? 'drop-shadow(0px 0px 0px rgba(15, 23, 42, 0))'
                    : 'drop-shadow(-8px 16px 18px rgba(15, 23, 42, 0.28))',
                  transition: 'filter 680ms ease',
                }}
              />
            </div>

            {/* Outer Specular Rim with Sheen Light Sweep */}
            <div
              className="absolute inset-0 rounded-full overflow-hidden pointer-events-none"
              style={{
                transform: isDockingOrLanded ? 'translateZ(0px)' : 'translateZ(54px)',
                border: isDockingOrLanded
                  ? '1px solid rgba(2, 86, 155, 0.33)'
                  : '1.5px solid rgba(255, 255, 255, 0.8)',
                boxShadow: isDockingOrLanded
                  ? '0 0 0 1.5px rgba(2, 86, 155, 0.14), 0 0 28px rgba(2, 132, 199, 0.4)'
                  : 'inset 0 2px 10px rgba(255, 255, 255, 0.7)',
                opacity: phase === 'landed' ? 0 : 1,
                transition:
                  'transform 780ms cubic-bezier(0.16, 1, 0.3, 1), border-color 600ms ease, box-shadow 600ms ease, opacity 120ms ease',
              }}
            >
              {!isDockingOrLanded && (
                <div
                  className="hero-splash-sheen-sweep absolute -inset-y-12 w-28 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.7) 50%, transparent 100%)',
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status Pill & Loader Bar */}
      <div
        className="absolute bottom-7 sm:bottom-10 flex flex-col items-center gap-2 pointer-events-none transition-all duration-400"
        style={{
          opacity: isDockingOrLanded ? 0 : 1,
          transform: isDockingOrLanded ? 'translateY(12px) scale(0.95)' : 'translateY(0) scale(1)',
        }}
      >
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-[#E2E8F0] shadow-[0_4px_16px_rgba(15,23,42,0.06)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-sans text-[11.5px] sm:text-[12px] font-medium tracking-tight text-[#0F172A]">
            {isRtl ? 'أحمد إسماعيل — مهندس برمجيات' : 'Ahmed Ismail — Software Engineer'}
          </span>
        </div>

        <div className="w-24 sm:w-28 h-[2px] rounded-full overflow-hidden bg-slate-200/80 relative">
          <div className="hero-splash-loader-bar absolute inset-y-0 w-1/2 rounded-full bg-gradient-to-r from-[#0284C7] to-[#F24E1E]" />
        </div>

        <span className="font-mono text-[10px] sm:text-[10.5px] text-slate-400 font-normal tracking-wider uppercase">
          {isRtl ? 'انقر للتخطي' : 'tap to skip'}
        </span>
      </div>
    </div>
  );
}

