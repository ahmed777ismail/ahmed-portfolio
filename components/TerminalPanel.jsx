'use client';

import { useState } from 'react';
import { Activity, Check, Copy, ServerCog, Terminal } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function TerminalPanel() {
  const { isRtl } = useLanguage();
  const [activeTab, setActiveTab] = useState('flow');
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(`curl -s https://api.ahmed-ismail.dev/v1/health | jq .`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full max-w-[1140px] mx-auto px-6 sm:px-8 py-16 sm:py-24">
      <div className="bg-[#0f172a] text-[#f8fafc] rounded-3xl border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.3)] overflow-hidden">
        {/* Top Bar */}
        <div className="bg-black/40 border-b border-white/10 px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
          </div>

          <div className="flex items-center gap-2 font-mono text-[13px]">
            <button
              type="button"
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full cursor-pointer transition-colors ${
                activeTab === 'flow'
                  ? 'bg-emerald-500 text-[#0f172a] font-semibold'
                  : 'bg-white/10 text-slate-300 hover:text-white'
              }`}
              onClick={() => setActiveTab('flow')}
            >
              <ServerCog size={14} />
              <span>Full-Stack Architecture</span>
            </button>
            <button
              type="button"
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full cursor-pointer transition-colors ${
                activeTab === 'console'
                  ? 'bg-emerald-500 text-[#0f172a] font-semibold'
                  : 'bg-white/10 text-slate-300 hover:text-white'
              }`}
              onClick={() => setActiveTab('console')}
            >
              <Terminal size={14} />
              <span>bash --ahmed-devops</span>
            </button>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-1.5 font-mono text-[12.5px] text-slate-400 hover:text-white transition-colors cursor-pointer"
            onClick={copyCode}
            title="Copy command"
          >
            {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            <span className="hidden sm:inline">{copied ? 'Copied' : 'curl health'}</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-10 flex flex-col gap-6">
          {activeTab === 'flow' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-2">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-1.5">
                <span className="font-mono text-[12px] text-sky-400">Layer 01 · Frontend</span>
                <strong className="font-mono text-[17px] text-white">Next.js 15 & React</strong>
                <p className="text-[13.5px] text-slate-400 mt-1">SSR, Tailwind CSS, Edge Routing</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-1.5">
                <span className="font-mono text-[12px] text-emerald-400">Layer 02 · Backend API</span>
                <strong className="font-mono text-[17px] text-white">Laravel 11.x Core</strong>
                <p className="text-[13.5px] text-slate-400 mt-1">Clean Architecture, JWT, RBAC</p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col gap-1.5">
                <span className="font-mono text-[12px] text-emerald-400">Layer 03 · DevOps</span>
                <strong className="font-mono text-[17px] text-white">Docker & CI/CD</strong>
                <p className="text-[13.5px] text-slate-300 mt-1">GitHub Actions, Zero-Downtime</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-1.5">
                <span className="font-mono text-[12px] text-amber-400">Layer 04 · Data & Cache</span>
                <strong className="font-mono text-[17px] text-white">MySQL + Redis</strong>
                <p className="text-[13.5px] text-slate-400 mt-1">Sub-0.5s Latency, ACID Safety</p>
              </div>
            </div>
          ) : (
            <pre className="bg-black/50 border border-white/10 rounded-2xl p-5 text-sky-300 font-mono text-[13.5px] sm:text-[14.5px] leading-relaxed overflow-x-auto">
              <code>
{`$ ahmed --role="Full-Stack Web & DevOps" --status=active
[OK] Frontend: Next.js 15, React 19, TypeScript
[OK] Backend: Laravel 11.x & Modern PHP 8.3
[OK] DevOps: Docker Compose & GitHub Actions CI/CD
[OK] Cloud OS: Linux Ubuntu 24.04 LTS Hardened
[OK] Database: MySQL 8.0 & In-Memory Redis 7.2 (Hit Rate: 94.8%)
[OK] Optimization: 4.0s endpoint reduced to 0.5s (87.5% Faster)

$ curl -X GET https://ahmed-ismail.dev/api/v1/engineer
{
  "name": "Ahmed Ismail",
  "specialization": "Full-Stack Web & DevOps Engineer",
  "location": "Cairo, Egypt",
  "availability": "Open to Full-Time & Contract Roles",
  "email": "ahmed97ismail97@gmail.com"
}`}
              </code>
            </pre>
          )}

          {/* Footer Signals */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 font-mono text-[12.5px] sm:text-[13px] text-slate-400">
            <span className="inline-flex items-center gap-2 text-emerald-400 font-medium">
              <Activity size={15} />
              <span>99.9% Production Stability Verified</span>
            </span>
            <span>Cairo, Egypt Server (UTC+2)</span>
            <span>Dockerized Production Topology</span>
          </div>
        </div>
      </div>
    </section>
  );
}
