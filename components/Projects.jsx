'use client';

import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ExternalLink, Github, Smartphone, Sparkles } from 'lucide-react';
import { caseStudies } from '@/lib/data';
import { useLanguage } from './LanguageContext';

export default function Projects() {
  const { t, isRtl } = useLanguage();
  const [selectedIdx, setSelectedIdx] = useState(0);

  const scrollToProject = (idx) => {
    setSelectedIdx(idx);
    const el = document.getElementById(`project-${caseStudies[idx].index}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="work" className="w-full max-w-[1140px] mx-auto px-6 sm:px-8 py-16 sm:py-24">
      {/* Section Header */}
      <div className="mb-10 sm:mb-12 flex flex-col gap-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 font-mono text-[13px] font-medium w-fit">
          <Sparkles size={14} />
          <span>{isRtl ? 'الأعمال والأنظمة المتكاملة' : 'Full-Stack & Cloud Production'}</span>
        </div>
        <h2 className="text-[34px] sm:text-[44px] lg:text-[48px] font-serif tracking-[-0.03em] text-[#262626] font-normal">
          {isRtl ? (
            <>
              أنظمة واقعية بـ <span className="font-serif italic text-emerald-700">نتائج قابلة للقياس</span>
            </>
          ) : (
            <>
              Selected Work & <span className="font-serif italic text-emerald-700">Production Impact</span>
            </>
          )}
        </h2>
        <p className="text-[17.5px] sm:text-[19px] leading-[1.65] text-[#525252] max-w-[720px]">
          {isRtl
            ? 'مجموعة من التحديات الهندسية التي بنيتها وشغلتها في بيئة الإنتاج الحية — من منصات حجز تخدم آلاف المستخدمين إلى تقليص استعلامات أخذت 4 ثوانٍ إلى نصف ثانية.'
            : 'Production systems engineered under real constraints — from live rental platforms serving thousands of users to the critical API endpoint optimized from 4.0s down to 0.5s.'}
        </p>

        {/* Quick Jump Navigation Bar */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {caseStudies.map((item, idx) => (
            <button
              key={item.index}
              type="button"
              className={`px-4 py-2 rounded-full font-mono text-[13px] sm:text-[14px] transition-all cursor-pointer ${
                selectedIdx === idx
                  ? 'bg-[#262626] text-white font-medium shadow-sm'
                  : 'bg-white border border-black/[0.06] text-[#525252] hover:text-[#262626] hover:border-black/20'
              }`}
              onClick={() => scrollToProject(idx)}
            >
              <span>{item.index}.</span> {item.title}
            </button>
          ))}
        </div>
      </div>

      {/* Stacked Showcase List */}
      <div className="flex flex-col gap-8">
        {caseStudies.map((project) => (
          <article
            key={project.index}
            id={`project-${project.index}`}
            className="bg-white border border-black/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.05)] rounded-3xl p-7 sm:p-12 flex flex-col gap-6 transition-all hover:shadow-[0_12px_44px_rgba(0,0,0,0.08)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/[0.06] pb-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[15px] font-bold text-emerald-700">
                  {project.index}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 font-mono text-[12.5px] font-medium">
                  {t(project.badge)}
                </span>
              </div>
              <span className="font-mono text-[13.5px] text-[#525252] font-medium">
                {t(project.outcome)}
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-[26px] sm:text-[34px] font-serif font-normal text-[#262626]">
                {project.title}
              </h3>
              <p className="text-[17px] sm:text-[18.5px] leading-[1.7] text-[#525252]">
                {t(project.tagline)}
              </p>

              {/* Special Performance Comparison Meter for Case Study 02 */}
              {project.metricDisplay ? (
                <div className="bg-[#F8FAFC] border border-black/[0.06] rounded-2xl p-5 sm:p-6 flex flex-col gap-3 my-2">
                  <div className="flex items-center justify-between font-mono text-[13.5px] sm:text-[14.5px]">
                    <span className="text-rose-600 font-semibold">
                      {isRtl ? 'قبل التحسين: 4.0 ثوانٍ (بطء شديد)' : 'Before: 4.0s (Bottleneck)'}
                    </span>
                    <span className="text-emerald-700 font-bold">
                      {isRtl ? 'بعد التحسين: 0.5 ثانية (أسرع بنسبة 87.5%)' : 'After: 0.5s (87.5% Faster)'}
                    </span>
                  </div>
                  <div className="relative h-8 bg-rose-500/15 rounded-full overflow-hidden flex items-center">
                    <div className="w-full h-full flex items-center justify-end pr-4 font-mono text-[13px] font-bold text-rose-600">
                      <span>4.0s</span>
                    </div>
                    <div
                      className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center font-mono text-[13px] font-bold text-white shadow-sm rtl:left-auto rtl:right-0"
                      style={{ width: '12.5%' }}
                    >
                      <span>0.5s</span>
                    </div>
                  </div>
                </div>
              ) : null}

              {/* Highlights List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                {project.highlights.map((hl, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-[15.5px] sm:text-[16.5px] text-[#262626]">
                    <CheckCircle2 size={19} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{t(hl)}</span>
                  </div>
                ))}
              </div>

              {/* Metrics Row if present */}
              {project.metrics ? (
                <div className="grid grid-cols-3 gap-4 bg-[#F8FAFC] border border-black/[0.06] rounded-2xl p-4 sm:p-5 mt-2">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="flex flex-col gap-1">
                      <strong className="font-mono text-[18px] sm:text-[22px] font-bold text-[#0F172A]">
                        {m.value}
                      </strong>
                      <span className="text-[13px] sm:text-[14px] text-[#64748B]">
                        {t(m.label)}
                      </span>
                    </div>
                  ))}
                </div>
              ) : null}

              {/* Footer: Tech tags & Action links */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-black/[0.06]">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tool) => (
                    <span
                      key={tool}
                      className="px-3.5 py-1 rounded-full bg-[#F1F5F9] text-[13px] sm:text-[13.5px] font-mono text-[#475569] font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {project.links ? (
                  <div className="flex flex-wrap items-center gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-[42px] items-center gap-2 px-4 sm:px-5 rounded-full bg-[#F1F5F9] hover:bg-[#262626] text-[#262626] hover:text-white text-[13.5px] sm:text-[14px] font-mono font-medium transition-all shadow-2xs"
                      >
                        {link.store === 'play' || link.store === 'apple' ? (
                          <Smartphone size={15} />
                        ) : link.label.includes('GitHub') ? (
                          <Github size={15} />
                        ) : (
                          <ExternalLink size={15} />
                        )}
                        <span>{link.label}</span>
                        <ArrowUpRight size={13} className="rtl:-scale-x-100" />
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
