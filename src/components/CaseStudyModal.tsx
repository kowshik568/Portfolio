import React from 'react';
import { X, Github, ExternalLink, ArrowRight, BookOpen, Layers, Terminal, AlertTriangle, Lightbulb } from 'lucide-react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#080B12]/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0D121C] border border-[#202B3B] rounded-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col text-[#F1F4FA] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#080B12] text-[#F1F4FA] px-6 py-4 flex items-center justify-between border-b border-[#202B3B] shrink-0">
          <div className="flex items-center gap-3">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: project.accentColor || '#3987FF' }}
            />
            <div>
              <span className="text-[11px] font-mono text-[#3987FF] uppercase tracking-wide block font-medium">
                Case Study · {project.category}
              </span>
              <h2 id="case-study-title" className="text-xl sm:text-2xl font-display font-bold text-[#F1F4FA]">
                {project.title}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#0D121C] border border-[#202B3B] hover:border-[#3987FF] text-[#A0AABA] hover:text-[#F1F4FA] transition-colors cursor-pointer"
            aria-label="Close Case Study"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 font-sans bg-[#080B12]">
          {/* Quick metadata strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#0D121C] border border-[#202B3B] rounded-xl font-mono text-xs">
            <div>
              <span className="text-[#A0AABA] block text-[11px]">ROLE</span>
              <span className="font-semibold text-[#F1F4FA]">{project.role}</span>
            </div>
            <div>
              <span className="text-[#A0AABA] block text-[11px]">TIMELINE</span>
              <span className="font-semibold text-[#F1F4FA]">{project.year}</span>
            </div>
            <div>
              <span className="text-[#A0AABA] block text-[11px]">STATUS</span>
              <span className="font-semibold text-[#3987FF]">Active Codebase</span>
            </div>
            <div>
              <span className="text-[#A0AABA] block text-[11px]">TARGET STACK</span>
              <span className="font-semibold text-[#F1F4FA] truncate block">{project.tags.slice(0, 3).join(', ')}</span>
            </div>
          </div>

          {/* Problem & Audience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-[#0D121C] border border-[#202B3B] rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-medium text-[#3987FF]">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Problem Statement</span>
              </div>
              <p className="text-xs sm:text-sm text-[#A0AABA] leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>

            <div className="p-5 bg-[#0D121C] border border-[#202B3B] rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-medium text-[#3987FF]">
                <Lightbulb className="w-3.5 h-3.5" />
                <span>Engineered Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-[#A0AABA] leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* System Architecture */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-display font-bold text-base text-[#F1F4FA]">
              <Layers className="w-4 h-4 text-[#3987FF]" />
              <h3>System Architecture & Components</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.architecture.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-[#0D121C] border border-[#202B3B] rounded-xl flex items-start gap-2.5"
                >
                  <span className="font-mono text-xs text-[#3987FF] shrink-0 mt-0.5">
                    0{idx + 1}.
                  </span>
                  <span className="text-xs text-[#A0AABA] leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Decisions */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-display font-bold text-base text-[#F1F4FA]">
              <Terminal className="w-4 h-4 text-[#3987FF]" />
              <h3>Key Engineering Trade-Offs</h3>
            </div>
            <div className="space-y-2">
              {caseStudy.technicalDecisions.map((dec, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-[#0D121C] border border-[#202B3B] rounded-xl space-y-1"
                >
                  <div className="font-semibold text-xs text-[#F1F4FA]">
                    {dec.decision}
                  </div>
                  <div className="text-xs text-[#A0AABA] leading-relaxed">
                    {dec.rationale}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real Status & What I Learned */}
          <div className="p-4 bg-[#0D121C] border border-[#202B3B] rounded-xl space-y-2.5">
            <div className="flex items-center justify-between flex-wrap gap-2 text-xs font-mono">
              <span className="font-medium text-[#F1F4FA]">
                Repository Status
              </span>
              <span className="text-[11px] text-[#3987FF]">
                Active
              </span>
            </div>
            <p className="text-xs text-[#A0AABA] leading-relaxed font-sans">
              {caseStudy.currentStatus}
            </p>
            <div className="pt-2 border-t border-[#202B3B]/60 text-xs">
              <span className="font-mono text-[#3987FF] block mb-0.5 font-medium">
                Key Lesson:
              </span>
              <p className="text-[#F1F4FA]/90 italic font-sans">
                &ldquo;{caseStudy.whatILearned}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-[#080B12] px-6 py-3.5 border-t border-[#202B3B] flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2 py-0.5 bg-[#0D121C] border border-[#202B3B] rounded text-[#A0AABA]"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#3987FF] text-[#F1F4FA] text-xs font-mono font-medium rounded-lg hover:bg-[#2670e8] transition-colors cursor-pointer"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View Repo ↗</span>
            </a>
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 bg-[#0D121C] text-[#A0AABA] border border-[#202B3B] text-xs font-mono rounded-lg hover:border-[#3987FF] hover:text-[#F1F4FA] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
