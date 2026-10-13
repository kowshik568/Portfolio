import React, { useState } from 'react';
import { FileText, CheckCircle2, AlertCircle, Scan, Sparkles } from 'lucide-react';

export const ResumeAnalyzerPreview: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<'fullstack' | 'ai'>('fullstack');

  const roleKeywords = {
    fullstack: {
      title: 'Full-Stack Software Engineer',
      matched: ['React.js', 'Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Git'],
      missing: ['Docker Containerization', 'CI/CD Pipelines', 'Redis Caching'],
      score: 86,
    },
    ai: {
      title: 'AI / Applied ML Software Engineer',
      matched: ['Python', 'Prompt Engineering', 'OpenAI API', 'Data Structures', 'JSON Parsing'],
      missing: ['Vector DB / Pinecone', 'PyTorch Basics', 'Model Evaluation'],
      score: 82,
    },
  };

  const current = roleKeywords[selectedRole];

  return (
    <div className="w-full bg-[#0D121C] text-[#F1F4FA] border border-[#202B3B] rounded-2xl overflow-hidden transition-all duration-200 hover:border-[#3987FF]/50 shadow-sm">
      {/* Top Header */}
      <div className="bg-[#080B12] px-4 py-3 flex flex-wrap items-center justify-between gap-2 border-b border-[#202B3B]">
        <div className="flex items-center gap-2">
          <Scan className="w-4 h-4 text-[#3987FF]" />
          <span className="font-display font-bold text-xs tracking-wide text-[#F1F4FA]">
            ATS Diagnostic Tool
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-[#A0AABA]">
          <span>Structured LLM Evaluation</span>
        </div>
      </div>

      {/* Target Role Selector Toolbar */}
      <div className="bg-[#080B12]/60 px-4 py-2.5 border-b border-[#202B3B] flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-[#A0AABA]">Target Role:</span>
          <div className="flex items-center gap-1.5 text-xs font-mono">
            <button
              onClick={() => setSelectedRole('fullstack')}
              className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                selectedRole === 'fullstack'
                  ? 'bg-[#0D121C] text-[#3987FF] border border-[#202B3B] font-medium'
                  : 'text-[#A0AABA] hover:text-[#F1F4FA]'
              }`}
            >
              Full-Stack
            </button>
            <button
              onClick={() => setSelectedRole('ai')}
              className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                selectedRole === 'ai'
                  ? 'bg-[#0D121C] text-[#3987FF] border border-[#202B3B] font-medium'
                  : 'text-[#A0AABA] hover:text-[#F1F4FA]'
              }`}
            >
              AI / ML
            </button>
          </div>
        </div>
        <span className="text-[11px] font-mono text-[#3987FF]">
          Status: Aligned
        </span>
      </div>

      {/* Document Sheet Layout */}
      <div className="p-4 sm:p-5 space-y-4 bg-[#0D121C]">
        {/* Score & Category Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3.5 bg-[#080B12] border border-[#202B3B] rounded-xl flex items-center justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#A0AABA]">ATS Match Score</div>
              <div className="text-3xl font-display font-bold text-[#3987FF]">{current.score}%</div>
              <div className="text-[10px] font-mono text-[#A0AABA]/70">Automated Audit</div>
            </div>
            <div className="w-10 h-10 rounded-full border border-[#3987FF]/50 bg-[#3987FF]/10 flex items-center justify-center font-bold text-xs text-[#3987FF]">
              High
            </div>
          </div>

          <div className="p-3.5 bg-[#080B12] border border-[#202B3B] rounded-xl">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#A0AABA]">Matched Terms</div>
            <div className="text-3xl font-display font-bold text-emerald-400">{current.matched.length}</div>
            <div className="text-[10px] font-mono text-emerald-400">Core Stack Found</div>
          </div>

          <div className="p-3.5 bg-[#080B12] border border-[#202B3B] rounded-xl">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#A0AABA]">Missing Gaps</div>
            <div className="text-3xl font-display font-bold text-[#A0AABA]">{current.missing.length}</div>
            <div className="text-[10px] font-mono text-[#3987FF]">Actionable Advice</div>
          </div>
        </div>

        {/* Detailed Keyword Annotations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Matched Keywords */}
          <div className="p-3.5 bg-[#080B12] border border-[#202B3B] rounded-xl space-y-2">
            <div className="text-xs font-mono font-medium text-[#3987FF] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#3987FF]" />
              <span>Detected in Resume</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {current.matched.map((kw) => (
                <span
                  key={kw}
                  className="text-xs font-mono px-2 py-0.5 bg-[#0D121C] text-[#3987FF] border border-[#202B3B] rounded"
                >
                  ✓ {kw}
                </span>
              ))}
            </div>
          </div>

          {/* Missing Gaps */}
          <div className="p-3.5 bg-[#080B12] border border-[#202B3B] rounded-xl space-y-2">
            <div className="text-xs font-mono font-medium text-[#A0AABA] flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-[#A0AABA]" />
              <span>Recommended Terms</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {current.missing.map((kw) => (
                <span
                  key={kw}
                  className="text-xs font-mono px-2 py-0.5 bg-[#0D121C] text-[#A0AABA] border border-[#202B3B] rounded"
                >
                  + {kw}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Actionable Prompt Recommendation */}
        <div className="p-3.5 bg-[#080B12] text-[#F1F4FA] rounded-xl border border-[#202B3B] text-xs space-y-1">
          <div className="font-mono text-[#3987FF] font-medium flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#3987FF]" />
            <span>Structured Revision Guidance</span>
          </div>
          <p className="text-[#A0AABA] font-sans leading-relaxed">
            &ldquo;Target bullets should quantify engineering throughput: specify latency reduction, API response thresholds, or query optimization metrics rather than generic responsibilities.&rdquo;
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#080B12] px-4 py-2 border-t border-[#202B3B] flex items-center justify-between text-[11px] font-mono text-[#A0AABA]">
        <span>React · Express · OpenAI API · JSON Schema</span>
        <span className="text-[#3987FF]">Interactive Evaluation Demo</span>
      </div>
    </div>
  );
};
