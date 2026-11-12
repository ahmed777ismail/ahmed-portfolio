'use client';

import { Code2, Cpu, Database, GitBranch, Layers3, ServerCog } from 'lucide-react';
import { skillGroups } from '@/lib/data';
import { useLanguage } from './LanguageContext';

const icons = [Code2, GitBranch, ServerCog, Database, Layers3, Cpu];

export default function Skills() {
  const { t, isRtl } = useLanguage();

  return (
    <section id="stack" className="w-full max-w-[1140px] mx-auto px-6 sm:px-8 py-16 sm:py-24">
      {/* Section Header */}
      <div className="mb-10 sm:mb-12 flex flex-col gap-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 font-mono text-[13px] font-medium w-fit">
          <Code2 size={14} />
          <span>{isRtl ? 'المهارات والقدرات الفنية' : 'Technical Core & Capabilities'}</span>
        </div>
        <h2 className="text-[34px] sm:text-[44px] lg:text-[48px] font-serif tracking-[-0.03em] text-[#262626] font-normal">
          {isRtl ? (
            <>
              قوة في الويب والديف أوبس، و<span className="font-serif italic text-emerald-700">مرونة في المنظومة السحابية</span>
            </>
          ) : (
            <>
              Deep in Full-Stack & DevOps, <span className="font-serif italic text-emerald-700">Fluent Across Cloud Systems</span>
            </>
          )}
        </h2>
        <p className="text-[17.5px] sm:text-[19px] leading-[1.65] text-[#525252] max-w-[720px]">
          {isRtl
            ? 'الأدوات التي أعتمد عليها يومياً لبناء وتشغيل الأنظمة، والتقنيات التي أتوسع فيها لدعم الحلول المؤسسية الموزعة.'
            : 'The tools I reach for to engineer resilient web products, containerized environments, and high-load backend architectures.'}
        </p>
      </div>

      {/* Skills 6-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {skillGroups.map((group, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <div
              key={idx}
              className="bg-white border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.04)] rounded-2xl p-6 sm:p-7 flex flex-col gap-5 transition-all hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-700 flex items-center justify-center shrink-0">
                  <Icon size={20} />
                </div>
                <h3 className="text-[20px] sm:text-[22px] font-serif font-normal text-[#262626]">
                  {t(group.title)}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-full bg-[#F1F5F9] text-[13px] sm:text-[13.5px] font-mono text-[#475569] font-medium hover:bg-[#262626] hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
