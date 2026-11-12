'use client';

import { Workflow } from 'lucide-react';
import { processPhases } from '@/lib/data';
import { useLanguage } from './LanguageContext';

export default function Process() {
  const { t, isRtl } = useLanguage();

  return (
    <section id="architecture" className="w-full max-w-[1140px] mx-auto px-6 sm:px-8 py-16 sm:py-24">
      {/* Section Header */}
      <div className="mb-10 sm:mb-12 flex flex-col gap-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 font-mono text-[13px] font-medium w-fit">
          <Workflow size={14} />
          <span>{isRtl ? 'المنهجية والعمليات' : 'Disciplined Methodology'}</span>
        </div>
        <h2 className="text-[34px] sm:text-[44px] lg:text-[48px] font-serif tracking-[-0.03em] text-[#262626] font-normal">
          {isRtl ? (
            <>
              منهجية عمل برمجية في <span className="font-serif italic text-emerald-700">5 مراحل منضبطة</span>
            </>
          ) : (
            <>
              Disciplined <span className="font-serif italic text-emerald-700">5-Phase Methodology</span>
            </>
          )}
        </h2>
        <p className="text-[17.5px] sm:text-[19px] leading-[1.65] text-[#525252] max-w-[720px]">
          {isRtl
            ? 'الأنظمة البرمجية القوية لا تولد صدفة، بل تُبنى عبر قرارات هندسية مدروسة تبدأ من صياغة العقود البرمجية وحتى النشر والمراقبة في بيئة الإنتاج.'
            : 'Reliable engineering is a chain of deliberate decisions. From contract-first API design to sub-second performance tuning and automated observability.'}
        </p>
      </div>

      {/* 5-Phase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {processPhases.map((phase) => (
          <div
            key={phase.phase}
            className="bg-white border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.04)] rounded-2xl p-6 sm:p-7 flex flex-col gap-4 transition-all hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1"
          >
            <div className="flex items-center justify-between border-b border-black/[0.06] pb-3">
              <span className="font-mono text-[14px] font-bold text-emerald-700">
                {phase.phase}
              </span>
              <span className="font-mono text-[12px] px-2.5 py-0.5 rounded-full bg-[#F1F5F9] text-[#64748B] font-medium">
                {t(phase.focus)}
              </span>
            </div>

            <h3 className="text-[20px] sm:text-[22px] font-serif font-normal text-[#262626] leading-snug">
              {t(phase.title)}
            </h3>

            <p className="text-[15.5px] sm:text-[16.5px] leading-[1.65] text-[#525252] flex-grow">
              {t(phase.description)}
            </p>

            <div className="bg-[#F8FAFC] border border-black/[0.06] rounded-xl p-3.5 mt-1">
              <span className="font-mono text-[12px] text-[#64748B] block mb-0.5 font-medium">
                {isRtl ? 'المخرجات البرمجية:' : 'Engineering Output:'}
              </span>
              <p className="font-mono text-[13px] text-emerald-700 font-semibold">
                {t(phase.deliverable)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
