import React, { useState } from 'react';
import { Briefcase, Building, MapPin, CheckCircle, Clock, Upload, ArrowUpRight, Search } from 'lucide-react';

interface Job {
  id: string;
  role: string;
  company: string;
  location: string;
  type: string;
  status: 'Applied' | 'Reviewing' | 'Shortlisted';
  salary: string;
}

export const JobPortalPreview: React.FC = () => {
  const [activePortal, setActivePortal] = useState<'candidate' | 'recruiter'>('candidate');
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: '1',
      role: 'Junior Full-Stack Developer',
      company: 'TechCraft Labs',
      location: 'Remote',
      type: 'Full-Time',
      status: 'Shortlisted',
      salary: '$65k – $80k',
    },
    {
      id: '2',
      role: 'Backend API Engineer (Node/Mongo)',
      company: 'DataStream Systems',
      location: 'Bengaluru / Hybrid',
      type: 'Full-Time',
      status: 'Reviewing',
      salary: '$70k – $85k',
    },
    {
      id: '3',
      role: 'Frontend Engineer (React/TypeScript)',
      company: 'CloudPulse',
      location: 'Remote',
      type: 'Contract',
      status: 'Applied',
      salary: '$45/hr',
    },
  ]);

  const advanceStatus = (id: string) => {
    setJobs((prev) =>
      prev.map((job) => {
        if (job.id === id) {
          const next = job.status === 'Applied' ? 'Reviewing' : job.status === 'Reviewing' ? 'Shortlisted' : 'Applied';
          return { ...job, status: next };
        }
        return job;
      })
    );
  };

  return (
    <div className="w-full bg-[#0D121C] text-[#F1F4FA] border border-[#202B3B] rounded-2xl overflow-hidden transition-all duration-200 hover:border-[#3987FF]/50 shadow-sm">
      {/* Header */}
      <div className="bg-[#080B12] px-4 py-3 flex flex-wrap items-center justify-between gap-2 border-b border-[#202B3B]">
        <div className="flex items-center gap-2">
          <Briefcase className="w-4 h-4 text-[#3987FF]" />
          <span className="font-display font-bold text-xs tracking-wide text-[#F1F4FA]">
            Job Application Tracker
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-[#A0AABA]">
          <span>JWT Protected</span>
          <span className="text-[#202B3B]">·</span>
          <span>Cloudinary Storage</span>
        </div>
      </div>

      {/* Mode Controls */}
      <div className="bg-[#080B12]/60 px-4 py-2.5 border-b border-[#202B3B] flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 text-xs font-mono">
          <button
            onClick={() => setActivePortal('candidate')}
            className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
              activePortal === 'candidate'
                ? 'bg-[#0D121C] text-[#3987FF] border border-[#202B3B] font-medium'
                : 'text-[#A0AABA] hover:text-[#F1F4FA]'
            }`}
          >
            Candidate View
          </button>
          <button
            onClick={() => setActivePortal('recruiter')}
            className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
              activePortal === 'recruiter'
                ? 'bg-[#0D121C] text-[#3987FF] border border-[#202B3B] font-medium'
                : 'text-[#A0AABA] hover:text-[#F1F4FA]'
            }`}
          >
            Recruiter Pipeline
          </button>
        </div>
        <span className="text-[11px] font-mono text-[#A0AABA]/70 hidden sm:inline">
          Click status pills to advance stages
        </span>
      </div>

      {/* Main Content */}
      <div className="p-4 sm:p-5 space-y-3 bg-[#0D121C]">
        {activePortal === 'candidate' ? (
          <div className="space-y-3">
            <div className="text-xs font-mono text-[#A0AABA] flex items-center justify-between pb-1 border-b border-[#202B3B]/60">
              <span>Tracked Positions</span>
              <span className="text-[#3987FF]">{jobs.length} Active Applications</span>
            </div>
            {jobs.map((job) => (
              <div
                key={job.id}
                className="p-3.5 bg-[#080B12] border border-[#202B3B] rounded-xl hover:border-[#3987FF]/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-sm"
              >
                <div>
                  <div className="text-xs font-semibold text-[#F1F4FA]">{job.role}</div>
                  <div className="text-[11px] text-[#A0AABA] flex items-center gap-2 mt-0.5 font-mono">
                    <span>{job.company}</span>
                    <span>·</span>
                    <span>{job.location}</span>
                    <span>·</span>
                    <span className="text-[#3987FF]">{job.salary}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-center">
                  <button
                    onClick={() => advanceStatus(job.id)}
                    className={`cursor-pointer px-2.5 py-1 rounded text-xs font-mono font-medium transition-all ${
                      job.status === 'Shortlisted'
                        ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/40'
                        : job.status === 'Reviewing'
                        ? 'bg-amber-500/15 text-amber-300 border border-amber-500/40'
                        : 'bg-[#3987FF]/15 text-[#3987FF] border border-[#3987FF]/40'
                    }`}
                  >
                    {job.status} ↺
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            <div className="text-xs font-mono text-[#A0AABA] pb-1 border-b border-[#202B3B]/60">
              Recruiter Dashboard: Applicant Submissions
            </div>
            <div className="p-4 bg-[#080B12] border border-[#202B3B] rounded-xl space-y-2.5 hover:border-[#3987FF]/50 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#F1F4FA]">Candidate: Sai Kowshik</div>
                  <div className="text-[11px] text-[#A0AABA] font-mono">Applied: Full-Stack Engineer</div>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 bg-[#3987FF]/15 text-[#3987FF] border border-[#3987FF]/40 rounded font-medium">
                  Match 92%
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#A0AABA] bg-[#0D121C] p-2.5 rounded-lg border border-[#202B3B]">
                <Upload className="w-3.5 h-3.5 text-[#3987FF]" />
                <span className="truncate">Cloudinary Asset: resume_sai_kowshik.pdf</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-[#080B12] px-4 py-2 border-t border-[#202B3B] flex items-center justify-between text-[11px] font-mono text-[#A0AABA]">
        <span>React · Express · MongoDB · Cloudinary</span>
        <span className="text-[#3987FF]">Interactive Demo</span>
      </div>
    </div>
  );
};
