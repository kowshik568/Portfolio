import React from 'react';
import { CheckCircle } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-[#202B3B] bg-[#0D121C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#202B3B]">
          <div>
            <div className="text-xs font-mono text-[#3987FF] font-medium tracking-wide mb-1">
              EXPERIENCE & MILESTONES
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#F1F4FA] tracking-tight">
              Work history & achievements.
            </h2>
            <p className="text-sm text-[#A0AABA] mt-2 max-w-xl font-sans">
              Practical industry internships, competitive algorithmic achievements, and certified simulations.
            </p>
          </div>

          <div className="text-xs font-mono text-[#A0AABA]">
            2024 – 2026
          </div>
        </div>

        {/* Vertical Editorial Timeline */}
        <div className="relative pl-6 sm:pl-8 space-y-8 before:content-[''] before:absolute before:top-3 before:bottom-3 before:left-2 before:w-[1px] before:bg-[#202B3B]">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Milestone Node */}
              <div className="absolute -left-[27px] sm:-left-[29px] top-6 w-3.5 h-3.5 rounded-full bg-[#080B12] border border-[#3987FF] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3987FF]" />
              </div>

              {/* Timeline Card */}
              <div className="bg-[#080B12] border border-[#202B3B] rounded-xl p-6 hover:border-[#3987FF]/50 transition-all duration-200">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-[#202B3B]/60">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-[#3987FF]">
                      <span>{exp.type}</span>
                      <span className="text-[#202B3B]">·</span>
                      <span className="text-[#A0AABA]">{exp.location}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-bold text-[#F1F4FA] mt-1">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-medium text-[#A0AABA] mt-0.5 font-display">
                      {exp.organization}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-baseline">
                    <span className="text-xs font-mono px-2.5 py-0.5 bg-[#0D121C] border border-[#202B3B] rounded text-[#A0AABA]">
                      {exp.period}
                    </span>
                    {exp.verifiedBadge && (
                      <span className="text-xs font-mono px-2.5 py-0.5 bg-[#3987FF]/15 text-[#3987FF] border border-[#3987FF]/30 font-medium rounded">
                        {exp.verifiedBadge}
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-3 space-y-3">
                  <p className="text-sm text-[#A0AABA] leading-relaxed font-sans">
                    {exp.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {exp.highlights.map((highlight, hIdx) => (
                      <div
                        key={hIdx}
                        className="p-2.5 bg-[#0D121C] border border-[#202B3B]/60 rounded-lg flex items-start gap-2 text-xs text-[#F1F4FA] font-sans"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-[#3987FF] shrink-0 mt-0.5" />
                        <span className="leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-mono px-2 py-0.5 bg-[#0D121C] border border-[#202B3B] rounded text-[#A0AABA]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
