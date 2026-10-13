import React, { useState } from 'react';
import { Play, RotateCcw, Award, Terminal, Cpu } from 'lucide-react';

export const AlgorithmsPreview: React.FC = () => {
  const [stepIndex, setStepIndex] = useState(0);

  const array = [3, 7, 12, 19, 25, 34, 48, 56];
  const target = 34;

  const steps = [
    { low: 0, high: 7, mid: 3, msg: 'Initial bounds: low = 0 (val 3), high = 7 (val 56). Checking mid = 3 (val 19 < 34).' },
    { low: 4, high: 7, mid: 5, msg: 'Target > 19: narrow right. low = 4, high = 7. Checking mid = 5 (val 34 == 34).' },
    { low: 5, high: 5, mid: 5, msg: 'Target found at index 5 in 2 comparisons! O(log N) optimal complexity.' },
  ];

  const nextStep = () => {
    setStepIndex((prev) => (prev + 1) % steps.length);
  };

  const reset = () => {
    setStepIndex(0);
  };

  const currentStep = steps[stepIndex];

  return (
    <div className="w-full bg-[#0D121C] text-[#F1F4FA] border border-[#202B3B] rounded-2xl overflow-hidden transition-all duration-200 hover:border-[#3987FF]/50 shadow-sm">
      {/* Top Header */}
      <div className="bg-[#080B12] px-4 py-3 flex flex-wrap items-center justify-between gap-2 border-b border-[#202B3B]">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-[#3987FF]" />
          <span className="font-display font-bold text-xs tracking-wide text-[#F1F4FA]">
            TCS CodeVita S13 · Global Rank 4014
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-[#A0AABA]">
          <span>Java & Python Solutions</span>
        </div>
      </div>

      {/* Visualizer Controls */}
      <div className="bg-[#0D121C] px-4 py-2.5 border-b border-[#202B3B] flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-xs font-mono text-[#A0AABA]">
          <Cpu className="w-3.5 h-3.5 text-[#3987FF]" />
          <span>Binary Search O(log N)</span>
          <span className="text-[#202B3B]">|</span>
          <span className="text-[#3987FF] font-medium">Target = {target}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={nextStep}
            className="px-3 py-1 bg-[#3987FF] text-[#F1F4FA] text-xs font-mono font-medium rounded-md hover:bg-[#2670e8] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>{stepIndex === steps.length - 1 ? 'Restart' : 'Next Step'}</span>
          </button>
          <button
            onClick={reset}
            className="p-1.5 bg-[#080B12] border border-[#202B3B] hover:border-[#3987FF] text-[#A0AABA] hover:text-[#3987FF] text-xs rounded-md transition-colors cursor-pointer"
            title="Reset"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Visualizer Area */}
      <div className="p-4 sm:p-5 space-y-4 bg-[#0D121C]">
        {/* Array Cells */}
        <div className="overflow-x-auto pb-1">
          <div className="flex items-center gap-1.5 min-w-[340px]">
            {array.map((num, idx) => {
              const isLow = idx === currentStep.low;
              const isHigh = idx === currentStep.high;
              const isMid = idx === currentStep.mid;
              const isFound = stepIndex === 2 && idx === 5;

              return (
                <div key={idx} className="flex-1 flex flex-col items-center">
                  <div
                    className={`w-full text-center py-2.5 text-xs font-mono font-bold rounded-lg border transition-all duration-200 ${
                      isFound
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500'
                        : isMid
                        ? 'bg-[#3987FF]/20 text-[#F1F4FA] border-[#3987FF]'
                        : idx >= currentStep.low && idx <= currentStep.high
                        ? 'bg-[#080B12] text-[#F1F4FA] border-[#202B3B]'
                        : 'bg-[#080B12]/40 text-[#A0AABA]/30 border-transparent'
                    }`}
                  >
                    {num}
                  </div>
                  <div className="text-[10px] font-mono mt-1 text-[#A0AABA] flex flex-col items-center">
                    <span>[{idx}]</span>
                    {isMid && <span className="text-[#3987FF] font-semibold">MID</span>}
                    {isLow && !isMid && <span className="text-blue-400">LOW</span>}
                    {isHigh && !isMid && <span className="text-purple-400">HIGH</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* State Log Console */}
        <div className="p-3 bg-[#080B12] text-[#3987FF] font-mono text-xs rounded-lg flex items-start gap-2.5 border border-[#202B3B]">
          <Terminal className="w-4 h-4 text-[#3987FF] shrink-0 mt-0.5" />
          <span className="leading-snug">{currentStep.msg}</span>
        </div>

        {/* Code Window Snippet */}
        <div className="p-3 bg-[#080B12] border border-[#202B3B] rounded-lg space-y-1.5 font-mono text-xs">
          <div className="flex items-center justify-between text-[11px] text-[#A0AABA] border-b border-[#202B3B]/60 pb-1">
            <span className="text-[#3987FF]">// binary_search.java</span>
            <span>O(log N)</span>
          </div>
          <pre className="text-[#F1F4FA]/80 overflow-x-auto text-[11px] leading-relaxed pt-1">
            <code>{`while (low <= high) {
    int mid = low + (high - low) / 2;
    if (arr[mid] == target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
}`}</code>
          </pre>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#080B12] px-4 py-2 border-t border-[#202B3B] flex items-center justify-between text-[11px] font-mono text-[#A0AABA]">
        <span>Data Structures & Algorithmic Practice</span>
        <span className="text-[#3987FF]">Interactive Demo</span>
      </div>
    </div>
  );
};
