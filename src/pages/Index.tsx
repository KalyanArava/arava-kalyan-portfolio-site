
import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import InternshipSection from '@/components/InternshipSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <InternshipSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
