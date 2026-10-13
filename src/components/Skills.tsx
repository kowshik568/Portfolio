import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.title)];

  const displayedGroups =
    activeCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.title === activeCategory);

  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-[#202B3B] bg-[#080B12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#202B3B]">
          <div>
            <div className="text-xs font-mono text-[#3987FF] font-medium tracking-wide mb-1">
              TECHNICAL STACK
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#F1F4FA] tracking-tight">
              Skills & technologies.
            </h2>
            <p className="text-sm text-[#A0AABA] mt-2 max-w-xl font-sans">
              Languages, libraries, and tools I use in real codebases — organized by domain with context.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#0D121C] border border-[#202B3B] rounded-lg self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 text-xs font-mono rounded-md transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#3987FF] text-[#F1F4FA] font-medium'
                    : 'text-[#A0AABA] hover:text-[#F1F4FA]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Technical Inventory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedGroups.map((group, gIdx) => (
            <div
              key={group.title}
              className="bg-[#0D121C] border border-[#202B3B] rounded-xl p-6 hover:border-[#3987FF]/50 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline justify-between pb-3 border-b border-[#202B3B]/60">
                  <h3 className="font-display font-bold text-lg text-[#F1F4FA]">
                    {group.title}
                  </h3>
                  <span className="text-xs font-mono text-[#3987FF]">
                    0{gIdx + 1}
                  </span>
                </div>

                <p className="text-xs text-[#A0AABA] mt-2 mb-4 font-sans leading-relaxed">
                  {group.description}
                </p>

                {/* Skill List */}
                <div className="divide-y divide-[#202B3B]/40">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="py-2.5 flex items-start justify-between gap-3 group/item hover:bg-[#3987FF]/05 px-2 rounded transition-colors"
                    >
                      <div>
                        <div className="text-xs font-semibold text-[#F1F4FA] group-hover/item:text-[#3987FF] transition-colors">
                          {skill.name}
                        </div>
                        <div className="text-[11px] text-[#A0AABA] font-mono mt-0.5 leading-tight">
                          {skill.context}
                        </div>
                      </div>

                      <span className="text-[10px] font-mono text-[#A0AABA]/80 shrink-0 pt-0.5">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
