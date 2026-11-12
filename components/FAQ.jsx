'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs } from '@/lib/data';
import { useLanguage } from './LanguageContext';

export default function FAQ() {
  const { t, isRtl } = useLanguage();
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section id="faq" className="w-full max-w-[1140px] mx-auto px-6 sm:px-8 py-16 sm:py-24">
      {/* Section Header */}
      <div className="mb-10 sm:mb-12 flex flex-col gap-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 font-mono text-[13px] font-medium w-fit">
          <HelpCircle size={14} />
          <span>{isRtl ? 'الأسئلة الشائعة والاستفسارات' : 'Before We Start'}</span>
        </div>
        <h2 className="text-[34px] sm:text-[44px] lg:text-[48px] font-serif tracking-[-0.03em] text-[#262626] font-normal">
          {isRtl ? (
            <>
              أسئلة متكررة حول <span className="font-serif italic text-emerald-700">الأنظمة والتقنيات</span>
            </>
          ) : (
            <>
              Frequently Asked <span className="font-serif italic text-emerald-700">Technical Questions</span>
            </>
          )}
        </h2>
        <p className="text-[17.5px] sm:text-[19px] leading-[1.65] text-[#525252] max-w-[720px]">
          {isRtl
            ? 'إجابات مباشرة حول تخصصي في تطوير الويب المتكامل، أتمتة الديف أوبس، تحسين أداء قواعد البيانات، ومعايير الكود.'
            : 'Direct insights into full-stack web specialization, DevOps pipelines, query optimization methodology, clean architecture, and engineering collaboration.'}
        </p>
      </div>

      {/* Accordion List */}
      <div className="flex flex-col gap-3.5 max-w-[920px] mx-auto">
        {faqs.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`bg-white border rounded-2xl overflow-hidden transition-all ${
                isOpen
                  ? 'border-emerald-500/50 shadow-[0_8px_28px_rgba(16,185,129,0.06)]'
                  : 'border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:border-black/20'
              }`}
            >
              <button
                type="button"
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-start cursor-pointer bg-transparent border-none"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
              >
                <span className="font-serif text-[18.5px] sm:text-[21px] font-normal text-[#262626]">
                  {t(item.question)}
                </span>
                <span
                  className={`text-[#64748B] shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-emerald-700' : ''
                  }`}
                >
                  <ChevronDown size={20} />
                </span>
              </button>

              {isOpen ? (
                <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-black/[0.06]">
                  <p className="text-[16px] sm:text-[17.5px] leading-[1.7] text-[#525252] mt-3">
                    {t(item.answer)}
                  </p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
