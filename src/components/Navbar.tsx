import React, { useState } from 'react';
import { Menu, X, FileText, Github } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenGitHub?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenGitHub }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Pipeline', href: '#pipeline' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#080B12]/90 backdrop-blur-md border-b border-[#202B3B] transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        {/* Wordmark */}
        <a
          href="#top"
          className="text-lg sm:text-xl font-display font-extrabold tracking-tight text-[#F1F4FA] hover:text-[#3987FF] transition-colors duration-200 whitespace-nowrap shrink-0 flex items-center gap-2 group"
        >
          <span>SAI KOWSHIK</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#3987FF] inline-block opacity-80 group-hover:opacity-100 transition-opacity" />
        </a>

        {/* Clean Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono font-medium tracking-wide text-[#A0AABA]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#F1F4FA] transition-colors duration-200 whitespace-nowrap shrink-0 relative py-1 group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#3987FF] group-hover:w-full transition-all duration-200 ease-out" />
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5 shrink-0">
          {onOpenGitHub && (
            <button
              onClick={onOpenGitHub}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-[#A0AABA] bg-[#0D121C] border border-[#202B3B] rounded-lg hover:border-[#3987FF] hover:text-[#F1F4FA] transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Github className="w-3.5 h-3.5 text-[#3987FF]" />
              <span>GH Profile</span>
            </button>
          )}

          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium text-[#F1F4FA] bg-[#0D121C] border border-[#202B3B] hover:border-[#3987FF] hover:text-[#3987FF] rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-[#3987FF]" />
            <span>Resume</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-[#202B3B] text-[#F1F4FA] hover:border-[#3987FF] hover:text-[#3987FF] transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D121C] border-b border-[#202B3B] px-6 py-5 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-2 font-mono text-xs">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-display font-semibold text-[#F1F4FA] hover:text-[#3987FF] py-2 border-b border-[#202B3B]/60 flex items-center justify-between transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-[#3987FF]">↗</span>
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            {onOpenGitHub && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGitHub();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono font-medium text-[#F1F4FA] bg-[#080B12] border border-[#202B3B] rounded-lg hover:border-[#3987FF] transition-all"
              >
                <Github className="w-3.5 h-3.5 text-[#3987FF]" />
                <span>GitHub Profile README</span>
              </button>
            )}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono font-medium text-[#F1F4FA] bg-[#3987FF] rounded-lg hover:bg-[#2670e8] transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume (PDF)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
