'use client';

import { ArrowUpRight, FolderGit2, Github } from 'lucide-react';
import { repositories, profile } from '@/lib/data';
import { useLanguage } from './LanguageContext';

export default function ContributionGraph() {
  const { t, isRtl } = useLanguage();

  return (
    <section id="github" className="w-full max-w-[1140px] mx-auto px-6 sm:px-8 py-16 sm:py-24">
      {/* Section Header */}
      <div className="mb-10 sm:mb-12 flex flex-col gap-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 font-mono text-[13px] font-medium w-fit">
          <FolderGit2 size={14} />
          <span>{isRtl ? 'المصادر المفتوحة ومستودعات الكود' : 'Open Source Engineering'}</span>
        </div>
        <h2 className="text-[34px] sm:text-[44px] lg:text-[48px] font-serif tracking-[-0.03em] text-[#262626] font-normal">
          {isRtl ? (
            <>
              مستودعات عامة و<span className="font-serif italic text-emerald-700">تجارب معمارية</span>
            </>
          ) : (
            <>
              Selected Public Work & <span className="font-serif italic text-emerald-700">Open Source Labs</span>
            </>
          )}
        </h2>
        <p className="text-[17.5px] sm:text-[19px] leading-[1.65] text-[#525252] max-w-[720px]">
          {isRtl
            ? 'مقتطفات من أكثر من 100 مستودع كود مفتوح المصدر على GitHub، تغطي حلول المعمارية متعددة المستأجرين، محركات البحث، وأنظمة الويب.'
            : 'A snapshot of selected repositories from over 100+ public projects on GitHub, exploring multi-tenancy partitioning, search engines, and full-stack patterns.'}
        </p>
      </div>

      {/* Repositories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {repositories.map((repo) => (
          <a
            key={repo.name}
            href={repo.href}
            target="_blank"
            rel="noreferrer"
            className="bg-white border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.04)] rounded-2xl p-6 sm:p-7 flex flex-col gap-3.5 transition-all hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Github size={18} className="text-[#262626]" />
                <span className="font-mono text-[12px] px-2.5 py-0.5 rounded-full bg-[#F1F5F9] text-[#475569] font-medium">
                  {repo.stars}
                </span>
              </div>
              <ArrowUpRight size={16} className="text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all rtl:-scale-x-100" />
            </div>

            <h3 className="font-mono text-[16.5px] sm:text-[18px] font-semibold text-[#262626] group-hover:text-emerald-700 transition-colors">
              {repo.name}
            </h3>

            <p className="text-[14.5px] sm:text-[15.5px] leading-[1.6] text-[#525252] flex-grow">
              {t(repo.description)}
            </p>

            <div className="flex items-center justify-between pt-3 border-t border-black/[0.06] font-mono text-[12.5px] text-[#64748B]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                {repo.language}
              </span>
              <span>MIT License</span>
            </div>
          </a>
        ))}
      </div>

      {/* GitHub CTA Button */}
      <div className="flex justify-center mt-10">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-[46px] items-center gap-2 px-6 rounded-full bg-white border border-black/[0.08] text-[#262626] font-mono text-[14px] font-medium hover:border-black/20 hover:bg-slate-50 transition-all shadow-sm"
        >
          <Github size={17} />
          <span>{isRtl ? 'عرض كافة المستودعات على GitHub (100+)' : 'Explore 100+ Repositories on GitHub'}</span>
          <ArrowUpRight size={15} className="rtl:-scale-x-100" />
        </a>
      </div>
    </section>
  );
}
