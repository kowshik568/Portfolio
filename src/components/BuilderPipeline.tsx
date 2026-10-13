import React, { useState } from 'react';
import { Lightbulb, Code2, Cpu, Rocket, Terminal, ArrowRight } from 'lucide-react';

export const BuilderPipeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: '01',
      title: 'Problem Formulation',
      phase: 'Ideation & Need',
      desc: 'Great software starts with clear user intent, not random tooling. For Collabrix, that meant addressing the gap where early-career developers struggle to find motivated peers with complementary skills to build production-grade web applications.',
      snippet: `// Phase 01: Problem formulation
interface ProjectIntent {
  author: 'Sai Kowshik';
  problem: 'Early engineers need teammates to build production-grade projects';
  solution: 'Role-matched collaborative workspaces with git transparency';
  targetAudience: 'CS Students & Early Builders';
}`,
      stack: 'Discovery · Requirement Mapping',
    },
    {
      num: '02',
      title: 'System Architecture',
      phase: 'Decoupled Design',
      desc: 'Architecting decoupled client-server systems. Setting up structured Express routers, robust controller layers, JWT authentication guards, and normalized MongoDB document relationships for workspace tasks.',
      snippet: `// Phase 02: RESTful Route Contracts
router.post('/api/workspaces/match', 
  verifyJWT,
  validateSkillPayload,
  async (req, res) => {
    const { requiredRoles, currentSprint } = req.body;
    const candidates = await matchEngine.findPeers(requiredRoles);
    return res.status(200).json({ status: 'success', candidates });
  }
);`,
      stack: 'React · Node.js · Express · MongoDB',
    },
    {
      num: '03',
      title: 'Applied AI',
      phase: 'Structured Intelligence',
      desc: 'Rather than adding decorative chatbots, AI is applied to extract structured intelligence — like in the AI Resume Analyzer, parsing candidate text against job descriptions with deterministic JSON output schemas to highlight skill gaps without hallucinations.',
      snippet: `// Phase 03: Structured LLM Output Contract
const response = await openai.chat.completions.create({
  model: "gpt-4o-mini",
  response_format: { type: "json_object" },
  messages: [
    { role: "system", content: "Extract missing keywords & compute ATS score (0-100)." },
    { role: "user", content: JSON.stringify({ resumeText, targetJobDesc }) }
  ]
});`,
      stack: 'OpenAI API · JSON Schema · Prompt Engineering',
    },
    {
      num: '04',
      title: 'Production & Reliability',
      phase: 'Delivery & Maintenance',
      desc: 'Verifying responsive behavior across viewports, enforcing type safety with TypeScript, eliminating dead clicks, ensuring accessible keyboard navigation, and pushing clean Git commits to GitHub.',
      snippet: `// Phase 04: Production Build & Git Pipeline
$ tsc --noEmit && vite build
✓ Built in 420ms (0 errors)
$ git commit -m "feat: ship collaborative board with live state updates"
$ git push origin main # Verified on kowshik568/Collabrix-`,
      stack: 'TypeScript · Vite · Git · Cloudinary',
    },
  ];

  const current = steps[activeStep];

  return (
    <section className="py-20 sm:py-28 border-t border-[#202B3B] bg-[#0D121C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#202B3B]">
          <div>
            <div className="text-xs font-mono text-[#3987FF] font-medium tracking-wide mb-1">
              METHODOLOGY
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#F1F4FA] tracking-tight">
              How I build software.
            </h2>
            <p className="text-sm text-[#A0AABA] mt-2 max-w-xl font-sans">
              From problem formulation and database modeling to structured AI evaluation and clean git releases.
            </p>
          </div>

          <div className="text-xs font-mono text-[#A0AABA]">
            Stages 01 – 04
          </div>
        </div>

        {/* Pipeline Step Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`relative text-left p-4 sm:p-5 border rounded-xl transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#080B12] border-[#3987FF] text-[#F1F4FA]'
                    : 'bg-[#080B12]/60 border-[#202B3B] text-[#A0AABA] hover:border-[#3987FF]/50 hover:text-[#F1F4FA]'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className={`font-bold ${isSelected ? 'text-[#3987FF]' : 'text-[#A0AABA]/60'}`}>
                    {step.num}
                  </span>
                  <span className="text-[11px] text-[#A0AABA]/80">
                    {step.phase}
                  </span>
                </div>
                <div className="text-sm font-display font-bold text-[#F1F4FA]">
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Inspection Window */}
        <div className="bg-[#080B12] border border-[#202B3B] rounded-2xl p-6 sm:p-8 transition-all duration-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-mono text-[#3987FF]">
              Phase {current.num} // {current.phase}
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#F1F4FA]">
              {current.title}
            </h3>

            <p className="text-sm text-[#A0AABA] leading-relaxed font-sans">
              {current.desc}
            </p>

            <div className="pt-2 text-xs font-mono text-[#A0AABA]">
              <span className="text-[#3987FF] font-medium">Tools: </span>
              <span>{current.stack}</span>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#0D121C] border border-[#202B3B] rounded-xl overflow-hidden font-mono text-xs">
            <div className="px-4 py-2.5 bg-[#080B12] border-b border-[#202B3B] flex items-center justify-between text-[#A0AABA]">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#3987FF]" />
                <span className="text-[11px]">code_contract.ts</span>
              </div>
              <span className="text-[11px] text-[#3987FF]">Active</span>
            </div>
            <pre className="p-4 overflow-x-auto text-[#F1F4FA]/90 leading-relaxed text-xs">
              <code>{current.snippet}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};
