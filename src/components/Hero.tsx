import React from 'react';
import { ArrowDownRight, Mail, FileText } from 'lucide-react';
import { HeroVisual } from './HeroVisual';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="top" className="relative pt-10 sm:pt-16 pb-16 sm:pb-24 overflow-hidden">
      {/* Very subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-[#3987FF]/04 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        {/* Understated top metadata */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#A0AABA] border-b border-[#202B3B] pb-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3987FF]" />
            <span className="text-[#F1F4FA] font-medium">Sai Kowshik</span>
            <span className="text-[#202B3B]">·</span>
            <span>AI Developer & Full-Stack Engineer</span>
          </div>

          <div className="flex items-center gap-3 text-[#A0AABA]">
            <span>Parul University · Class of 2027</span>
          </div>
        </div>

        {/* Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Balanced Typography & Bio */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-mono text-[#3987FF] font-medium tracking-wide">
              PORTFOLIO / 2025 – 2026
            </div>

            {/* Controlled Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-[#F1F4FA] leading-[1.04]">
              BUILDING DIGITAL <br />
              THINGS THAT <br />
              <span className="font-serif-expressive italic font-normal text-[#3987FF]">
                DO
              </span>{' '}
              SOMETHING.
            </h1>

            {/* Calm, Natural Subhead */}
            <p className="text-base sm:text-lg text-[#A0AABA] max-w-xl leading-relaxed font-sans">
              I’m <strong className="text-[#F1F4FA] font-semibold">Sai Kowshik</strong>, a Computer Science Engineering
              student at <strong>Parul University</strong> (graduating in 2027) building full-stack applications and exploring applied AI.
            </p>

            {/* Clean, Understated Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3987FF] text-[#F1F4FA] text-xs font-mono font-semibold rounded-lg hover:bg-[#2670e8] transition-all duration-200 cursor-pointer shadow-sm"
              >
                <span>View Projects</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0D121C] text-[#F1F4FA] text-xs font-mono font-medium border border-[#202B3B] rounded-lg hover:border-[#3987FF] hover:text-[#3987FF] transition-all duration-200 cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-[#3987FF]" />
                <span>Get in Touch</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-mono font-medium text-[#A0AABA] hover:text-[#F1F4FA] transition-colors duration-200 cursor-pointer underline decoration-[#202B3B] hover:decoration-[#3987FF] underline-offset-4"
              >
                <FileText className="w-3.5 h-3.5 text-[#3987FF]" />
                <span>Resume (PDF)</span>
              </button>
            </div>
          </div>

          {/* Right Column: Clean Workspace Window */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
