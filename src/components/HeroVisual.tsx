import React, { useState } from 'react';
import { Terminal, Code2, Layers, Check, Copy } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'collabrix' | 'ai' | 'stack'>('collabrix');
  const [copied, setCopied] = useState(false);

  const snippets = {
    collabrix: `// Collabrix: Developer collaboration & match engine
export interface WorkspaceState {
  project: 'Collabrix';
  lead: 'Sai Kowshik';
  roles: ['Frontend', 'Backend', 'AI Integration'];
  status: 'Active development';
  stack: ['React', 'Node.js', 'Express', 'MongoDB'];
}`,
    ai: `// AI Resume Analyzer: Structured evaluation
const evaluation = await ai.analyze({
  input: candidateResume,
  target: jobDescription,
  schema: ATSMatchSchema, // Deterministic JSON output
  validate: (score) => score >= 0 && score <= 100,
});`,
    stack: `// Engineering profile & focus
const engineer = {
  name: 'Sai Kowshik',
  university: 'Parul University',
  graduating: 2027,
  focus: ['Full-Stack Systems', 'Applied AI', 'Data Structures'],
  openTo: 'Summer 2026 Internships',
};`,
  };

  const currentCode = snippets[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-[#0D121C] border border-[#202B3B] rounded-2xl overflow-hidden shadow-sm transition-all duration-200 hover:border-[#3987FF]/60">
      {/* Window title bar */}
      <div className="bg-[#080B12] px-4 py-3 border-b border-[#202B3B] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#202B3B]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#202B3B]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#202B3B]" />
          </div>
          <span className="text-xs font-mono text-[#A0AABA] ml-2">sai-kowshik // workspace</span>
        </div>

        <button
          onClick={handleCopy}
          className="text-xs font-mono text-[#A0AABA] hover:text-[#3987FF] flex items-center gap-1 transition-colors cursor-pointer"
          title="Copy snippet"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span className="text-[11px]">{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 px-3 pt-2 bg-[#080B12]/50 border-b border-[#202B3B] text-xs font-mono">
        <button
          onClick={() => setActiveTab('collabrix')}
          className={`px-3 py-1.5 rounded-t-md transition-colors cursor-pointer ${
            activeTab === 'collabrix'
              ? 'bg-[#0D121C] text-[#3987FF] border-t border-x border-[#202B3B] font-medium'
              : 'text-[#A0AABA] hover:text-[#F1F4FA]'
          }`}
        >
          collabrix.ts
        </button>
        <button
          onClick={() => setActiveTab('ai')}
          className={`px-3 py-1.5 rounded-t-md transition-colors cursor-pointer ${
            activeTab === 'ai'
              ? 'bg-[#0D121C] text-[#3987FF] border-t border-x border-[#202B3B] font-medium'
              : 'text-[#A0AABA] hover:text-[#F1F4FA]'
          }`}
        >
          ats-eval.ts
        </button>
        <button
          onClick={() => setActiveTab('stack')}
          className={`px-3 py-1.5 rounded-t-md transition-colors cursor-pointer ${
            activeTab === 'stack'
              ? 'bg-[#0D121C] text-[#3987FF] border-t border-x border-[#202B3B] font-medium'
              : 'text-[#A0AABA] hover:text-[#F1F4FA]'
          }`}
        >
          profile.json
        </button>
      </div>

      {/* Code Display */}
      <div className="p-4 sm:p-5 font-mono text-xs overflow-x-auto leading-relaxed">
        <pre className="text-[#F1F4FA]/90">
          <code>{currentCode}</code>
        </pre>
      </div>

      {/* Understated bottom status strip */}
      <div className="bg-[#080B12]/80 px-4 py-2 border-t border-[#202B3B] flex items-center justify-between text-[11px] font-mono text-[#A0AABA]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3987FF]" />
          <span>TypeScript · Node · React</span>
        </div>
        <span className="text-[#A0AABA]/60">UTF-8</span>
      </div>
    </div>
  );
};
