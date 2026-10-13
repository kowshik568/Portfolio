import React, { useState } from 'react';
import { ArrowUpRight, Github, BookOpen } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { CollabrixPreview } from './previews/CollabrixPreview';
import { ResumeAnalyzerPreview } from './previews/ResumeAnalyzerPreview';
import { JobPortalPreview } from './previews/JobPortalPreview';
import { AlgorithmsPreview } from './previews/AlgorithmsPreview';
import { CaseStudyModal } from './CaseStudyModal';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Full-Stack' | 'AI Integration' | 'Systems & Algorithms'>('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  const filteredProjects =
    filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const renderPreview = (previewId: Project['previewId']) => {
    switch (previewId) {
      case 'collabrix':
        return <CollabrixPreview />;
      case 'resume-analyzer':
        return <ResumeAnalyzerPreview />;
      case 'job-portal':
        return <JobPortalPreview />;
      case 'algorithms':
        return <AlgorithmsPreview />;
      default:
        return null;
    }
  };

  return (
    <section id="work" className="py-20 sm:py-28 border-t border-[#202B3B] bg-[#080B12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#202B3B]">
          <div>
            <div className="text-xs font-mono text-[#3987FF] font-medium tracking-wide mb-1">
              SELECTED WORK
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#F1F4FA] tracking-tight">
              Real software, built from scratch.
            </h2>
            <p className="text-sm text-[#A0AABA] mt-2 max-w-xl font-sans">
              Functional repositories, end-to-end architectures, and interactive browser previews.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#0D121C] border border-[#202B3B] rounded-lg self-start md:self-auto">
            {(['All', 'Full-Stack', 'AI Integration', 'Systems & Algorithms'] as const).map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-3 py-1 text-xs font-mono rounded-md transition-colors cursor-pointer ${
                  filter === category
                    ? 'bg-[#3987FF] text-[#F1F4FA] font-medium'
                    : 'text-[#A0AABA] hover:text-[#F1F4FA]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Showcase */}
        <div className="space-y-12">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            const projectNumber = `0${index + 1}`;

            return (
              <article
                key={project.id}
                className="group relative bg-[#0D121C] border border-[#202B3B] rounded-2xl p-6 sm:p-8 hover:border-[#3987FF]/60 transition-all duration-250 shadow-sm"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Text Column */}
                  <div className={`lg:col-span-5 space-y-4 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                    <div className="flex items-baseline justify-between border-b border-[#202B3B] pb-2">
                      <span className="text-3xl font-display font-bold text-[#A0AABA]/40 group-hover:text-[#3987FF] transition-colors tabular-nums">
                        {projectNumber}
                      </span>
                      <div className="text-xs font-mono text-[#A0AABA] flex items-center gap-2">
                        <span className="text-[#F1F4FA] font-medium">{project.category}</span>
                        <span>·</span>
                        <span>{project.year}</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#F1F4FA] group-hover:text-[#3987FF] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-[#3987FF] mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-[#A0AABA] leading-relaxed font-sans">
                      {project.description}
                    </p>

                    {/* Technical Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono px-2.5 py-0.5 bg-[#080B12] border border-[#202B3B] rounded text-[#A0AABA] group-hover:border-[#3987FF]/40 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-[#202B3B]">
                      <button
                        onClick={() => setSelectedCaseStudy(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#3987FF] text-[#F1F4FA] text-xs font-mono font-medium rounded-lg hover:bg-[#2670e8] transition-colors cursor-pointer"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Case Study</span>
                      </button>

                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#080B12] text-[#F1F4FA] border border-[#202B3B] text-xs font-mono rounded-lg hover:border-[#3987FF] hover:text-[#3987FF] transition-colors cursor-pointer"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                        <ArrowUpRight className="w-3 h-3 text-[#3987FF]" />
                      </a>
                    </div>
                  </div>

                  {/* Interactive Preview Container */}
                  <div className={`lg:col-span-7 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                    <div className="relative">
                      {renderPreview(project.previewId)}
                      <div className="mt-2 text-center">
                        <span className="text-[11px] font-mono text-[#A0AABA]/60">
                          Interactive component — click controls inside to test live behavior
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal Drawer */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
};
