'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ArrowUpRight, Calendar, Sparkles } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { withBasePath } from '@/lib/site';

const MILESTONES_DATA = [
  {
    id: 'm-2023',
    year: '2023',
    tagline: 'FOUNDATIONAL CRAFTSMANSHIP',
    taglineAr: 'الانطلاقة وتطوير الواجهات',
    title: 'Flex Agency.\nFull-Stack & Backend Foundations.',
    titleAr: 'شركة فلكس (Flex Agency).\nتطوير الويب وهندسة الأنظمة الخلفية.',
    description:
      'Engineered responsive web applications and performant Laravel REST APIs. Transformed business workflows into clean service layers and robust relational database schemas.',
    descriptionAr:
      'تطوير منصات الويب الحديثة وواجهات REST البرمجية عبر Laravel. تحويل المتطلبات التشغيلية إلى خدمات معيارية نظيفة وهياكل بيانات علائقية عالية الكفاءة.',
    ctaText: 'View Milestone Details',
    ctaTextAr: 'تفاصيل المحطة',
    image:
      'https://fra.cloud.appwrite.io/v1/storage/buckets/6aa59aba00156e842788/files/6aab8f500028d7f94c65/view?project=6aa5600c00286b4ef214',
    imageAlt: '2023 Foundations',
    ctaLink: '#contact',
  },
  {
    id: 'm-2024',
    year: '2024',
    tagline: 'HIGH-CONCURRENCY OPTIMIZATION',
    taglineAr: 'هندسة الأداء وتحسين قواعد البيانات',
    title: 'High-Throughput Engineering.\n87.5% Critical Latency Drop.',
    titleAr: 'هندسة الأداء والضغط العالي.\nتسريع استجابة الـ API بنسبة 87.5%.',
    description:
      'Diagnosed and eliminated database bottlenecks across booking endpoints, slashing query times from 4.0s to 0.5s with composite B-Tree indexes, eager loading, and Redis caching.',
    descriptionAr:
      'القضاء الجذري على بطء الاستعلامات في نقاط الاتصال عالية الزيارات، وتخفيض زمن الاستجابة من 4 ثوانٍ إلى 0.5 ثانية عبر الفهرسة المركبة والتخزين المؤقت بريديس.',
    ctaText: 'View Case Study',
    ctaTextAr: 'تفاصيل دراسة الحالة',
    image:
      'https://fra.cloud.appwrite.io/v1/storage/buckets/6aa59aba00156e842788/files/6aab96b900382ac96d62/view?project=6aa5600c00286b4ef214',
    imageAlt: '2024 Optimization',
    ctaLink: '#work',
  },
  {
    id: 'm-2025',
    year: '2025',
    tagline: 'LEADERSHIP & CLOUD DELIVERY',
    taglineAr: 'قيادة الفرق وهندسة السحابة',
    title: 'RunSoft.\nFull-Stack Web & DevOps Team Lead.',
    titleAr: 'شركة RunSoft.\nقيادة تطوير الويب وهندسة DevOps.',
    description:
      'Coordinates delivery for a 4-developer engineering team. Directs full-stack architecture for BayToStay, automated Docker CI/CD pipelines, and zero-downtime releases.',
    descriptionAr:
      'قيادة وتنسيق التطوير المتكامل لفريق من 4 مطورين، وإدارة معمارية منصة BayToStay، وخطوط النشر المؤتمتة بالحاويات Docker و GitHub Actions دون انقطاع.',
    ctaText: 'Production Platform',
    ctaTextAr: 'تفاصيل المنظومة',
    image:
      'https://fra.cloud.appwrite.io/v1/storage/buckets/6aa59aba00156e842788/files/6aa7b18e003ccd361559/view?project=6aa5600c00286b4ef214',
    imageAlt: '2025 Leadership',
    ctaLink: '#work',
  },
  {
    id: 'm-2026',
    year: '2026',
    tagline: 'ARCHITECTURE & HONORS',
    taglineAr: 'المعمارية المتقدمة والتخرج بمرتبة الشرف',
    title: 'Dual Milestone.\nRTS Architecture & Honors Graduation.',
    titleAr: 'محطتان مفصليتان.\nمعمارية البرمجيات بـ RTS والتخرج بامتياز.',
    description:
      'Mastered enterprise Clean Architecture and SOLID patterns with RTS, alongside graduating with Highest Honors in Business Information Technology.',
    descriptionAr:
      'إنجاز التدريب المؤسسي المتقدم في معمارية البرمجيات بـ RTS، والتخرج الرسمي بامتياز مع مرتبة الشرف في تكنولوجيا معلومات الأعمال.',
    ctaText: 'Explore Milestones',
    ctaTextAr: 'تفاصيل المحطتين',
    image:
      'https://fra.cloud.appwrite.io/v1/storage/buckets/6aa59aba00156e842788/files/6aab9aa7000ca282321f/view?project=6aa5600c00286b4ef214',
    imageAlt: '2026 Milestones',
    ctaLink: '#contact',
    subCards: [
      {
        id: 'sub-rts',
        year: '2026',
        tagline: 'RTS ENTERPRISE TRAINING',
        taglineAr: 'تدريب شركة RTS',
        title: 'Solution Revolution (RTS).\nClean Architecture & SOLID Mastery.',
        titleAr: 'ثورة الحلول (RTS).\nمعمارية البرمجيات والكود النظيف.',
        description:
          'Deep enterprise training in Clean Architecture, SOLID, OOP patterns, UML system topology, and modern .NET Core services.',
        descriptionAr:
          'تدريب عملي مكثف في شركة ثورة الحلول التقنية (RTS)، شمل تطبيق Clean Architecture ومبادئ SOLID وتصميم معماريات الأنظمة المؤسسية.',
        ctaText: 'Milestone Details',
        ctaTextAr: 'تفاصيل المحطة',
        image:
          'https://fra.cloud.appwrite.io/v1/storage/buckets/6aa59aba00156e842788/files/6aab9aa7000ca282321f/view?project=6aa5600c00286b4ef214',
        ctaLink: '#contact',
      },
      {
        id: 'sub-grad',
        year: '2026',
        tagline: 'HONORS GRADUATION',
        taglineAr: 'التخرج بمرتبة الشرف',
        title: 'Tunis University (IUTT).\nGraduated with Highest Honors.',
        titleAr: 'جامعة تونتك الدولية.\nالتخرج بامتياز مع مرتبة الشرف.',
        description:
          'Graduated in Business Information Technology (BIT) with top academic standing, bridging rigorous theoretical models with scalable production engineering.',
        descriptionAr:
          'التخرج الرسمي من جامعة تونتك الدولية للتكنولوجيا (IUTT) بتقدير عام امتياز مع مرتبة الشرف، تتويجاً لمسيرة أكاديمية متميزة.',
        ctaText: 'Milestone Details',
        ctaTextAr: 'تفاصيل المحطة',
        image:
          'https://fra.cloud.appwrite.io/v1/storage/buckets/6aa59aba00156e842788/files/6aab9b9900328dc70838/view?project=6aa5600c00286b4ef214',
        ctaLink: '#contact',
      },
    ],
  },
];

// Single Milestone Card
function MilestoneCard({ milestone, width, isRtl }) {
  const isCompact = (typeof width === 'number' ? width : 330) < 280;
  const link = milestone.ctaLink || '#contact';
  const isExternal = link.startsWith('http://') || link.startsWith('https://');

  return (
    <div style={{ width: typeof width === 'number' ? `${width}px` : width }} className="relative select-text">
      <AnimatePresence mode="wait">
        <motion.div
          key={milestone.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.22, ease: [0.25, 1, 0.5, 1] }}
          className="w-full flex flex-col bg-white text-[#111111] border border-[#E2E8F0] rounded-[16px] sm:rounded-[18px] shadow-[0_16px_36px_-16px_rgba(0,0,0,0.12),_0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden"
        >
          <a
            href={link}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            draggable={false}
            className="flex flex-col w-full text-inherit no-underline cursor-pointer group/card"
          >
            {/* Image Header with Year Tag */}
            <div
              className={`relative overflow-hidden shrink-0 m-1 rounded-[12px] bg-[#F1F5F9] ${
                isCompact ? 'h-[96px]' : 'h-[114px]'
              }`}
            >
              <img
                src={milestone.image}
                alt={milestone.imageAlt || milestone.year}
                draggable={false}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  if (!e.currentTarget.src.includes('backend-command-center.png')) {
                    e.currentTarget.src = withBasePath('/assets/backend-command-center.png');
                  }
                }}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-500 ease-out group-hover/card:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/5 pointer-events-none"
              />
              <span
                aria-hidden="true"
                className="absolute start-2 top-2 rounded-full px-2 py-0.5 bg-white/95 text-[#0F172A] font-serif text-[10px] sm:text-[11px] font-medium tracking-tight shadow-2xs backdrop-blur-xs select-none"
              >
                {milestone.year}
              </span>
            </div>

            {/* Content Details */}
            <div className={`flex flex-col flex-1 ${isCompact ? 'px-3 pt-2 pb-2.5' : 'px-3.5 pt-2.5 pb-3'}`}>
              <div className="text-[8.5px] sm:text-[9.5px] font-semibold tracking-wider text-[#64748B] uppercase select-none">
                {isRtl && milestone.taglineAr ? milestone.taglineAr : milestone.tagline}
              </div>

              <h3
                className={`font-serif font-bold tracking-tight text-[#0F172A] mt-1 line-clamp-2 ${
                  isCompact ? 'text-[13.5px] leading-tight' : 'text-[15.5px] leading-snug'
                }`}
              >
                {isRtl && milestone.titleAr ? milestone.titleAr : milestone.title}
              </h3>

              <p
                className={`text-[#64748B] mt-1.5 font-normal line-clamp-3 ${
                  isCompact ? 'text-[11px] leading-relaxed' : 'text-[12px] leading-relaxed'
                }`}
              >
                {isRtl && milestone.descriptionAr ? milestone.descriptionAr : milestone.description}
              </p>

              {/* Action Link Footer */}
              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-[12px] text-emerald-700 font-medium font-sans">
                <span>{isRtl && milestone.ctaTextAr ? milestone.ctaTextAr : milestone.ctaText}</span>
                <ArrowUpRight size={13} className="transition-transform group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 rtl:-scale-x-100" />
              </div>
            </div>
          </a>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// Interactive SVG Contour Wave Timeline
export default function Timeline() {
  const { t, isRtl } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(2); // Start on 2025
  const [subCardIndex, setSubCardIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const containerRef = useRef(null);
  const touchStartRef = useRef(null);

  const milestones = MILESTONES_DATA;
  const total = milestones.length;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const updateWidth = () => {
      setContainerWidth(el.getBoundingClientRect().width);
    };
    updateWidth();
    const ro = new ResizeObserver(updateWidth);
    ro.observe(el);
    window.addEventListener('resize', updateWidth);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  const safeIndex = Math.min(Math.max(activeIndex, 0), total - 1);
  const currentMilestone = milestones[safeIndex];
  const hasSubCards = Boolean(currentMilestone?.subCards && currentMilestone.subCards.length > 1);

  const isMobile = containerWidth < 640;
  const isTablet = containerWidth >= 640 && containerWidth < 1000;

  const sidePadding = isMobile ? 12 : isTablet ? 18 : 28;
  const slotWidth = Math.max(containerWidth - 2 * sidePadding, 1) / total;
  const activeCenterX = sidePadding + safeIndex * slotWidth + slotWidth / 2;

  // Card dimensions
  const singleCardWidth = isMobile
    ? Math.min(260, Math.max(210, 0.78 * containerWidth))
    : isTablet
    ? Math.min(290, 0.42 * containerWidth)
    : Math.min(315, 0.32 * containerWidth);

  const subCardWidth = isMobile
    ? Math.min(265, Math.max(215, 0.8 * containerWidth))
    : isTablet
    ? Math.min(275, Math.max(225, (containerWidth - 52) / 2))
    : Math.min(300, Math.max(260, (containerWidth - 64) / 2));

  const subCardGap = isTablet ? 12 : 16;
  const dualCardTotalWidth = isMobile ? subCardWidth : 2 * subCardWidth + subCardGap;
  const activeCardTotalWidth = hasSubCards && !isMobile ? dualCardTotalWidth : singleCardWidth;

  const edgeMargin = isMobile ? 4 : 8;
  const maxCardX = Math.max(edgeMargin, containerWidth - activeCardTotalWidth - edgeMargin);
  const cardTargetX = Math.max(edgeMargin, Math.min(activeCenterX - activeCardTotalWidth / 2, maxCardX));

  // Curve geometry parameters from ahmedessama.me
  const baseCurveY = isMobile ? 40 : isTablet ? 46 : 50;
  const dipTargetY = isMobile ? 14 : isTablet ? 16 : 18;
  const spreadRadius = isMobile ? Math.min(46, 0.62 * slotWidth) : Math.min(92, 0.65 * slotWidth);
  const totalSvgHeight = isMobile ? 80 : isTablet ? 90 : 100;
  const yearButtonsTop = baseCurveY + 8;

  const springConfig = { type: 'spring', stiffness: 240, damping: 28, mass: 0.7 };

  // Smooth SVG wave path generation
  const buildWavePath = (layerOffset = 0) => {
    if (!containerWidth) return '';
    const baseY = baseCurveY + 2.5 * layerOffset;
    const dipY = dipTargetY + 1.2 * layerOffset;
    const leftX = Math.max(0, activeCenterX - spreadRadius);
    const rightX = Math.min(containerWidth, activeCenterX + spreadRadius);
    const cp1X = Math.max(0, activeCenterX - 0.42 * spreadRadius);
    const cp2X = activeCenterX - 0.48 * spreadRadius;
    const cp3X = activeCenterX + 0.48 * spreadRadius;
    const cp4X = Math.min(containerWidth, activeCenterX + 0.42 * spreadRadius);

    return `
      M 0 ${baseY}
      H ${leftX}
      C ${cp1X} ${baseY}, ${cp2X} ${dipY}, ${activeCenterX} ${dipY}
      C ${cp3X} ${dipY}, ${cp4X} ${baseY}, ${rightX} ${baseY}
      H ${containerWidth}
    `;
  };

  const getSlotCenterX = (idx) => sidePadding + idx * slotWidth + slotWidth / 2;

  return (
    <section
      id="experience"
      role="region"
      aria-label="Studio milestones"
      data-contour="r3"
      className="relative w-full pt-6 sm:pt-10 lg:pt-12 pb-12 sm:pb-16 lg:pb-20 flex flex-col items-center justify-center overflow-visible select-none scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="w-full max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section Header */}
        <div className="mx-auto mb-6 sm:mb-8 flex max-w-[620px] flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 font-mono text-[12.5px] font-medium mb-3">
            <Briefcase size={13} />
            <span>{isRtl ? 'المسار والخبرات المهنية' : 'STUDIO MILESTONES'}</span>
          </div>
          <h2 className="font-serif text-[26px] font-normal tracking-tight text-[#0F172A] sm:text-[34px] lg:text-[40px]">
            {isRtl ? 'Experience & Career Progression' : 'Experience & Engineering Milestones'}
          </h2>
          <p className="mt-2 max-w-[520px] text-[13px] leading-relaxed text-[#64748B] sm:text-[14.5px] lg:text-[15px]">
            {isRtl
              ? 'محطات تطور مستمر — من إتقان صناعة وتطوير الواجهات والأنظمة الخلفية إلى قيادة معمارية السحابة والمشاريع الإنتاجية.'
              : 'A timeline of continuous evolution — from foundational craftsmanship to high-throughput cloud scale and engineering leadership.'}
          </p>
        </div>

        {/* Contour Wave Component Container */}
        <div
          className="w-full overflow-visible pt-1 select-none"
          onTouchStart={(e) => {
            touchStartRef.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchStartRef.current === null) return;
            const diff = e.changedTouches[0].clientX - touchStartRef.current;
            touchStartRef.current = null;
            if (diff > 40) {
              if (hasSubCards && isMobile && subCardIndex > 0) {
                setSubCardIndex(0);
              } else if (safeIndex > 0) {
                setActiveIndex(safeIndex - 1);
                setSubCardIndex(0);
              }
            } else if (diff < -40) {
              if (hasSubCards && isMobile && subCardIndex < 1) {
                setSubCardIndex(1);
              } else if (safeIndex < total - 1) {
                setActiveIndex(safeIndex + 1);
                setSubCardIndex(0);
              }
            }
          }}
        >
          <div ref={containerRef} className="relative mx-auto w-full max-w-[1080px]">
            {/* Top Stage: Floating Milestone Card */}
            <div
              className="relative w-full overflow-visible transition-[height] duration-300"
              style={{
                height: `${isMobile ? (hasSubCards ? 305 : 250) : isTablet ? 275 : 305}px`,
              }}
            >
              {containerWidth > 0 && currentMilestone && (
                <motion.div
                  animate={{ x: cardTargetX }}
                  transition={springConfig}
                  className="absolute bottom-0 left-0"
                  style={{
                    width: `${activeCardTotalWidth}px`,
                    maxWidth: 'calc(100% - 8px)',
                    zIndex: 10,
                  }}
                >
                  {hasSubCards && isMobile ? (
                    <div className="flex flex-col items-center w-full">
                      {/* Sub-card Tab Pill for Mobile */}
                      <div
                        className="flex items-center justify-center gap-1.5 mb-2.5 p-1 rounded-full bg-slate-100/90 border border-slate-200/80 shadow-2xs backdrop-blur-xs select-none"
                        style={{ maxWidth: `${singleCardWidth}px` }}
                      >
                        {currentMilestone.subCards.map((sub, sIdx) => {
                          const isSubActive = subCardIndex === sIdx;
                          return (
                            <button
                              key={sub.id}
                              type="button"
                              onClick={() => setSubCardIndex(sIdx)}
                              className={`px-2.5 py-1 text-[11px] leading-none font-medium rounded-full transition-all duration-200 cursor-pointer ${
                                isSubActive
                                  ? 'bg-white text-[#0F172A] shadow-xs font-semibold'
                                  : 'text-[#64748B] hover:text-[#0F172A]'
                              }`}
                            >
                              {isRtl && sub.taglineAr ? sub.taglineAr : sub.tagline || (sIdx === 0 ? 'RTS' : 'Graduation')}
                            </button>
                          );
                        })}
                      </div>
                      <MilestoneCard
                        milestone={currentMilestone.subCards[subCardIndex] || currentMilestone}
                        width={singleCardWidth}
                        isRtl={isRtl}
                      />
                    </div>
                  ) : hasSubCards && !isMobile ? (
                    <div className="flex flex-row items-stretch justify-center" style={{ width: `${dualCardTotalWidth}px`, gap: `${subCardGap}px` }}>
                      {currentMilestone.subCards.map((sub) => (
                        <MilestoneCard key={sub.id} milestone={sub} width={subCardWidth} isRtl={isRtl} />
                      ))}
                    </div>
                  ) : (
                    <MilestoneCard milestone={currentMilestone} width={singleCardWidth} isRtl={isRtl} />
                  )}
                </motion.div>
              )}
            </div>

            {/* Middle Stage: Interactive SVG Wave Rail */}
            <div className="relative w-full" style={{ height: `${totalSvgHeight}px` }}>
              {containerWidth > 0 && (
                <svg
                  aria-hidden="true"
                  width="100%"
                  height={totalSvgHeight}
                  viewBox={`0 0 ${containerWidth} ${totalSvgHeight}`}
                  preserveAspectRatio="none"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    overflow: 'visible',
                  }}
                >
                  {/* Layer 3 Background Depth Wave */}
                  <motion.path
                    animate={{ d: buildWavePath(2) }}
                    transition={springConfig}
                    fill="none"
                    stroke="#E2E8F0"
                    strokeWidth="0.8"
                    opacity={0.4}
                  />

                  {/* Layer 2 Midline Wave */}
                  <motion.path
                    animate={{ d: buildWavePath(1) }}
                    transition={springConfig}
                    fill="none"
                    stroke="#E2E8F0"
                    strokeWidth="1.0"
                    opacity={0.7}
                  />

                  {/* Layer 1 Primary Wave Curve */}
                  <motion.path
                    animate={{ d: buildWavePath(0) }}
                    transition={springConfig}
                    fill="none"
                    stroke="#0F172A"
                    strokeWidth={isMobile ? 1.2 : 1.5}
                  />

                  {/* Vertical Connector Line to Card Pin */}
                  <motion.path
                    animate={{
                      d: `M ${activeCenterX} 0 V ${dipTargetY}`,
                    }}
                    transition={springConfig}
                    fill="none"
                    stroke="#0F172A"
                    strokeWidth={isMobile ? 1.1 : 1.3}
                  />

                  {/* Active Center Cradle Node Ring */}
                  <motion.circle
                    animate={{ cx: activeCenterX, cy: dipTargetY }}
                    transition={springConfig}
                    r={isMobile ? 7 : 9}
                    fill="#FFFFFF"
                    stroke="#CBD5E1"
                    strokeWidth="1"
                  />
                  <motion.circle
                    animate={{ cx: activeCenterX, cy: dipTargetY }}
                    transition={springConfig}
                    r={isMobile ? 2.5 : 3.5}
                    fill="#0F172A"
                  />

                  {/* Inactive Milestone Baseline Dots */}
                  {milestones.map((m, idx) => {
                    const cx = getSlotCenterX(idx);
                    const isSelected = idx === safeIndex;
                    return (
                      <motion.circle
                        key={m.id}
                        animate={{ opacity: isSelected ? 0 : 1, scale: isSelected ? 0 : 1 }}
                        transition={{ duration: 0.2 }}
                        cx={cx}
                        cy={baseCurveY}
                        r={isMobile ? 2.2 : 3}
                        fill="#0F172A"
                      />
                    );
                  })}
                </svg>
              )}

              {/* Year Buttons Row on Timeline */}
              {containerWidth > 0 && (
                <div
                  role="group"
                  aria-label="Milestones"
                  className="absolute left-0 w-full"
                  style={{ top: `${yearButtonsTop}px`, height: totalSvgHeight - yearButtonsTop }}
                >
                  {milestones.map((m, idx) => {
                    const isSelected = idx === safeIndex;
                    const cx = getSlotCenterX(idx);
                    const btnWidth = Math.max(isMobile ? 44 : 50, slotWidth * (isMobile ? 0.94 : 0.86));

                    return (
                      <button
                        key={m.id}
                        type="button"
                        draggable={false}
                        aria-pressed={isSelected}
                        onClick={() => {
                          setActiveIndex(idx);
                          setSubCardIndex(0);
                        }}
                        className="absolute top-0 -translate-x-1/2 cursor-pointer select-none p-0 text-center outline-none transition-transform active:scale-95"
                        style={{ left: `${cx}px`, width: `${btnWidth}px` }}
                      >
                        <motion.span
                          animate={{ scale: isSelected ? (isMobile ? 1.05 : 1.08) : 1 }}
                          transition={springConfig}
                          className="block select-none font-serif tracking-tight transition-colors duration-200"
                          style={{
                            fontSize: isMobile ? '16px' : isTablet ? '20px' : '24px',
                            lineHeight: '1.1',
                            fontWeight: isSelected ? 600 : 400,
                            color: isSelected ? '#0F172A' : '#94A3B8',
                          }}
                        >
                          {m.year}
                        </motion.span>
                        <motion.span
                          animate={{ opacity: isSelected ? 1 : isMobile ? 0.6 : 0.75 }}
                          transition={{ duration: 0.2 }}
                          className="mt-0.5 sm:mt-1 block select-none truncate px-0.5"
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: isSelected ? 500 : 400,
                            fontSize: isMobile ? '7.5px' : isTablet ? '8.5px' : '9.5px',
                            letterSpacing: isMobile ? '-0.01em' : '0.02em',
                            lineHeight: '1.25',
                            color: isSelected ? '#0F172A' : '#64748B',
                          }}
                        >
                          {isRtl && m.taglineAr ? m.taglineAr : m.tagline}
                        </motion.span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
