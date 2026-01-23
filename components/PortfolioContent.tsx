import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import HeroSection from './sections/HeroSection';
import SkillsSection from './sections/SkillsSection';

async function PortfolioContent() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      {/* 
      <TestimonialsSection />
      <EducationSection />
      <ProjectsSection />
      <CertificationsSection />
      <AchievementsSection />
      <ServicesSection />
      <BlogSection />
      <ContactSection /> */}
    </>
  );
}

export default PortfolioContent;
