import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { VolunteerSection } from './components/VolunteerSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ExecutiveResumeSheet } from './components/ExecutiveResumeSheet';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Navigation Bar (Hidden when printing) */}
      <div className="print:hidden">
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      </div>

      {/* Main Content Sections (Authentic & Humane: Hero -> About -> Skills -> Volunteer -> Contact) */}
      <main className="flex-1 print:hidden">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <AboutSection onOpenResume={() => setIsResumeOpen(true)} />
        <SkillsSection />
        <VolunteerSection />
        <ContactSection />
      </main>

      {/* Footer (Hidden when printing) */}
      <div className="print:hidden">
        <Footer onOpenResume={() => setIsResumeOpen(true)} />
      </div>

      {/* Printable 1-Page Student CV / Resume Sheet (Only visible during print / PDF generation) */}
      <div className="hidden print:block">
        <ExecutiveResumeSheet isPreview={false} />
      </div>

      {/* Resume Modal (For interactive on-screen viewing & quick copy/print) */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
