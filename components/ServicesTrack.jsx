'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Layers } from 'lucide-react';
import { services } from '@/lib/data';
import { useLanguage } from './LanguageContext';

export default function ServicesTrack() {
  const { t, isRtl } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const currentService = services[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section id="services" className="w-full max-w-[1140px] mx-auto px-6 sm:px-8 py-16 sm:py-24">
      {/* Section Header */}
      <div className="mb-10 sm:mb-12 flex flex-col gap-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 font-mono text-[13px] font-medium w-fit">
          <Layers size={14} />
          <span>{isRtl ? 'المنظومة التقنية والمعمارية' : 'Full-Stack & DevOps Ecosystem'}</span>
        </div>
        <h2 className="text-[34px] sm:text-[44px] lg:text-[48px] font-serif tracking-[-0.03em] text-[#262626] font-normal">
          {isRtl ? (
            <>
              هندسة الخدمات و<span className="font-serif italic text-emerald-700">معمارية السحابة</span>
            </>
          ) : (
            <>
              Services & <span className="font-serif italic text-emerald-700">Core Architecture</span>
            </>
          )}
        </h2>
        <p className="text-[17.5px] sm:text-[19px] leading-[1.65] text-[#525252] max-w-[720px]">
          {isRtl
            ? 'منهجية معمارية شاملة ترتكز على بناء واجهات ويب عصرية، أتمتة خطوط النشر السحابي، وفصل طبقات الأعمال لضمان الاستقرار تحت أعلى درجات الضغط.'
            : 'A comprehensive 5-phase engineering track spanning modern full-stack web platforms, automated Docker & CI/CD delivery, and sub-second database performance.'}
        </p>
      </div>

      {/* Interactive Track Container */}
      <div className="flex flex-col gap-5">
        {/* Navigation & Jump Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Direct Jump Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {services.map((item, idx) => (
              <button
                key={idx}
                type="button"
                className={`px-4 py-2 rounded-full font-mono text-[13.5px] sm:text-[14px] transition-all cursor-pointer ${
                  activeIndex === idx
                    ? 'bg-[#262626] text-white font-medium shadow-sm'
                    : 'bg-white border border-black/[0.06] text-[#525252] hover:text-[#262626] hover:border-black/20'
                }`}
                onClick={() => setActiveIndex(idx)}
              >
                <span>0{idx + 1}</span>
                <span className="hidden sm:inline">. {t(item.title).split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Prev / Next controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="w-10 h-10 rounded-full bg-white border border-black/[0.08] text-[#262626] flex items-center justify-center hover:bg-slate-50 transition-colors cursor-pointer shadow-2xs"
              onClick={handlePrev}
              aria-label="Previous service"
            >
              {isRtl ? <ArrowRight size={17} /> : <ArrowLeft size={17} />}
            </button>
            <span className="font-mono text-[13.5px] text-[#64748B] px-2 font-medium">
              0{activeIndex + 1} / 0{services.length}
            </span>
            <button
              type="button"
              className="w-10 h-10 rounded-full bg-white border border-black/[0.08] text-[#262626] flex items-center justify-center hover:bg-slate-50 transition-colors cursor-pointer shadow-2xs"
              onClick={handleNext}
              aria-label="Next service"
            >
              {isRtl ? <ArrowLeft size={17} /> : <ArrowRight size={17} />}
            </button>
          </div>
        </div>

        {/* Active Service Showcase Card */}
        <div className="bg-white border border-black/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.05)] rounded-3xl p-7 sm:p-12 flex flex-col gap-7 transition-all">
          <div className="flex items-center justify-between border-b border-black/[0.06] pb-4">
            <span className="font-mono text-[15px] font-bold text-emerald-700">
              {currentService.number}
            </span>
            <span className="font-mono text-[13.5px] text-[#64748B]">
              {currentService.tech.length} {isRtl ? 'تقنيات أساسية' : 'Core Technologies'}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-[26px] sm:text-[34px] font-serif font-normal text-[#262626]">
              {t(currentService.title)}
            </h3>
            <p className="font-mono text-[14.5px] text-emerald-700 font-medium">
              {t(currentService.subtitle)}
            </p>
            <p className="text-[16.5px] sm:text-[18px] leading-[1.7] text-[#525252] mt-2">
              {t(currentService.description)}
            </p>
          </div>

          {/* Deliverables Checklist */}
          <div className="flex flex-col gap-3 pt-2">
            <h4 className="font-mono text-[13px] uppercase tracking-wider text-[#64748B] font-semibold">
              {isRtl ? 'مخرجات الهندسة والتسليم' : 'Key Engineering Deliverables'}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentService.deliverables.map((del, dIdx) => (
                <div key={dIdx} className="flex items-start gap-2.5 text-[15.5px] sm:text-[16.5px] text-[#262626]">
                  <CheckCircle2 size={19} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>{t(del)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-black/[0.06]">
            {currentService.tech.map((tool) => (
              <span
                key={tool}
                className="px-3.5 py-1.5 rounded-full bg-[#F1F5F9] text-[13px] sm:text-[14px] font-mono text-[#475569] font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
