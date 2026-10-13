import React, { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<string>('internship');

  const subjects = [
    {
      id: 'internship',
      label: 'Internship Opportunity',
      subject: 'Internship Opportunity for Sai Kowshik',
      body: `Hi Sai,\n\nI reviewed your portfolio and would like to discuss an engineering internship opportunity with our team.\n\nBest regards,`,
    },
    {
      id: 'collaboration',
      label: 'Project Collaboration',
      subject: 'Collabrix / Software Project Collaboration',
      body: `Hi Sai,\n\nI came across your work on Collabrix and would love to collaborate on a software build.\n\nCheers,`,
    },
    {
      id: 'chat',
      label: 'General Inquiry',
      subject: 'Connecting regarding Full-Stack & AI',
      body: `Hi Sai,\n\nI liked your portfolio and would love to connect about software engineering.\n\nBest,`,
    },
  ];

  const currentTemplate = subjects.find((s) => s.id === selectedSubject) || subjects[0];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    currentTemplate.subject
  )}&body=${encodeURIComponent(currentTemplate.body)}`;

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-[#202B3B] bg-[#080B12] text-[#F1F4FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#202B3B]">
          <div>
            <div className="text-xs font-mono text-[#3987FF] font-medium tracking-wide mb-1">
              GET IN TOUCH
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#F1F4FA] tracking-tight">
              Have an idea? Let’s build it.
            </h2>
          </div>

          <div className="text-xs font-mono text-[#A0AABA]">
            Vadodara, India · Remote Ready
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Email Details & Socials */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 bg-[#0D121C] border border-[#202B3B] rounded-2xl space-y-4 transition-all duration-200 hover:border-[#3987FF]/50">
              <div className="text-xs font-mono text-[#A0AABA]">
                Direct Contact
              </div>

              <div className="text-lg sm:text-xl font-mono font-bold text-[#F1F4FA] break-all select-all">
                {PERSONAL_INFO.email}
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#3987FF] text-[#F1F4FA] text-xs font-mono font-medium rounded-lg hover:bg-[#2670e8] transition-colors cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open Client</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#080B12] text-[#F1F4FA] border border-[#202B3B] text-xs font-mono rounded-lg hover:border-[#3987FF] transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#3987FF]" />}
                  <span>{copied ? 'Copied' : 'Copy Email'}</span>
                </button>
              </div>
            </div>

            <div className="p-5 bg-[#0D121C] border border-[#202B3B] rounded-2xl space-y-2">
              <div className="text-xs font-mono text-[#A0AABA]">Profiles & Code</div>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 bg-[#080B12] border border-[#202B3B] rounded-lg text-xs font-mono text-[#F1F4FA] hover:border-[#3987FF] hover:text-[#3987FF] transition-colors"
                >
                  <Github className="w-4 h-4 text-[#3987FF]" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 bg-[#080B12] border border-[#202B3B] rounded-lg text-xs font-mono text-[#F1F4FA] hover:border-[#3987FF] hover:text-[#3987FF] transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#3987FF]" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Quick Template Composer */}
          <div className="lg:col-span-7 bg-[#0D121C] border border-[#202B3B] rounded-2xl p-6 sm:p-7 space-y-5 transition-all duration-200 hover:border-[#3987FF]/50">
            <div>
              <h3 className="text-lg font-display font-bold text-[#F1F4FA]">
                Quick Note Composer
              </h3>
              <p className="text-xs text-[#A0AABA] mt-1 font-sans">
                Select a message template to prepare a pre-filled draft in your default email client.
              </p>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-[#A0AABA]">Inquiry Category:</label>
              <div className="flex flex-wrap gap-2">
                {subjects.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedSubject(item.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                      selectedSubject === item.id
                        ? 'bg-[#3987FF] text-[#F1F4FA] font-medium'
                        : 'bg-[#080B12] text-[#A0AABA] border border-[#202B3B] hover:border-[#3987FF]/50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-[#A0AABA]">Subject Line:</label>
              <div className="p-3 bg-[#080B12] border border-[#202B3B] rounded-lg text-xs font-mono text-[#F1F4FA]">
                {currentTemplate.subject}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-[#A0AABA]">Draft Preview:</label>
              <textarea
                readOnly
                value={currentTemplate.body}
                rows={4}
                className="w-full p-3 bg-[#080B12] border border-[#202B3B] rounded-lg text-xs font-sans text-[#A0AABA] leading-relaxed resize-none focus:outline-none focus:border-[#3987FF]"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#A0AABA]/70">
                Direct mailto: transmission
              </span>
              <a
                href={mailtoUrl}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#3987FF] text-[#F1F4FA] text-xs font-mono font-medium rounded-lg hover:bg-[#2670e8] transition-colors cursor-pointer"
              >
                <span>Compose in Email App</span>
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
