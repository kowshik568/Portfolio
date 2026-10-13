import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { BuilderPipeline } from './components/BuilderPipeline';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { GitHubProfileModal } from './components/GitHubProfileModal';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isGitHubProfileOpen, setIsGitHubProfileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080B12] text-[#F1F4FA] selection:bg-[#3987FF] selection:text-white flex flex-col font-sans overflow-x-hidden">
      {/* Subtle, non-intrusive cursor lighting */}
      <CustomCursor />

      {/* Clean Navigation Bar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenGitHub={() => setIsGitHubProfileOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Minimal Marquee Ribbon */}
        <Marquee variant="editorial" />

        {/* About Section: Authentic & Human */}
        <About onOpenResume={() => setIsResumeOpen(true)} />

        {/* Projects Section: Selected Work */}
        <Projects />

        {/* Secondary Marquee Ribbon */}
        <Marquee variant="blue" reverse={true} />

        {/* Engineering Methodology */}
        <div id="pipeline">
          <BuilderPipeline />
        </div>

        {/* Technical Skills Inventory */}
        <Skills />

        {/* Experience & Milestones Timeline */}
        <Experience />

        {/* Direct Contact & Dispatch */}
        <Contact />
      </main>

      <Footer onOpenGitHub={() => setIsGitHubProfileOpen(true)} />

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* GitHub Profile Modal */}
      <GitHubProfileModal
        isOpen={isGitHubProfileOpen}
        onClose={() => setIsGitHubProfileOpen(false)}
      />
    </div>
  );
}
