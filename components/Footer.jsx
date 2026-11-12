'use client';

import { ArrowUp } from 'lucide-react';
import { profile } from '@/lib/data';
import { useLanguage } from './LanguageContext';

export default function Footer() {
  const { t, isRtl } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-black/[0.06] bg-white/70 backdrop-blur-md py-8">
      <div className="w-full max-w-[1140px] mx-auto px-6 sm:px-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-serif text-[18px] text-[#262626]">
            {t(profile.name)}
          </span>
          <span className="text-slate-400">·</span>
          <span className="font-mono text-[13.5px] text-[#64748B]">
            © 2026 {isRtl ? 'جميع الحقوق محفوظة' : 'All rights reserved'}
          </span>
        </div>

        <div className="font-mono text-[13.5px] text-[#64748B] hidden sm:block">
          {isRtl ? 'صُمم وطُوّر بدقة هندسية عالية · القاهرة، مصر' : 'Designed & engineered with impact · Cairo, Egypt'}
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 font-mono text-[13.5px] text-[#525252] hover:text-emerald-700 transition-colors cursor-pointer"
          aria-label="Back to top"
        >
          <span>{isRtl ? 'العودة للأعلى' : 'Back to top'}</span>
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
