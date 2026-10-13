import React, { useState } from 'react';
import { X, Copy, Check, Download, ExternalLink, Moon, Sun, Github, Eye, Code } from 'lucide-react';

interface GitHubProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubProfileModal: React.FC<GitHubProfileModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [previewTheme, setPreviewTheme] = useState<'dark' | 'light'>('dark');
  const [viewMode, setViewMode] = useState<'preview' | 'raw'>('preview');

  if (!isOpen) return null;

  const rawMarkdown = `<div align="center">
  <img src="https://raw.githubusercontent.com/kowshik568/kowshik568/main/assets/banner.svg" alt="Sai Kowshik — AI & Full-Stack Developer" width="100%" />
</div>

<br/>

Hi, I'm Sai Kowshik, a Computer Science Engineering student at Parul University, graduating in 2027. I enjoy building full-stack applications, exploring AI-powered software, and learning through practical projects.

[Portfolio](https://splendid-meerkat-9288a0.netlify.app/) &nbsp;·&nbsp; [LinkedIn](https://linkedin.com/in/venkata-sai-kowshik-boddu) &nbsp;·&nbsp; [Email](mailto:kowshik.bvs@gmail.com)

---

### Focus & Technologies

- **Languages:** Java, Python, JavaScript, SQL
- **Development:** React, Node.js, Express, REST APIs
- **Data:** MongoDB, SQL
- **Interests:** AI applications, LLMs, backend development, and software engineering

---

### Featured Projects

#### [Collabrix](https://github.com/kowshik568/Collabrix-)
A collaborative platform designed to help early-career developers find peers with complementary skill sets, organize cross-functional workspaces, and build practical projects together.
- **Stack:** React, Node.js, Express, MongoDB, RESTful APIs
- **Repository:** [github.com/kowshik568/Collabrix-](https://github.com/kowshik568/Collabrix-)

#### AI Resume Analyzer
An intelligent ATS diagnostic tool that parses resume text against target job descriptions, computes match alignment, and highlights missing keywords through structured LLM outputs.
- **Stack:** React, Node.js, Express, MongoDB, OpenAI API
- **Repository:** [github.com/kowshik568](https://github.com/kowshik568)

#### Smart Job Portal
A full-stack recruitment portal featuring dual candidate and recruiter workspaces, role-protected routes, and Cloudinary-backed resume document management.
- **Stack:** React, Node.js, Express, MongoDB, JWT Auth, Cloudinary
- **Repository:** [github.com/kowshik568](https://github.com/kowshik568)

---

### Verified Highlights

- **TCS CodeVita Season 13:** Global Rank 4014 worldwide in algorithmic problem solving
- **AWS Cloud Quest:** Cloud Practitioner certification challenge
- **UnitedMentor:** Full-Stack Development Intern (May 2026 – Aug 2026)

---

<sub>Vadodara, India &nbsp;·&nbsp; [github.com/kowshik568](https://github.com/kowshik568)</sub>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(rawMarkdown).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleDownloadSVG = () => {
    const link = document.createElement('a');
    link.href = '/banner.svg';
    link.download = 'banner.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="github-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#080B12]/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0D121C] border border-[#202B3B] rounded-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col text-[#F1F4FA] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Controls Bar */}
        <div className="bg-[#080B12] px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-[#202B3B] shrink-0">
          <div className="flex items-center gap-3">
            <Github className="w-4 h-4 text-[#3987FF]" />
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-medium text-[#F1F4FA]" id="github-modal-title">
                GitHub Profile README
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#3987FF]/15 text-[#3987FF] border border-[#3987FF]/30">
                kowshik568
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="flex items-center bg-[#0D121C] border border-[#202B3B] rounded-lg p-0.5 text-xs font-mono">
              <button
                onClick={() => setViewMode('preview')}
                className={`px-2.5 py-1 rounded flex items-center gap-1.5 transition-colors cursor-pointer ${
                  viewMode === 'preview' ? 'bg-[#3987FF] text-white font-medium' : 'text-[#A0AABA] hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Preview</span>
              </button>
              <button
                onClick={() => setViewMode('raw')}
                className={`px-2.5 py-1 rounded flex items-center gap-1.5 transition-colors cursor-pointer ${
                  viewMode === 'raw' ? 'bg-[#3987FF] text-white font-medium' : 'text-[#A0AABA] hover:text-white'
                }`}
              >
                <Code className="w-3.5 h-3.5" />
                <span>Markdown</span>
              </button>
            </div>

            {/* GitHub Theme Toggle for Preview */}
            {viewMode === 'preview' && (
              <button
                onClick={() => setPreviewTheme(previewTheme === 'dark' ? 'light' : 'dark')}
                className="p-1.5 rounded-lg bg-[#0D121C] border border-[#202B3B] text-[#A0AABA] hover:text-[#3987FF] hover:border-[#3987FF] transition-colors cursor-pointer"
                title={`Switch to GitHub ${previewTheme === 'dark' ? 'Light' : 'Dark'} Mode`}
                aria-label="Toggle theme preview"
              >
                {previewTheme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-[#3987FF]" />}
              </button>
            )}

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#3987FF] hover:bg-[#2670e8] text-[#F1F4FA] text-xs font-mono font-medium rounded-lg transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#0D121C] border border-[#202B3B] hover:border-[#3987FF] text-[#A0AABA] hover:text-[#F1F4FA] transition-colors cursor-pointer"
              aria-label="Close Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 bg-[#080B12]">
          {viewMode === 'preview' ? (
            <div
              className={`rounded-xl border p-6 sm:p-8 transition-colors ${
                previewTheme === 'dark'
                  ? 'bg-[#0d1117] text-[#e6edf3] border-[#30363d]'
                  : 'bg-white text-[#1f2328] border-[#d0d7de]'
              }`}
            >
              {/* Banner Artwork Header */}
              <div className="w-full rounded-lg overflow-hidden border mb-6 shadow-sm">
                <img
                  src="/banner.svg"
                  alt="Sai Kowshik Banner"
                  className="w-full h-auto block"
                />
              </div>

              {/* Bio & Intro */}
              <div className="space-y-4 font-sans text-sm leading-relaxed">
                <p className="text-base">
                  Hi, I&apos;m <strong>Sai Kowshik</strong>, a Computer Science Engineering student at Parul University, graduating in 2027. I enjoy building full-stack applications, exploring AI-powered software, and learning through practical projects.
                </p>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono pt-1">
                  <a
                    href="https://splendid-meerkat-9288a0.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3987FF] hover:underline"
                  >
                    Portfolio ↗
                  </a>
                  <span className="opacity-40">·</span>
                  <a
                    href="https://linkedin.com/in/venkata-sai-kowshik-boddu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3987FF] hover:underline"
                  >
                    LinkedIn ↗
                  </a>
                  <span className="opacity-40">·</span>
                  <a
                    href="mailto:kowshik.bvs@gmail.com"
                    className="text-[#3987FF] hover:underline"
                  >
                    Email ↗
                  </a>
                </div>

                <hr className={`my-6 ${previewTheme === 'dark' ? 'border-[#30363d]' : 'border-[#d0d7de]'}`} />

                {/* Focus & Technologies */}
                <div>
                  <h3 className={`text-base font-semibold mb-3 ${previewTheme === 'dark' ? 'text-[#f0f6fc]' : 'text-[#1f2328]'}`}>
                    Focus & Technologies
                  </h3>
                  <ul className="list-disc list-outside ml-5 space-y-1 text-sm">
                    <li><strong>Languages:</strong> Java, Python, JavaScript, SQL</li>
                    <li><strong>Development:</strong> React, Node.js, Express, REST APIs</li>
                    <li><strong>Data:</strong> MongoDB, SQL</li>
                    <li><strong>Interests:</strong> AI applications, LLMs, backend development, and software engineering</li>
                  </ul>
                </div>

                <hr className={`my-6 ${previewTheme === 'dark' ? 'border-[#30363d]' : 'border-[#d0d7de]'}`} />

                {/* Featured Projects */}
                <div>
                  <h3 className={`text-base font-semibold mb-3 ${previewTheme === 'dark' ? 'text-[#f0f6fc]' : 'text-[#1f2328]'}`}>
                    Featured Projects
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm">
                        <a href="https://github.com/kowshik568/Collabrix-" target="_blank" rel="noopener noreferrer" className="text-[#3987FF] hover:underline">
                          Collabrix ↗
                        </a>
                      </h4>
                      <p className="text-xs opacity-80 mt-0.5">
                        A collaborative platform designed to help early-career developers find peers with complementary skill sets, organize cross-functional workspaces, and build practical projects together.
                      </p>
                      <div className="text-xs font-mono opacity-70 mt-1">
                        React · Node.js · Express · MongoDB · RESTful APIs
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm">
                        AI Resume Analyzer
                      </h4>
                      <p className="text-xs opacity-80 mt-0.5">
                        An intelligent ATS diagnostic tool that parses resume text against target job descriptions, computes match alignment, and highlights missing keywords through structured LLM outputs.
                      </p>
                      <div className="text-xs font-mono opacity-70 mt-1">
                        React · Node.js · Express · MongoDB · OpenAI API
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm">
                        Smart Job Portal
                      </h4>
                      <p className="text-xs opacity-80 mt-0.5">
                        A full-stack recruitment portal featuring dual candidate and recruiter workspaces, role-protected routes, and Cloudinary-backed resume document management.
                      </p>
                      <div className="text-xs font-mono opacity-70 mt-1">
                        React · Node.js · Express · MongoDB · JWT Auth · Cloudinary
                      </div>
                    </div>
                  </div>
                </div>

                <hr className={`my-6 ${previewTheme === 'dark' ? 'border-[#30363d]' : 'border-[#d0d7de]'}`} />

                {/* Verified Highlights */}
                <div>
                  <h3 className={`text-base font-semibold mb-3 ${previewTheme === 'dark' ? 'text-[#f0f6fc]' : 'text-[#1f2328]'}`}>
                    Verified Highlights
                  </h3>
                  <ul className="list-disc list-outside ml-5 space-y-1 text-sm">
                    <li><strong>TCS CodeVita Season 13:</strong> Global Rank 4014 worldwide in algorithmic problem solving</li>
                    <li><strong>AWS Cloud Quest:</strong> Cloud Practitioner certification challenge</li>
                    <li><strong>UnitedMentor:</strong> Full-Stack Development Intern (May 2026 – Aug 2026)</li>
                  </ul>
                </div>

                <hr className={`my-6 ${previewTheme === 'dark' ? 'border-[#30363d]' : 'border-[#d0d7de]'}`} />

                {/* Footer Sub */}
                <p className="text-xs opacity-60">
                  Vadodara, India &nbsp;·&nbsp; <a href="https://github.com/kowshik568" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/kowshik568</a>
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-[#080B12] border border-[#202B3B] rounded-xl p-5 max-w-3xl mx-auto">
              <pre className="font-mono text-xs text-[#3987FF] leading-relaxed whitespace-pre-wrap break-all overflow-x-auto">
                <code>{rawMarkdown}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="bg-[#080B12] px-6 py-3.5 border-t border-[#202B3B] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#A0AABA] shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadSVG}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0D121C] border border-[#202B3B] hover:border-[#3987FF] hover:text-[#3987FF] rounded-lg transition-colors cursor-pointer text-[#F1F4FA]"
            >
              <Download className="w-3.5 h-3.5 text-[#3987FF]" />
              <span>Download banner.svg</span>
            </button>
            <span className="hidden sm:inline text-[#202B3B]">|</span>
            <span className="hidden sm:inline text-[11px] text-[#A0AABA]/70">
              For repository: kowshik568/kowshik568
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/kowshik568"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs text-[#3987FF] hover:underline"
            >
              <span>Open GitHub ↗</span>
            </a>
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 bg-[#0D121C] border border-[#202B3B] hover:border-[#3987FF] text-[#F1F4FA] rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
