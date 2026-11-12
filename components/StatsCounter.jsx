'use client';

import { useState } from 'react';
import { stats } from '@/lib/data';
import { useLanguage } from './LanguageContext';
import { RotateCw, TrendingUp } from 'lucide-react';

export default function StatsCounter() {
  const { t, isRtl } = useLanguage();
  const [pulseKey, setPulseKey] = useState(0);

  const triggerReplay = () => {
    setPulseKey((prev) => prev + 1);
  };

  return (
    <section className="w-full max-w-[1140px] mx-auto px-6 sm:px-8 py-8 sm:py-12">
      <div
        className="w-full bg-white border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.04)] rounded-3xl p-6 sm:p-10 transition-all hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] cursor-pointer"
        onClick={triggerReplay}
        title="Click to replay metric counter"
      >
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-black/[0.06]">
          <span className="inline-flex items-center gap-2 font-mono text-[13px] font-medium text-emerald-700">
            <TrendingUp size={15} />
            {isRtl ? 'مؤشرات الأداء والإنتاجية' : 'Production Impact & Engineering Metrics'}
          </span>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 font-mono text-[12.5px] text-[#64748B] hover:text-emerald-700 transition-colors cursor-pointer"
            onClick={triggerReplay}
          >
            <RotateCw size={13} />
            <span>{isRtl ? 'إعادة العرض' : 'Click to replay'}</span>
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" key={pulseKey}>
          {stats.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-1.5">
              <div className="font-mono text-[38px] sm:text-[46px] lg:text-[50px] font-bold text-[#0F172A] leading-tight">
                {item.value}
              </div>
              <div className="text-[15.5px] sm:text-[17px] font-medium text-[#262626]">
                {t(item.label)}
              </div>
              <div className="text-[13.5px] sm:text-[14px] text-[#64748B] leading-relaxed">
                {t(item.sub)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
