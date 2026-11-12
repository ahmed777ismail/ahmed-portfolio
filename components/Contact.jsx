'use client';

import Image from 'next/image';
import { ArrowUpRight, Github, Linkedin, Mail, MessageCircle, Sparkles } from 'lucide-react';
import { contactLinks, profile } from '@/lib/data';
import { useLanguage } from './LanguageContext';
import { withBasePath } from '@/lib/site';

const icons = {
  WhatsApp: MessageCircle,
  Email: Mail,
  LinkedIn: Linkedin,
  GitHub: Github
};

export default function Contact() {
  const { t, isRtl } = useLanguage();

  return (
    <section id="contact" className="w-full max-w-[1140px] mx-auto px-6 sm:px-8 py-16 sm:py-24">
      <div className="bg-white border border-black/[0.06] shadow-[0_12px_44px_rgba(0,0,0,0.06)] rounded-3xl p-8 sm:p-14 text-center">
        <div className="max-w-[760px] mx-auto flex flex-col items-center gap-7">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 font-mono text-[13px] font-medium">
            <Sparkles size={14} />
            <span>{isRtl ? 'التواصل والتعاون المهني' : 'Let’s Build Together'}</span>
          </div>

          {/* Heading */}
          <h2 className="text-[34px] sm:text-[46px] lg:text-[50px] font-serif tracking-[-0.03em] text-[#262626] font-normal">
            {isRtl ? (
              <>
                جاهز لبناء <span className="font-serif italic text-emerald-700">منصات عالية الاعتمادية</span>
              </>
            ) : (
              <>
                Ready to Engineer <span className="font-serif italic text-emerald-700">Resilient Platforms</span>
              </>
            )}
          </h2>

          <p className="text-[17.5px] sm:text-[19.5px] leading-[1.65] text-[#525252] max-w-[620px]">
            {isRtl
              ? 'أرحب دائماً بمناقشة الفرص الوظيفية في هندسة البرمجيات، تطوير منصات الويب المتكاملة، استشارات DevOps، وتحديات الإنتاج المعقدة.'
              : 'I’m open to high-impact Software Engineer, Full-Stack Web, and DevOps roles, architectural collaborations, and technical discussions around production performance.'}
          </p>

          {/* Avatar Cluster */}
          <div className="inline-flex items-center gap-3.5 bg-[#F8FAFC] border border-black/[0.06] rounded-full p-2.5 pr-6 rtl:pr-2.5 rtl:pl-6 shadow-2xs">
            <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0">
              <Image
                src={withBasePath('/assets/portrait.png')}
                alt="Ahmed Ismail"
                width={70}
                height={70}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
            </div>
            <div className="text-start">
              <h3 className="font-serif text-[18px] font-medium text-[#262626]">
                {t(profile.name)}
              </h3>
              <p className="font-mono text-[13px] text-emerald-700">
                {t(profile.role)} · {t(profile.location)}
              </p>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 w-full pt-2">
            <a
              href={profile.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-[50px] items-center gap-2 px-7 rounded-full bg-[#262626] text-white text-[15px] sm:text-[16px] font-medium hover:bg-black transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle size={18} />
              <span>{isRtl ? 'محادثة عبر واتساب ↗' : 'Chat on WhatsApp ↗'}</span>
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="inline-flex h-[50px] items-center gap-2 px-7 rounded-full bg-white border border-black/[0.08] text-[#262626] text-[15px] sm:text-[16px] font-medium hover:bg-slate-50 transition-all shadow-sm hover:scale-[1.02]"
            >
              <Mail size={18} />
              <span>{isRtl ? 'إرسال بريد إلكتروني ↗' : 'Send an Email ↗'}</span>
            </a>
          </div>

          {/* 4 Contact Channels Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-4">
            {contactLinks.map((item) => {
              const Icon = icons[item.label] || Mail;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className={`p-5 rounded-2xl border text-start transition-all hover:-translate-y-0.5 hover:shadow-md ${
                    item.primary
                      ? 'bg-emerald-500/[0.06] border-emerald-500/30'
                      : 'bg-[#F8FAFC] border-black/[0.06] hover:border-black/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-emerald-700">
                        <Icon size={17} />
                      </div>
                      <strong className="font-mono text-[14.5px] text-[#262626]">
                        {item.label}
                      </strong>
                    </div>
                    <ArrowUpRight size={16} className="text-slate-400 rtl:-scale-x-100" />
                  </div>

                  <p className="font-mono text-[14px] text-[#262626] mt-2.5 truncate font-medium">
                    {item.value}
                  </p>
                  <span className="text-[12.5px] text-[#64748B] block mt-0.5">
                    {t(item.hint)}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
