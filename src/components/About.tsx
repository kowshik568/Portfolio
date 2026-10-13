import React, { useState } from 'react';
import { GraduationCap, MapPin, ArrowUpRight, Code, Terminal, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'coursework' | 'availability' | 'stack'>('coursework');

  return (
    <section id="about" className="py-20 sm:py-28 border-t border-[#202B3B] bg-[#0D121C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#202B3B]">
          <div>
            <div className="text-xs font-mono text-[#3987FF] font-medium tracking-wide mb-1">
              ABOUT
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#F1F4FA] tracking-tight">
              Curious by default. Builder by practice.
            </h2>
          </div>

          <div className="text-xs font-mono text-[#A0AABA]">
            Parul University · Vadodara, India
          </div>
        </div>

        {/* Narrative & Profile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Genuine Bio & Background */}
          <div className="lg:col-span-6 space-y-5 text-sm sm:text-base text-[#A0AABA] leading-relaxed font-sans">
            <p>
              I’m currently pursuing a B.Tech in Computer Science and Engineering with a specialization in
              Artificial Intelligence at <strong className="text-[#F1F4FA]">Parul University</strong>, graduating in 2027.
            </p>

            <p>
              My work focuses on building practical web software: clean client experiences with React, robust backend
              APIs with Node.js and Express, and persistent data layers using MongoDB. When integrating AI, I prioritize
              structured, deterministic outputs over superficial buzzwords.
            </p>

            <p>
              Outside coursework, I spend time writing algorithms in Java, participating in competitive programming
              contests like TCS CodeVita, and architecting tools like <strong className="text-[#F1F4FA]">Collabrix</strong> to help peers collaborate on real builds.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-[#A0AABA]">
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-[#3987FF]" />
                <span>B.Tech CSE (AI) · 2027</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#3987FF]" />
                <span>Vadodara, Gujarat</span>
              </div>
              <button
                onClick={onOpenResume}
                className="text-[#3987FF] hover:underline flex items-center gap-1 font-medium cursor-pointer"
              >
                <span>View Full CV</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right: Clean Interactive Profile Card */}
          <div className="lg:col-span-6 bg-[#080B12] border border-[#202B3B] rounded-2xl overflow-hidden shadow-sm transition-all duration-200 hover:border-[#3987FF]/50">
            {/* Header */}
            <div className="px-5 py-3 border-b border-[#202B3B] flex items-center justify-between bg-[#080B12]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#F1F4FA]">
                <Terminal className="w-3.5 h-3.5 text-[#3987FF]" />
                <span>developer_profile.json</span>
              </div>
              <span className="text-[11px] font-mono text-[#3987FF] bg-[#3987FF]/10 px-2 py-0.5 rounded">
                verified
              </span>
            </div>

            {/* Tab navigation */}
            <div className="flex items-center gap-1 px-4 pt-2 bg-[#0D121C]/50 border-b border-[#202B3B] text-xs font-mono">
              <button
                onClick={() => setActiveTab('coursework')}
                className={`px-3 py-1.5 rounded-t-md transition-colors cursor-pointer ${
                  activeTab === 'coursework'
                    ? 'bg-[#080B12] text-[#3987FF] border-t border-x border-[#202B3B] font-medium'
                    : 'text-[#A0AABA] hover:text-[#F1F4FA]'
                }`}
              >
                Coursework
              </button>
              <button
                onClick={() => setActiveTab('availability')}
                className={`px-3 py-1.5 rounded-t-md transition-colors cursor-pointer ${
                  activeTab === 'availability'
                    ? 'bg-[#080B12] text-[#3987FF] border-t border-x border-[#202B3B] font-medium'
                    : 'text-[#A0AABA] hover:text-[#F1F4FA]'
                }`}
              >
                Availability
              </button>
              <button
                onClick={() => setActiveTab('stack')}
                className={`px-3 py-1.5 rounded-t-md transition-colors cursor-pointer ${
                  activeTab === 'stack'
                    ? 'bg-[#080B12] text-[#3987FF] border-t border-x border-[#202B3B] font-medium'
                    : 'text-[#A0AABA] hover:text-[#F1F4FA]'
                }`}
              >
                Active Tools
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-5 text-xs font-mono space-y-3 min-h-[160px]">
              {activeTab === 'coursework' && (
                <div className="space-y-2">
                  <div className="text-[#3987FF] font-medium">Foundations & Coursework</div>
                  <p className="text-[#A0AABA] leading-relaxed font-sans text-xs">
                    Data Structures & Algorithms in Java, Relational Database Management Systems,
                    Object-Oriented Design, Operating Systems, Machine Learning Foundations.
                  </p>
                  <div className="text-[11px] text-[#A0AABA]/70 pt-1">
                    Parul Institute of Engineering & Technology (2023 – 2027)
                  </div>
                </div>
              )}

              {activeTab === 'availability' && (
                <div className="space-y-2 font-sans text-xs">
                  <div className="font-mono text-[#3987FF] font-medium">Open to Opportunities</div>
                  <p className="text-[#A0AABA] leading-relaxed">
                    Available for Summer 2026 software engineering and AI developer internships.
                    Interested in working on user-facing products and core web systems.
                  </p>
                  <div className="font-mono text-[#A0AABA] text-[11px] pt-1">
                    Preference: Remote, Hybrid, or On-site
                  </div>
                </div>
              )}

              {activeTab === 'stack' && (
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between pb-1.5 border-b border-[#202B3B]/60">
                    <span className="text-[#A0AABA]">Languages:</span>
                    <span className="text-[#F1F4FA]">Java · Python · JavaScript · TypeScript · SQL</span>
                  </div>
                  <div className="flex items-center justify-between pb-1.5 border-b border-[#202B3B]/60">
                    <span className="text-[#A0AABA]">Frontend:</span>
                    <span className="text-[#F1F4FA]">React · Tailwind CSS · Vite</span>
                  </div>
                  <div className="flex items-center justify-between pb-1.5 border-b border-[#202B3B]/60">
                    <span className="text-[#A0AABA]">Backend & DB:</span>
                    <span className="text-[#F1F4FA]">Node.js · Express · MongoDB</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#A0AABA]">Dev Tools:</span>
                    <span className="text-[#F1F4FA]">Git · GitHub · Postman · Linux / Bash</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
