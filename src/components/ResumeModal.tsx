import React, { useState } from 'react';
import { X, Printer, Copy, Check, Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
VENKATA SAI KOWSHIK BODDU (SAI KOWSHIK)
Email: kowshik.bvs@gmail.com
LinkedIn: https://linkedin.com/in/venkata-sai-kowshik-boddu
GitHub: https://github.com/kowshik568
Location: Vadodara, Gujarat, India

EDUCATION
Parul University — Vadodara, India
B.Tech in Computer Science and Engineering (Artificial Intelligence) | 2023 – 2027

EXPERIENCE
UnitedMentor — Full-Stack Development Intern | May 2026 – Aug 2026
- Engineered responsive user interfaces and state flows using React and Tailwind CSS.
- Developed backend RESTful API endpoints using Node.js and Express.
- Collaborated on MongoDB schemas and implemented secure user authentication flows.

PROJECTS
1. Collabrix — Developer Collaboration Platform
GitHub: https://github.com/kowshik568/Collabrix-
- Built a web platform connecting early-career developers to discover project teammates and manage collaborative build tasks.
- Stack: React, Node.js, Express, MongoDB, RESTful APIs.

2. AI Resume Analyzer & ATS Score Predictor
- Implemented resume text parsing and OpenAI API structured analysis for ATS scoring, keyword density checks, and skill-gap recommendations.
- Stack: React, Node.js, Express, MongoDB, OpenAI API.

3. Smart Job Portal
- Engineered full-stack recruitment portal with candidate/recruiter workspaces, JWT auth, and Cloudinary-backed resume uploads.
- Stack: React, Node.js, Express, MongoDB, JWT, Cloudinary.

ACHIEVEMENTS & CERTIFICATIONS
- TCS CodeVita Season 13: Global Rank 4014 worldwide.
- AWS Cloud Quest: Cloud Practitioner hands-on challenge.
- Tata Data Visualization & Skyscanner Software Engineering virtual simulations (via Forage).

SKILLS
- Languages: Java, Python, JavaScript (ES6+), TypeScript, SQL, C/C++
- Frontend: React.js, HTML5, CSS3, Tailwind CSS, Responsive Design
- Backend: Node.js, Express.js, RESTful APIs, JWT Authentication
- Databases: MongoDB, Relational SQL, Cloudinary
- AI/ML: AI API Integration, Prompt Engineering, OpenAI API
- Tools: Git, GitHub, Postman, Vite, Linux/Bash, VS Code
    `.trim();

    navigator.clipboard.writeText(resumeText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#080B12]/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0D121C] border border-[#202B3B] rounded-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col text-[#F1F4FA] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="bg-[#080B12] text-[#F1F4FA] px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-[#202B3B] shrink-0 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3987FF]" />
            <span className="text-xs font-mono font-medium text-[#F1F4FA]">
              Curriculum Vitae · Sai Kowshik
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0D121C] hover:border-[#3987FF] text-xs font-mono rounded-lg border border-[#202B3B] transition-colors cursor-pointer text-[#A0AABA] hover:text-[#F1F4FA]"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#3987FF]" />}
              <span>{copied ? 'Copied' : 'Copy Plain'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#3987FF] hover:bg-[#2670e8] text-[#F1F4FA] text-xs font-mono font-medium rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#0D121C] border border-[#202B3B] hover:border-[#3987FF] text-[#A0AABA] hover:text-[#F1F4FA] transition-colors cursor-pointer"
              aria-label="Close Resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable/Readable Document Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 font-sans bg-[#080B12] text-[#F1F4FA] print:bg-white print:text-black print:p-0 print:overflow-visible">
          {/* Document Header */}
          <div className="border-b border-[#202B3B] pb-6 space-y-2 print:border-black">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 id="resume-title" className="text-2xl sm:text-3xl font-display font-bold text-[#F1F4FA] tracking-tight print:text-black">
                VENKATA SAI KOWSHIK BODDU
              </h1>
              <span className="text-xs font-mono text-[#3987FF] print:text-black">
                AI & FULL-STACK DEVELOPER
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#A0AABA] print:text-black pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#3987FF] print:text-black" />
                <span>Vadodara, Gujarat, India</span>
              </span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1 hover:text-[#3987FF] print:text-black">
                <Mail className="w-3.5 h-3.5 text-[#3987FF] print:text-black" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#3987FF] print:text-black">
                <Linkedin className="w-3.5 h-3.5 text-[#3987FF] print:text-black" />
                <span>LinkedIn</span>
              </a>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#3987FF] print:text-black">
                <Github className="w-3.5 h-3.5 text-[#3987FF] print:text-black" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-medium tracking-wide text-[#3987FF] uppercase border-b border-[#202B3B] pb-1 print:border-black print:text-black">
              EDUCATION
            </h2>
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div className="font-bold text-sm text-[#F1F4FA] print:text-black">
                  Parul University — Vadodara, India
                </div>
                <span className="text-xs font-mono text-[#A0AABA] print:text-black">2023 – 2027</span>
              </div>
              <div className="text-xs text-[#A0AABA] print:text-black">
                B.Tech in Computer Science and Engineering (Artificial Intelligence)
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-medium tracking-wide text-[#3987FF] uppercase border-b border-[#202B3B] pb-1 print:border-black print:text-black">
              EXPERIENCE
            </h2>
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <div className="font-bold text-sm text-[#F1F4FA] print:text-black">
                    UnitedMentor
                  </div>
                  <div className="text-xs font-mono text-[#3987FF] print:text-black">Full-Stack Development Intern (Remote)</div>
                </div>
                <span className="text-xs font-mono text-[#A0AABA] print:text-black">May 2026 – Aug 2026</span>
              </div>
              <ul className="list-disc list-outside ml-4 text-xs text-[#A0AABA] space-y-1 print:text-black">
                <li>Developed modular user interfaces and state management flows in React and Tailwind CSS.</li>
                <li>Constructed RESTful API endpoints in Node.js and Express for data ingestion and user flows.</li>
                <li>Collaborated on MongoDB document schema design and structured route authorization.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-medium tracking-wide text-[#3987FF] uppercase border-b border-[#202B3B] pb-1 print:border-black print:text-black">
              SELECTED PROJECTS
            </h2>

            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div className="font-bold text-sm text-[#F1F4FA] print:text-black">
                  Collabrix — Developer Collaboration Platform
                </div>
                <span className="text-xs font-mono text-[#A0AABA] print:text-black">kowshik568/Collabrix-</span>
              </div>
              <div className="text-xs font-mono text-[#3987FF] print:text-black">
                React, Node.js, Express, MongoDB, RESTful APIs
              </div>
              <p className="text-xs text-[#A0AABA] leading-relaxed pt-0.5 print:text-black">
                Full-stack web application connecting early-career developers to form cross-functional project teams. Features workspace boards, role matching, issue tracking, and peer discovery.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div className="font-bold text-sm text-[#F1F4FA] print:text-black">
                  AI Resume Analyzer & ATS Diagnostic Tool
                </div>
                <span className="text-xs font-mono text-[#A0AABA] print:text-black">Applied AI Integration</span>
              </div>
              <div className="text-xs font-mono text-[#3987FF] print:text-black">
                React, Node.js, Express, MongoDB, OpenAI API
              </div>
              <p className="text-xs text-[#A0AABA] leading-relaxed pt-0.5 print:text-black">
                Intelligent document analysis tool evaluating candidate resumes against target job descriptions with strict JSON output schemas, ATS match scoring, and keyword gap diagnosis.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div className="font-bold text-sm text-[#F1F4FA] print:text-black">
                  Smart Job Application Tracker
                </div>
                <span className="text-xs font-mono text-[#A0AABA] print:text-black">Full-Stack Application</span>
              </div>
              <div className="text-xs font-mono text-[#3987FF] print:text-black">
                React, Node.js, Express, MongoDB, JWT Authentication, Cloudinary
              </div>
              <p className="text-xs text-[#A0AABA] leading-relaxed pt-0.5 print:text-black">
                Recruitment portal with dual candidate and recruiter workspaces, Cloudinary-backed document storage, and applicant pipeline state tracking.
              </p>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-medium tracking-wide text-[#3987FF] uppercase border-b border-[#202B3B] pb-1 print:border-black print:text-black">
              ACHIEVEMENTS & CERTIFICATIONS
            </h2>
            <ul className="list-disc list-outside ml-4 text-xs text-[#A0AABA] space-y-1 print:text-black">
              <li>
                <strong className="text-[#F1F4FA] print:text-black">TCS CodeVita Season 13:</strong> Secured Global Rank 4014 worldwide in algorithmic problem solving under timed contest conditions.
              </li>
              <li>
                <strong className="text-[#F1F4FA] print:text-black">AWS Cloud Quest — Cloud Practitioner:</strong> Hands-on challenge configuring EC2, S3, IAM, and VPC architectures.
              </li>
              <li>
                <strong className="text-[#F1F4FA] print:text-black">Virtual Experiences:</strong> Tata Data Visualization & Skyscanner Software Engineering virtual simulations via Forage.
              </li>
            </ul>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-medium tracking-wide text-[#3987FF] uppercase border-b border-[#202B3B] pb-1 print:border-black print:text-black">
              TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <span className="font-bold text-[#F1F4FA] print:text-black">Languages: </span>
                <span className="text-[#A0AABA] print:text-black">Java, Python, JavaScript (ES6+), TypeScript, SQL, C/C++</span>
              </div>
              <div>
                <span className="font-bold text-[#F1F4FA] print:text-black">Frontend: </span>
                <span className="text-[#A0AABA] print:text-black">React.js, Tailwind CSS, HTML5, CSS3, Vite</span>
              </div>
              <div>
                <span className="font-bold text-[#F1F4FA] print:text-black">Backend & DB: </span>
                <span className="text-[#A0AABA] print:text-black">Node.js, Express.js, MongoDB, RESTful APIs, JWT</span>
              </div>
              <div>
                <span className="font-bold text-[#F1F4FA] print:text-black">AI & Tools: </span>
                <span className="text-[#A0AABA] print:text-black">OpenAI API, Prompt Engineering, Git, GitHub, Postman, Linux</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
