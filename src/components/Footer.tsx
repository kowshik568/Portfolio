import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenGitHub?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGitHub }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080B12] text-[#F1F4FA] border-t border-[#202B3B] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-[#202B3B]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-display font-extrabold tracking-tight text-[#F1F4FA]">
                SAI KOWSHIK
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#3987FF]" />
            </div>
            <div className="text-xs font-mono text-[#A0AABA] mt-1">
              AI Developer & Full-Stack Engineer · Parul University &apos;27
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {onOpenGitHub && (
              <button
                onClick={onOpenGitHub}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0D121C] border border-[#202B3B] hover:border-[#3987FF] hover:text-[#3987FF] rounded-lg text-xs font-mono transition-colors cursor-pointer"
              >
                <Github className="w-3.5 h-3.5 text-[#3987FF]" />
                <span>Profile README</span>
              </button>
            )}

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A0AABA] hover:text-[#3987FF] p-2 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A0AABA] hover:text-[#3987FF] p-2 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0D121C] border border-[#202B3B] hover:border-[#3987FF] text-[#F1F4FA] text-xs font-mono rounded-lg transition-colors cursor-pointer ml-1"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#3987FF]" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#A0AABA]">
          <div>
            &copy; {currentYear} Sai Kowshik. Built with React & TypeScript.
          </div>
          <div className="flex items-center gap-2">
            <span>Vadodara, India</span>
            <span className="text-[#202B3B]">·</span>
            <span>Parul University CSE (AI)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
