import AboutSection from './sections/AboutSection';
import CertificationSection from './sections/CertificationSection';
import ContactSection from './sections/ContactSection';
import EducationSection from './sections/EducationSection';
import ExperienceSection from './sections/ExperienceSection';
import HeroSection from './sections/HeroSection';
import ProjectSection from './sections/ProjectSection';
import SkillsSection from './sections/SkillsSection';

async function PortfolioContent() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectSection />
      <CertificationSection />
      <ContactSection />
      {/* 
      <TestimonialsSection />
      <AchievementsSection />
      <ServicesSection />
      <BlogSection />
       */}
    </>
  );
}

export default PortfolioContent;
