'use client';

import { useState } from 'react';
import { Briefcase, Calendar, CheckCircle2, MapPin } from 'lucide-react';
import { experience } from '@/lib/data';
import { useLanguage } from './LanguageContext';

export default function Timeline() {
  const { t, isRtl } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="w-full max-w-[1140px] mx-auto px-6 sm:px-8 py-16 sm:py-24">
      {/* Section Header */}
      <div className="mb-10 sm:mb-12 flex flex-col gap-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 font-mono text-[13px] font-medium w-fit">
          <Briefcase size={14} />
          <span>{isRtl ? 'المسيرة والخبرة المهنية' : 'Studio Milestones & Journey'}</span>
        </div>
        <h2 className="text-[34px] sm:text-[44px] lg:text-[48px] font-serif tracking-[-0.03em] text-[#262626] font-normal">
          {isRtl ? (
            <>
              خبرة عملية تُقاس بـ <span className="font-serif italic text-emerald-700">ملكية الأنظمة</span>
            </>
          ) : (
            <>
              Production Journey & <span className="font-serif italic text-emerald-700">Engineering Milestones</span>
            </>
          )}
        </h2>
        <p className="text-[17.5px] sm:text-[19px] leading-[1.65] text-[#525252] max-w-[720px]">
          {isRtl
            ? 'محطات مهنية تميزت بالانتقال من تطوير الواجهات الخلفية إلى قيادة تسليم منصات الويب المتكاملة، أتمتة السحابة عبر Docker و CI/CD، وتنسيق عمل المطورين.'
            : 'Key milestones across agency delivery and enterprise product environments, marked by leading full-stack web platforms, automating cloud releases, and mentoring developers.'}
        </p>

        {/* Milestone Filter Tabs */}
        <div className="flex flex-wrap gap-2 pt-2">
          {experience.map((item, idx) => (
            <button
              key={idx}
              type="button"
              className={`px-4 py-2 rounded-full font-mono text-[13.5px] sm:text-[14px] transition-all cursor-pointer ${
                activeTab === idx
                  ? 'bg-[#262626] text-white font-medium shadow-sm'
                  : 'bg-white border border-black/[0.06] text-[#525252] hover:text-[#262626] hover:border-black/20'
              }`}
              onClick={() => setActiveTab(idx)}
            >
              <span>{item.yearTag}</span>
              <span className="font-sans font-medium"> · {item.company}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Experience Cards */}
      <div className="flex flex-col gap-6">
        {experience.map((job, idx) => (
          <div
            key={job.company}
            className={`bg-white border rounded-3xl p-7 sm:p-12 flex flex-col gap-6 transition-all ${
              activeTab === idx
                ? 'border-emerald-500/50 shadow-[0_12px_44px_rgba(16,185,129,0.08)]'
                : 'border-black/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.04)]'
            }`}
          >
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-black/[0.06] pb-4">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[14.5px] font-bold text-emerald-700">
                  {job.company}
                </span>
                <h3 className="text-[24px] sm:text-[30px] font-serif font-normal text-[#262626]">
                  {t(job.role)}
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-3 font-mono text-[13.5px] text-[#525252]">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {t(job.period)}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  {t(job.location)}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 font-semibold text-[12.5px]">
                  {t(job.status)}
                </span>
              </div>
            </div>

            <p className="text-[16.5px] sm:text-[18px] leading-[1.7] text-[#525252]">
              {t(job.summary)}
            </p>

            <div className="flex flex-col gap-3">
              {job.achievements.map((ach, aIdx) => (
                <div key={aIdx} className="flex items-start gap-2.5 text-[15.5px] sm:text-[16.5px] text-[#262626]">
                  <CheckCircle2 size={19} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>{t(ach)}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-black/[0.06]">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1 rounded-full bg-[#F1F5F9] text-[13px] sm:text-[13.5px] font-mono text-[#475569] font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
