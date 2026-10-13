import React, { useState } from 'react';
import { Users, CheckCircle2, Circle, GitPullRequest } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  tag: string;
  assignee: string;
  status: 'todo' | 'progress' | 'done';
}

export const CollabrixPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'board' | 'roles' | 'commits'>('board');
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Design RESTful API schemas for team requests', tag: 'Backend', assignee: 'Sai K.', status: 'done' },
    { id: '2', title: 'Implement MongoDB role-based query filters', tag: 'Database', assignee: 'Sai K.', status: 'progress' },
    { id: '3', title: 'Build responsive project workspace layout', tag: 'Frontend', assignee: 'Alex M.', status: 'progress' },
    { id: '4', title: 'Set up JWT token refresh rotation', tag: 'Auth', assignee: 'Dev P.', status: 'todo' },
  ]);

  const toggleTaskStatus = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          const nextStatus = t.status === 'todo' ? 'progress' : t.status === 'progress' ? 'done' : 'todo';
          return { ...t, status: nextStatus };
        }
        return t;
      })
    );
  };

  return (
    <div className="w-full bg-[#0D121C] text-[#F1F4FA] border border-[#202B3B] rounded-2xl overflow-hidden transition-all duration-200 hover:border-[#3987FF]/50 shadow-sm">
      {/* Top Application Bar */}
      <div className="bg-[#080B12] px-4 py-3 flex flex-wrap items-center justify-between gap-2 border-b border-[#202B3B]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#3987FF]" />
            <span className="w-2 h-2 rounded-full bg-[#202B3B]" />
            <span className="w-2 h-2 rounded-full bg-[#202B3B]" />
          </div>
          <span className="font-display font-bold text-xs tracking-wide text-[#F1F4FA] ml-1">
            Collabrix Workspace
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-[#A0AABA]">
          <span>Sprint 03 Active</span>
          <span className="text-[#202B3B]">·</span>
          <span>kowshik568/Collabrix-</span>
        </div>
      </div>

      {/* Subnav Tabs */}
      <div className="bg-[#080B12]/60 px-4 py-2 border-b border-[#202B3B] flex items-center justify-between gap-2 overflow-x-auto">
        <div className="flex items-center gap-1.5 text-xs font-mono">
          <button
            onClick={() => setActiveTab('board')}
            className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
              activeTab === 'board' ? 'bg-[#0D121C] text-[#3987FF] border border-[#202B3B] font-medium' : 'text-[#A0AABA] hover:text-[#F1F4FA]'
            }`}
          >
            Project Board
          </button>
          <button
            onClick={() => setActiveTab('roles')}
            className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
              activeTab === 'roles' ? 'bg-[#0D121C] text-[#3987FF] border border-[#202B3B] font-medium' : 'text-[#A0AABA] hover:text-[#F1F4FA]'
            }`}
          >
            Open Roles (2)
          </button>
          <button
            onClick={() => setActiveTab('commits')}
            className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
              activeTab === 'commits' ? 'bg-[#0D121C] text-[#3987FF] border border-[#202B3B] font-medium' : 'text-[#A0AABA] hover:text-[#F1F4FA]'
            }`}
          >
            Git Activity
          </button>
        </div>
        <span className="text-[11px] font-mono text-[#A0AABA]/70 hidden sm:inline">
          Click cards to cycle status
        </span>
      </div>

      {/* Content Area */}
      <div className="p-4 sm:p-5 min-h-[220px] bg-[#0D121C]">
        {activeTab === 'board' && (
          <div className="space-y-3">
            <div className="text-xs font-mono text-[#A0AABA] flex items-center justify-between pb-1 border-b border-[#202B3B]/60">
              <span>Task Breakdown & Sprint Queue</span>
              <span className="text-[#3987FF]">
                {tasks.filter((t) => t.status === 'done').length}/{tasks.length} Done
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  onClick={() => toggleTaskStatus(task.id)}
                  className="cursor-pointer group/task p-3.5 bg-[#080B12] text-[#F1F4FA] border border-[#202B3B] hover:border-[#3987FF]/60 rounded-xl transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-semibold text-[#F1F4FA] group-hover/task:text-[#3987FF] transition-colors leading-snug">
                      {task.title}
                    </span>
                    {task.status === 'done' ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    ) : task.status === 'progress' ? (
                      <span className="w-2 h-2 rounded-full bg-[#3987FF] shrink-0 mt-1.5" />
                    ) : (
                      <Circle className="w-4 h-4 text-[#A0AABA]/30 shrink-0 mt-0.5" />
                    )}
                  </div>
                  <div className="mt-2.5 flex items-center justify-between text-[11px] text-[#A0AABA] font-mono">
                    <span className="bg-[#0D121C] px-2 py-0.5 rounded border border-[#202B3B] text-[#3987FF]">
                      {task.tag}
                    </span>
                    <span>{task.assignee}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'roles' && (
          <div className="space-y-3">
            <div className="text-xs font-mono text-[#A0AABA] pb-1 border-b border-[#202B3B]/60">
              Peer Matching: Open Collaborator Slots
            </div>
            <div className="space-y-2.5">
              <div className="p-3.5 bg-[#080B12] border border-[#202B3B] rounded-xl flex items-center justify-between gap-3 hover:border-[#3987FF]/50 transition-colors">
                <div>
                  <div className="text-xs font-semibold text-[#F1F4FA]">Full-Stack Contributor (React + Node)</div>
                  <div className="text-[11px] text-[#A0AABA] mt-0.5">Focus: Build real-time team chat & notification socket routes</div>
                </div>
                <span className="text-xs font-mono px-2 py-1 bg-[#3987FF]/15 text-[#3987FF] font-medium rounded shrink-0">
                  1 Open Slot
                </span>
              </div>
              <div className="p-3.5 bg-[#080B12] border border-[#202B3B] rounded-xl flex items-center justify-between gap-3 hover:border-[#3987FF]/50 transition-colors">
                <div>
                  <div className="text-xs font-semibold text-[#F1F4FA]">UI / UX Designer & Component Builder</div>
                  <div className="text-[11px] text-[#A0AABA] mt-0.5">Focus: Responsive mobile grid breakpoints & styling</div>
                </div>
                <span className="text-xs font-mono px-2 py-1 bg-[#0D121C] border border-[#202B3B] text-[#A0AABA] font-medium rounded shrink-0">
                  Open
                </span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'commits' && (
          <div className="space-y-2.5 font-mono text-xs">
            <div className="text-xs text-[#A0AABA] pb-1 border-b border-[#202B3B]/60">
              Verified Commits on kowshik568/Collabrix-
            </div>
            <div className="p-3 bg-[#080B12] border border-[#202B3B] rounded-xl flex items-center gap-2.5">
              <GitPullRequest className="w-3.5 h-3.5 text-[#3987FF] shrink-0" />
              <span className="text-[#F1F4FA] truncate">feat(api): connect express router to mongodb team controllers</span>
            </div>
            <div className="p-3 bg-[#080B12] border border-[#202B3B] rounded-xl flex items-center gap-2.5">
              <GitPullRequest className="w-3.5 h-3.5 text-[#3987FF] shrink-0" />
              <span className="text-[#F1F4FA] truncate">fix(client): responsive grid breakpoints for developer cards</span>
            </div>
          </div>
        )}
      </div>

      {/* Footer Strip */}
      <div className="bg-[#080B12] px-4 py-2 border-t border-[#202B3B] flex items-center justify-between text-[11px] font-mono text-[#A0AABA]">
        <span>React · Express · MongoDB · Tailwind</span>
        <span className="text-[#3987FF]">Interactive Workspace Demo</span>
      </div>
    </div>
  );
};
