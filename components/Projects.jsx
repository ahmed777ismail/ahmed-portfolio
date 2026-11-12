'use client';

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github, ArrowUpRight, Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { caseStudies } from '@/lib/data';
import { useLanguage } from './LanguageContext';
import { withBasePath } from '@/lib/site';

// High-resolution mockup assets hosted on Appwrite CDN (matching ahmedessama.me)
const PROJECT_MOCKUPS = [
  'https://fra.cloud.appwrite.io/v1/storage/buckets/6aa59aba00156e842788/files/6aa59c0c0031a87d14d8/view?project=6aa5600c00286b4ef214',
  'https://fra.cloud.appwrite.io/v1/storage/buckets/6aa59aba00156e842788/files/6aa59c0c00319a9b6592/view?project=6aa5600c00286b4ef214',
  'https://fra.cloud.appwrite.io/v1/storage/buckets/6aa59aba00156e842788/files/6aa59c0c0031a86d4375/view?project=6aa5600c00286b4ef214',
  'https://fra.cloud.appwrite.io/v1/storage/buckets/6aa59aba00156e842788/files/6aa59c0c0031add2ab48/view?project=6aa5600c00286b4ef214',
  'https://fra.cloud.appwrite.io/v1/storage/buckets/6aa59aba00156e842788/files/6aa59c0c0031a56018d7/view?project=6aa5600c00286b4ef214',
];

// Single 3D Phone Mock Card
function PhoneCard({
  project,
  index,
  activeIndex,
  total,
  spreadX,
  spreadY,
  rotateDeg,
  cardWidth,
  cardHeight,
  springConfig,
  onDragEnd,
  onSelect,
}) {
  let diff = index - activeIndex;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;

  const isActive = diff === 0;
  const isVisible = Math.abs(diff) <= 2;
  const absDiff = Math.abs(diff);
  const isCompact = cardWidth < 150;

  const posX = diff * spreadX;
  const posY = Math.pow(absDiff, 1.6) * spreadY;
  const rotateAngle = diff * rotateDeg;
  const scale = isActive
    ? 1
    : isCompact
    ? absDiff === 1
      ? 0.88
      : 0.74
    : Math.max(0.82, 1 - 0.06 * absDiff);

  return (
    <motion.div
      drag={isActive ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.18}
      dragMomentum={false}
      onDragEnd={onDragEnd}
      initial={false}
      animate={{
        x: posX,
        y: posY,
        rotate: rotateAngle,
        scale,
        zIndex: 30 - 5 * absDiff,
        opacity: isVisible ? (isCompact && absDiff === 2 ? 0.42 : 1) : 0,
      }}
      transition={springConfig}
      onClick={onSelect}
      style={{
        width: `${cardWidth}px`,
        height: `${cardHeight}px`,
        cursor: isActive ? 'grab' : 'pointer',
        position: 'absolute',
        transformOrigin: 'center center',
        willChange: 'transform',
      }}
      className="group select-none"
      whileHover={isActive ? { y: -6, transition: { duration: 0.25, ease: 'easeOut' } } : {}}
    >
      {/* Dynamic Floor Shadow */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none rounded-[100%] transition-opacity duration-300"
        style={{
          bottom: '-14px',
          width: isActive ? '88%' : '76%',
          height: isActive ? '22px' : '14px',
          background: isActive
            ? 'radial-gradient(ellipse at center, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.20) 50%, transparent 75%)'
            : 'radial-gradient(ellipse at center, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.10) 50%, transparent 75%)',
          filter: 'blur(5px)',
          transform: 'translateZ(0)',
          willChange: 'transform, opacity',
        }}
      />

      {/* Phone Mock Body */}
      <div className="w-full h-full flex flex-col bg-transparent border-none relative">
        <div style={{ flex: `0 0 ${cardHeight}px`, position: 'relative', overflow: 'visible' }}>
          {/* Subtle Outer Frame Glow & Shadow */}
          <div
            className="absolute inset-[3px] rounded-[30px] sm:rounded-[36px] pointer-events-none transition-shadow duration-300"
            style={{
              boxShadow: isActive
                ? '0 22px 44px -8px rgba(0,0,0,0.38), 0 6px 16px -4px rgba(0,0,0,0.22)'
                : '0 10px 22px -6px rgba(0,0,0,0.22)',
              transform: 'translateZ(0)',
            }}
          />

          {/* Screenshot Image */}
          <img
            src={project.image}
            alt={project.title}
            draggable={false}
            loading="lazy"
            decoding="async"
            width={cardWidth}
            height={cardHeight}
            onError={(e) => {
              if (!e.currentTarget.src.includes('backend-command-center.png')) {
                e.currentTarget.src = withBasePath('/assets/backend-command-center.png');
              }
            }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'center center',
              display: 'block',
              userSelect: 'none',
              transition: 'transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              transform: 'translateZ(0)',
            }}
            className="group-hover:scale-[1.025] relative z-10"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { t, isRtl } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1200);
  const containerRef = useRef(null);

  // Augment caseStudies with high-res mockup images
  const projects = useMemo(() => {
    return caseStudies.map((item, idx) => ({
      ...item,
      id: `proj-${item.index}`,
      image: PROJECT_MOCKUPS[idx % PROJECT_MOCKUPS.length],
    }));
  }, []);

  const total = projects.length;

  // Responsive dimensions from ahmedessama.me
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextProject = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevProject = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextProject();
      if (e.key === 'ArrowLeft') prevProject();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextProject, prevProject]);

  const isMobile = windowWidth < 400;
  const isSm = windowWidth < 640;
  const isMd = windowWidth >= 640 && windowWidth < 1024;

  const cardWidth = isMobile ? 126 : isSm ? 136 : isMd ? 160 : 184;
  const cardHeight = Math.round(2.08 * cardWidth);
  const spreadX = isMobile ? 54 : isSm ? 64 : isMd ? 136 : 185;
  const spreadY = isSm ? 6 : isMd ? 12 : 16;
  const rotateDeg = isSm ? 3.5 : isMd ? 6 : 7.5;
  const springConfig = { type: 'spring', stiffness: 180, damping: 26, mass: 1.1 };

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -45) {
      nextProject();
    } else if (info.offset.x > 45) {
      prevProject();
    }
  };

  const currentProject = projects[activeIndex] ?? projects[0];

  return (
    <section
      id="work"
      className="w-full pt-8 sm:pt-14 pb-12 sm:pb-20 flex flex-col items-center relative overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      <span id="case-studies" className="sr-only" />

      <div className="w-full max-w-[1080px] mx-auto px-4 sm:px-8 flex flex-col items-center">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 font-mono text-[12.5px] font-medium mb-3">
            <Sparkles size={13} />
            <span>{isRtl ? 'أحدث المشاريع والأنظمة' : 'LATEST PRODUCTION WORK'}</span>
          </div>
          <h2 className="text-[26px] sm:text-[36px] lg:text-[42px] font-serif text-[#262626] tracking-tight font-normal">
            {isRtl ? 'Selected Work & Production Impact' : 'Selected Work That Left the Screen'}
          </h2>
          <p className="text-[13.5px] sm:text-[15.5px] text-[#525252] max-w-[560px] mt-2 font-normal leading-relaxed">
            {isRtl
              ? 'تطبيقات وأنظمة حية مبنية بـ Clean Architecture وسلاسة تامة ومجهزة للعمل تحت أعلى درجات الضغط والإنتاجية.'
              : 'Production-ready web platforms and native apps engineered with clean architecture, fluid animations, and high scalability.'}
          </p>
        </div>

        {/* 3D Phone Deck Carousel Container */}
        <div ref={containerRef} className="w-full relative flex flex-col items-center justify-center">
          <div
            className="relative w-full flex items-center justify-center overflow-visible select-none mt-2 mb-4"
            style={{ height: `${cardHeight + (isSm ? 30 : 44)}px` }}
          >
            {/* Phone Cards Fan */}
            <div className="relative w-full h-full flex items-center justify-center">
              {projects.map((proj, idx) => (
                <PhoneCard
                  key={proj.id}
                  project={proj}
                  index={idx}
                  activeIndex={activeIndex}
                  total={total}
                  spreadX={spreadX}
                  spreadY={spreadY}
                  rotateDeg={rotateDeg}
                  cardWidth={cardWidth}
                  cardHeight={cardHeight}
                  springConfig={springConfig}
                  onDragEnd={handleDragEnd}
                  onSelect={() => setActiveIndex(idx)}
                />
              ))}
            </div>

            {/* Floating Left/Right Chevrons */}
            <button
              onClick={prevProject}
              aria-label="Previous project"
              className="absolute left-1 sm:left-4 md:left-6 z-40 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 backdrop-blur-md text-[#262626] border border-black/10 shadow-[0_4px_16px_rgba(0,0,0,0.10)] flex items-center justify-center hover:scale-105 hover:shadow-[0_6px_20px_rgba(0,0,0,0.14)] active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={nextProject}
              aria-label="Next project"
              className="absolute right-1 sm:right-4 md:right-6 z-40 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 backdrop-blur-md text-[#262626] border border-black/10 shadow-[0_4px_16px_rgba(0,0,0,0.10)] flex items-center justify-center hover:scale-105 hover:shadow-[0_6px_20px_rgba(0,0,0,0.14)] active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Dots Indicator & Subtitle Prompt */}
          <div className="flex flex-col items-center mt-2">
            <div className="flex items-center justify-center gap-2 z-30">
              {projects.map((proj, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={proj.id}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Jump to ${proj.title}`}
                    className="transition-all rounded-full cursor-pointer"
                    style={{
                      width: isActive ? '28px' : '8px',
                      height: '8px',
                      background: isActive ? '#1A1A1A' : 'rgba(0,0,0,0.15)',
                      transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                  />
                );
              })}
            </div>
            <p className="text-[11.5px] font-mono text-[#A3A3A3] mt-2.5 text-center">
              {isRtl ? 'اسحب أو انقر للتنقل بين المشاريع' : 'Drag or click to explore projects'}
            </p>
          </div>
        </div>

        {/* Selected Project Full Details Drawer */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-[920px] mt-10 bg-white border border-black/[0.07] rounded-3xl p-6 sm:p-10 shadow-[0_12px_36px_rgba(0,0,0,0.06)]"
          >
            {/* Header row: Index & Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/[0.06] pb-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[16px] font-bold text-emerald-700">
                  {currentProject.index}
                </span>
                <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700 font-mono text-[12.5px] font-medium">
                  {t(currentProject.badge)}
                </span>
              </div>
              <span className="font-mono text-[13px] text-[#525252] font-medium flex items-center gap-1.5">
                <Zap size={14} className="text-amber-500" />
                {t(currentProject.outcome)}
              </span>
            </div>

            {/* Title & Tagline */}
            <div className="flex flex-col gap-3 mb-6">
              <h3 className="text-[26px] sm:text-[32px] font-serif font-normal text-[#262626]">
                {currentProject.title}
              </h3>
              <p className="text-[16px] sm:text-[17.5px] leading-[1.65] text-[#525252]">
                {t(currentProject.tagline)}
              </p>
            </div>

            {/* Metric Banner for Case Study 02 or Metrics row */}
            {currentProject.metricDisplay ? (
              <div className="bg-[#F8FAFC] border border-black/[0.06] rounded-2xl p-4 sm:p-5 flex flex-col gap-2.5 mb-6">
                <div className="flex items-center justify-between font-mono text-[13px] sm:text-[14px]">
                  <span className="text-rose-600 font-semibold">
                    {isRtl ? 'قبل التحسين: 4.0 ثوانٍ' : 'Before: 4.0s (Bottleneck)'}
                  </span>
                  <span className="text-emerald-700 font-bold">
                    {isRtl ? 'بعد التحسين: 0.5 ثانية (تسريع 87.5%)' : 'After: 0.5s (87.5% Faster)'}
                  </span>
                </div>
                <div className="w-full h-2.5 bg-black/[0.06] rounded-full overflow-hidden flex">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: '87.5%' }} />
                </div>
              </div>
            ) : null}

            {/* Key Engineering Highlights */}
            {currentProject.highlights && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {currentProject.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-[14px] sm:text-[14.5px] text-[#262626]">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{t(h)}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Tech Stack Pills & Action Links */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-black/[0.06]">
              <div className="flex flex-wrap items-center gap-2">
                {currentProject.stack?.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-[#F5F5F5] text-[#525252] font-mono text-[12px] border border-black/[0.04]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {currentProject.links && currentProject.links.length > 0 && (
                <div className="flex items-center gap-2.5">
                  {currentProject.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#262626] text-white font-medium text-[13px] hover:bg-black transition-all"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight size={14} className="rtl:-scale-x-100" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
